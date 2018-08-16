/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/httpServerFailureMappers";
import { AutoRestHttpInfrastructureTestServiceContext } from "../autoRestHttpInfrastructureTestServiceContext";

/** Class representing a HttpServerFailure. */
export class HttpServerFailure {
  private readonly client: AutoRestHttpInfrastructureTestServiceContext;

  /**
   * Create a HttpServerFailure.
   * @param {AutoRestHttpInfrastructureTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestHttpInfrastructureTestServiceContext) {
    this.client = client;
  }

  /**
   * Return 501 status code - should be represented in the client as an error
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  head501WithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<Models.HttpServerFailureHead501Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      head501OperationSpec) as Promise<Models.HttpServerFailureHead501Response>;
  }

  /**
   * Return 501 status code - should be represented in the client as an error
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get501WithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<Models.HttpServerFailureGet501Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      get501OperationSpec) as Promise<Models.HttpServerFailureGet501Response>;
  }

  /**
   * Return 505 status code - should be represented in the client as an error
   *
   * @param {HttpServerFailurePost505OptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  post505WithHttpOperationResponse(options?: Models.HttpServerFailurePost505OptionalParams): Promise<Models.HttpServerFailurePost505Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      post505OperationSpec) as Promise<Models.HttpServerFailurePost505Response>;
  }

  /**
   * Return 505 status code - should be represented in the client as an error
   *
   * @param {HttpServerFailureDelete505OptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  delete505WithHttpOperationResponse(options?: Models.HttpServerFailureDelete505OptionalParams): Promise<Models.HttpServerFailureDelete505Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      delete505OperationSpec) as Promise<Models.HttpServerFailureDelete505Response>;
  }

  /**
   * Return 501 status code - should be represented in the client as an error
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.ErrorModel} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ErrorModel} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  head501(): Promise<Models.ErrorModel>;
  head501(options: msRest.RequestOptionsBase): Promise<Models.ErrorModel>;
  head501(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  head501(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  head501(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ErrorModel>): any {
    return msRest.responseToBody(this.head501WithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Return 501 status code - should be represented in the client as an error
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.ErrorModel} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ErrorModel} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  get501(): Promise<Models.ErrorModel>;
  get501(options: msRest.RequestOptionsBase): Promise<Models.ErrorModel>;
  get501(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  get501(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  get501(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ErrorModel>): any {
    return msRest.responseToBody(this.get501WithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Return 505 status code - should be represented in the client as an error
   *
   * @param {HttpServerFailurePost505OptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.ErrorModel} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ErrorModel} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  post505(): Promise<Models.ErrorModel>;
  post505(options: Models.HttpServerFailurePost505OptionalParams): Promise<Models.ErrorModel>;
  post505(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  post505(options: Models.HttpServerFailurePost505OptionalParams, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  post505(options?: Models.HttpServerFailurePost505OptionalParams, callback?: msRest.ServiceCallback<Models.ErrorModel>): any {
    return msRest.responseToBody(this.post505WithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Return 505 status code - should be represented in the client as an error
   *
   * @param {HttpServerFailureDelete505OptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.ErrorModel} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ErrorModel} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  delete505(): Promise<Models.ErrorModel>;
  delete505(options: Models.HttpServerFailureDelete505OptionalParams): Promise<Models.ErrorModel>;
  delete505(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  delete505(options: Models.HttpServerFailureDelete505OptionalParams, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  delete505(options?: Models.HttpServerFailureDelete505OptionalParams, callback?: msRest.ServiceCallback<Models.ErrorModel>): any {
    return msRest.responseToBody(this.delete505WithHttpOperationResponse.bind(this), options, callback);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const head501OperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "http/failure/server/501",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const get501OperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "http/failure/server/501",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const post505OperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "http/failure/server/505",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const delete505OperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "http/failure/server/505",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
