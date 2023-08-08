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
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { InbDeliveryItem } from './InbDeliveryItem';

/**
 * Request builder class for operations supported on the {@link InbDeliveryItem} entity.
 */
export class InbDeliveryItemRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InbDeliveryItem<T>, T> {
  /**
   * Returns a request builder for retrieving one `InbDeliveryItem` entity based on its keys.
   * @param deliveryDocument Key property. See {@link InbDeliveryItem.deliveryDocument}.
   * @param deliveryDocumentItem Key property. See {@link InbDeliveryItem.deliveryDocumentItem}.
   * @returns A request builder for creating requests to retrieve one `InbDeliveryItem` entity based on its keys.
   */
  getByKey(
    deliveryDocument: DeserializedType<T, 'Edm.String'>,
    deliveryDocumentItem: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InbDeliveryItem<T>, T> {
    return new GetByKeyRequestBuilder<InbDeliveryItem<T>, T>(this.entityApi, {
      DeliveryDocument: deliveryDocument,
      DeliveryDocumentItem: deliveryDocumentItem
    });
  }

  /**
   * Returns a request builder for querying all `InbDeliveryItem` entities.
   * @returns A request builder for creating requests to retrieve all `InbDeliveryItem` entities.
   */
  getAll(): GetAllRequestBuilder<InbDeliveryItem<T>, T> {
    return new GetAllRequestBuilder<InbDeliveryItem<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for updating an entity of type `InbDeliveryItem`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InbDeliveryItem`.
   */
  update(
    entity: InbDeliveryItem<T>
  ): UpdateRequestBuilder<InbDeliveryItem<T>, T> {
    return new UpdateRequestBuilder<InbDeliveryItem<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InbDeliveryItem`.
   * @param deliveryDocument Key property. See {@link InbDeliveryItem.deliveryDocument}.
   * @param deliveryDocumentItem Key property. See {@link InbDeliveryItem.deliveryDocumentItem}.
   * @returns A request builder for creating requests that delete an entity of type `InbDeliveryItem`.
   */
  delete(
    deliveryDocument: string,
    deliveryDocumentItem: string
  ): DeleteRequestBuilder<InbDeliveryItem<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InbDeliveryItem`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InbDeliveryItem` by taking the entity as a parameter.
   */
  delete(
    entity: InbDeliveryItem<T>
  ): DeleteRequestBuilder<InbDeliveryItem<T>, T>;
  delete(
    deliveryDocumentOrEntity: any,
    deliveryDocumentItem?: string
  ): DeleteRequestBuilder<InbDeliveryItem<T>, T> {
    return new DeleteRequestBuilder<InbDeliveryItem<T>, T>(
      this.entityApi,
      deliveryDocumentOrEntity instanceof InbDeliveryItem
        ? deliveryDocumentOrEntity
        : {
            DeliveryDocument: deliveryDocumentOrEntity!,
            DeliveryDocumentItem: deliveryDocumentItem!
          }
    );
  }
}
