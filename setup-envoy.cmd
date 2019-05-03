go run server/server.go
docker build -t envoy:v1 .
docker run  -p 8080:8080 --net=host envoy:v1
