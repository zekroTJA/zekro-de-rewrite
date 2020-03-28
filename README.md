# 🌐 [zekro.de](https://zekro.de)

![Main CI](https://github.com/zekroTJA/zekro-de-rewrite/workflows/Main%20CI/badge.svg) &nbsp; [![Build Status](https://travis-ci.org/zekroTJA/zekro-de-rewrite.svg?branch=master)](https://travis-ci.org/zekroTJA/zekro-de-rewrite)

This is the source code that powers my personal web page [zekro.de](https://zekro.de).

The web page is created with the [**VueJS**](https://vuejs.org) MVVM framework. The compiled production files are then served by [**seiteki**](https://github.com/zekroTJA/seiteki), a light web server self-created in Go using fasthttp and aimed to be used in Docker images.

## Try yourself

You can run a local debug server provided by Vue as following:
```
$ git clone https://github.com/zekroTJA/zekro-de-rewrite .
$ npm i
$ npm run serve
```

If you want to build the Docker image by using the provided `Dockerfile`:
```
# docker build . -t <imageName>
```

Then, run the image by using following Docker run command:
```
# docker run \
    -d \
    --name <containerName> \
    -p 80:8080 \
    <imageName>
```

---

© 2018-2020 Ringo Hoffmann (zekro Development)  
Covered by MIT Licence.
