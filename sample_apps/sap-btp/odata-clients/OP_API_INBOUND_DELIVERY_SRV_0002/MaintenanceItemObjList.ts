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
import type { MaintenanceItemObjListApi } from './MaintenanceItemObjListApi';

/**
 * This class represents the entity "A_MaintenanceItemObjList" of service "API_INBOUND_DELIVERY_SRV".
 */
export class MaintenanceItemObjList<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintenanceItemObjListType<T>
{
  /**
   * Technical entity name for MaintenanceItemObjList.
   */
  static _entityName = 'A_MaintenanceItemObjList';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath =
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002';
  /**
   * All key fields of the MaintenanceItemObjList entity
   */
  static _keys = ['MaintenanceItemObject', 'MaintenanceItemObjectList'];
  /**
   * Assembly.
   * Maximum length: 40.
   */
  assembly!: DeserializedType<T, 'Edm.String'>;
  /**
   * Equipment.
   * Maximum length: 18.
   */
  equipment!: DeserializedType<T, 'Edm.String'>;
  /**
   * Functional loc.
   * Maximum length: 40.
   */
  functionalLocation!: DeserializedType<T, 'Edm.String'>;
  /**
   * Object counters.
   */
  maintenanceItemObject!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Object list.
   */
  maintenanceItemObjectList!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Notification.
   * Maximum length: 12.
   */
  maintenanceNotification!: DeserializedType<T, 'Edm.String'>;
  /**
   * Loc/AccAssmt.
   * Maximum length: 12.
   */
  maintObjectLocAcctAssgmtNmbr!: DeserializedType<T, 'Edm.String'>;
  /**
   * Material.
   * Maximum length: 40.
   */
  material!: DeserializedType<T, 'Edm.String'>;
  /**
   * Serial Number.
   * Maximum length: 18.
   */
  serialNumber!: DeserializedType<T, 'Edm.String'>;

  constructor(readonly _entityApi: MaintenanceItemObjListApi<T>) {
    super(_entityApi);
  }
}

export interface MaintenanceItemObjListType<
  T extends DeSerializers = DefaultDeSerializers
> {
  assembly: DeserializedType<T, 'Edm.String'>;
  equipment: DeserializedType<T, 'Edm.String'>;
  functionalLocation: DeserializedType<T, 'Edm.String'>;
  maintenanceItemObject: DeserializedType<T, 'Edm.Int32'>;
  maintenanceItemObjectList: DeserializedType<T, 'Edm.Int64'>;
  maintenanceNotification: DeserializedType<T, 'Edm.String'>;
  maintObjectLocAcctAssgmtNmbr: DeserializedType<T, 'Edm.String'>;
  material: DeserializedType<T, 'Edm.String'>;
  serialNumber: DeserializedType<T, 'Edm.String'>;
}
