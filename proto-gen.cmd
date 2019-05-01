::     Import path to Protobuf source files
protoc -I proto/ -I proto/register/ ^
       --go_out=plugins=grpc:proto/gen register.proto
:: out path + input file
