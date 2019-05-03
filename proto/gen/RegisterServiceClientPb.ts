/**
 * @fileoverview gRPC-Web generated client stub for register
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  Customer,
  CustomerRequest,
  CustomerResponse} from './register_pb';

export class RegistrationServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreateCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    CustomerResponse,
    (request: CustomerRequest) => {
      return request.serializeBinary();
    },
    CustomerResponse.deserializeBinary
  );

  createCustomer(
    request: CustomerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CustomerResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/register.RegistrationService/CreateCustomer',
      request,
      metadata || {},
      this.methodInfoCreateCustomer,
      callback);
  }

  methodInfoFindCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    CustomerResponse,
    (request: CustomerRequest) => {
      return request.serializeBinary();
    },
    CustomerResponse.deserializeBinary
  );

  findCustomer(
    request: CustomerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CustomerResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/register.RegistrationService/FindCustomer',
      request,
      metadata || {},
      this.methodInfoFindCustomer,
      callback);
  }

  methodInfoDeleteCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    CustomerResponse,
    (request: Customer) => {
      return request.serializeBinary();
    },
    CustomerResponse.deserializeBinary
  );

  deleteCustomer(
    request: Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CustomerResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/register.RegistrationService/DeleteCustomer',
      request,
      metadata || {},
      this.methodInfoDeleteCustomer,
      callback);
  }

}

