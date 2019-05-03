:: Typescript client
protoc -I=proto -I=proto/register register.proto ^
--js_out=import_style=commonjs:proto/gen ^
--grpc-web_out=import_style=typescript,mode=grpcwebtext:proto/gen
