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
import { WebSiteManagementClientContext } from "../webSiteManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  Domain,
  NameIdentifier,
  DomainRecommendationSearchParameters,
  DomainOwnershipIdentifier,
  DomainsCheckAvailabilityResponse,
  DomainsListResponse,
  DomainsGetControlCenterSsoRequestResponse,
  DomainsListRecommendationsResponse,
  DomainsListByResourceGroupResponse,
  DomainsGetResponse,
  DomainsCreateOrUpdateResponse,
  DomainsDeleteOptionalParams,
  DomainPatchResource,
  DomainsUpdateResponse,
  DomainsListOwnershipIdentifiersResponse,
  DomainsGetOwnershipIdentifierResponse,
  DomainsCreateOrUpdateOwnershipIdentifierResponse,
  DomainsUpdateOwnershipIdentifierResponse,
  DomainsListNextResponse,
  DomainsListRecommendationsNextResponse,
  DomainsListByResourceGroupNextResponse,
  DomainsListOwnershipIdentifiersNextResponse
} from "../models";

/** Class representing a Domains. */
export class Domains {
  private readonly client: WebSiteManagementClientContext;

  /**
   * Initialize a new instance of the class Domains class.
   * @param client Reference to the service client
   */
  constructor(client: WebSiteManagementClientContext) {
    this.client = client;
  }

  /**
   * Description for Get all domains in a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<Domain> {
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
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<Domain[]> {
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
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<Domain> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Description for Get domain name recommendations based on keywords.
   * @param parameters Search parameters for domain name recommendations.
   * @param options The options parameters.
   */
  public listRecommendations(
    parameters: DomainRecommendationSearchParameters,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<NameIdentifier> {
    const iter = this.listRecommendationsPagingAll(parameters, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listRecommendationsPagingPage(parameters, options);
      }
    };
  }

  private async *listRecommendationsPagingPage(
    parameters: DomainRecommendationSearchParameters,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<NameIdentifier[]> {
    let result = await this._listRecommendations(parameters, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listRecommendationsNext(
        parameters,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listRecommendationsPagingAll(
    parameters: DomainRecommendationSearchParameters,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<NameIdentifier> {
    for await (const page of this.listRecommendationsPagingPage(
      parameters,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Description for Get all domains in a resource group.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<Domain> {
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
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<Domain[]> {
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
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<Domain> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Description for Lists domain ownership identifiers.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param options The options parameters.
   */
  public listOwnershipIdentifiers(
    resourceGroupName: string,
    domainName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<DomainOwnershipIdentifier> {
    const iter = this.listOwnershipIdentifiersPagingAll(
      resourceGroupName,
      domainName,
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
        return this.listOwnershipIdentifiersPagingPage(
          resourceGroupName,
          domainName,
          options
        );
      }
    };
  }

  private async *listOwnershipIdentifiersPagingPage(
    resourceGroupName: string,
    domainName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<DomainOwnershipIdentifier[]> {
    let result = await this._listOwnershipIdentifiers(
      resourceGroupName,
      domainName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listOwnershipIdentifiersNext(
        resourceGroupName,
        domainName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listOwnershipIdentifiersPagingAll(
    resourceGroupName: string,
    domainName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<DomainOwnershipIdentifier> {
    for await (const page of this.listOwnershipIdentifiersPagingPage(
      resourceGroupName,
      domainName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Description for Check if a domain is available for registration.
   * @param identifier Name of the domain.
   * @param options The options parameters.
   */
  checkAvailability(
    identifier: NameIdentifier,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsCheckAvailabilityResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      identifier,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      checkAvailabilityOperationSpec
    ) as Promise<DomainsCheckAvailabilityResponse>;
  }

  /**
   * Description for Get all domains in a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: coreHttp.OperationOptions
  ): Promise<DomainsListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<DomainsListResponse>;
  }

  /**
   * Description for Generate a single sign-on request for the domain management portal.
   * @param options The options parameters.
   */
  getControlCenterSsoRequest(
    options?: coreHttp.OperationOptions
  ): Promise<DomainsGetControlCenterSsoRequestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getControlCenterSsoRequestOperationSpec
    ) as Promise<DomainsGetControlCenterSsoRequestResponse>;
  }

  /**
   * Description for Get domain name recommendations based on keywords.
   * @param parameters Search parameters for domain name recommendations.
   * @param options The options parameters.
   */
  private _listRecommendations(
    parameters: DomainRecommendationSearchParameters,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsListRecommendationsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      parameters,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listRecommendationsOperationSpec
    ) as Promise<DomainsListRecommendationsResponse>;
  }

  /**
   * Description for Get all domains in a resource group.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsListByResourceGroupResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByResourceGroupOperationSpec
    ) as Promise<DomainsListByResourceGroupResponse>;
  }

  /**
   * Description for Get a domain.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of the domain.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    domainName: string,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      domainName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<DomainsGetResponse>;
  }

  /**
   * Description for Creates or updates a domain.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of the domain.
   * @param domain Domain registration information.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    domainName: string,
    domain: Domain,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<DomainsCreateOrUpdateResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      domainName,
      domain,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        DomainsCreateOrUpdateResponse
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
   * Description for Delete a domain.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of the domain.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    domainName: string,
    options?: DomainsDeleteOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      domainName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Description for Creates or updates a domain.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of the domain.
   * @param domain Domain registration information.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    domainName: string,
    domain: DomainPatchResource,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsUpdateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      domainName,
      domain,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      updateOperationSpec
    ) as Promise<DomainsUpdateResponse>;
  }

  /**
   * Description for Lists domain ownership identifiers.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param options The options parameters.
   */
  private _listOwnershipIdentifiers(
    resourceGroupName: string,
    domainName: string,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsListOwnershipIdentifiersResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      domainName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOwnershipIdentifiersOperationSpec
    ) as Promise<DomainsListOwnershipIdentifiersResponse>;
  }

  /**
   * Description for Get ownership identifier for domain
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param name Name of identifier.
   * @param options The options parameters.
   */
  getOwnershipIdentifier(
    resourceGroupName: string,
    domainName: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsGetOwnershipIdentifierResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      domainName,
      name,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOwnershipIdentifierOperationSpec
    ) as Promise<DomainsGetOwnershipIdentifierResponse>;
  }

  /**
   * Description for Creates an ownership identifier for a domain or updates identifier details for an
   * existing identifer
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param name Name of identifier.
   * @param domainOwnershipIdentifier A JSON representation of the domain ownership properties.
   * @param options The options parameters.
   */
  createOrUpdateOwnershipIdentifier(
    resourceGroupName: string,
    domainName: string,
    name: string,
    domainOwnershipIdentifier: DomainOwnershipIdentifier,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsCreateOrUpdateOwnershipIdentifierResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      domainName,
      name,
      domainOwnershipIdentifier,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createOrUpdateOwnershipIdentifierOperationSpec
    ) as Promise<DomainsCreateOrUpdateOwnershipIdentifierResponse>;
  }

  /**
   * Description for Delete ownership identifier for domain
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param name Name of identifier.
   * @param options The options parameters.
   */
  deleteOwnershipIdentifier(
    resourceGroupName: string,
    domainName: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      domainName,
      name,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOwnershipIdentifierOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Description for Creates an ownership identifier for a domain or updates identifier details for an
   * existing identifer
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param name Name of identifier.
   * @param domainOwnershipIdentifier A JSON representation of the domain ownership properties.
   * @param options The options parameters.
   */
  updateOwnershipIdentifier(
    resourceGroupName: string,
    domainName: string,
    name: string,
    domainOwnershipIdentifier: DomainOwnershipIdentifier,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsUpdateOwnershipIdentifierResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      domainName,
      name,
      domainOwnershipIdentifier,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      updateOwnershipIdentifierOperationSpec
    ) as Promise<DomainsUpdateOwnershipIdentifierResponse>;
  }

  /**
   * Description for Renew a domain.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of the domain.
   * @param options The options parameters.
   */
  renew(
    resourceGroupName: string,
    domainName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      domainName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      renewOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<DomainsListNextResponse>;
  }

  /**
   * ListRecommendationsNext
   * @param parameters Search parameters for domain name recommendations.
   * @param nextLink The nextLink from the previous successful call to the ListRecommendations method.
   * @param options The options parameters.
   */
  private _listRecommendationsNext(
    parameters: DomainRecommendationSearchParameters,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsListRecommendationsNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      parameters,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listRecommendationsNextOperationSpec
    ) as Promise<DomainsListRecommendationsNextResponse>;
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsListByResourceGroupNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByResourceGroupNextOperationSpec
    ) as Promise<DomainsListByResourceGroupNextResponse>;
  }

  /**
   * ListOwnershipIdentifiersNext
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param nextLink The nextLink from the previous successful call to the ListOwnershipIdentifiers
   *                 method.
   * @param options The options parameters.
   */
  private _listOwnershipIdentifiersNext(
    resourceGroupName: string,
    domainName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsListOwnershipIdentifiersNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      domainName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOwnershipIdentifiersNextOperationSpec
    ) as Promise<DomainsListOwnershipIdentifiersNextResponse>;
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

const checkAvailabilityOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/checkDomainAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DomainAvailabilityCheckResult
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.identifier,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/domains",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getControlCenterSsoRequestOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/generateSsoRequest",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DomainControlCenterSsoRequest
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listRecommendationsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/listDomainRecommendations",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.NameIdentifierCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Domain
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Domain
    },
    201: {
      bodyMapper: Mappers.Domain
    },
    202: {
      bodyMapper: Mappers.Domain
    },
    204: {
      bodyMapper: Mappers.Domain
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.domain,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.forceHardDeleteDomain],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Domain
    },
    202: {
      bodyMapper: Mappers.Domain
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.domain1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOwnershipIdentifiersOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainOwnershipIdentifierCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOwnershipIdentifierOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainOwnershipIdentifier
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOwnershipIdentifierOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DomainOwnershipIdentifier
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.domainOwnershipIdentifier,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOwnershipIdentifierOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOwnershipIdentifierOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DomainOwnershipIdentifier
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.domainOwnershipIdentifier,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const renewOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/renew",
  httpMethod: "POST",
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listRecommendationsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NameIdentifierCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOwnershipIdentifiersNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainOwnershipIdentifierCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
