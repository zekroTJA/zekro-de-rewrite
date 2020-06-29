# 🌐 [zekro.de](https://zekro.de)

![Main CI](https://github.com/zekroTJA/zekro-de-rewrite/workflows/Main%20CI/badge.svg) &nbsp; [![Build Status](https://travis-ci.org/zekroTJA/zekro-de-rewrite.svg?branch=master)](https://travis-ci.org/zekroTJA/zekro-de-rewrite)

This is the source code of my personal web page [zekro.de](https://zekro.de).

The web page is created with the [**VueJS**](https://vuejs.org) MVVM framework. The compiled production files are then served by [**seiteki**](https://github.com/zekroTJA/seiteki), a light web server designed for SPAs which is self-created in Go using fasthttp and is aimed to be used in Docker images.

## Copyright

The soucre code if this project is coevered by the [MIT License](https://github.com/zekroTJA/zekro-de-rewrite/blob/master/LICENSE). When you want to use my code, please follow the conditions mentioned in the license.

**Attention: You are not allowed to use my logo or publish it somewhere in any way without my explicit permission.** If you want to use my logo, please contact me (contact[at]zekro.de).

Any other logos used like the logos of social networks or technologies used are not my own and i do not hold any copyright permission on them.

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

© 2020 Ringo Hoffmann (zekro Development)  
Covered by MIT License.
