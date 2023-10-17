// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createArrayItemTypesClient from "@msinternal/array-itemtypes";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get
 *
 * @summary call operation Get
 */
async function nullableFloatValueGetSample() {
  const client = createArrayItemTypesClient();
  const result = await client.path("/type/array/nullable-float").get();
  console.log(result);
}

async function main() {
  nullableFloatValueGetSample();
}

main().catch(console.error);
