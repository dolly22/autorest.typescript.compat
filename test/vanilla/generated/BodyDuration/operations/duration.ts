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
import * as Mappers from "../models/durationMappers";
import { AutoRestDurationTestServiceContext } from "../autoRestDurationTestServiceContext";

/** Class representing a Duration. */
export class Duration {
  private readonly client: AutoRestDurationTestServiceContext;

  /**
   * Create a Duration.
   * @param {AutoRestDurationTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestDurationTestServiceContext) {
    this.client = client;
  }

  /**
   * Get null duration value
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getNull(): Promise<Models.DurationGetNullResponse>;
  getNull(options: msRest.RequestOptionsBase): Promise<Models.DurationGetNullResponse>;
  getNull(callback: msRest.ServiceCallback<string>): void;
  getNull(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  getNull(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<string>): Promise<Models.DurationGetNullResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNullOperationSpec,
      callback) as Promise<Models.DurationGetNullResponse>;
  }

  /**
   * Put a positive duration value
   *
   * @param durationBody
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putPositiveDuration(durationBody: string): Promise<msRest.RestResponse>;
  putPositiveDuration(durationBody: string, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putPositiveDuration(durationBody: string, callback: msRest.ServiceCallback<void>): void;
  putPositiveDuration(durationBody: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putPositiveDuration(durationBody: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        durationBody,
        options
      },
      putPositiveDurationOperationSpec,
      callback);
  }

  /**
   * Get a positive duration value
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getPositiveDuration(): Promise<Models.DurationGetPositiveDurationResponse>;
  getPositiveDuration(options: msRest.RequestOptionsBase): Promise<Models.DurationGetPositiveDurationResponse>;
  getPositiveDuration(callback: msRest.ServiceCallback<string>): void;
  getPositiveDuration(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  getPositiveDuration(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<string>): Promise<Models.DurationGetPositiveDurationResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getPositiveDurationOperationSpec,
      callback) as Promise<Models.DurationGetPositiveDurationResponse>;
  }

  /**
   * Get an invalid duration value
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getInvalid(): Promise<Models.DurationGetInvalidResponse>;
  getInvalid(options: msRest.RequestOptionsBase): Promise<Models.DurationGetInvalidResponse>;
  getInvalid(callback: msRest.ServiceCallback<string>): void;
  getInvalid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  getInvalid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<string>): Promise<Models.DurationGetInvalidResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getInvalidOperationSpec,
      callback) as Promise<Models.DurationGetInvalidResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "duration/null",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "TimeSpan"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putPositiveDurationOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "duration/positiveduration",
  requestBody: {
    parameterPath: "durationBody",
    mapper: {
      required: true,
      serializedName: "durationBody",
      type: {
        name: "TimeSpan"
      }
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

const getPositiveDurationOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "duration/positiveduration",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "TimeSpan"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getInvalidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "duration/invalid",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "TimeSpan"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
