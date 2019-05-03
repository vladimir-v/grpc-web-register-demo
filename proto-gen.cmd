:: Go protobuf generated files
:: Import path to Protobuf source files
protoc -I proto/ -I proto/register/ register.proto ^
       --go_out=plugins=grpc:proto/gen
:: out path
