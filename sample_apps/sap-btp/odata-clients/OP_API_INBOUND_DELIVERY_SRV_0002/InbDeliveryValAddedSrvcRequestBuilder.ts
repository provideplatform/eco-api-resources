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
import { InbDeliveryValAddedSrvc } from './InbDeliveryValAddedSrvc';

/**
 * Request builder class for operations supported on the {@link InbDeliveryValAddedSrvc} entity.
 */
export class InbDeliveryValAddedSrvcRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InbDeliveryValAddedSrvc<T>, T> {
  /**
   * Returns a request builder for retrieving one `InbDeliveryValAddedSrvc` entity based on its keys.
   * @param valAddedSrvcItemGroup Key property. See {@link InbDeliveryValAddedSrvc.valAddedSrvcItemGroup}.
   * @param valAddedSrvcItemNumber Key property. See {@link InbDeliveryValAddedSrvc.valAddedSrvcItemNumber}.
   * @param valAddedSrvcTransactionNumber Key property. See {@link InbDeliveryValAddedSrvc.valAddedSrvcTransactionNumber}.
   * @param valueAddedServiceType Key property. See {@link InbDeliveryValAddedSrvc.valueAddedServiceType}.
   * @param valueAddedSubServiceType Key property. See {@link InbDeliveryValAddedSrvc.valueAddedSubServiceType}.
   * @returns A request builder for creating requests to retrieve one `InbDeliveryValAddedSrvc` entity based on its keys.
   */
  getByKey(
    valAddedSrvcItemGroup: DeserializedType<T, 'Edm.String'>,
    valAddedSrvcItemNumber: DeserializedType<T, 'Edm.String'>,
    valAddedSrvcTransactionNumber: DeserializedType<T, 'Edm.String'>,
    valueAddedServiceType: DeserializedType<T, 'Edm.String'>,
    valueAddedSubServiceType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InbDeliveryValAddedSrvc<T>, T> {
    return new GetByKeyRequestBuilder<InbDeliveryValAddedSrvc<T>, T>(
      this.entityApi,
      {
        ValAddedSrvcItemGroup: valAddedSrvcItemGroup,
        ValAddedSrvcItemNumber: valAddedSrvcItemNumber,
        ValAddedSrvcTransactionNumber: valAddedSrvcTransactionNumber,
        ValueAddedServiceType: valueAddedServiceType,
        ValueAddedSubServiceType: valueAddedSubServiceType
      }
    );
  }

  /**
   * Returns a request builder for querying all `InbDeliveryValAddedSrvc` entities.
   * @returns A request builder for creating requests to retrieve all `InbDeliveryValAddedSrvc` entities.
   */
  getAll(): GetAllRequestBuilder<InbDeliveryValAddedSrvc<T>, T> {
    return new GetAllRequestBuilder<InbDeliveryValAddedSrvc<T>, T>(
      this.entityApi
    );
  }
}
