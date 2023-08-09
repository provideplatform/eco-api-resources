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
import type { InbDeliveryItemTextApi } from './InbDeliveryItemTextApi';
/**
 * This class represents the entity "A_InbDeliveryItemText" of service "API_INBOUND_DELIVERY_SRV".
 */
export declare class InbDeliveryItemText<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InbDeliveryItemTextType<T>
{
  readonly _entityApi: InbDeliveryItemTextApi<T>;
  /**
   * Technical entity name for InbDeliveryItemText.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the InbDeliveryItemText entity
   */
  static _keys: string[];
  /**
   * Delivery.
   * Maximum length: 10.
   */
  deliveryDocument: DeserializedType<T, 'Edm.String'>;
  /**
   * Item.
   * Maximum length: 6.
   */
  deliveryDocumentItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Text ID.
   * Maximum length: 4.
   */
  textElement: DeserializedType<T, 'Edm.String'>;
  /**
   * Language.
   * Maximum length: 2.
   */
  language: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * Maximum length: 30.
   */
  textElementDescription: DeserializedType<T, 'Edm.String'>;
  /**
   * Text Element Text.
   */
  textElementText: DeserializedType<T, 'Edm.String'>;
  /**
   * Truth Value.
   */
  deliveryLongTextIsFormatted: DeserializedType<T, 'Edm.Boolean'>;
  constructor(_entityApi: InbDeliveryItemTextApi<T>);
}
export interface InbDeliveryItemTextType<
  T extends DeSerializers = DefaultDeSerializers
> {
  deliveryDocument: DeserializedType<T, 'Edm.String'>;
  deliveryDocumentItem: DeserializedType<T, 'Edm.String'>;
  textElement: DeserializedType<T, 'Edm.String'>;
  language: DeserializedType<T, 'Edm.String'>;
  textElementDescription: DeserializedType<T, 'Edm.String'>;
  textElementText: DeserializedType<T, 'Edm.String'>;
  deliveryLongTextIsFormatted: DeserializedType<T, 'Edm.Boolean'>;
}
