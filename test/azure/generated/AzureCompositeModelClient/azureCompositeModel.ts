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
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import * as operations from "./operations";
import { AzureCompositeModelContext } from "./azureCompositeModelContext";


class AzureCompositeModel extends AzureCompositeModelContext {
  // Operation groups
  basic: operations.BasicOperations;
  primitive: operations.Primitive;
  arrayModel: operations.ArrayModel;
  dictionary: operations.Dictionary;
  inheritance: operations.Inheritance;
  polymorphism: operations.Polymorphism;
  polymorphicrecursive: operations.Polymorphicrecursive;
  readonlyproperty: operations.Readonlyproperty;
  flattencomplex: operations.Flattencomplex;

  /**
   * Initializes a new instance of the AzureCompositeModel class.
   *
   * @param credentials Credentials needed for the client to connect to Azure.
   *
   * @param [baseUri] The base URI of the service.
   *
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, baseUri?: string, options?: msRestAzure.AzureServiceClientOptions) {
    super(credentials, baseUri, options);
    this.basic = new operations.BasicOperations(this);
    this.primitive = new operations.Primitive(this);
    this.arrayModel = new operations.ArrayModel(this);
    this.dictionary = new operations.Dictionary(this);
    this.inheritance = new operations.Inheritance(this);
    this.polymorphism = new operations.Polymorphism(this);
    this.polymorphicrecursive = new operations.Polymorphicrecursive(this);
    this.readonlyproperty = new operations.Readonlyproperty(this);
    this.flattencomplex = new operations.Flattencomplex(this);
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
  create(subscriptionId: string, resourceGroupName: string, options: Models.AzureCompositeModelCreateOptionalParams): Promise<Models.CreateResponse>;
  create(subscriptionId: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.CatalogDictionary>): void;
  create(subscriptionId: string, resourceGroupName: string, options: Models.AzureCompositeModelCreateOptionalParams, callback: msRest.ServiceCallback<Models.CatalogDictionary>): void;
  create(subscriptionId: string, resourceGroupName: string, options?: Models.AzureCompositeModelCreateOptionalParams, callback?: msRest.ServiceCallback<Models.CatalogDictionary>): Promise<Models.CreateResponse> {
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
  update(subscriptionId: string, resourceGroupName: string, options: Models.AzureCompositeModelUpdateOptionalParams): Promise<Models.UpdateResponse>;
  update(subscriptionId: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.CatalogArray>): void;
  update(subscriptionId: string, resourceGroupName: string, options: Models.AzureCompositeModelUpdateOptionalParams, callback: msRest.ServiceCallback<Models.CatalogArray>): void;
  update(subscriptionId: string, resourceGroupName: string, options?: Models.AzureCompositeModelUpdateOptionalParams, callback?: msRest.ServiceCallback<Models.CatalogArray>): Promise<Models.UpdateResponse> {
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
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
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
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
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
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
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
  AzureCompositeModel,
  AzureCompositeModelContext,
  Models as AzureCompositeModelModels,
  Mappers as AzureCompositeModelMappers
};
export * from "./operations";
