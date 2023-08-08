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
import type { InbDeliveryHeaderApi } from './InbDeliveryHeaderApi';
import {
  InbDeliveryHeaderText,
  InbDeliveryHeaderTextType
} from './InbDeliveryHeaderText';
import { InbDeliveryItem, InbDeliveryItemType } from './InbDeliveryItem';
import {
  InbDeliveryPartner,
  InbDeliveryPartnerType
} from './InbDeliveryPartner';

/**
 * This class represents the entity "A_InbDeliveryHeader" of service "API_INBOUND_DELIVERY_SRV".
 */
export class InbDeliveryHeader<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InbDeliveryHeaderType<T>
{
  /**
   * Technical entity name for InbDeliveryHeader.
   */
  static _entityName = 'A_InbDeliveryHeader';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath =
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002';
  /**
   * All key fields of the InbDeliveryHeader entity
   */
  static _keys = ['DeliveryDocument'];
  /**
   * Rec. time zone.
   * Maximum length: 6.
   * @nullable
   */
  receivingLocationTimeZone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route.
   * Maximum length: 6.
   * @nullable
   */
  actualDeliveryRoute?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Actual GI Date.
   * @nullable
   */
  actualGoodsMovementDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * GI Time.
   * @nullable
   */
  actualGoodsMovementTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Billing Date.
   * @nullable
   */
  billingDocumentDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Bill of Lading.
   * Maximum length: 35.
   * @nullable
   */
  billOfLading?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Complete Dlv.
   * @nullable
   */
  completeDeliveryIsDefined?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Confirm. Time.
   * @nullable
   */
  confirmationTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Created By.
   * Maximum length: 12.
   * @nullable
   */
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   * @nullable
   */
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Time.
   * @nullable
   */
  creationTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Customer Group.
   * Maximum length: 2.
   * @nullable
   */
  customerGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Block.
   * Maximum length: 2.
   * @nullable
   */
  deliveryBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Date.
   * @nullable
   */
  deliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Delivery.
   * Maximum length: 10.
   */
  deliveryDocument!: DeserializedType<T, 'Edm.String'>;
  /**
   * Ext. Delivery.
   * Maximum length: 35.
   * @nullable
   */
  deliveryDocumentBySupplier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Type.
   * Maximum length: 4.
   * @nullable
   */
  deliveryDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Plant.
   * @nullable
   */
  deliveryIsInPlant?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Delivery Prior.
   * Maximum length: 2.
   * @nullable
   */
  deliveryPriority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TimeOfDelivery.
   * @nullable
   */
  deliveryTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * DLV.Version.
   * Maximum length: 4.
   * @nullable
   */
  deliveryVersion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Depreciation.
   * @nullable
   */
  depreciationPercentage?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * StatDecntrlWhse.
   * Maximum length: 1.
   * @nullable
   */
  distrStatusByDecentralizedWrhs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Date.
   * @nullable
   */
  documentDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Type Ext. Ident.
   * Maximum length: 1.
   * @nullable
   */
  externalIdentificationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ID Transp.Syst.
   * Maximum length: 5.
   * @nullable
   */
  externalTransportSystem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * FactoryCalendar.
   * Maximum length: 2.
   * @nullable
   */
  factoryCalendarByCustomer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * GR/GI Slip No.
   * Maximum length: 10.
   * @nullable
   */
  goodsIssueOrReceiptSlipNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * GI Time.
   * @nullable
   */
  goodsIssueTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * HU in Stock.
   * Maximum length: 1.
   * @nullable
   */
  handlingUnitInStock?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Data.
   * Maximum length: 1.
   * @nullable
   */
  hdrGeneralIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Head. Data GM.
   * Maximum length: 1.
   * @nullable
   */
  hdrGoodsMvtIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Bill.Dat.
   * Maximum length: 1.
   * @nullable
   */
  headerBillgIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Block.
   * Maximum length: 2.
   * @nullable
   */
  headerBillingBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Dlv.Data.
   * Maximum length: 1.
   * @nullable
   */
  headerDelivIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Weight.
   * @nullable
   */
  headerGrossWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Net Weight.
   * @nullable
   */
  headerNetWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Head.Data Pckg.
   * Maximum length: 1.
   * @nullable
   */
  headerPackingIncompletionSts?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Head.Data Pck/Putawy.
   * Maximum length: 1.
   * @nullable
   */
  headerPickgIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Volume.
   * @nullable
   */
  headerVolume?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Volume Unit.
   * Maximum length: 3.
   * @nullable
   */
  headerVolumeUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit of Weight.
   * Maximum length: 3.
   * @nullable
   */
  headerWeightUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoterms.
   * Maximum length: 3.
   * @nullable
   */
  incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoterms 2.
   * Maximum length: 28.
   * @nullable
   */
  incotermsTransferLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Date.
   * @nullable
   */
  intercompanyBillingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Financ.Doc.No.
   * Maximum length: 10.
   * @nullable
   */
  internalFinancialDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ID: Delivery Split.
   * Maximum length: 1.
   * @nullable
   */
  isDeliveryForSingleWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Export.
   * Maximum length: 1.
   * @nullable
   */
  isExportDelivery?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Changed On.
   * @nullable
   */
  lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Changed By.
   * Maximum length: 12.
   * @nullable
   */
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading Date.
   * @nullable
   */
  loadingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Loading Point.
   * Maximum length: 2.
   * @nullable
   */
  loadingPoint?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading Time.
   * @nullable
   */
  loadingTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Mns of Trans.ID.
   * Maximum length: 20.
   * @nullable
   */
  meansOfTransport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * MeansTransp.
   * Maximum length: 40.
   * @nullable
   */
  meansOfTransportRefMaterial?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * MnsOfTrns Type.
   * Maximum length: 4.
   * @nullable
   */
  meansOfTransportType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Combinat.
   * @nullable
   */
  orderCombinationIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Order.
   * Maximum length: 12.
   * @nullable
   */
  orderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed.
   * Maximum length: 1.
   * @nullable
   */
  overallDelivConfStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Status.
   * Maximum length: 1.
   * @nullable
   */
  overallDelivReltdBillgStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TotalGdsMvtStat.
   * Maximum length: 1.
   * @nullable
   */
  overallGoodsMovementStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Totals Status.
   * Maximum length: 1.
   * @nullable
   */
  overallIntcoBillingStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Status.
   * Maximum length: 1.
   * @nullable
   */
  overallPackingStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmation.
   * Maximum length: 1.
   * @nullable
   */
  overallPickingConfStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ovr.Pick.Status.
   * Maximum length: 1.
   * @nullable
   */
  overallPickingStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * POD Status.
   * Maximum length: 1.
   * @nullable
   */
  overallProofOfDeliveryStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overall Status.
   * Maximum length: 1.
   * @nullable
   */
  overallSdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * OverallWMStatus.
   * Maximum length: 1.
   * @nullable
   */
  overallWarehouseActivityStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Deliv.Data.
   * Maximum length: 1.
   * @nullable
   */
  ovrlItmDelivIncompletionSts?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item data: GM.
   * Maximum length: 1.
   * @nullable
   */
  ovrlItmGdsMvtIncompletionSts?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Data.
   * Maximum length: 1.
   * @nullable
   */
  ovrlItmGeneralIncompletionSts?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * It.Data Packag.
   * Maximum length: 1.
   * @nullable
   */
  ovrlItmPackingIncompletionSts?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * It.Data Pck/Putaway.
   * Maximum length: 1.
   * @nullable
   */
  ovrlItmPickingIncompletionSts?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym.Guar.Proc.
   * Maximum length: 6.
   * @nullable
   */
  paymentGuaranteeProcedure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PickedItmLocat.
   * Maximum length: 20.
   * @nullable
   */
  pickedItemsLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pick Date.
   * @nullable
   */
  pickingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Picking Time.
   * @nullable
   */
  pickingTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Planned Gds Mvmt.
   * @nullable
   */
  plannedGoodsIssueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * POD Date.
   * @nullable
   */
  proofOfDeliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Route.
   * Maximum length: 6.
   * @nullable
   */
  proposedDeliveryRoute?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Plant.
   * Maximum length: 4.
   * @nullable
   */
  receivingPlant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route Schedule.
   * Maximum length: 10.
   * @nullable
   */
  routeSchedule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales District.
   * Maximum length: 6.
   * @nullable
   */
  salesDistrict?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Office.
   * Maximum length: 4.
   * @nullable
   */
  salesOffice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Org.
   * Maximum length: 4.
   * @nullable
   */
  salesOrganization?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Cat.
   * Maximum length: 4.
   * @nullable
   */
  sdDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ShpmtBlReason.
   * Maximum length: 2.
   * @nullable
   */
  shipmentBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shp.Cond.
   * Maximum length: 2.
   * @nullable
   */
  shippingCondition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Point.
   * Maximum length: 4.
   * @nullable
   */
  shippingPoint?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Type.
   * Maximum length: 2.
   * @nullable
   */
  shippingType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship-To Party.
   * Maximum length: 10.
   * @nullable
   */
  shipToParty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sold-To Party.
   * Maximum length: 10.
   * @nullable
   */
  soldToParty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Spec.Processing.
   * Maximum length: 4.
   * @nullable
   */
  specialProcessingCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stats. Currency.
   * Maximum length: 5.
   * @nullable
   */
  statisticsCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Supplier.
   * Maximum length: 10.
   * @nullable
   */
  supplier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overall Blk St.
   * Maximum length: 1.
   * @nullable
   */
  totalBlockStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * OverallCredStat.
   * Maximum length: 1.
   * @nullable
   */
  totalCreditCheckStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * No. of Packages.
   * Maximum length: 5.
   * @nullable
   */
  totalNumberOfPackage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Doc. Currency.
   * Maximum length: 5.
   * @nullable
   */
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans. Group.
   * Maximum length: 4.
   * @nullable
   */
  transportationGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TranspPlngDate.
   * @nullable
   */
  transportationPlanningDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Trns.Plan.Stat.
   * Maximum length: 1.
   * @nullable
   */
  transportationPlanningStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tr. Plan. Time.
   * @nullable
   */
  transportationPlanningTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Unloading Point.
   * Maximum length: 25.
   * @nullable
   */
  unloadingPointName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse No.
   * Maximum length: 3.
   * @nullable
   */
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Door for Whse.
   * Maximum length: 3.
   * @nullable
   */
  warehouseGate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Staging Area.
   * Maximum length: 10.
   * @nullable
   */
  warehouseStagingArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link InbDeliveryHeaderText} entity.
   */
  toDeliveryDocumentText!: InbDeliveryHeaderText<T>[];
  /**
   * One-to-many navigation property to the {@link InbDeliveryItem} entity.
   */
  toDeliveryDocumentItem!: InbDeliveryItem<T>[];
  /**
   * One-to-many navigation property to the {@link InbDeliveryPartner} entity.
   */
  toDeliveryDocumentPartner!: InbDeliveryPartner<T>[];

  constructor(readonly _entityApi: InbDeliveryHeaderApi<T>) {
    super(_entityApi);
  }
}

export interface InbDeliveryHeaderType<
  T extends DeSerializers = DefaultDeSerializers
> {
  receivingLocationTimeZone?: DeserializedType<T, 'Edm.String'> | null;
  actualDeliveryRoute?: DeserializedType<T, 'Edm.String'> | null;
  actualGoodsMovementDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  actualGoodsMovementTime?: DeserializedType<T, 'Edm.Time'> | null;
  billingDocumentDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  billOfLading?: DeserializedType<T, 'Edm.String'> | null;
  completeDeliveryIsDefined?: DeserializedType<T, 'Edm.Boolean'> | null;
  confirmationTime?: DeserializedType<T, 'Edm.Time'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  creationTime?: DeserializedType<T, 'Edm.Time'> | null;
  customerGroup?: DeserializedType<T, 'Edm.String'> | null;
  deliveryBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  deliveryDocument: DeserializedType<T, 'Edm.String'>;
  deliveryDocumentBySupplier?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  deliveryIsInPlant?: DeserializedType<T, 'Edm.Boolean'> | null;
  deliveryPriority?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTime?: DeserializedType<T, 'Edm.Time'> | null;
  deliveryVersion?: DeserializedType<T, 'Edm.String'> | null;
  depreciationPercentage?: DeserializedType<T, 'Edm.Decimal'> | null;
  distrStatusByDecentralizedWrhs?: DeserializedType<T, 'Edm.String'> | null;
  documentDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  externalIdentificationType?: DeserializedType<T, 'Edm.String'> | null;
  externalTransportSystem?: DeserializedType<T, 'Edm.String'> | null;
  factoryCalendarByCustomer?: DeserializedType<T, 'Edm.String'> | null;
  goodsIssueOrReceiptSlipNumber?: DeserializedType<T, 'Edm.String'> | null;
  goodsIssueTime?: DeserializedType<T, 'Edm.Time'> | null;
  handlingUnitInStock?: DeserializedType<T, 'Edm.String'> | null;
  hdrGeneralIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  hdrGoodsMvtIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  headerBillgIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  headerBillingBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  headerDelivIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  headerGrossWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  headerNetWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  headerPackingIncompletionSts?: DeserializedType<T, 'Edm.String'> | null;
  headerPickgIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  headerVolume?: DeserializedType<T, 'Edm.Decimal'> | null;
  headerVolumeUnit?: DeserializedType<T, 'Edm.String'> | null;
  headerWeightUnit?: DeserializedType<T, 'Edm.String'> | null;
  incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
  incotermsTransferLocation?: DeserializedType<T, 'Edm.String'> | null;
  intercompanyBillingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  internalFinancialDocument?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryForSingleWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  isExportDelivery?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  loadingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  loadingPoint?: DeserializedType<T, 'Edm.String'> | null;
  loadingTime?: DeserializedType<T, 'Edm.Time'> | null;
  meansOfTransport?: DeserializedType<T, 'Edm.String'> | null;
  meansOfTransportRefMaterial?: DeserializedType<T, 'Edm.String'> | null;
  meansOfTransportType?: DeserializedType<T, 'Edm.String'> | null;
  orderCombinationIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  orderId?: DeserializedType<T, 'Edm.String'> | null;
  overallDelivConfStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallDelivReltdBillgStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallGoodsMovementStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallIntcoBillingStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallPackingStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallPickingConfStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallPickingStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallProofOfDeliveryStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallSdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallWarehouseActivityStatus?: DeserializedType<T, 'Edm.String'> | null;
  ovrlItmDelivIncompletionSts?: DeserializedType<T, 'Edm.String'> | null;
  ovrlItmGdsMvtIncompletionSts?: DeserializedType<T, 'Edm.String'> | null;
  ovrlItmGeneralIncompletionSts?: DeserializedType<T, 'Edm.String'> | null;
  ovrlItmPackingIncompletionSts?: DeserializedType<T, 'Edm.String'> | null;
  ovrlItmPickingIncompletionSts?: DeserializedType<T, 'Edm.String'> | null;
  paymentGuaranteeProcedure?: DeserializedType<T, 'Edm.String'> | null;
  pickedItemsLocation?: DeserializedType<T, 'Edm.String'> | null;
  pickingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  pickingTime?: DeserializedType<T, 'Edm.Time'> | null;
  plannedGoodsIssueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  proofOfDeliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  proposedDeliveryRoute?: DeserializedType<T, 'Edm.String'> | null;
  receivingPlant?: DeserializedType<T, 'Edm.String'> | null;
  routeSchedule?: DeserializedType<T, 'Edm.String'> | null;
  salesDistrict?: DeserializedType<T, 'Edm.String'> | null;
  salesOffice?: DeserializedType<T, 'Edm.String'> | null;
  salesOrganization?: DeserializedType<T, 'Edm.String'> | null;
  sdDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  shipmentBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  shippingCondition?: DeserializedType<T, 'Edm.String'> | null;
  shippingPoint?: DeserializedType<T, 'Edm.String'> | null;
  shippingType?: DeserializedType<T, 'Edm.String'> | null;
  shipToParty?: DeserializedType<T, 'Edm.String'> | null;
  soldToParty?: DeserializedType<T, 'Edm.String'> | null;
  specialProcessingCode?: DeserializedType<T, 'Edm.String'> | null;
  statisticsCurrency?: DeserializedType<T, 'Edm.String'> | null;
  supplier?: DeserializedType<T, 'Edm.String'> | null;
  totalBlockStatus?: DeserializedType<T, 'Edm.String'> | null;
  totalCreditCheckStatus?: DeserializedType<T, 'Edm.String'> | null;
  totalNumberOfPackage?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  transportationGroup?: DeserializedType<T, 'Edm.String'> | null;
  transportationPlanningDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  transportationPlanningStatus?: DeserializedType<T, 'Edm.String'> | null;
  transportationPlanningTime?: DeserializedType<T, 'Edm.Time'> | null;
  unloadingPointName?: DeserializedType<T, 'Edm.String'> | null;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  warehouseGate?: DeserializedType<T, 'Edm.String'> | null;
  warehouseStagingArea?: DeserializedType<T, 'Edm.String'> | null;
  toDeliveryDocumentText: InbDeliveryHeaderTextType<T>[];
  toDeliveryDocumentItem: InbDeliveryItemType<T>[];
  toDeliveryDocumentPartner: InbDeliveryPartnerType<T>[];
}
