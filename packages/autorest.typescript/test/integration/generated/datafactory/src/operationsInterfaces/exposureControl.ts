import {
  ExposureControlRequest,
  ExposureControlGetFeatureValueOptionalParams,
  ExposureControlGetFeatureValueResponse,
  ExposureControlGetFeatureValueByFactoryOptionalParams,
  ExposureControlGetFeatureValueByFactoryResponse,
  ExposureControlBatchRequest,
  ExposureControlQueryFeatureValuesByFactoryOptionalParams,
  ExposureControlQueryFeatureValuesByFactoryResponse
} from "../models";

/** Interface representing a ExposureControl. */
export interface ExposureControl {
  /**
   * Get exposure control feature for specific location.
   * @param locationId The location identifier.
   * @param exposureControlRequest The exposure control request.
   * @param options The options parameters.
   */
  getFeatureValue(
    locationId: string,
    exposureControlRequest: ExposureControlRequest,
    options?: ExposureControlGetFeatureValueOptionalParams
  ): Promise<ExposureControlGetFeatureValueResponse>;
  /**
   * Get exposure control feature for specific factory.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param exposureControlRequest The exposure control request.
   * @param options The options parameters.
   */
  getFeatureValueByFactory(
    resourceGroupName: string,
    factoryName: string,
    exposureControlRequest: ExposureControlRequest,
    options?: ExposureControlGetFeatureValueByFactoryOptionalParams
  ): Promise<ExposureControlGetFeatureValueByFactoryResponse>;
  /**
   * Get list of exposure control features for specific factory.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param exposureControlBatchRequest The exposure control request for list of features.
   * @param options The options parameters.
   */
  queryFeatureValuesByFactory(
    resourceGroupName: string,
    factoryName: string,
    exposureControlBatchRequest: ExposureControlBatchRequest,
    options?: ExposureControlQueryFeatureValuesByFactoryOptionalParams
  ): Promise<ExposureControlQueryFeatureValuesByFactoryResponse>;
}