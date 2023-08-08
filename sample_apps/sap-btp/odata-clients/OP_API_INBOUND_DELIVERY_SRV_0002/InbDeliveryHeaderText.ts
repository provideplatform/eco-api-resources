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
import type { InbDeliveryHeaderTextApi } from './InbDeliveryHeaderTextApi';

/**
 * This class represents the entity "A_InbDeliveryHeaderText" of service "API_INBOUND_DELIVERY_SRV".
 */
export class InbDeliveryHeaderText<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InbDeliveryHeaderTextType<T>
{
  /**
   * Technical entity name for InbDeliveryHeaderText.
   */
  static _entityName = 'A_InbDeliveryHeaderText';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath =
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002';
  /**
   * All key fields of the InbDeliveryHeaderText entity
   */
  static _keys = ['DeliveryDocument', 'TextElement', 'Language'];
  /**
   * Delivery.
   * Maximum length: 10.
   */
  deliveryDocument!: DeserializedType<T, 'Edm.String'>;
  /**
   * Text ID.
   * Maximum length: 4.
   */
  textElement!: DeserializedType<T, 'Edm.String'>;
  /**
   * Language.
   * Maximum length: 2.
   */
  language!: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * Maximum length: 30.
   */
  textElementDescription!: DeserializedType<T, 'Edm.String'>;
  /**
   * Text Element Text.
   */
  textElementText!: DeserializedType<T, 'Edm.String'>;
  /**
   * Truth Value.
   */
  deliveryLongTextIsFormatted!: DeserializedType<T, 'Edm.Boolean'>;

  constructor(readonly _entityApi: InbDeliveryHeaderTextApi<T>) {
    super(_entityApi);
  }
}

export interface InbDeliveryHeaderTextType<
  T extends DeSerializers = DefaultDeSerializers
> {
  deliveryDocument: DeserializedType<T, 'Edm.String'>;
  textElement: DeserializedType<T, 'Edm.String'>;
  language: DeserializedType<T, 'Edm.String'>;
  textElementDescription: DeserializedType<T, 'Edm.String'>;
  textElementText: DeserializedType<T, 'Edm.String'>;
  deliveryLongTextIsFormatted: DeserializedType<T, 'Edm.Boolean'>;
}
