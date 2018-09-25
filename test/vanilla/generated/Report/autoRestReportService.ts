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
import { AutoRestReportServiceContext } from "./autoRestReportServiceContext";

class AutoRestReportService extends AutoRestReportServiceContext {
  /**
   * Initializes a new instance of the AutoRestReportService class.
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
   * Get test coverage report
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getReport(): Promise<Models.GetReportResponse>;
  getReport(options: Models.AutoRestReportServiceGetReportOptionalParams): Promise<Models.GetReportResponse>;
  getReport(callback: msRest.ServiceCallback<{ [propertyName: string]: number }>): void;
  getReport(options: Models.AutoRestReportServiceGetReportOptionalParams, callback: msRest.ServiceCallback<{ [propertyName: string]: number }>): void;
  getReport(options?: Models.AutoRestReportServiceGetReportOptionalParams, callback?: msRest.ServiceCallback<{ [propertyName: string]: number }>): Promise<Models.GetReportResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      getReportOperationSpec,
      callback) as Promise<Models.GetReportResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getReportOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "report",
  queryParameters: [
    Parameters.qualifier
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Number"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

export {
  AutoRestReportService,
  AutoRestReportServiceContext,
  Models as AutoRestReportServiceModels,
  Mappers as AutoRestReportServiceMappers
};
