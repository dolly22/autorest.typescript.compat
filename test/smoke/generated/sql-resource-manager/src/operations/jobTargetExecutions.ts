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
import {
  JobExecution,
  JobTargetExecutionsListByJobExecutionNextOptionalParams,
  JobTargetExecutionsListByJobExecutionOptionalParams,
  JobTargetExecutionsListByStepNextOptionalParams,
  JobTargetExecutionsListByStepOptionalParams,
  JobTargetExecutionsListByJobExecutionResponse,
  JobTargetExecutionsListByStepResponse,
  JobTargetExecutionsGetResponse,
  JobTargetExecutionsListByJobExecutionNextResponse,
  JobTargetExecutionsListByStepNextResponse
} from "../models";

/** Class representing a JobTargetExecutions. */
export class JobTargetExecutions {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class JobTargetExecutions class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists target executions for all steps of a job execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param options The options parameters.
   */
  public listByJobExecution(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    options?: JobTargetExecutionsListByJobExecutionOptionalParams
  ): PagedAsyncIterableIterator<JobExecution> {
    const iter = this.listByJobExecutionPagingAll(
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobExecutionId,
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
        return this.listByJobExecutionPagingPage(
          resourceGroupName,
          serverName,
          jobAgentName,
          jobName,
          jobExecutionId,
          options
        );
      }
    };
  }

  private async *listByJobExecutionPagingPage(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    options?: JobTargetExecutionsListByJobExecutionOptionalParams
  ): AsyncIterableIterator<JobExecution[]> {
    let result = await this._listByJobExecution(
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobExecutionId,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByJobExecutionNext(
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobExecutionId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByJobExecutionPagingAll(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    options?: JobTargetExecutionsListByJobExecutionOptionalParams
  ): AsyncIterableIterator<JobExecution> {
    for await (const page of this.listByJobExecutionPagingPage(
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobExecutionId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the target executions of a job step execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param stepName The name of the step.
   * @param options The options parameters.
   */
  public listByStep(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    stepName: string,
    options?: JobTargetExecutionsListByStepOptionalParams
  ): PagedAsyncIterableIterator<JobExecution> {
    const iter = this.listByStepPagingAll(
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobExecutionId,
      stepName,
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
        return this.listByStepPagingPage(
          resourceGroupName,
          serverName,
          jobAgentName,
          jobName,
          jobExecutionId,
          stepName,
          options
        );
      }
    };
  }

  private async *listByStepPagingPage(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    stepName: string,
    options?: JobTargetExecutionsListByStepOptionalParams
  ): AsyncIterableIterator<JobExecution[]> {
    let result = await this._listByStep(
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobExecutionId,
      stepName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByStepNext(
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobExecutionId,
        stepName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByStepPagingAll(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    stepName: string,
    options?: JobTargetExecutionsListByStepOptionalParams
  ): AsyncIterableIterator<JobExecution> {
    for await (const page of this.listByStepPagingPage(
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobExecutionId,
      stepName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists target executions for all steps of a job execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param options The options parameters.
   */
  private _listByJobExecution(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    options?: JobTargetExecutionsListByJobExecutionOptionalParams
  ): Promise<JobTargetExecutionsListByJobExecutionResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobExecutionId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByJobExecutionOperationSpec
    ) as Promise<JobTargetExecutionsListByJobExecutionResponse>;
  }

  /**
   * Lists the target executions of a job step execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param stepName The name of the step.
   * @param options The options parameters.
   */
  private _listByStep(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    stepName: string,
    options?: JobTargetExecutionsListByStepOptionalParams
  ): Promise<JobTargetExecutionsListByStepResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobExecutionId,
      stepName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByStepOperationSpec
    ) as Promise<JobTargetExecutionsListByStepResponse>;
  }

  /**
   * Gets a target execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The unique id of the job execution
   * @param stepName The name of the step.
   * @param targetId The target id.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    stepName: string,
    targetId: string,
    options?: coreHttp.OperationOptions
  ): Promise<JobTargetExecutionsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobExecutionId,
      stepName,
      targetId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<JobTargetExecutionsGetResponse>;
  }

  /**
   * ListByJobExecutionNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param nextLink The nextLink from the previous successful call to the ListByJobExecution method.
   * @param options The options parameters.
   */
  private _listByJobExecutionNext(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    nextLink: string,
    options?: JobTargetExecutionsListByJobExecutionNextOptionalParams
  ): Promise<JobTargetExecutionsListByJobExecutionNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobExecutionId,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByJobExecutionNextOperationSpec
    ) as Promise<JobTargetExecutionsListByJobExecutionNextResponse>;
  }

  /**
   * ListByStepNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param stepName The name of the step.
   * @param nextLink The nextLink from the previous successful call to the ListByStep method.
   * @param options The options parameters.
   */
  private _listByStepNext(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    stepName: string,
    nextLink: string,
    options?: JobTargetExecutionsListByStepNextOptionalParams
  ): Promise<JobTargetExecutionsListByStepNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobExecutionId,
      stepName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByStepNextOperationSpec
    ) as Promise<JobTargetExecutionsListByStepNextResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listByJobExecutionOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/targets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobExecutionListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.skip,
    Parameters.apiVersion4,
    Parameters.createTimeMin,
    Parameters.createTimeMax,
    Parameters.endTimeMin,
    Parameters.endTimeMax,
    Parameters.isActive,
    Parameters.top
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobExecutionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByStepOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/steps/{stepName}/targets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobExecutionListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.skip,
    Parameters.apiVersion4,
    Parameters.createTimeMin,
    Parameters.createTimeMax,
    Parameters.endTimeMin,
    Parameters.endTimeMax,
    Parameters.isActive,
    Parameters.top
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobExecutionId,
    Parameters.stepName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/steps/{stepName}/targets/{targetId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobExecution
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobExecutionId,
    Parameters.stepName,
    Parameters.targetId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByJobExecutionNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobExecutionListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.skip,
    Parameters.apiVersion4,
    Parameters.createTimeMin,
    Parameters.createTimeMax,
    Parameters.endTimeMin,
    Parameters.endTimeMax,
    Parameters.isActive,
    Parameters.top
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobExecutionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByStepNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobExecutionListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.skip,
    Parameters.apiVersion4,
    Parameters.createTimeMin,
    Parameters.createTimeMax,
    Parameters.endTimeMin,
    Parameters.endTimeMax,
    Parameters.isActive,
    Parameters.top
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobExecutionId,
    Parameters.stepName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
