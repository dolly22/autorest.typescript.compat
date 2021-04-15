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
import {
  ADGroup,
  GroupsListOptionalParams,
  DirectoryObjectUnion,
  GroupGetMemberGroupsParameters,
  CheckGroupMembershipParameters,
  GroupsIsMemberOfResponse,
  GroupAddMemberParameters,
  GroupCreateParameters,
  GroupsCreateResponse,
  GroupsGetResponse,
  AddOwnerParameters
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Groups. */
export interface Groups {
  /**
   * Gets list of groups for the current tenant.
   * @param options The options parameters.
   */
  list(options?: GroupsListOptionalParams): PagedAsyncIterableIterator<ADGroup>;
  /**
   * Gets the members of a group.
   * @param objectId The object ID of the group whose members should be retrieved.
   * @param options The options parameters.
   */
  listGroupMembers(
    objectId: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<DirectoryObjectUnion>;
  /**
   * Gets a collection of object IDs of groups of which the specified group is a member.
   * @param objectId The object ID of the group for which to get group membership.
   * @param parameters Group filtering parameters.
   * @param options The options parameters.
   */
  listMemberGroups(
    objectId: string,
    parameters: GroupGetMemberGroupsParameters,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<string>;
  /**
   * The owners are a set of non-admin users who are allowed to modify this object.
   * @param objectId The object ID of the group for which to get owners.
   * @param options The options parameters.
   */
  listOwners(
    objectId: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<DirectoryObjectUnion>;
  /**
   * Gets a list of groups for the current tenant.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<ADGroup>;
  /**
   * Gets the members of a group.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  listGroupMembersNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<DirectoryObjectUnion>;
  /**
   * Checks whether the specified user, group, contact, or service principal is a direct or transitive
   * member of the specified group.
   * @param parameters The check group membership parameters.
   * @param options The options parameters.
   */
  isMemberOf(
    parameters: CheckGroupMembershipParameters,
    options?: coreHttp.OperationOptions
  ): Promise<GroupsIsMemberOfResponse>;
  /**
   * Remove a member from a group.
   * @param groupObjectId The object ID of the group from which to remove the member.
   * @param memberObjectId Member object id
   * @param options The options parameters.
   */
  removeMember(
    groupObjectId: string,
    memberObjectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Add a member to a group.
   * @param groupObjectId The object ID of the group to which to add the member.
   * @param parameters The URL of the member object, such as
   *                   https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.
   * @param options The options parameters.
   */
  addMember(
    groupObjectId: string,
    parameters: GroupAddMemberParameters,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Create a group in the directory.
   * @param parameters The parameters for the group to create.
   * @param options The options parameters.
   */
  create(
    parameters: GroupCreateParameters,
    options?: coreHttp.OperationOptions
  ): Promise<GroupsCreateResponse>;
  /**
   * Gets group information from the directory.
   * @param objectId The object ID of the user for which to get group information.
   * @param options The options parameters.
   */
  get(
    objectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<GroupsGetResponse>;
  /**
   * Delete a group from the directory.
   * @param objectId The object ID of the group to delete.
   * @param options The options parameters.
   */
  delete(
    objectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Add an owner to a group.
   * @param objectId The object ID of the application to which to add the owner.
   * @param parameters The URL of the owner object, such as
   *                   https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.
   * @param options The options parameters.
   */
  addOwner(
    objectId: string,
    parameters: AddOwnerParameters,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Remove a member from owners.
   * @param objectId The object ID of the group from which to remove the owner.
   * @param ownerObjectId Owner object id
   * @param options The options parameters.
   */
  removeOwner(
    objectId: string,
    ownerObjectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
}