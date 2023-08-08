/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InbDeliveryValAddedSrvcApi } from './InbDeliveryValAddedSrvcApi';
import { MaintenanceItemObjListApi } from './MaintenanceItemObjListApi';
import { InbDeliveryDocFlowApi } from './InbDeliveryDocFlowApi';
import { InbDeliveryHeaderApi } from './InbDeliveryHeaderApi';
import { InbDeliveryItemApi } from './InbDeliveryItemApi';
import { InbDeliveryPartnerApi } from './InbDeliveryPartnerApi';
import { InbDeliverySerialNmbrApi } from './InbDeliverySerialNmbrApi';
import { InbDeliveryAddressApi } from './InbDeliveryAddressApi';
import { InbDeliveryHeaderTextApi } from './InbDeliveryHeaderTextApi';
import { InbDeliveryItemTextApi } from './InbDeliveryItemTextApi';
import {
  ConfirmPutawayAllItemsParameters,
  ConfirmPutawayOneItemParameters,
  PostGoodsReceiptParameters,
  PutawayAllItemsParameters,
  PutawayOneItemParameters,
  ReverseGoodsReceiptParameters,
  AddSerialNumberToDeliveryItemParameters,
  DeleteAllSerialNumbersFromDeliveryItemParameters,
  DeleteSerialNumberFromDeliveryItemParameters,
  SetPutawayQuantityWithBaseQuantityParameters,
  PutawayOneItemWithBaseQuantityParameters,
  PutawayOneItemWithSalesQuantityParameters
} from './operations';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  DeSerializers,
  DefaultDeSerializers,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';
export declare function opApiInboundDeliverySrv0002<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateTimeT = Moment,
  TimeT = Time
>(
  deSerializers?: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateTimeT,
      TimeT
    >
  >
): OpApiInboundDeliverySrv0002<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateTimeT,
    TimeT
  >
>;
declare class OpApiInboundDeliverySrv0002<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis;
  private deSerializers;
  constructor(deSerializers: DeSerializersT);
  private initApi;
  get inbDeliveryValAddedSrvcApi(): InbDeliveryValAddedSrvcApi<DeSerializersT>;
  get maintenanceItemObjListApi(): MaintenanceItemObjListApi<DeSerializersT>;
  get inbDeliveryDocFlowApi(): InbDeliveryDocFlowApi<DeSerializersT>;
  get inbDeliveryHeaderApi(): InbDeliveryHeaderApi<DeSerializersT>;
  get inbDeliveryItemApi(): InbDeliveryItemApi<DeSerializersT>;
  get inbDeliveryPartnerApi(): InbDeliveryPartnerApi<DeSerializersT>;
  get inbDeliverySerialNmbrApi(): InbDeliverySerialNmbrApi<DeSerializersT>;
  get inbDeliveryAddressApi(): InbDeliveryAddressApi<DeSerializersT>;
  get inbDeliveryHeaderTextApi(): InbDeliveryHeaderTextApi<DeSerializersT>;
  get inbDeliveryItemTextApi(): InbDeliveryItemTextApi<DeSerializersT>;
  get operations(): {
    confirmPutawayAllItems: (
      parameter: ConfirmPutawayAllItemsParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').OperationRequestBuilder<
      DeSerializersT,
      ConfirmPutawayAllItemsParameters<DeSerializersT>,
      import('./PutawayReport').PutawayReport<DefaultDeSerializers>[]
    >;
    confirmPutawayOneItem: (
      parameter: ConfirmPutawayOneItemParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').OperationRequestBuilder<
      DeSerializersT,
      ConfirmPutawayOneItemParameters<DeSerializersT>,
      import('./PutawayReport').PutawayReport<DefaultDeSerializers>[]
    >;
    postGoodsReceipt: (
      parameter: PostGoodsReceiptParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').OperationRequestBuilder<
      DeSerializersT,
      PostGoodsReceiptParameters<DeSerializersT>,
      import('./PutawayReport').PutawayReport<DefaultDeSerializers>[]
    >;
    putawayAllItems: (
      parameter: PutawayAllItemsParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').OperationRequestBuilder<
      DeSerializersT,
      PutawayAllItemsParameters<DeSerializersT>,
      import('./PutawayReport').PutawayReport<DefaultDeSerializers>[]
    >;
    putawayOneItem: (
      parameter: PutawayOneItemParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').OperationRequestBuilder<
      DeSerializersT,
      PutawayOneItemParameters<DeSerializersT>,
      import('./PutawayReport').PutawayReport<DefaultDeSerializers>[]
    >;
    reverseGoodsReceipt: (
      parameter: ReverseGoodsReceiptParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').OperationRequestBuilder<
      DeSerializersT,
      ReverseGoodsReceiptParameters<DeSerializersT>,
      import('./DeliveryMessage').DeliveryMessage<DefaultDeSerializers>[]
    >;
    addSerialNumberToDeliveryItem: (
      parameter: AddSerialNumberToDeliveryItemParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').OperationRequestBuilder<
      DeSerializersT,
      AddSerialNumberToDeliveryItemParameters<DeSerializersT>,
      import('./PutawayReport').PutawayReport<DefaultDeSerializers>[]
    >;
    deleteAllSerialNumbersFromDeliveryItem: (
      parameter: DeleteAllSerialNumbersFromDeliveryItemParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').OperationRequestBuilder<
      DeSerializersT,
      DeleteAllSerialNumbersFromDeliveryItemParameters<DeSerializersT>,
      import('./PutawayReport').PutawayReport<DefaultDeSerializers>[]
    >;
    deleteSerialNumberFromDeliveryItem: (
      parameter: DeleteSerialNumberFromDeliveryItemParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').OperationRequestBuilder<
      DeSerializersT,
      DeleteSerialNumberFromDeliveryItemParameters<DeSerializersT>,
      import('./PutawayReport').PutawayReport<DefaultDeSerializers>[]
    >;
    setPutawayQuantityWithBaseQuantity: (
      parameter: SetPutawayQuantityWithBaseQuantityParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').OperationRequestBuilder<
      DeSerializersT,
      SetPutawayQuantityWithBaseQuantityParameters<DeSerializersT>,
      import('./PutawayReport').PutawayReport<DefaultDeSerializers>[]
    >;
    putawayOneItemWithBaseQuantity: (
      parameter: PutawayOneItemWithBaseQuantityParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').OperationRequestBuilder<
      DeSerializersT,
      PutawayOneItemWithBaseQuantityParameters<DeSerializersT>,
      import('./PutawayReport').PutawayReport<DefaultDeSerializers>[]
    >;
    putawayOneItemWithSalesQuantity: (
      parameter: PutawayOneItemWithSalesQuantityParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').OperationRequestBuilder<
      DeSerializersT,
      PutawayOneItemWithSalesQuantityParameters<DeSerializersT>,
      import('./PutawayReport').PutawayReport<DefaultDeSerializers>[]
    >;
  };
  get batch(): typeof batch;
  get changeset(): typeof changeset;
}
export {};
