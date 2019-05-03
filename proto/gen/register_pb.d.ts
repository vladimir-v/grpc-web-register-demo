import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Customer extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getAge(): number;
  setAge(value: number): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Customer.AsObject;
  static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
  static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Customer;
  static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
}

export namespace Customer {
  export type AsObject = {
    id: string,
    name: string,
    age: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CustomerRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getAge(): number;
  setAge(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerRequest): CustomerRequest.AsObject;
  static serializeBinaryToWriter(message: CustomerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerRequest;
  static deserializeBinaryFromReader(message: CustomerRequest, reader: jspb.BinaryReader): CustomerRequest;
}

export namespace CustomerRequest {
  export type AsObject = {
    id: string,
    name: string,
    age: number,
  }
}

export class DeleteResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
    message: string,
  }
}

export class CustomerResponse extends jspb.Message {
  getCustomerList(): Array<Customer>;
  setCustomerList(value: Array<Customer>): void;
  clearCustomerList(): void;
  addCustomer(value?: Customer, index?: number): Customer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerResponse): CustomerResponse.AsObject;
  static serializeBinaryToWriter(message: CustomerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerResponse;
  static deserializeBinaryFromReader(message: CustomerResponse, reader: jspb.BinaryReader): CustomerResponse;
}

export namespace CustomerResponse {
  export type AsObject = {
    customerList: Array<Customer.AsObject>,
  }
}

