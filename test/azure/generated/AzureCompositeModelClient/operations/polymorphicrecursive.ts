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
import * as Mappers from "../models/polymorphicrecursiveMappers";
import * as Parameters from "../models/parameters";
import { AzureCompositeModelContext } from "../azureCompositeModelContext";

/** Class representing a Polymorphicrecursive. */
export class Polymorphicrecursive {
  private readonly client: AzureCompositeModelContext;

  /**
   * Create a Polymorphicrecursive.
   * @param {AzureCompositeModelContext} client Reference to the service client.
   */
  constructor(client: AzureCompositeModelContext) {
    this.client = client;
  }

  /**
   * Get complex types that are polymorphic and have recursive references
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<Models.PolymorphicrecursiveGetValidResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getValidOperationSpec) as Promise<Models.PolymorphicrecursiveGetValidResponse>;
  }

  /**
   * Put complex types that are polymorphic and have recursive references
   *
   * @param {FishUnion} complexBody Please put a salmon that looks like this:
   * {
   * "fishtype": "salmon",
   * "species": "king",
   * "length": 1,
   * "age": 1,
   * "location": "alaska",
   * "iswild": true,
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "length": 20,
   * "age": 6,
   * "siblings": [
   * {
   * "fishtype": "salmon",
   * "species": "coho",
   * "length": 2,
   * "age": 2,
   * "location": "atlantic",
   * "iswild": true,
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "length": 20,
   * "age": 6
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * }
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putValidWithHttpOperationResponse(complexBody: Models.FishUnion, options?: msRest.RequestOptionsBase): Promise<msRest.HttpResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putValidOperationSpec);
  }

  /**
   * Get complex types that are polymorphic and have recursive references
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.FishUnion} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.FishUnion} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getValid(): Promise<Models.FishUnion>;
  getValid(options: msRest.RequestOptionsBase): Promise<Models.FishUnion>;
  getValid(callback: msRest.ServiceCallback<Models.FishUnion>): void;
  getValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FishUnion>): void;
  getValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.FishUnion>): any {
    return msRest.responseToBody(this.getValidWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Put complex types that are polymorphic and have recursive references
   *
   * @param {FishUnion} complexBody Please put a salmon that looks like this:
   * {
   * "fishtype": "salmon",
   * "species": "king",
   * "length": 1,
   * "age": 1,
   * "location": "alaska",
   * "iswild": true,
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "length": 20,
   * "age": 6,
   * "siblings": [
   * {
   * "fishtype": "salmon",
   * "species": "coho",
   * "length": 2,
   * "age": 2,
   * "location": "atlantic",
   * "iswild": true,
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "length": 20,
   * "age": 6
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * }
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  putValid(complexBody: Models.FishUnion): Promise<void>;
  putValid(complexBody: Models.FishUnion, options: msRest.RequestOptionsBase): Promise<void>;
  putValid(complexBody: Models.FishUnion, callback: msRest.ServiceCallback<void>): void;
  putValid(complexBody: Models.FishUnion, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putValid(complexBody: Models.FishUnion, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.putValidWithHttpOperationResponse.bind(this), complexBody, options, callback);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/polymorphicrecursive/valid",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Fish
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/polymorphicrecursive/valid",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.Fish,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
