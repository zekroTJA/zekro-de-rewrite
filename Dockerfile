FROM golang:1.13 AS build
RUN curl -sL https://deb.nodesource.com/setup_13.x | bash - &&\
        apt-get install -y nodejs tree
RUN npm i -g @vue/cli
WORKDIR /build
ADD . .
RUN go mod tidy
RUN go build -o ./bin/server ./cmd/server/*.go
RUN cd ./web &&\
    npm install &&\
    npm run build &&\
    cp -r ./dist ../bin

FROM debian:stretch-slim AS final
WORKDIR /app
COPY --from=build /build/bin .

EXPOSE 8080
ENTRYPOINT ['/app/server']
CMD -dir /app/dist -addr :8080