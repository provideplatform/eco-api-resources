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
import type { InbDeliverySerialNmbrApi } from './InbDeliverySerialNmbrApi';
import {
  MaintenanceItemObjList,
  MaintenanceItemObjListType
} from './MaintenanceItemObjList';
/**
 * This class represents the entity "A_InbDeliverySerialNmbr" of service "API_INBOUND_DELIVERY_SRV".
 */
export declare class InbDeliverySerialNmbr<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InbDeliverySerialNmbrType<T>
{
  readonly _entityApi: InbDeliverySerialNmbrApi<T>;
  /**
   * Technical entity name for InbDeliverySerialNmbr.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the InbDeliverySerialNmbr entity
   */
  static _keys: string[];
  /**
   * Date.
   */
  deliveryDate: DeserializedType<T, 'Edm.DateTime'>;
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
   * Object list.
   */
  maintenanceItemObjectList: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Document Cat.
   * Maximum length: 4.
   */
  sdDocumentCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link MaintenanceItemObjList} entity.
   */
  toMaintenanceItemObject: MaintenanceItemObjList<T>[];
  constructor(_entityApi: InbDeliverySerialNmbrApi<T>);
}
export interface InbDeliverySerialNmbrType<
  T extends DeSerializers = DefaultDeSerializers
> {
  deliveryDate: DeserializedType<T, 'Edm.DateTime'>;
  deliveryDocument: DeserializedType<T, 'Edm.String'>;
  deliveryDocumentItem: DeserializedType<T, 'Edm.String'>;
  maintenanceItemObjectList: DeserializedType<T, 'Edm.Int64'>;
  sdDocumentCategory: DeserializedType<T, 'Edm.String'>;
  toMaintenanceItemObject: MaintenanceItemObjListType<T>[];
}
