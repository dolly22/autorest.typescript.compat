/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to The operation to simulate the eviction of spot virtual machine.
 *
 * @summary The operation to simulate the eviction of spot virtual machine.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/SimulateEvictionOfVM.json
 */
async function simulateEvictionAVirtualMachine() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "ResourceGroup";
  const vmName = "VMName";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachines.simulateEviction(
    resourceGroupName,
    vmName
  );
  console.log(result);
}

simulateEvictionAVirtualMachine().catch(console.error);