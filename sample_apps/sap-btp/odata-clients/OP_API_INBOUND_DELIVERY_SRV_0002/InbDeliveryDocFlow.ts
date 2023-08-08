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
import type { InbDeliveryDocFlowApi } from './InbDeliveryDocFlowApi';

/**
 * This class represents the entity "A_InbDeliveryDocFlow" of service "API_INBOUND_DELIVERY_SRV".
 */
export class InbDeliveryDocFlow<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InbDeliveryDocFlowType<T>
{
  /**
   * Technical entity name for InbDeliveryDocFlow.
   */
  static _entityName = 'A_InbDeliveryDocFlow';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath =
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002';
  /**
   * All key fields of the InbDeliveryDocFlow entity
   */
  static _keys = [
    'PrecedingDocument',
    'PrecedingDocumentItem',
    'SubsequentDocumentCategory'
  ];
  /**
   * Delivery Version.
   * Maximum length: 4.
   * @nullable
   */
  deliveryVersion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preceding Doc.
   * Maximum length: 10.
   */
  precedingDocument!: DeserializedType<T, 'Edm.String'>;
  /**
   * Prec.Doc.Categ.
   * Maximum length: 4.
   * @nullable
   */
  precedingDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preceding Item.
   * Maximum length: 6.
   */
  precedingDocumentItem!: DeserializedType<T, 'Edm.String'>;
  /**
   * Quantity.
   * @nullable
   */
  quantityInBaseUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Pos./Negative.
   * Maximum length: 1.
   * @nullable
   */
  sdFulfillmentCalculationRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Follow-on Doc.
   * Maximum length: 10.
   * @nullable
   */
  subsequentDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subs.Doc.Categ.
   * Maximum length: 4.
   */
  subsequentDocumentCategory!: DeserializedType<T, 'Edm.String'>;
  /**
   * Subsequent Item.
   * Maximum length: 6.
   * @nullable
   */
  subsequentDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmation ID.
   * @nullable
   */
  transferOrderInWrhsMgmtIsConfd?: DeserializedType<T, 'Edm.Boolean'> | null;

  constructor(readonly _entityApi: InbDeliveryDocFlowApi<T>) {
    super(_entityApi);
  }
}

export interface InbDeliveryDocFlowType<
  T extends DeSerializers = DefaultDeSerializers
> {
  deliveryVersion?: DeserializedType<T, 'Edm.String'> | null;
  precedingDocument: DeserializedType<T, 'Edm.String'>;
  precedingDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  precedingDocumentItem: DeserializedType<T, 'Edm.String'>;
  quantityInBaseUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  sdFulfillmentCalculationRule?: DeserializedType<T, 'Edm.String'> | null;
  subsequentDocument?: DeserializedType<T, 'Edm.String'> | null;
  subsequentDocumentCategory: DeserializedType<T, 'Edm.String'>;
  subsequentDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  transferOrderInWrhsMgmtIsConfd?: DeserializedType<T, 'Edm.Boolean'> | null;
}
