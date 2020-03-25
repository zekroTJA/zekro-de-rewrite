# -----------------------------------------------------------------
# -- BUILD WEB APPLICATION
# -----------------------------------------------------------------
FROM node:13-alpine AS build-web

WORKDIR /build

COPY public/ public/
COPY src/ src/
COPY package.json .
COPY package-lock.json .
COPY vue.config.js .

RUN npm ci
RUN npm run build

# -----------------------------------------------------------------
# -- BUILD SEITEKI
# -----------------------------------------------------------------
FROM golang:1.14-alpine AS build-stk

WORKDIR /build

RUN apk add git
RUN git clone https://github.com/zekroTJA/seiteki . --depth 1
RUN go build -o seiteki cmd/seiteki/main.go

# -----------------------------------------------------------------
# -- BUILD FINAL IMAGE
# -----------------------------------------------------------------
FROM alpine:latest AS final
LABEL maintainer="zekro <contact@zekro.de>"

WORKDIR /app

COPY --from=build-web /build/dist/ .
COPY --from=build-stk /build/seiteki /bin/seiteki

RUN chmod +x /bin/seiteki

ENTRYPOINT ["/bin/seiteki", "-dir", "/app"]
CMD ["-addr", ":80"]