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
import * as Mappers from "../models/subscriptionInCredentialsMappers";
import * as Parameters from "../models/parameters";
import { AutoRestAzureSpecialParametersTestClientContext } from "../autoRestAzureSpecialParametersTestClientContext";

/** Class representing a SubscriptionInCredentials. */
export class SubscriptionInCredentials {
  private readonly client: AutoRestAzureSpecialParametersTestClientContext;

  /**
   * Create a SubscriptionInCredentials.
   * @param {AutoRestAzureSpecialParametersTestClientContext} client Reference to the service client.
   */
  constructor(client: AutoRestAzureSpecialParametersTestClientContext) {
    this.client = client;
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential subscriptionId to
   * '1234-5678-9012-3456' to succeed
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  postMethodGlobalValid(): Promise<msRest.RestResponse>;
  postMethodGlobalValid(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  postMethodGlobalValid(callback: msRest.ServiceCallback<void>): void;
  postMethodGlobalValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  postMethodGlobalValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      postMethodGlobalValidOperationSpec,
      callback);
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential subscriptionId to
   * null, and client-side validation should prevent you from making this call
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  postMethodGlobalNull(): Promise<msRest.RestResponse>;
  postMethodGlobalNull(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  postMethodGlobalNull(callback: msRest.ServiceCallback<void>): void;
  postMethodGlobalNull(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  postMethodGlobalNull(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      postMethodGlobalNullOperationSpec,
      callback);
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential subscriptionId to
   * '1234-5678-9012-3456' to succeed
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  postMethodGlobalNotProvidedValid(): Promise<msRest.RestResponse>;
  postMethodGlobalNotProvidedValid(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  postMethodGlobalNotProvidedValid(callback: msRest.ServiceCallback<void>): void;
  postMethodGlobalNotProvidedValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  postMethodGlobalNotProvidedValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      postMethodGlobalNotProvidedValidOperationSpec,
      callback);
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential subscriptionId to
   * '1234-5678-9012-3456' to succeed
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  postPathGlobalValid(): Promise<msRest.RestResponse>;
  postPathGlobalValid(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  postPathGlobalValid(callback: msRest.ServiceCallback<void>): void;
  postPathGlobalValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  postPathGlobalValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      postPathGlobalValidOperationSpec,
      callback);
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential subscriptionId to
   * '1234-5678-9012-3456' to succeed
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  postSwaggerGlobalValid(): Promise<msRest.RestResponse>;
  postSwaggerGlobalValid(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  postSwaggerGlobalValid(callback: msRest.ServiceCallback<void>): void;
  postSwaggerGlobalValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  postSwaggerGlobalValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      postSwaggerGlobalValidOperationSpec,
      callback);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const postMethodGlobalValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "azurespecials/subscriptionId/method/string/none/path/global/1234-5678-9012-3456/{subscriptionId}",
  urlParameters: [
    Parameters.subscriptionId
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postMethodGlobalNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "azurespecials/subscriptionId/method/string/none/path/global/null/{subscriptionId}",
  urlParameters: [
    Parameters.subscriptionId
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postMethodGlobalNotProvidedValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "azurespecials/subscriptionId/method/string/none/path/globalNotProvided/1234-5678-9012-3456/{subscriptionId}",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postPathGlobalValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "azurespecials/subscriptionId/path/string/none/path/global/1234-5678-9012-3456/{subscriptionId}",
  urlParameters: [
    Parameters.subscriptionId
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postSwaggerGlobalValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "azurespecials/subscriptionId/swagger/string/none/path/global/1234-5678-9012-3456/{subscriptionId}",
  urlParameters: [
    Parameters.subscriptionId
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
