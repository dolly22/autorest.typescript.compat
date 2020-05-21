/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";

export const contentType: coreHttp.OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const resourceArray: coreHttp.OperationParameter = {
  parameterPath: ["options", "resourceArray"],
  mapper: {
    serializedName: "resourceArray",
    type: {
      name: "Sequence",
      element: { type: { name: "Composite", className: "Resource" } }
    }
  }
};

export const $host: coreHttp.OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceArray1: coreHttp.OperationParameter = {
  parameterPath: ["options", "resourceArray"],
  mapper: {
    serializedName: "resourceArray",
    type: {
      name: "Sequence",
      element: { type: { name: "Composite", className: "WrappedProduct" } }
    }
  }
};

export const resourceDictionary: coreHttp.OperationParameter = {
  parameterPath: ["options", "resourceDictionary"],
  mapper: {
    serializedName: "resourceDictionary",
    type: {
      name: "Dictionary",
      value: { type: { name: "Composite", className: "FlattenedProduct" } }
    }
  }
};

export const resourceComplexObject: coreHttp.OperationParameter = {
  parameterPath: ["options", "resourceComplexObject"],
  mapper: Mappers.ResourceCollection
};

export const simpleBodyProduct: coreHttp.OperationParameter = {
  parameterPath: ["options", "simpleBodyProduct"],
  mapper: Mappers.SimpleProduct
};

export const simpleBodyProduct1: coreHttp.OperationParameter = {
  parameterPath: ["flattenParameterGroup", "simpleBodyProduct"],
  mapper: Mappers.SimpleProduct
};

export const name: coreHttp.OperationURLParameter = {
  parameterPath: ["flattenParameterGroup", "name"],
  mapper: {
    serializedName: "name",
    required: true,
    type: {
      name: "String"
    }
  }
};
