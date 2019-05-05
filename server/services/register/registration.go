package register

import (
	"context"
	"errors"
	"time"

	"github.com/golang/protobuf/ptypes"
	"github.com/google/uuid"
	"github.com/vladimir-v/grpc-web-register-demo/proto/gen"
)

// Server implements registration service interface
type Server struct {
	Customers []*register.Customer
}

func removeIndex(slice []*register.Customer, i int) []*register.Customer {
	copy(slice[i:], slice[i+1:])
	return slice[:len(slice)-1]
}

// CreateCustomer method create a new customer
func (s *Server) CreateCustomer(ctx context.Context, r *register.CustomerRequest) (*register.CustomerResponse, error) {
	now, err := ptypes.TimestampProto(time.Now().UTC())
	if err != nil {
		return nil, err
	}
	resp, ct := &register.CustomerResponse{},
		&register.Customer{
			Id:        uuid.New().String(),
			Name:      r.GetName(),
			Age:       r.GetAge(),
			CreatedAt: now,
		}

	// Save Customer in memory - demo
	s.Customers = append(s.Customers, ct)
	return resp, nil
}

func (s *Server) FindCustomer(ctx context.Context, r *register.CustomerRequest) (*register.CustomerResponse, error) {
	for _, customer := range s.Customers {
		if customer.Id == r.GetId() {
			resp := &register.CustomerResponse{}
			resp.Customer = append(resp.Customer, customer)
			return resp, nil
		}
	}
	return nil, errors.New("Customer not found")
}

func (s *Server) DeleteCustomer(ctx context.Context, r *register.Customer) (*register.CustomerResponse, error) {
	for idx, customer := range s.Customers {
		if customer.Id == r.GetId() {
			resp := &register.CustomerResponse{}
			resp.Customer = removeIndex(resp.Customer, idx)
			return resp, nil
		}
	}
	return nil, errors.New("Customer not found")
}
