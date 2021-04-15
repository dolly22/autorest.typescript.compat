/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ManagedInstanceKey,
  ManagedInstanceKeysListByInstanceNextOptionalParams,
  ManagedInstanceKeysListByInstanceOptionalParams,
  ManagedInstanceKeysGetResponse,
  ManagedInstanceKeysCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedInstanceKeys. */
export interface ManagedInstanceKeys {
  /**
   * Gets a list of managed instance keys.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceKeysListByInstanceOptionalParams
  ): PagedAsyncIterableIterator<ManagedInstanceKey>;
  /**
   * Gets a managed instance key.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param keyName The name of the managed instance key to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    keyName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedInstanceKeysGetResponse>;
  /**
   * Creates or updates a managed instance key.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param keyName The name of the managed instance key to be operated on (updated or created).
   * @param parameters The requested managed instance key resource state.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    keyName: string,
    parameters: ManagedInstanceKey,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<ManagedInstanceKeysCreateOrUpdateResponse>,
      ManagedInstanceKeysCreateOrUpdateResponse
    >
  >;
  /**
   * Deletes the managed instance key with the given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param keyName The name of the managed instance key to be deleted.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    managedInstanceName: string,
    keyName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
}