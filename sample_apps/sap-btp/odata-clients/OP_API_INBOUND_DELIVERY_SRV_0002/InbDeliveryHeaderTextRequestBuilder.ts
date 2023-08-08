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
import { InbDeliveryHeaderText } from './InbDeliveryHeaderText';

/**
 * Request builder class for operations supported on the {@link InbDeliveryHeaderText} entity.
 */
export class InbDeliveryHeaderTextRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InbDeliveryHeaderText<T>, T> {
  /**
   * Returns a request builder for retrieving one `InbDeliveryHeaderText` entity based on its keys.
   * @param deliveryDocument Key property. See {@link InbDeliveryHeaderText.deliveryDocument}.
   * @param textElement Key property. See {@link InbDeliveryHeaderText.textElement}.
   * @param language Key property. See {@link InbDeliveryHeaderText.language}.
   * @returns A request builder for creating requests to retrieve one `InbDeliveryHeaderText` entity based on its keys.
   */
  getByKey(
    deliveryDocument: DeserializedType<T, 'Edm.String'>,
    textElement: DeserializedType<T, 'Edm.String'>,
    language: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InbDeliveryHeaderText<T>, T> {
    return new GetByKeyRequestBuilder<InbDeliveryHeaderText<T>, T>(
      this.entityApi,
      {
        DeliveryDocument: deliveryDocument,
        TextElement: textElement,
        Language: language
      }
    );
  }

  /**
   * Returns a request builder for querying all `InbDeliveryHeaderText` entities.
   * @returns A request builder for creating requests to retrieve all `InbDeliveryHeaderText` entities.
   */
  getAll(): GetAllRequestBuilder<InbDeliveryHeaderText<T>, T> {
    return new GetAllRequestBuilder<InbDeliveryHeaderText<T>, T>(
      this.entityApi
    );
  }
}
