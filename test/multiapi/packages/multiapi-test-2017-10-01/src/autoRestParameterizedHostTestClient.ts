/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AutoRestParameterizedHostTestClientContext } from "./autoRestParameterizedHostTestClientContext";


class AutoRestParameterizedHostTestClient extends AutoRestParameterizedHostTestClientContext {
  // Operation groups
  paths: operations.Paths;

  /**
   * Initializes a new instance of the AutoRestParameterizedHostTestClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param [options] The parameter options
   */
  constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, options?: Models.AutoRestParameterizedHostTestClientOptions) {
    super(credentials, options);
    this.paths = new operations.Paths(this);
  }
}

// Operation Specifications

export {
  AutoRestParameterizedHostTestClient,
  AutoRestParameterizedHostTestClientContext,
  Models as AutoRestParameterizedHostTestModels,
  Mappers as AutoRestParameterizedHostTestMappers
};
export * from "./operations";
