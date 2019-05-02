package register

import (
	"context"
	"errors"
	"github.com/golang/protobuf/ptypes"
	"github.com/google/uuid"
	. "github.com/vladimir-v/grpc-web-register-demo/proto/gen"
	"time"
)

type Server struct {
	Customers []*Customer
}

func removeIndex(slice []*Customer, i int) []*Customer {
	copy(slice[i:], slice[i+1:])
	return slice[:len(slice)-1]
}

func (s *Server) CreateCustomer(ctx context.Context, r *CustomerRequest) (*CustomerResponse, error) {
	now, err := ptypes.TimestampProto(time.Now().UTC())
	if err != nil {
		return nil, err
	}
	resp, ct := &CustomerResponse{},
		&Customer{
			Id:        uuid.New().String(),
			Name:      r.GetName(),
			Age:       r.GetAge(),
			CreatedAt: now,
		}

	// Save Customer in memory - demo
	s.Customers = append(s.Customers, ct)
	return resp, nil
}

func (s *Server) FindCustomer(ctx context.Context, r *CustomerRequest) (*CustomerResponse, error) {
	for _, customer := range s.Customers {
		if customer.Id == r.GetId() {
			resp := &CustomerResponse{}
			resp.Customer = append(resp.Customer, customer)
			return resp, nil
		}
	}
	return nil, errors.New("Customer not found")
}

func (s *Server) DeleteCustomer(ctx context.Context, r *Customer) (*CustomerResponse, error) {
	for idx, customer := range s.Customers {
		if customer.Id == r.GetId() {
			resp := &CustomerResponse{}
			resp.Customer = removeIndex(resp.Customer, idx)
			return resp, nil
		}
	}
	return nil, errors.New("Customer not found")
}

