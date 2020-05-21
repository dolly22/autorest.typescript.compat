/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { UrlClient } from "../urlClient";
import {
  QueriesGetBooleanNullOptionalParams,
  QueriesGetIntNullOptionalParams,
  QueriesGetLongNullOptionalParams,
  QueriesFloatNullOptionalParams,
  QueriesDoubleNullOptionalParams,
  QueriesStringNullOptionalParams,
  QueriesEnumValidOptionalParams,
  QueriesEnumNullOptionalParams,
  QueriesByteMultiByteOptionalParams,
  QueriesByteNullOptionalParams,
  QueriesDateNullOptionalParams,
  QueriesDateTimeNullOptionalParams,
  QueriesArrayStringCsvValidOptionalParams,
  QueriesArrayStringCsvNullOptionalParams,
  QueriesArrayStringCsvEmptyOptionalParams,
  QueriesArrayStringSsvValidOptionalParams,
  QueriesArrayStringTsvValidOptionalParams,
  QueriesArrayStringPipesValidOptionalParams
} from "../models";

/**
 * Class representing a Queries.
 */
export class Queries {
  private readonly client: UrlClient;

  /**
   * Initialize a new instance of the class Queries class.
   * @param client Reference to the service client
   */
  constructor(client: UrlClient) {
    this.client = client;
  }

  /**
   * Get true Boolean value on path
   * @param options The options parameters.
   */
  getBooleanTrue(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getBooleanTrueOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get false Boolean value on path
   * @param options The options parameters.
   */
  getBooleanFalse(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getBooleanFalseOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get null Boolean value on query (query string should be absent)
   * @param options The options parameters.
   */
  getBooleanNull(
    options?: QueriesGetBooleanNullOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getBooleanNullOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '1000000' integer value
   * @param options The options parameters.
   */
  getIntOneMillion(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getIntOneMillionOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '-1000000' integer value
   * @param options The options parameters.
   */
  getIntNegativeOneMillion(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getIntNegativeOneMillionOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get null integer value (no query parameter)
   * @param options The options parameters.
   */
  getIntNull(
    options?: QueriesGetIntNullOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getIntNullOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '10000000000' 64 bit integer value
   * @param options The options parameters.
   */
  getTenBillion(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getTenBillionOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '-10000000000' 64 bit integer value
   * @param options The options parameters.
   */
  getNegativeTenBillion(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getNegativeTenBillionOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get 'null 64 bit integer value (no query param in uri)
   * @param options The options parameters.
   */
  getLongNull(
    options?: QueriesGetLongNullOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getLongNullOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '1.034E+20' numeric value
   * @param options The options parameters.
   */
  floatScientificPositive(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      floatScientificPositiveOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '-1.034E-20' numeric value
   * @param options The options parameters.
   */
  floatScientificNegative(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      floatScientificNegativeOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get null numeric value (no query parameter)
   * @param options The options parameters.
   */
  floatNull(
    options?: QueriesFloatNullOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      floatNullOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '9999999.999' numeric value
   * @param options The options parameters.
   */
  doubleDecimalPositive(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      doubleDecimalPositiveOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '-9999999.999' numeric value
   * @param options The options parameters.
   */
  doubleDecimalNegative(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      doubleDecimalNegativeOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get null numeric value (no query parameter)
   * @param options The options parameters.
   */
  doubleNull(
    options?: QueriesDoubleNullOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      doubleNullOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value
   * @param options The options parameters.
   */
  stringUnicode(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      stringUnicodeOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get 'begin!*'();:@ &=+$,/?#[]end
   * @param options The options parameters.
   */
  stringUrlEncoded(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      stringUrlEncodedOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get ''
   * @param options The options parameters.
   */
  stringEmpty(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      stringEmptyOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get null (no query parameter in url)
   * @param options The options parameters.
   */
  stringNull(
    options?: QueriesStringNullOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      stringNullOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get using uri with query parameter 'green color'
   * @param options The options parameters.
   */
  enumValid(
    options?: QueriesEnumValidOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      enumValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get null (no query parameter in url)
   * @param options The options parameters.
   */
  enumNull(
    options?: QueriesEnumNullOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      enumNullOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   * @param options The options parameters.
   */
  byteMultiByte(
    options?: QueriesByteMultiByteOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      byteMultiByteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '' as byte array
   * @param options The options parameters.
   */
  byteEmpty(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      byteEmptyOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get null as byte array (no query parameters in uri)
   * @param options The options parameters.
   */
  byteNull(
    options?: QueriesByteNullOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      byteNullOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '2012-01-01' as date
   * @param options The options parameters.
   */
  dateValid(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      dateValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get null as date - this should result in no query parameters in uri
   * @param options The options parameters.
   */
  dateNull(
    options?: QueriesDateNullOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      dateNullOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '2012-01-01T01:01:01Z' as date-time
   * @param options The options parameters.
   */
  dateTimeValid(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      dateTimeValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get null as date-time, should result in no query parameters in uri
   * @param options The options parameters.
   */
  dateTimeNull(
    options?: QueriesDateTimeNullOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      dateTimeNullOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array
   * format
   * @param options The options parameters.
   */
  arrayStringCsvValid(
    options?: QueriesArrayStringCsvValidOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      arrayStringCsvValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get a null array of string using the csv-array format
   * @param options The options parameters.
   */
  arrayStringCsvNull(
    options?: QueriesArrayStringCsvNullOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      arrayStringCsvNullOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get an empty array [] of string using the csv-array format
   * @param options The options parameters.
   */
  arrayStringCsvEmpty(
    options?: QueriesArrayStringCsvEmptyOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      arrayStringCsvEmptyOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the ssv-array
   * format
   * @param options The options parameters.
   */
  arrayStringSsvValid(
    options?: QueriesArrayStringSsvValidOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      arrayStringSsvValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the tsv-array
   * format
   * @param options The options parameters.
   */
  arrayStringTsvValid(
    options?: QueriesArrayStringTsvValidOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      arrayStringTsvValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the
   * pipes-array format
   * @param options The options parameters.
   */
  arrayStringPipesValid(
    options?: QueriesArrayStringPipesValidOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      arrayStringPipesValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getBooleanTrueOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/bool/true",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.boolQuery],
  urlParameters: [Parameters.$host],
  serializer
};
const getBooleanFalseOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/bool/false",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.boolQuery1],
  urlParameters: [Parameters.$host],
  serializer
};
const getBooleanNullOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/bool/null",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.boolQuery2],
  urlParameters: [Parameters.$host],
  serializer
};
const getIntOneMillionOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/int/1000000",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.intQuery],
  urlParameters: [Parameters.$host],
  serializer
};
const getIntNegativeOneMillionOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/int/-1000000",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.intQuery1],
  urlParameters: [Parameters.$host],
  serializer
};
const getIntNullOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/int/null",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.intQuery2],
  urlParameters: [Parameters.$host],
  serializer
};
const getTenBillionOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/long/10000000000",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.longQuery],
  urlParameters: [Parameters.$host],
  serializer
};
const getNegativeTenBillionOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/long/-10000000000",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.longQuery1],
  urlParameters: [Parameters.$host],
  serializer
};
const getLongNullOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/long/null",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.longQuery2],
  urlParameters: [Parameters.$host],
  serializer
};
const floatScientificPositiveOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/float/1.034E+20",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.floatQuery],
  urlParameters: [Parameters.$host],
  serializer
};
const floatScientificNegativeOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/float/-1.034E-20",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.floatQuery1],
  urlParameters: [Parameters.$host],
  serializer
};
const floatNullOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/float/null",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.floatQuery2],
  urlParameters: [Parameters.$host],
  serializer
};
const doubleDecimalPositiveOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/double/9999999.999",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.doubleQuery],
  urlParameters: [Parameters.$host],
  serializer
};
const doubleDecimalNegativeOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/double/-9999999.999",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.doubleQuery1],
  urlParameters: [Parameters.$host],
  serializer
};
const doubleNullOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/double/null",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.doubleQuery2],
  urlParameters: [Parameters.$host],
  serializer
};
const stringUnicodeOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/string/unicode/",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.stringQuery],
  urlParameters: [Parameters.$host],
  serializer
};
const stringUrlEncodedOperationSpec: coreHttp.OperationSpec = {
  path:
    "/queries/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.stringQuery1],
  urlParameters: [Parameters.$host],
  serializer
};
const stringEmptyOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/string/empty",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.stringQuery2],
  urlParameters: [Parameters.$host],
  serializer
};
const stringNullOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/string/null",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.stringQuery3],
  urlParameters: [Parameters.$host],
  serializer
};
const enumValidOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/enum/green%20color",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.enumQuery],
  urlParameters: [Parameters.$host],
  serializer
};
const enumNullOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/enum/null",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.enumQuery],
  urlParameters: [Parameters.$host],
  serializer
};
const byteMultiByteOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/byte/multibyte",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.byteQuery],
  urlParameters: [Parameters.$host],
  serializer
};
const byteEmptyOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/byte/empty",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.byteQuery1],
  urlParameters: [Parameters.$host],
  serializer
};
const byteNullOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/byte/null",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.byteQuery],
  urlParameters: [Parameters.$host],
  serializer
};
const dateValidOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/date/2012-01-01",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.dateQuery],
  urlParameters: [Parameters.$host],
  serializer
};
const dateNullOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/date/null",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.dateQuery1],
  urlParameters: [Parameters.$host],
  serializer
};
const dateTimeValidOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/datetime/2012-01-01T01%3A01%3A01Z",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.dateTimeQuery],
  urlParameters: [Parameters.$host],
  serializer
};
const dateTimeNullOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/datetime/null",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.dateTimeQuery1],
  urlParameters: [Parameters.$host],
  serializer
};
const arrayStringCsvValidOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/array/csv/string/valid",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.arrayQuery],
  urlParameters: [Parameters.$host],
  serializer
};
const arrayStringCsvNullOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/array/csv/string/null",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.arrayQuery],
  urlParameters: [Parameters.$host],
  serializer
};
const arrayStringCsvEmptyOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/array/csv/string/empty",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.arrayQuery],
  urlParameters: [Parameters.$host],
  serializer
};
const arrayStringSsvValidOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/array/ssv/string/valid",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.arrayQuery1],
  urlParameters: [Parameters.$host],
  serializer
};
const arrayStringTsvValidOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/array/tsv/string/valid",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.arrayQuery2],
  urlParameters: [Parameters.$host],
  serializer
};
const arrayStringPipesValidOperationSpec: coreHttp.OperationSpec = {
  path: "/queries/array/pipes/string/valid",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.arrayQuery3],
  urlParameters: [Parameters.$host],
  serializer
};
