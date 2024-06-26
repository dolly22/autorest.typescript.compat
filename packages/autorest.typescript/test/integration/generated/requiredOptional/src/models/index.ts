/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";

export interface ErrorModel {
  status?: number;
  message?: string;
}

export interface IntWrapper {
  value: number;
}

export interface IntOptionalWrapper {
  value?: number;
}

export interface StringWrapper {
  value: string;
}

export interface StringOptionalWrapper {
  value?: string;
}

export interface Product {
  id: number;
  name?: string;
}

export interface ClassWrapper {
  value: Product;
}

export interface ClassOptionalWrapper {
  value?: Product;
}

export interface ArrayWrapper {
  value: string[];
}

export interface ArrayOptionalWrapper {
  value?: string[];
}

/** Optional parameters. */
export interface ImplicitGetRequiredPathOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ImplicitPutOptionalQueryOptionalParams
  extends coreClient.OperationOptions {
  queryParameter?: string;
}

/** Optional parameters. */
export interface ImplicitPutOptionalHeaderOptionalParams
  extends coreClient.OperationOptions {
  queryParameter?: string;
}

/** Optional parameters. */
export interface ImplicitPutOptionalBodyOptionalParams
  extends coreClient.OperationOptions {
  bodyParameter?: string;
}

/** Optional parameters. */
export interface ImplicitPutOptionalBinaryBodyOptionalParams
  extends coreClient.OperationOptions {
  bodyParameter?: coreRestPipeline.RequestBodyType;
}

/** Optional parameters. */
export interface ImplicitGetRequiredGlobalPathOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ImplicitGetRequiredGlobalQueryOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ImplicitGetOptionalGlobalQueryOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPutOptionalBinaryBodyOptionalParams
  extends coreClient.OperationOptions {
  bodyParameter?: coreRestPipeline.RequestBodyType;
}

/** Optional parameters. */
export interface ExplicitPutRequiredBinaryBodyOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostRequiredIntegerParameterOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostOptionalIntegerParameterOptionalParams
  extends coreClient.OperationOptions {
  bodyParameter?: number;
}

/** Optional parameters. */
export interface ExplicitPostRequiredIntegerPropertyOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostOptionalIntegerPropertyOptionalParams
  extends coreClient.OperationOptions {
  bodyParameter?: IntOptionalWrapper;
}

/** Optional parameters. */
export interface ExplicitPostRequiredIntegerHeaderOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostOptionalIntegerHeaderOptionalParams
  extends coreClient.OperationOptions {
  headerParameter?: number;
}

/** Optional parameters. */
export interface ExplicitPostRequiredStringParameterOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostOptionalStringParameterOptionalParams
  extends coreClient.OperationOptions {
  bodyParameter?: string;
}

/** Optional parameters. */
export interface ExplicitPostRequiredStringPropertyOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostOptionalStringPropertyOptionalParams
  extends coreClient.OperationOptions {
  bodyParameter?: StringOptionalWrapper;
}

/** Optional parameters. */
export interface ExplicitPostRequiredStringHeaderOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostOptionalStringHeaderOptionalParams
  extends coreClient.OperationOptions {
  bodyParameter?: string;
}

/** Optional parameters. */
export interface ExplicitPostRequiredClassParameterOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostOptionalClassParameterOptionalParams
  extends coreClient.OperationOptions {
  bodyParameter?: Product;
}

/** Optional parameters. */
export interface ExplicitPostRequiredClassPropertyOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostOptionalClassPropertyOptionalParams
  extends coreClient.OperationOptions {
  bodyParameter?: ClassOptionalWrapper;
}

/** Optional parameters. */
export interface ExplicitPostRequiredArrayParameterOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostOptionalArrayParameterOptionalParams
  extends coreClient.OperationOptions {
  /** Array of String */
  bodyParameter?: string[];
}

/** Optional parameters. */
export interface ExplicitPostRequiredArrayPropertyOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostOptionalArrayPropertyOptionalParams
  extends coreClient.OperationOptions {
  bodyParameter?: ArrayOptionalWrapper;
}

/** Optional parameters. */
export interface ExplicitPostRequiredArrayHeaderOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostOptionalArrayHeaderOptionalParams
  extends coreClient.OperationOptions {
  /** Array of String */
  headerParameter?: string[];
}

/** Optional parameters. */
export interface RequiredOptionalClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** number of items to skip */
  optionalGlobalQuery?: number;
  /** Overrides client endpoint. */
  endpoint?: string;
}
