package main

import (
	"flag"
	"log"
	"os"
	"os/signal"
	"syscall"

	"github.com/valyala/fasthttp"
)

var (
	fAddr     = flag.String("addr", "localhost:8080", "address to listen to")
	fCertFile = flag.String("cetr", "", "TLS cert file")
	fKeyFile  = flag.String("key", "", "TLS key file")
	fDir      = flag.String("dir", "./web", "Directory from which static files will be served")
	fCompress = flag.Bool("compress", false, "Enables transparent response compression if set to true")
)

func main() {
	flag.Parse()

	fs := &fasthttp.FS{
		Root:       *fDir,
		IndexNames: []string{"index.html"},
		Compress:   *fCompress,
	}

	if len(*fKeyFile) > 0 && len(*fCertFile) > 0 {
		log.Printf("Starting HTTPS server on %s", *fAddr)
		go func() {
			if err := fasthttp.ListenAndServeTLS(*fAddr, *fCertFile, *fKeyFile, fs.NewRequestHandler()); err != nil {
				log.Fatalf("Failed starting HTTPS server: %s", err.Error())
			}
		}()
	} else {
		log.Printf("Starting HTTP server on %s", *fAddr)
		go func() {
			if err := fasthttp.ListenAndServe(*fAddr, fs.NewRequestHandler()); err != nil {
				log.Fatalf("Failed starting HTTP server: %s", err.Error())
			}
		}()
	}

	log.Printf("Serving files from %s...", *fDir)

	sc := make(chan os.Signal, 1)
	signal.Notify(sc, syscall.SIGINT, syscall.SIGTERM, os.Interrupt, os.Kill)
	<-sc
}
