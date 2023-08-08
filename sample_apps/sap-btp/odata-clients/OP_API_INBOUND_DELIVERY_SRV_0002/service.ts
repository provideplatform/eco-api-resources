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
  confirmPutawayAllItems,
  confirmPutawayOneItem,
  postGoodsReceipt,
  putawayAllItems,
  putawayOneItem,
  reverseGoodsReceipt,
  addSerialNumberToDeliveryItem,
  deleteAllSerialNumbersFromDeliveryItem,
  deleteSerialNumberFromDeliveryItem,
  setPutawayQuantityWithBaseQuantity,
  putawayOneItemWithBaseQuantity,
  putawayOneItemWithSalesQuantity,
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
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';

export function opApiInboundDeliverySrv0002<
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
  deSerializers: Partial<
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
  > = defaultDeSerializers as any
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
> {
  return new OpApiInboundDeliverySrv0002(
    mergeDefaultDeSerializersWith(deSerializers)
  );
}
class OpApiInboundDeliverySrv0002<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, entityApi: any): any {
    if (!this.apis[key]) {
      this.apis[key] = entityApi._privateFactory(this.deSerializers);
    }
    return this.apis[key];
  }

  get inbDeliveryValAddedSrvcApi(): InbDeliveryValAddedSrvcApi<DeSerializersT> {
    return this.initApi(
      'inbDeliveryValAddedSrvcApi',
      InbDeliveryValAddedSrvcApi
    );
  }

  get maintenanceItemObjListApi(): MaintenanceItemObjListApi<DeSerializersT> {
    return this.initApi('maintenanceItemObjListApi', MaintenanceItemObjListApi);
  }

  get inbDeliveryDocFlowApi(): InbDeliveryDocFlowApi<DeSerializersT> {
    return this.initApi('inbDeliveryDocFlowApi', InbDeliveryDocFlowApi);
  }

  get inbDeliveryHeaderApi(): InbDeliveryHeaderApi<DeSerializersT> {
    const api = this.initApi('inbDeliveryHeaderApi', InbDeliveryHeaderApi);
    const linkedApis = [
      this.initApi('inbDeliveryHeaderTextApi', InbDeliveryHeaderTextApi),
      this.initApi('inbDeliveryItemApi', InbDeliveryItemApi),
      this.initApi('inbDeliveryPartnerApi', InbDeliveryPartnerApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get inbDeliveryItemApi(): InbDeliveryItemApi<DeSerializersT> {
    const api = this.initApi('inbDeliveryItemApi', InbDeliveryItemApi);
    const linkedApis = [
      this.initApi('inbDeliveryItemTextApi', InbDeliveryItemTextApi),
      this.initApi('inbDeliveryDocFlowApi', InbDeliveryDocFlowApi),
      this.initApi('inbDeliverySerialNmbrApi', InbDeliverySerialNmbrApi),
      this.initApi('inbDeliveryValAddedSrvcApi', InbDeliveryValAddedSrvcApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get inbDeliveryPartnerApi(): InbDeliveryPartnerApi<DeSerializersT> {
    const api = this.initApi('inbDeliveryPartnerApi', InbDeliveryPartnerApi);
    const linkedApis = [
      this.initApi('inbDeliveryAddressApi', InbDeliveryAddressApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get inbDeliverySerialNmbrApi(): InbDeliverySerialNmbrApi<DeSerializersT> {
    const api = this.initApi(
      'inbDeliverySerialNmbrApi',
      InbDeliverySerialNmbrApi
    );
    const linkedApis = [
      this.initApi('maintenanceItemObjListApi', MaintenanceItemObjListApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get inbDeliveryAddressApi(): InbDeliveryAddressApi<DeSerializersT> {
    return this.initApi('inbDeliveryAddressApi', InbDeliveryAddressApi);
  }

  get inbDeliveryHeaderTextApi(): InbDeliveryHeaderTextApi<DeSerializersT> {
    return this.initApi('inbDeliveryHeaderTextApi', InbDeliveryHeaderTextApi);
  }

  get inbDeliveryItemTextApi(): InbDeliveryItemTextApi<DeSerializersT> {
    return this.initApi('inbDeliveryItemTextApi', InbDeliveryItemTextApi);
  }

  get operations() {
    return {
      confirmPutawayAllItems: (
        parameter: ConfirmPutawayAllItemsParameters<DeSerializersT>
      ) => confirmPutawayAllItems(parameter, this.deSerializers),
      confirmPutawayOneItem: (
        parameter: ConfirmPutawayOneItemParameters<DeSerializersT>
      ) => confirmPutawayOneItem(parameter, this.deSerializers),
      postGoodsReceipt: (
        parameter: PostGoodsReceiptParameters<DeSerializersT>
      ) => postGoodsReceipt(parameter, this.deSerializers),
      putawayAllItems: (parameter: PutawayAllItemsParameters<DeSerializersT>) =>
        putawayAllItems(parameter, this.deSerializers),
      putawayOneItem: (parameter: PutawayOneItemParameters<DeSerializersT>) =>
        putawayOneItem(parameter, this.deSerializers),
      reverseGoodsReceipt: (
        parameter: ReverseGoodsReceiptParameters<DeSerializersT>
      ) => reverseGoodsReceipt(parameter, this.deSerializers),
      addSerialNumberToDeliveryItem: (
        parameter: AddSerialNumberToDeliveryItemParameters<DeSerializersT>
      ) => addSerialNumberToDeliveryItem(parameter, this.deSerializers),
      deleteAllSerialNumbersFromDeliveryItem: (
        parameter: DeleteAllSerialNumbersFromDeliveryItemParameters<DeSerializersT>
      ) =>
        deleteAllSerialNumbersFromDeliveryItem(parameter, this.deSerializers),
      deleteSerialNumberFromDeliveryItem: (
        parameter: DeleteSerialNumberFromDeliveryItemParameters<DeSerializersT>
      ) => deleteSerialNumberFromDeliveryItem(parameter, this.deSerializers),
      setPutawayQuantityWithBaseQuantity: (
        parameter: SetPutawayQuantityWithBaseQuantityParameters<DeSerializersT>
      ) => setPutawayQuantityWithBaseQuantity(parameter, this.deSerializers),
      putawayOneItemWithBaseQuantity: (
        parameter: PutawayOneItemWithBaseQuantityParameters<DeSerializersT>
      ) => putawayOneItemWithBaseQuantity(parameter, this.deSerializers),
      putawayOneItemWithSalesQuantity: (
        parameter: PutawayOneItemWithSalesQuantityParameters<DeSerializersT>
      ) => putawayOneItemWithSalesQuantity(parameter, this.deSerializers)
    };
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
