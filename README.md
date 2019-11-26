# [zekro.de](https://zekro.de)

This is the source code that powers my personal web site [zekro.de](https://zekro.de).

The web page is powered by the [Vue MVVM engine](https://vuejs.org) served by a self-written, simple web server providing the static files. This web server is written in Go and uses [valyala's fasthttp](https://github.com/valyala/fasthttp) as HTTP pakcage.

This stuff is then wrapped into a Docker container which sits behind my nginx reverse proxy.

## Try yourself

You can run a local debug server provided by Vue as following:
```
$ cd ./web && npm i && npm run serve
```

If you want to build the docker image by using the provided `Dockerfile`:
```
# docker build . -t <imageName>
```

Then, run the image by using following docker run command:
```
# docker run \
    -d \
    --name <containerName> \
    -p 80:8080 \
    <imageName>
```

---

© 2018-2019 Ringo Hoffmann (zekro Development)  
Covered by MIT Licence.
