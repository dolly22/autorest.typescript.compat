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
import * as operations from "./operations";
import { AutoRestDateTimeTestServiceContext } from "./autoRestDateTimeTestServiceContext";

class AutoRestDateTimeTestService extends AutoRestDateTimeTestServiceContext {
  // Operation groups
  datetime: operations.Datetime;

  /**
   * Initializes a new instance of the AutoRestDateTimeTestService class.
   *
   * @param [baseUri] The base URI of the service.
   *
   * @param [options] The parameter options
   */
  constructor(baseUri?: string, options?: msRest.ServiceClientOptions) {
    super(baseUri, options);
    this.datetime = new operations.Datetime(this);
  }
}

// Operation Specifications

export {
  AutoRestDateTimeTestService,
  AutoRestDateTimeTestServiceContext,
  Models as AutoRestDateTimeTestServiceModels,
  Mappers as AutoRestDateTimeTestServiceMappers
};
export * from "./operations";