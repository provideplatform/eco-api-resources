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
import type { InbDeliveryValAddedSrvcApi } from './InbDeliveryValAddedSrvcApi';
/**
 * This class represents the entity "A_InbDeliveryValAddedSrvc" of service "API_INBOUND_DELIVERY_SRV".
 */
export declare class InbDeliveryValAddedSrvc<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InbDeliveryValAddedSrvcType<T>
{
  readonly _entityApi: InbDeliveryValAddedSrvcApi<T>;
  /**
   * Technical entity name for InbDeliveryValAddedSrvc.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the InbDeliveryValAddedSrvc entity
   */
  static _keys: string[];
  /**
   * Req Relevance.
   */
  valAddedSrvcHasToBeOrdered: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Increment.
   * Maximum length: 4.
   */
  valAddedSrvcIncrement: DeserializedType<T, 'Edm.String'>;
  /**
   * Manual Entry Ind.
   * Maximum length: 1.
   */
  valAddedSrvcIsCreatedManually: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Group.
   * Maximum length: 5.
   */
  valAddedSrvcItemGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   * Maximum length: 5.
   */
  valAddedSrvcItemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * VAS Item Number.
   * Maximum length: 5.
   */
  valAddedSrvcItemNumberInMm: DeserializedType<T, 'Edm.String'>;
  /**
   * Reference item.
   * Maximum length: 5.
   */
  valAddedSrvcMmRefDocItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Reference Doc.
   * Maximum length: 10.
   */
  valAddedSrvcMmRefDocNmbr: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Number.
   * Maximum length: 10.
   */
  valAddedSrvcTransactionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * VAS Charge Code.
   * Maximum length: 3.
   */
  valueAddedServiceChargeCode: DeserializedType<T, 'Edm.String'>;
  /**
   * VAS Del. Indicator.
   * Maximum length: 1.
   */
  valueAddedServiceDeletionCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Material Number.
   * Maximum length: 40.
   */
  valueAddedServiceProduct: DeserializedType<T, 'Edm.String'>;
  /**
   * Field1.
   * Maximum length: 20.
   */
  valueAddedServiceText1: DeserializedType<T, 'Edm.String'>;
  /**
   * Field2.
   * Maximum length: 20.
   */
  valueAddedServiceText2: DeserializedType<T, 'Edm.String'>;
  /**
   * Field3.
   * Maximum length: 20.
   */
  valueaddedservicetext3: DeserializedType<T, 'Edm.String'>;
  /**
   * VALUEADDEDSERVICELONGTEXT.
   * Maximum length: 132.
   */
  valueaddedservicelongtext: DeserializedType<T, 'Edm.String'>;
  /**
   * VAS Service Types.
   * Maximum length: 2.
   */
  valueAddedServiceType: DeserializedType<T, 'Edm.String'>;
  /**
   * VAS Sub Services.
   * Maximum length: 5.
   */
  valueAddedSubServiceType: DeserializedType<T, 'Edm.String'>;
  constructor(_entityApi: InbDeliveryValAddedSrvcApi<T>);
}
export interface InbDeliveryValAddedSrvcType<
  T extends DeSerializers = DefaultDeSerializers
> {
  valAddedSrvcHasToBeOrdered: DeserializedType<T, 'Edm.Boolean'>;
  valAddedSrvcIncrement: DeserializedType<T, 'Edm.String'>;
  valAddedSrvcIsCreatedManually: DeserializedType<T, 'Edm.String'>;
  valAddedSrvcItemGroup: DeserializedType<T, 'Edm.String'>;
  valAddedSrvcItemNumber: DeserializedType<T, 'Edm.String'>;
  valAddedSrvcItemNumberInMm: DeserializedType<T, 'Edm.String'>;
  valAddedSrvcMmRefDocItem: DeserializedType<T, 'Edm.String'>;
  valAddedSrvcMmRefDocNmbr: DeserializedType<T, 'Edm.String'>;
  valAddedSrvcTransactionNumber: DeserializedType<T, 'Edm.String'>;
  valueAddedServiceChargeCode: DeserializedType<T, 'Edm.String'>;
  valueAddedServiceDeletionCode: DeserializedType<T, 'Edm.String'>;
  valueAddedServiceProduct: DeserializedType<T, 'Edm.String'>;
  valueAddedServiceText1: DeserializedType<T, 'Edm.String'>;
  valueAddedServiceText2: DeserializedType<T, 'Edm.String'>;
  valueaddedservicetext3: DeserializedType<T, 'Edm.String'>;
  valueaddedservicelongtext: DeserializedType<T, 'Edm.String'>;
  valueAddedServiceType: DeserializedType<T, 'Edm.String'>;
  valueAddedSubServiceType: DeserializedType<T, 'Edm.String'>;
}
