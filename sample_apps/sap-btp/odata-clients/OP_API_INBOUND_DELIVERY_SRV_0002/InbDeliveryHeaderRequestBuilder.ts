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
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { InbDeliveryHeader } from './InbDeliveryHeader';

/**
 * Request builder class for operations supported on the {@link InbDeliveryHeader} entity.
 */
export class InbDeliveryHeaderRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InbDeliveryHeader<T>, T> {
  /**
   * Returns a request builder for retrieving one `InbDeliveryHeader` entity based on its keys.
   * @param deliveryDocument Key property. See {@link InbDeliveryHeader.deliveryDocument}.
   * @returns A request builder for creating requests to retrieve one `InbDeliveryHeader` entity based on its keys.
   */
  getByKey(
    deliveryDocument: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InbDeliveryHeader<T>, T> {
    return new GetByKeyRequestBuilder<InbDeliveryHeader<T>, T>(this.entityApi, {
      DeliveryDocument: deliveryDocument
    });
  }

  /**
   * Returns a request builder for querying all `InbDeliveryHeader` entities.
   * @returns A request builder for creating requests to retrieve all `InbDeliveryHeader` entities.
   */
  getAll(): GetAllRequestBuilder<InbDeliveryHeader<T>, T> {
    return new GetAllRequestBuilder<InbDeliveryHeader<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InbDeliveryHeader` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InbDeliveryHeader`.
   */
  create(
    entity: InbDeliveryHeader<T>
  ): CreateRequestBuilder<InbDeliveryHeader<T>, T> {
    return new CreateRequestBuilder<InbDeliveryHeader<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InbDeliveryHeader`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InbDeliveryHeader`.
   */
  update(
    entity: InbDeliveryHeader<T>
  ): UpdateRequestBuilder<InbDeliveryHeader<T>, T> {
    return new UpdateRequestBuilder<InbDeliveryHeader<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InbDeliveryHeader`.
   * @param deliveryDocument Key property. See {@link InbDeliveryHeader.deliveryDocument}.
   * @returns A request builder for creating requests that delete an entity of type `InbDeliveryHeader`.
   */
  delete(
    deliveryDocument: string
  ): DeleteRequestBuilder<InbDeliveryHeader<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InbDeliveryHeader`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InbDeliveryHeader` by taking the entity as a parameter.
   */
  delete(
    entity: InbDeliveryHeader<T>
  ): DeleteRequestBuilder<InbDeliveryHeader<T>, T>;
  delete(
    deliveryDocumentOrEntity: any
  ): DeleteRequestBuilder<InbDeliveryHeader<T>, T> {
    return new DeleteRequestBuilder<InbDeliveryHeader<T>, T>(
      this.entityApi,
      deliveryDocumentOrEntity instanceof InbDeliveryHeader
        ? deliveryDocumentOrEntity
        : { DeliveryDocument: deliveryDocumentOrEntity! }
    );
  }
}
