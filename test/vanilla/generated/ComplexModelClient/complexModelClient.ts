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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import { ComplexModelClientContext } from "./complexModelClientContext";

class ComplexModelClient extends ComplexModelClientContext {
  /**
   * Initializes a new instance of the ComplexModelClient class.
   *
   * @param [baseUri] The base URI of the service.
   *
   * @param [options] The parameter options
   */
  constructor(baseUri?: string, options?: msRest.ServiceClientOptions) {
    super(baseUri, options);
  }
  // methods on the client.

  /**
   * @summary Product Types
   *
   * The Products endpoint returns information about the Uber products offered at a given location.
   * The response includes the display name and other details about each product, and lists the
   * products in the proper display order.
   *
   * @param resourceGroupName Resource Group ID.
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  list(resourceGroupName: string): Promise<Models.ListResponse>;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.ListResponse>;
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.CatalogArray>): void;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CatalogArray>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.CatalogArray>): Promise<Models.ListResponse> {
    return this.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ListResponse>;
  }
  // methods on the client.

  /**
   * @summary Create products
   *
   * Resets products.
   *
   * @param subscriptionId Subscription ID.
   *
   * @param resourceGroupName Resource Group ID.
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  create(subscriptionId: string, resourceGroupName: string): Promise<Models.CreateResponse>;
  create(subscriptionId: string, resourceGroupName: string, options: Models.ComplexModelClientCreateOptionalParams): Promise<Models.CreateResponse>;
  create(subscriptionId: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.CatalogDictionary>): void;
  create(subscriptionId: string, resourceGroupName: string, options: Models.ComplexModelClientCreateOptionalParams, callback: msRest.ServiceCallback<Models.CatalogDictionary>): void;
  create(subscriptionId: string, resourceGroupName: string, options?: Models.ComplexModelClientCreateOptionalParams, callback?: msRest.ServiceCallback<Models.CatalogDictionary>): Promise<Models.CreateResponse> {
    return this.sendOperationRequest(
      {
        subscriptionId,
        resourceGroupName,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.CreateResponse>;
  }
  // methods on the client.

  /**
   * @summary Update products
   *
   * Resets products.
   *
   * @param subscriptionId Subscription ID.
   *
   * @param resourceGroupName Resource Group ID.
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  update(subscriptionId: string, resourceGroupName: string): Promise<Models.UpdateResponse>;
  update(subscriptionId: string, resourceGroupName: string, options: Models.ComplexModelClientUpdateOptionalParams): Promise<Models.UpdateResponse>;
  update(subscriptionId: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.CatalogArray>): void;
  update(subscriptionId: string, resourceGroupName: string, options: Models.ComplexModelClientUpdateOptionalParams, callback: msRest.ServiceCallback<Models.CatalogArray>): void;
  update(subscriptionId: string, resourceGroupName: string, options?: Models.ComplexModelClientUpdateOptionalParams, callback?: msRest.ServiceCallback<Models.CatalogArray>): Promise<Models.UpdateResponse> {
    return this.sendOperationRequest(
      {
        subscriptionId,
        resourceGroupName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.UpdateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/Microsoft.Cache/Redis",
  urlParameters: [
    Parameters.subscriptionId0,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CatalogArray
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/Microsoft.Cache/Redis",
  urlParameters: [
    Parameters.subscriptionId1,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  requestBody: {
    parameterPath: {
      productDictionaryOfArray: [
        "options",
        "productDictionaryOfArray"
      ]
    },
    mapper: {
      ...Mappers.CatalogDictionaryOfArray,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CatalogDictionary
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/Microsoft.Cache/Redis",
  urlParameters: [
    Parameters.subscriptionId1,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  requestBody: {
    parameterPath: {
      productArrayOfDictionary: [
        "options",
        "productArrayOfDictionary"
      ]
    },
    mapper: {
      ...Mappers.CatalogArrayOfDictionary,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CatalogArray
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

export {
  ComplexModelClient,
  ComplexModelClientContext,
  Models as ComplexModelModels,
  Mappers as ComplexModelMappers
};
