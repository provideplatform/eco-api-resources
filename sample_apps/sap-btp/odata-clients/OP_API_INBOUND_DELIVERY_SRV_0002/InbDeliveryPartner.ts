/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { InbDeliveryPartnerApi } from './InbDeliveryPartnerApi';
import {
  InbDeliveryAddress,
  InbDeliveryAddressType
} from './InbDeliveryAddress';

/**
 * This class represents the entity "A_InbDeliveryPartner" of service "API_INBOUND_DELIVERY_SRV".
 */
export class InbDeliveryPartner<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InbDeliveryPartnerType<T>
{
  /**
   * Technical entity name for InbDeliveryPartner.
   */
  static _entityName = 'A_InbDeliveryPartner';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath =
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002';
  /**
   * All key fields of the InbDeliveryPartner entity
   */
  static _keys = ['PartnerFunction', 'SDDocument'];
  /**
   * Address.
   * Maximum length: 10.
   */
  addressId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Contact Person.
   * Maximum length: 10.
   */
  contactPerson!: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer.
   * Maximum length: 10.
   */
  customer!: DeserializedType<T, 'Edm.String'>;
  /**
   * Partner Functn.
   * Maximum length: 2.
   */
  partnerFunction!: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel No.
   * Maximum length: 8.
   */
  personnel!: DeserializedType<T, 'Edm.String'>;
  /**
   * SD Document.
   * Maximum length: 10.
   */
  sdDocument!: DeserializedType<T, 'Edm.String'>;
  /**
   * Item.
   * Maximum length: 6.
   */
  sdDocumentItem!: DeserializedType<T, 'Edm.String'>;
  /**
   * Supplier.
   * Maximum length: 10.
   */
  supplier!: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link InbDeliveryAddress} entity.
   */
  toAddress?: InbDeliveryAddress<T> | null;

  constructor(readonly _entityApi: InbDeliveryPartnerApi<T>) {
    super(_entityApi);
  }
}

export interface InbDeliveryPartnerType<
  T extends DeSerializers = DefaultDeSerializers
> {
  addressId: DeserializedType<T, 'Edm.String'>;
  contactPerson: DeserializedType<T, 'Edm.String'>;
  customer: DeserializedType<T, 'Edm.String'>;
  partnerFunction: DeserializedType<T, 'Edm.String'>;
  personnel: DeserializedType<T, 'Edm.String'>;
  sdDocument: DeserializedType<T, 'Edm.String'>;
  sdDocumentItem: DeserializedType<T, 'Edm.String'>;
  supplier: DeserializedType<T, 'Edm.String'>;
  toAddress?: InbDeliveryAddressType<T> | null;
}
