package main

import (
	"fmt"
	regPb "github.com/vladimir-v/grpc-web-register-demo/proto/gen"
	"github.com/vladimir-v/grpc-web-register-demo/server/services/register"
	"google.golang.org/grpc"
	"log"
	"net"
)

func main() {
	log.Print("Starting tcp listener...")
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", 9090))
	if err != nil {
		log.Fatalf("tcp listening failed: %v", err)
	}

	grpcServer := grpc.NewServer()

	// Registration Service Handler
	s := register.Server{}

	// Protobuf Service registration
	regPb.RegisterRegistrationServiceServer(grpcServer, &s)

	if err = grpcServer.Serve(lis); err != nil {
		log.Fatalf("Server is dead: %s", err)
	} else {
		fmt.Printf("Server started successfully")
	}
}
