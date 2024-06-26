/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  Disk,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/CreateAManagedDiskWithDiskAccess.json
 */
async function createAManagedDiskAndAssociateWithDiskAccessResource() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: { createOption: "Empty" },
    diskAccessId:
      "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskAccesses/{existing-diskAccess-name}",
    diskSizeGB: 200,
    location: "West US",
    networkAccessPolicy: "AllowPrivate"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/CreateAManagedDiskWithDiskEncryptionSet.json
 */
async function createAManagedDiskAndAssociateWithDiskEncryptionSet() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: { createOption: "Empty" },
    diskSizeGB: 200,
    encryption: {
      diskEncryptionSetId:
        "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSets/{existing-diskEncryptionSet-name}"
    },
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/CreateAManagedDiskByCopyingASnapshot.json
 */
async function createAManagedDiskByCopyingASnapshot() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: {
      createOption: "Copy",
      sourceResourceId:
        "subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/snapshots/mySnapshot"
    },
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/CreateAManagedDiskByImportingAnUnmanagedBlobFromADifferentSubscription.json
 */
async function createAManagedDiskByImportingAnUnmanagedBlobFromADifferentSubscription() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: {
      createOption: "Import",
      sourceUri:
        "https://mystorageaccount.blob.core.windows.net/osimages/osimage.vhd",
      storageAccountId:
        "subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/myStorageAccount"
    },
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/CreateAManagedDiskByImportingAnUnmanagedBlobFromTheSameSubscription.json
 */
async function createAManagedDiskByImportingAnUnmanagedBlobFromTheSameSubscription() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: {
      createOption: "Import",
      sourceUri:
        "https://mystorageaccount.blob.core.windows.net/osimages/osimage.vhd"
    },
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/CreateAManagedDiskFromAPlatformImage.json
 */
async function createAManagedDiskFromAPlatformImage() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscriptionId}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: {
      createOption: "FromImage",
      imageReference: {
        id:
          "/Subscriptions/{subscriptionId}/Providers/Microsoft.Compute/Locations/westus/Publishers/{publisher}/ArtifactTypes/VMImage/Offers/{offer}/Skus/{sku}/Versions/1.0.0"
      }
    },
    location: "West US",
    osType: "Windows"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/CreateAManagedDiskFromAnExistingManagedDisk.json
 */
async function createAManagedDiskFromAnExistingManagedDiskInTheSameOrDifferentSubscription() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk2";
  const disk: Disk = {
    creationData: {
      createOption: "Copy",
      sourceResourceId:
        "subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/myDisk1"
    },
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/CreateAManagedDiskWithSecurityProfile.json
 */
async function createAManagedDiskWithSecurityProfile() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: {
      createOption: "FromImage",
      imageReference: {
        id:
          "/Subscriptions/{subscriptionId}/Providers/Microsoft.Compute/Locations/uswest/Publishers/Microsoft/ArtifactTypes/VMImage/Offers/{offer}"
      }
    },
    location: "North Central US",
    osType: "Windows",
    securityProfile: { securityType: "TrustedLaunch" }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/CreateAManagedDiskWithSSDZRSAccountType.json
 */
async function createAManagedDiskWithSsdZrsAccountType() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: { createOption: "Empty" },
    diskSizeGB: 200,
    location: "West US",
    sku: { name: "Premium_ZRS" }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/CreateAManagedUploadDisk.json
 */
async function createAManagedUploadDisk() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: { createOption: "Upload", uploadSizeBytes: 10737418752 },
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/CreateAnEmptyManagedDiskInExtendedLocation.json
 */
async function createAnEmptyManagedDiskInExtendedLocation() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: { createOption: "Empty" },
    diskSizeGB: 200,
    extendedLocation: { name: "{edge-zone-id}", type: "EdgeZone" },
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/CreateAnEmptyManagedDisk.json
 */
async function createAnEmptyManagedDisk() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: { createOption: "Empty" },
    diskSizeGB: 200,
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/CreateAManagedDiskWithLogicalSectorSize.json
 */
async function createAnUltraManagedDiskWithLogicalSectorSize512E() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: { createOption: "Empty", logicalSectorSize: 512 },
    diskSizeGB: 200,
    location: "West US",
    sku: { name: "UltraSSD_LRS" }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

async function main() {
  createAManagedDiskAndAssociateWithDiskAccessResource();
  createAManagedDiskAndAssociateWithDiskEncryptionSet();
  createAManagedDiskByCopyingASnapshot();
  createAManagedDiskByImportingAnUnmanagedBlobFromADifferentSubscription();
  createAManagedDiskByImportingAnUnmanagedBlobFromTheSameSubscription();
  createAManagedDiskFromAPlatformImage();
  createAManagedDiskFromAnExistingManagedDiskInTheSameOrDifferentSubscription();
  createAManagedDiskWithSecurityProfile();
  createAManagedDiskWithSsdZrsAccountType();
  createAManagedUploadDisk();
  createAnEmptyManagedDiskInExtendedLocation();
  createAnEmptyManagedDisk();
  createAnUltraManagedDiskWithLogicalSectorSize512E();
}

main().catch(console.error);
