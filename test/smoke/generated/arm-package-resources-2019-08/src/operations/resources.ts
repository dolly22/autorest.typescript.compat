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
import { ResourceManagementClientContext } from "../resourceManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  GenericResourceExpanded,
  ResourcesListByResourceGroupNextOptionalParams,
  ResourcesListByResourceGroupOptionalParams,
  ResourcesListNextOptionalParams,
  ResourcesListOptionalParams,
  ResourcesListByResourceGroupResponse,
  ResourcesMoveInfo,
  ResourcesListResponse,
  GenericResource,
  ResourcesCreateOrUpdateResponse,
  ResourcesUpdateResponse,
  ResourcesGetResponse,
  ResourcesCreateOrUpdateByIdResponse,
  ResourcesUpdateByIdResponse,
  ResourcesGetByIdResponse,
  ResourcesListByResourceGroupNextResponse,
  ResourcesListNextResponse
} from "../models";

/** Class representing a Resources. */
export class Resources {
  private readonly client: ResourceManagementClientContext;

  /**
   * Initialize a new instance of the class Resources class.
   * @param client Reference to the service client
   */
  constructor(client: ResourceManagementClientContext) {
    this.client = client;
  }

  /**
   * Get all the resources for a resource group.
   * @param resourceGroupName The resource group with the resources to get.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ResourcesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<GenericResourceExpanded> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ResourcesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<GenericResourceExpanded[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ResourcesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<GenericResourceExpanded> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get all the resources in a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: ResourcesListOptionalParams
  ): PagedAsyncIterableIterator<GenericResourceExpanded> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: ResourcesListOptionalParams
  ): AsyncIterableIterator<GenericResourceExpanded[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: ResourcesListOptionalParams
  ): AsyncIterableIterator<GenericResourceExpanded> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get all the resources for a resource group.
   * @param resourceGroupName The resource group with the resources to get.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ResourcesListByResourceGroupOptionalParams
  ): Promise<ResourcesListByResourceGroupResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByResourceGroupOperationSpec
    ) as Promise<ResourcesListByResourceGroupResponse>;
  }

  /**
   * The resources to move must be in the same source resource group. The target resource group may be in
   * a different subscription. When moving resources, both the source group and the target group are
   * locked for the duration of the operation. Write and delete operations are blocked on the groups
   * until the move completes.
   * @param sourceResourceGroupName The name of the resource group containing the resources to move.
   * @param parameters Parameters for moving resources.
   * @param options The options parameters.
   */
  async moveResources(
    sourceResourceGroupName: string,
    parameters: ResourcesMoveInfo,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      sourceResourceGroupName,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      moveResourcesOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: moveResourcesOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * This operation checks whether the specified resources can be moved to the target. The resources to
   * move must be in the same source resource group. The target resource group may be in a different
   * subscription. If validation succeeds, it returns HTTP response code 204 (no content). If validation
   * fails, it returns HTTP response code 409 (Conflict) with an error message. Retrieve the URL in the
   * Location header value to check the result of the long-running operation.
   * @param sourceResourceGroupName The name of the resource group containing the resources to validate
   *                                for move.
   * @param parameters Parameters for moving resources.
   * @param options The options parameters.
   */
  async validateMoveResources(
    sourceResourceGroupName: string,
    parameters: ResourcesMoveInfo,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      sourceResourceGroupName,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      validateMoveResourcesOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: validateMoveResourcesOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Get all the resources in a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: ResourcesListOptionalParams
  ): Promise<ResourcesListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<ResourcesListResponse>;
  }

  /**
   * Checks whether a resource exists.
   * @param resourceGroupName The name of the resource group containing the resource to check. The name
   *                          is case insensitive.
   * @param resourceProviderNamespace The resource provider of the resource to check.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type.
   * @param resourceName The name of the resource to check whether it exists.
   * @param apiVersion The API version to use for the operation.
   * @param options The options parameters.
   */
  checkExistence(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    apiVersion: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceProviderNamespace,
      parentResourcePath,
      resourceType,
      resourceName,
      apiVersion,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      checkExistenceOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Deletes a resource.
   * @param resourceGroupName The name of the resource group that contains the resource to delete. The
   *                          name is case insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type.
   * @param resourceName The name of the resource to delete.
   * @param apiVersion The API version to use for the operation.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    apiVersion: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceProviderNamespace,
      parentResourcePath,
      resourceType,
      resourceName,
      apiVersion,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      deleteOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: deleteOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Creates a resource.
   * @param resourceGroupName The name of the resource group for the resource. The name is case
   *                          insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource to create.
   * @param resourceName The name of the resource to create.
   * @param apiVersion The API version to use for the operation.
   * @param parameters Parameters for creating or updating the resource.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    apiVersion: string,
    parameters: GenericResource,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<ResourcesCreateOrUpdateResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceProviderNamespace,
      parentResourcePath,
      resourceType,
      resourceName,
      apiVersion,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        ResourcesCreateOrUpdateResponse
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
   * Updates a resource.
   * @param resourceGroupName The name of the resource group for the resource. The name is case
   *                          insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource to update.
   * @param resourceName The name of the resource to update.
   * @param apiVersion The API version to use for the operation.
   * @param parameters Parameters for updating the resource.
   * @param options The options parameters.
   */
  async update(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    apiVersion: string,
    parameters: GenericResource,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<ResourcesUpdateResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceProviderNamespace,
      parentResourcePath,
      resourceType,
      resourceName,
      apiVersion,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        ResourcesUpdateResponse
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
   * Gets a resource.
   * @param resourceGroupName The name of the resource group containing the resource to get. The name is
   *                          case insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource.
   * @param resourceName The name of the resource to get.
   * @param apiVersion The API version to use for the operation.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    apiVersion: string,
    options?: coreHttp.OperationOptions
  ): Promise<ResourcesGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceProviderNamespace,
      parentResourcePath,
      resourceType,
      resourceName,
      apiVersion,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<ResourcesGetResponse>;
  }

  /**
   * Checks by ID whether a resource exists.
   * @param resourceId The fully qualified ID of the resource, including the resource name and resource
   *                   type. Use the format,
   *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
   * @param apiVersion The API version to use for the operation.
   * @param options The options parameters.
   */
  checkExistenceById(
    resourceId: string,
    apiVersion: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceId,
      apiVersion,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      checkExistenceByIdOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Deletes a resource by ID.
   * @param resourceId The fully qualified ID of the resource, including the resource name and resource
   *                   type. Use the format,
   *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
   * @param apiVersion The API version to use for the operation.
   * @param options The options parameters.
   */
  async deleteById(
    resourceId: string,
    apiVersion: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceId,
      apiVersion,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      deleteByIdOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: deleteByIdOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Create a resource by ID.
   * @param resourceId The fully qualified ID of the resource, including the resource name and resource
   *                   type. Use the format,
   *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
   * @param apiVersion The API version to use for the operation.
   * @param parameters Create or update resource parameters.
   * @param options The options parameters.
   */
  async createOrUpdateById(
    resourceId: string,
    apiVersion: string,
    parameters: GenericResource,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<ResourcesCreateOrUpdateByIdResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceId,
      apiVersion,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        ResourcesCreateOrUpdateByIdResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      createOrUpdateByIdOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: createOrUpdateByIdOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Updates a resource by ID.
   * @param resourceId The fully qualified ID of the resource, including the resource name and resource
   *                   type. Use the format,
   *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
   * @param apiVersion The API version to use for the operation.
   * @param parameters Update resource parameters.
   * @param options The options parameters.
   */
  async updateById(
    resourceId: string,
    apiVersion: string,
    parameters: GenericResource,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<ResourcesUpdateByIdResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceId,
      apiVersion,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        ResourcesUpdateByIdResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      updateByIdOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: updateByIdOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Gets a resource by ID.
   * @param resourceId The fully qualified ID of the resource, including the resource name and resource
   *                   type. Use the format,
   *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
   * @param apiVersion The API version to use for the operation.
   * @param options The options parameters.
   */
  getById(
    resourceId: string,
    apiVersion: string,
    options?: coreHttp.OperationOptions
  ): Promise<ResourcesGetByIdResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceId,
      apiVersion,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getByIdOperationSpec
    ) as Promise<ResourcesGetByIdResponse>;
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The resource group with the resources to get.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ResourcesListByResourceGroupNextOptionalParams
  ): Promise<ResourcesListByResourceGroupNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByResourceGroupNextOperationSpec
    ) as Promise<ResourcesListByResourceGroupNextResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ResourcesListNextOptionalParams
  ): Promise<ResourcesListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<ResourcesListNextResponse>;
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

const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/resources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.expand
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const moveResourcesOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{sourceResourceGroupName}/moveResources",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.sourceResourceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const validateMoveResourcesOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{sourceResourceGroupName}/validateMoveResources",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.sourceResourceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.expand
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const checkExistenceOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}",
  httpMethod: "HEAD",
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceProviderNamespace,
    Parameters.parentResourcePath,
    Parameters.resourceType,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceProviderNamespace,
    Parameters.parentResourcePath,
    Parameters.resourceType,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GenericResource
    },
    201: {
      bodyMapper: Mappers.GenericResource
    },
    202: {
      bodyMapper: Mappers.GenericResource
    },
    204: {
      bodyMapper: Mappers.GenericResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceProviderNamespace,
    Parameters.parentResourcePath,
    Parameters.resourceType,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.GenericResource
    },
    201: {
      bodyMapper: Mappers.GenericResource
    },
    202: {
      bodyMapper: Mappers.GenericResource
    },
    204: {
      bodyMapper: Mappers.GenericResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceProviderNamespace,
    Parameters.parentResourcePath,
    Parameters.resourceType,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GenericResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceProviderNamespace,
    Parameters.parentResourcePath,
    Parameters.resourceType,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const checkExistenceByIdOperationSpec: coreHttp.OperationSpec = {
  path: "/{resourceId}",
  httpMethod: "HEAD",
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.resourceId],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteByIdOperationSpec: coreHttp.OperationSpec = {
  path: "/{resourceId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.resourceId],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateByIdOperationSpec: coreHttp.OperationSpec = {
  path: "/{resourceId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GenericResource
    },
    201: {
      bodyMapper: Mappers.GenericResource
    },
    202: {
      bodyMapper: Mappers.GenericResource
    },
    204: {
      bodyMapper: Mappers.GenericResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.resourceId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateByIdOperationSpec: coreHttp.OperationSpec = {
  path: "/{resourceId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.GenericResource
    },
    201: {
      bodyMapper: Mappers.GenericResource
    },
    202: {
      bodyMapper: Mappers.GenericResource
    },
    204: {
      bodyMapper: Mappers.GenericResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.resourceId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getByIdOperationSpec: coreHttp.OperationSpec = {
  path: "/{resourceId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GenericResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.resourceId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.expand
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.expand
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
