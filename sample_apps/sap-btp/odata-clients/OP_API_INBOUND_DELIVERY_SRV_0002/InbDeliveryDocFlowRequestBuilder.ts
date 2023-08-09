/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  UpdateRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { InbDeliveryDocFlow } from './InbDeliveryDocFlow';

/**
 * Request builder class for operations supported on the {@link InbDeliveryDocFlow} entity.
 */
export class InbDeliveryDocFlowRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InbDeliveryDocFlow<T>, T> {
  /**
   * Returns a request builder for retrieving one `InbDeliveryDocFlow` entity based on its keys.
   * @param precedingDocument Key property. See {@link InbDeliveryDocFlow.precedingDocument}.
   * @param precedingDocumentItem Key property. See {@link InbDeliveryDocFlow.precedingDocumentItem}.
   * @param subsequentDocumentCategory Key property. See {@link InbDeliveryDocFlow.subsequentDocumentCategory}.
   * @returns A request builder for creating requests to retrieve one `InbDeliveryDocFlow` entity based on its keys.
   */
  getByKey(
    precedingDocument: DeserializedType<T, 'Edm.String'>,
    precedingDocumentItem: DeserializedType<T, 'Edm.String'>,
    subsequentDocumentCategory: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InbDeliveryDocFlow<T>, T> {
    return new GetByKeyRequestBuilder<InbDeliveryDocFlow<T>, T>(
      this.entityApi,
      {
        PrecedingDocument: precedingDocument,
        PrecedingDocumentItem: precedingDocumentItem,
        SubsequentDocumentCategory: subsequentDocumentCategory
      }
    );
  }

  /**
   * Returns a request builder for querying all `InbDeliveryDocFlow` entities.
   * @returns A request builder for creating requests to retrieve all `InbDeliveryDocFlow` entities.
   */
  getAll(): GetAllRequestBuilder<InbDeliveryDocFlow<T>, T> {
    return new GetAllRequestBuilder<InbDeliveryDocFlow<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for updating an entity of type `InbDeliveryDocFlow`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InbDeliveryDocFlow`.
   */
  update(
    entity: InbDeliveryDocFlow<T>
  ): UpdateRequestBuilder<InbDeliveryDocFlow<T>, T> {
    return new UpdateRequestBuilder<InbDeliveryDocFlow<T>, T>(
      this.entityApi,
      entity
    );
  }
}
