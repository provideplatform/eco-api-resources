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
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { InbDeliveryAddress } from './InbDeliveryAddress';
/**
 * Request builder class for operations supported on the {@link InbDeliveryAddress} entity.
 */
export declare class InbDeliveryAddressRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InbDeliveryAddress<T>, T> {
  /**
   * Returns a request builder for retrieving one `InbDeliveryAddress` entity based on its keys.
   * @param addressId Key property. See {@link InbDeliveryAddress.addressId}.
   * @returns A request builder for creating requests to retrieve one `InbDeliveryAddress` entity based on its keys.
   */
  getByKey(
    addressId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InbDeliveryAddress<T>, T>;
  /**
   * Returns a request builder for querying all `InbDeliveryAddress` entities.
   * @returns A request builder for creating requests to retrieve all `InbDeliveryAddress` entities.
   */
  getAll(): GetAllRequestBuilder<InbDeliveryAddress<T>, T>;
}
