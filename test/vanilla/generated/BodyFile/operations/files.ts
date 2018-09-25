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
import * as Mappers from "../models/filesMappers";
import { AutoRestSwaggerBATFileServiceContext } from "../autoRestSwaggerBATFileServiceContext";

/** Class representing a Files. */
export class Files {
  private readonly client: AutoRestSwaggerBATFileServiceContext;

  /**
   * Create a Files.
   * @param {AutoRestSwaggerBATFileServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestSwaggerBATFileServiceContext) {
    this.client = client;
  }

  /**
   * Get file
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getFile(): Promise<Models.FilesGetFileResponse>;
  getFile(options: msRest.RequestOptionsBase): Promise<Models.FilesGetFileResponse>;
  getFile(callback: msRest.ServiceCallback<void>): void;
  getFile(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getFile(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<Models.FilesGetFileResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getFileOperationSpec,
      callback) as Promise<Models.FilesGetFileResponse>;
  }

  /**
   * Get a large file
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getFileLarge(): Promise<Models.FilesGetFileLargeResponse>;
  getFileLarge(options: msRest.RequestOptionsBase): Promise<Models.FilesGetFileLargeResponse>;
  getFileLarge(callback: msRest.ServiceCallback<void>): void;
  getFileLarge(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getFileLarge(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<Models.FilesGetFileLargeResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getFileLargeOperationSpec,
      callback) as Promise<Models.FilesGetFileLargeResponse>;
  }

  /**
   * Get empty file
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getEmptyFile(): Promise<Models.FilesGetEmptyFileResponse>;
  getEmptyFile(options: msRest.RequestOptionsBase): Promise<Models.FilesGetEmptyFileResponse>;
  getEmptyFile(callback: msRest.ServiceCallback<void>): void;
  getEmptyFile(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getEmptyFile(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<Models.FilesGetEmptyFileResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getEmptyFileOperationSpec,
      callback) as Promise<Models.FilesGetEmptyFileResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getFileOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "files/stream/nonempty",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Stream"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getFileLargeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "files/stream/verylarge",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Stream"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getEmptyFileOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "files/stream/empty",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Stream"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
