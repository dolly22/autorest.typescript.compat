/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Retrieves a list of all IP prefixes that azure firewall has learned to not SNAT.
 *
 * @summary Retrieves a list of all IP prefixes that azure firewall has learned to not SNAT.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/AzureFirewallListLearnedIPPrefixes.json
 */
async function azureFirewallListLearnedPrefixes() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const azureFirewallName = "azureFirewall1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.azureFirewalls.beginListLearnedPrefixesAndWait(
    resourceGroupName,
    azureFirewallName
  );
  console.log(result);
}

async function main() {
  azureFirewallListLearnedPrefixes();
}

main().catch(console.error);