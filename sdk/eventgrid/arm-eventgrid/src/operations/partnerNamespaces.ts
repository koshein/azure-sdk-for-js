/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/partnerNamespacesMappers";
import * as Parameters from "../models/parameters";
import { EventGridManagementClientContext } from "../eventGridManagementClientContext";

/** Class representing a PartnerNamespaces. */
export class PartnerNamespaces {
  private readonly client: EventGridManagementClientContext;

  /**
   * Create a PartnerNamespaces.
   * @param {EventGridManagementClientContext} client Reference to the service client.
   */
  constructor(client: EventGridManagementClientContext) {
    this.client = client;
  }

  /**
   * Get properties of a partner namespace.
   * @summary Get a partner namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param [options] The optional parameters
   * @returns Promise<Models.PartnerNamespacesGetResponse>
   */
  get(resourceGroupName: string, partnerNamespaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.PartnerNamespacesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param callback The callback
   */
  get(resourceGroupName: string, partnerNamespaceName: string, callback: msRest.ServiceCallback<Models.PartnerNamespace>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, partnerNamespaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PartnerNamespace>): void;
  get(resourceGroupName: string, partnerNamespaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PartnerNamespace>, callback?: msRest.ServiceCallback<Models.PartnerNamespace>): Promise<Models.PartnerNamespacesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        partnerNamespaceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PartnerNamespacesGetResponse>;
  }

  /**
   * Asynchronously creates a new partner namespace with the specified parameters.
   * @summary Create a partner namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param partnerNamespaceInfo PartnerNamespace information.
   * @param [options] The optional parameters
   * @returns Promise<Models.PartnerNamespacesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, partnerNamespaceName: string, partnerNamespaceInfo: Models.PartnerNamespace, options?: msRest.RequestOptionsBase): Promise<Models.PartnerNamespacesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,partnerNamespaceName,partnerNamespaceInfo,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PartnerNamespacesCreateOrUpdateResponse>;
  }

  /**
   * Delete existing partner namespace.
   * @summary Delete a partner namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, partnerNamespaceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,partnerNamespaceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Asynchronously updates a partner namespace with the specified parameters.
   * @summary Update a partner namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param partnerNamespaceUpdateParameters Partner namespace update information.
   * @param [options] The optional parameters
   * @returns Promise<Models.PartnerNamespacesUpdateResponse>
   */
  update(resourceGroupName: string, partnerNamespaceName: string, partnerNamespaceUpdateParameters: Models.PartnerNamespaceUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.PartnerNamespacesUpdateResponse> {
    return this.beginUpdate(resourceGroupName,partnerNamespaceName,partnerNamespaceUpdateParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PartnerNamespacesUpdateResponse>;
  }

  /**
   * List all the partner namespaces under an Azure subscription.
   * @summary List partner namespaces under an Azure subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.PartnerNamespacesListBySubscriptionResponse>
   */
  listBySubscription(options?: Models.PartnerNamespacesListBySubscriptionOptionalParams): Promise<Models.PartnerNamespacesListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.PartnerNamespacesListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: Models.PartnerNamespacesListBySubscriptionOptionalParams, callback: msRest.ServiceCallback<Models.PartnerNamespacesListResult>): void;
  listBySubscription(options?: Models.PartnerNamespacesListBySubscriptionOptionalParams | msRest.ServiceCallback<Models.PartnerNamespacesListResult>, callback?: msRest.ServiceCallback<Models.PartnerNamespacesListResult>): Promise<Models.PartnerNamespacesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.PartnerNamespacesListBySubscriptionResponse>;
  }

  /**
   * List all the partner namespaces under a resource group.
   * @summary List partner namespaces under a resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.PartnerNamespacesListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: Models.PartnerNamespacesListByResourceGroupOptionalParams): Promise<Models.PartnerNamespacesListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.PartnerNamespacesListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: Models.PartnerNamespacesListByResourceGroupOptionalParams, callback: msRest.ServiceCallback<Models.PartnerNamespacesListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: Models.PartnerNamespacesListByResourceGroupOptionalParams | msRest.ServiceCallback<Models.PartnerNamespacesListResult>, callback?: msRest.ServiceCallback<Models.PartnerNamespacesListResult>): Promise<Models.PartnerNamespacesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.PartnerNamespacesListByResourceGroupResponse>;
  }

  /**
   * List the two keys used to publish to a partner namespace.
   * @summary List keys for a partner namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param [options] The optional parameters
   * @returns Promise<Models.PartnerNamespacesListSharedAccessKeysResponse>
   */
  listSharedAccessKeys(resourceGroupName: string, partnerNamespaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.PartnerNamespacesListSharedAccessKeysResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param callback The callback
   */
  listSharedAccessKeys(resourceGroupName: string, partnerNamespaceName: string, callback: msRest.ServiceCallback<Models.PartnerNamespaceSharedAccessKeys>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param options The optional parameters
   * @param callback The callback
   */
  listSharedAccessKeys(resourceGroupName: string, partnerNamespaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PartnerNamespaceSharedAccessKeys>): void;
  listSharedAccessKeys(resourceGroupName: string, partnerNamespaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PartnerNamespaceSharedAccessKeys>, callback?: msRest.ServiceCallback<Models.PartnerNamespaceSharedAccessKeys>): Promise<Models.PartnerNamespacesListSharedAccessKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        partnerNamespaceName,
        options
      },
      listSharedAccessKeysOperationSpec,
      callback) as Promise<Models.PartnerNamespacesListSharedAccessKeysResponse>;
  }

  /**
   * Regenerate a shared access key for a partner namespace.
   * @summary Regenerate key for a partner namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param regenerateKeyRequest Request body to regenerate key.
   * @param [options] The optional parameters
   * @returns Promise<Models.PartnerNamespacesRegenerateKeyResponse>
   */
  regenerateKey(resourceGroupName: string, partnerNamespaceName: string, regenerateKeyRequest: Models.PartnerNamespaceRegenerateKeyRequest, options?: msRest.RequestOptionsBase): Promise<Models.PartnerNamespacesRegenerateKeyResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param regenerateKeyRequest Request body to regenerate key.
   * @param callback The callback
   */
  regenerateKey(resourceGroupName: string, partnerNamespaceName: string, regenerateKeyRequest: Models.PartnerNamespaceRegenerateKeyRequest, callback: msRest.ServiceCallback<Models.PartnerNamespaceSharedAccessKeys>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param regenerateKeyRequest Request body to regenerate key.
   * @param options The optional parameters
   * @param callback The callback
   */
  regenerateKey(resourceGroupName: string, partnerNamespaceName: string, regenerateKeyRequest: Models.PartnerNamespaceRegenerateKeyRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PartnerNamespaceSharedAccessKeys>): void;
  regenerateKey(resourceGroupName: string, partnerNamespaceName: string, regenerateKeyRequest: Models.PartnerNamespaceRegenerateKeyRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PartnerNamespaceSharedAccessKeys>, callback?: msRest.ServiceCallback<Models.PartnerNamespaceSharedAccessKeys>): Promise<Models.PartnerNamespacesRegenerateKeyResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        partnerNamespaceName,
        regenerateKeyRequest,
        options
      },
      regenerateKeyOperationSpec,
      callback) as Promise<Models.PartnerNamespacesRegenerateKeyResponse>;
  }

  /**
   * Asynchronously creates a new partner namespace with the specified parameters.
   * @summary Create a partner namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param partnerNamespaceInfo PartnerNamespace information.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, partnerNamespaceName: string, partnerNamespaceInfo: Models.PartnerNamespace, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        partnerNamespaceName,
        partnerNamespaceInfo,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Delete existing partner namespace.
   * @summary Delete a partner namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, partnerNamespaceName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        partnerNamespaceName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Asynchronously updates a partner namespace with the specified parameters.
   * @summary Update a partner namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param partnerNamespaceUpdateParameters Partner namespace update information.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, partnerNamespaceName: string, partnerNamespaceUpdateParameters: Models.PartnerNamespaceUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        partnerNamespaceName,
        partnerNamespaceUpdateParameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * List all the partner namespaces under an Azure subscription.
   * @summary List partner namespaces under an Azure subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PartnerNamespacesListBySubscriptionNextResponse>
   */
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PartnerNamespacesListBySubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PartnerNamespacesListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PartnerNamespacesListResult>): void;
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PartnerNamespacesListResult>, callback?: msRest.ServiceCallback<Models.PartnerNamespacesListResult>): Promise<Models.PartnerNamespacesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionNextOperationSpec,
      callback) as Promise<Models.PartnerNamespacesListBySubscriptionNextResponse>;
  }

  /**
   * List all the partner namespaces under a resource group.
   * @summary List partner namespaces under a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PartnerNamespacesListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PartnerNamespacesListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PartnerNamespacesListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PartnerNamespacesListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PartnerNamespacesListResult>, callback?: msRest.ServiceCallback<Models.PartnerNamespacesListResult>): Promise<Models.PartnerNamespacesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.PartnerNamespacesListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces/{partnerNamespaceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.partnerNamespaceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PartnerNamespace
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/partnerNamespaces",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PartnerNamespacesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PartnerNamespacesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listSharedAccessKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces/{partnerNamespaceName}/listKeys",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.partnerNamespaceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PartnerNamespaceSharedAccessKeys
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const regenerateKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces/{partnerNamespaceName}/regenerateKey",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.partnerNamespaceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "regenerateKeyRequest",
    mapper: {
      ...Mappers.PartnerNamespaceRegenerateKeyRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PartnerNamespaceSharedAccessKeys
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces/{partnerNamespaceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.partnerNamespaceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "partnerNamespaceInfo",
    mapper: {
      ...Mappers.PartnerNamespace,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.PartnerNamespace
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces/{partnerNamespaceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.partnerNamespaceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces/{partnerNamespaceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.partnerNamespaceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "partnerNamespaceUpdateParameters",
    mapper: {
      ...Mappers.PartnerNamespaceUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {},
    201: {
      bodyMapper: Mappers.PartnerNamespace
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PartnerNamespacesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PartnerNamespacesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};