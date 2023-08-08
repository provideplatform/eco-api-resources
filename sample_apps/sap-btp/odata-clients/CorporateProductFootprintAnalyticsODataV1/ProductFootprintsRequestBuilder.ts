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
} from '@sap-cloud-sdk/odata-v4';
import { ProductFootprints } from './ProductFootprints';

/**
 * Request builder class for operations supported on the {@link ProductFootprints} entity.
 */
export class ProductFootprintsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductFootprints<T>, T> {
  /**
   * Returns a request builder for retrieving one `ProductFootprints` entity based on its keys.
   * @param id Key property. See {@link ProductFootprints.id}.
   * @returns A request builder for creating requests to retrieve one `ProductFootprints` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<ProductFootprints<T>, T> {
    return new GetByKeyRequestBuilder<ProductFootprints<T>, T>(this.entityApi, {
      Id: id
    });
  }

  /**
   * Returns a request builder for querying all `ProductFootprints` entities.
   * @returns A request builder for creating requests to retrieve all `ProductFootprints` entities.
   */
  getAll(): GetAllRequestBuilder<ProductFootprints<T>, T> {
    return new GetAllRequestBuilder<ProductFootprints<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductFootprints` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductFootprints`.
   */
  create(
    entity: ProductFootprints<T>
  ): CreateRequestBuilder<ProductFootprints<T>, T> {
    return new CreateRequestBuilder<ProductFootprints<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductFootprints`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductFootprints`.
   */
  update(
    entity: ProductFootprints<T>
  ): UpdateRequestBuilder<ProductFootprints<T>, T> {
    return new UpdateRequestBuilder<ProductFootprints<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductFootprints`.
   * @param id Key property. See {@link ProductFootprints.id}.
   * @returns A request builder for creating requests that delete an entity of type `ProductFootprints`.
   */
  delete(id: string): DeleteRequestBuilder<ProductFootprints<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductFootprints`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductFootprints` by taking the entity as a parameter.
   */
  delete(
    entity: ProductFootprints<T>
  ): DeleteRequestBuilder<ProductFootprints<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<ProductFootprints<T>, T> {
    return new DeleteRequestBuilder<ProductFootprints<T>, T>(
      this.entityApi,
      idOrEntity instanceof ProductFootprints ? idOrEntity : { Id: idOrEntity! }
    );
  }
}
