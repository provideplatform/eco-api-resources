/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  OperationRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import {
  InbDeliveryValAddedSrvc,
  MaintenanceItemObjList,
  InbDeliveryDocFlow,
  InbDeliveryHeader,
  InbDeliveryItem,
  InbDeliveryPartner,
  InbDeliverySerialNmbr,
  InbDeliveryAddress,
  InbDeliveryHeaderText,
  InbDeliveryItemText,
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
  PutawayOneItemWithSalesQuantityParameters,
  PutawayReport,
  DeliveryMessage
} from './index';
/**
 * Batch builder for operations supported on the Op Api Inbound Delivery Srv 0002.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export declare function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadOpApiInboundDeliverySrv0002RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export declare function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadOpApiInboundDeliverySrv0002RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
/**
 * Change set constructor consists of write operations supported on the Op Api Inbound Delivery Srv 0002.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export declare function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    WriteOpApiInboundDeliverySrv0002RequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export declare function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<
    WriteOpApiInboundDeliverySrv0002RequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export declare const defaultOpApiInboundDeliverySrv0002Path =
  '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002';
export type ReadOpApiInboundDeliverySrv0002RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<
      InbDeliveryValAddedSrvc<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<MaintenanceItemObjList<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<InbDeliveryDocFlow<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<InbDeliveryHeader<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<InbDeliveryItem<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<InbDeliveryPartner<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<InbDeliverySerialNmbr<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<InbDeliveryAddress<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<InbDeliveryHeaderText<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<InbDeliveryItemText<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      InbDeliveryValAddedSrvc<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintenanceItemObjList<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<InbDeliveryDocFlow<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<InbDeliveryHeader<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<InbDeliveryItem<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<InbDeliveryPartner<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      InbDeliverySerialNmbr<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<InbDeliveryAddress<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      InbDeliveryHeaderText<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<InbDeliveryItemText<DeSerializersT>, DeSerializersT>;
export type WriteOpApiInboundDeliverySrv0002RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<
      InbDeliveryValAddedSrvc<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      InbDeliveryValAddedSrvc<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      InbDeliveryValAddedSrvc<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<MaintenanceItemObjList<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<MaintenanceItemObjList<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<MaintenanceItemObjList<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<InbDeliveryDocFlow<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<InbDeliveryDocFlow<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<InbDeliveryDocFlow<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<InbDeliveryHeader<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<InbDeliveryHeader<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<InbDeliveryHeader<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<InbDeliveryItem<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<InbDeliveryItem<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<InbDeliveryItem<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<InbDeliveryPartner<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<InbDeliveryPartner<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<InbDeliveryPartner<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<InbDeliverySerialNmbr<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<InbDeliverySerialNmbr<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<InbDeliverySerialNmbr<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<InbDeliveryAddress<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<InbDeliveryAddress<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<InbDeliveryAddress<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<InbDeliveryHeaderText<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<InbDeliveryHeaderText<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<InbDeliveryHeaderText<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<InbDeliveryItemText<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<InbDeliveryItemText<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<InbDeliveryItemText<DeSerializersT>, DeSerializersT>
  | OperationRequestBuilder<
      DeSerializersT,
      ConfirmPutawayAllItemsParameters<DeSerializersT>,
      PutawayReport[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ConfirmPutawayOneItemParameters<DeSerializersT>,
      PutawayReport[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PostGoodsReceiptParameters<DeSerializersT>,
      PutawayReport[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PutawayAllItemsParameters<DeSerializersT>,
      PutawayReport[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PutawayOneItemParameters<DeSerializersT>,
      PutawayReport[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ReverseGoodsReceiptParameters<DeSerializersT>,
      DeliveryMessage[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      AddSerialNumberToDeliveryItemParameters<DeSerializersT>,
      PutawayReport[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DeleteAllSerialNumbersFromDeliveryItemParameters<DeSerializersT>,
      PutawayReport[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DeleteSerialNumberFromDeliveryItemParameters<DeSerializersT>,
      PutawayReport[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      SetPutawayQuantityWithBaseQuantityParameters<DeSerializersT>,
      PutawayReport[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PutawayOneItemWithBaseQuantityParameters<DeSerializersT>,
      PutawayReport[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PutawayOneItemWithSalesQuantityParameters<DeSerializersT>,
      PutawayReport[]
    >;
