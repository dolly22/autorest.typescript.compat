/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { MhsmPrivateLinkResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { KeyVaultManagementClient } from "../keyVaultManagementClient";
import {
  MhsmPrivateLinkResourcesListByMhsmResourceOptionalParams,
  MhsmPrivateLinkResourcesListByMhsmResourceResponse
} from "../models";

/** Class containing MhsmPrivateLinkResources operations. */
export class MhsmPrivateLinkResourcesImpl implements MhsmPrivateLinkResources {
  private readonly client: KeyVaultManagementClient;

  /**
   * Initialize a new instance of the class MhsmPrivateLinkResources class.
   * @param client Reference to the service client
   */
  constructor(client: KeyVaultManagementClient) {
    this.client = client;
  }

  /**
   * Gets the private link resources supported for the managed hsm pool.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param name Name of the managed HSM Pool
   * @param options The options parameters.
   */
  listByMhsmResource(
    resourceGroupName: string,
    name: string,
    options?: MhsmPrivateLinkResourcesListByMhsmResourceOptionalParams
  ): Promise<MhsmPrivateLinkResourcesListByMhsmResourceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, options },
      listByMhsmResourceOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByMhsmResourceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/managedHSMs/{name}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MhsmPrivateLinkResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};