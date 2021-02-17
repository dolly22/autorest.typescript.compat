/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  ManagedBackupShortTermRetentionPolicy,
  ManagedShortTermRetentionPolicyName,
  ManagedBackupShortTermRetentionPoliciesGetResponse,
  ManagedBackupShortTermRetentionPoliciesCreateOrUpdateResponse,
  ManagedBackupShortTermRetentionPoliciesUpdateResponse,
  ManagedBackupShortTermRetentionPoliciesListByDatabaseResponse,
  ManagedBackupShortTermRetentionPoliciesListByDatabaseNextResponse
} from "../models";

/** Class representing a ManagedBackupShortTermRetentionPolicies. */
export class ManagedBackupShortTermRetentionPolicies {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class ManagedBackupShortTermRetentionPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a managed database's short term retention policy list.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  public listByDatabase(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<ManagedBackupShortTermRetentionPolicy> {
    const iter = this.listByDatabasePagingAll(
      resourceGroupName,
      managedInstanceName,
      databaseName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByDatabasePagingPage(
          resourceGroupName,
          managedInstanceName,
          databaseName,
          options
        );
      }
    };
  }

  private async *listByDatabasePagingPage(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<ManagedBackupShortTermRetentionPolicy[]> {
    let result = await this._listByDatabase(
      resourceGroupName,
      managedInstanceName,
      databaseName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByDatabaseNext(
        resourceGroupName,
        managedInstanceName,
        databaseName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByDatabasePagingAll(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<ManagedBackupShortTermRetentionPolicy> {
    for await (const page of this.listByDatabasePagingPage(
      resourceGroupName,
      managedInstanceName,
      databaseName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a managed database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param policyName The policy name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    policyName: ManagedShortTermRetentionPolicyName,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedBackupShortTermRetentionPoliciesGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      managedInstanceName,
      databaseName,
      policyName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<ManagedBackupShortTermRetentionPoliciesGetResponse>;
  }

  /**
   * Updates a managed database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param policyName The policy name. Should always be "default".
   * @param parameters The short term retention policy info.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    policyName: ManagedShortTermRetentionPolicyName,
    parameters: ManagedBackupShortTermRetentionPolicy,
    options?: coreHttp.OperationOptions
  ): Promise<
    LROPoller<ManagedBackupShortTermRetentionPoliciesCreateOrUpdateResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      managedInstanceName,
      databaseName,
      policyName,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        ManagedBackupShortTermRetentionPoliciesCreateOrUpdateResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      createOrUpdateOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: createOrUpdateOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Updates a managed database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param policyName The policy name. Should always be "default".
   * @param parameters The short term retention policy info.
   * @param options The options parameters.
   */
  async update(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    policyName: ManagedShortTermRetentionPolicyName,
    parameters: ManagedBackupShortTermRetentionPolicy,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<ManagedBackupShortTermRetentionPoliciesUpdateResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      managedInstanceName,
      databaseName,
      policyName,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        ManagedBackupShortTermRetentionPoliciesUpdateResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      updateOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: updateOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Gets a managed database's short term retention policy list.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  private _listByDatabase(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedBackupShortTermRetentionPoliciesListByDatabaseResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      managedInstanceName,
      databaseName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByDatabaseOperationSpec
    ) as Promise<ManagedBackupShortTermRetentionPoliciesListByDatabaseResponse>;
  }

  /**
   * ListByDatabaseNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param nextLink The nextLink from the previous successful call to the ListByDatabase method.
   * @param options The options parameters.
   */
  private _listByDatabaseNext(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    ManagedBackupShortTermRetentionPoliciesListByDatabaseNextResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      managedInstanceName,
      databaseName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByDatabaseNextOperationSpec
    ) as Promise<
      ManagedBackupShortTermRetentionPoliciesListByDatabaseNextResponse
    >;
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/backupShortTermRetentionPolicies/{policyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.managedInstanceName,
    Parameters.policyName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/backupShortTermRetentionPolicies/{policyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    201: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    202: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    204: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    default: {}
  },
  requestBody: Parameters.parameters40,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.managedInstanceName,
    Parameters.policyName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/backupShortTermRetentionPolicies/{policyName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    201: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    202: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    204: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    default: {}
  },
  requestBody: Parameters.parameters40,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.managedInstanceName,
    Parameters.policyName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByDatabaseOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/backupShortTermRetentionPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicyListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDatabaseNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicyListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.nextLink,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
