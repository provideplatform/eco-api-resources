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
import type { InbDeliveryItemApi } from './InbDeliveryItemApi';
import {
  InbDeliveryItemText,
  InbDeliveryItemTextType
} from './InbDeliveryItemText';
import {
  InbDeliveryDocFlow,
  InbDeliveryDocFlowType
} from './InbDeliveryDocFlow';
import {
  InbDeliverySerialNmbr,
  InbDeliverySerialNmbrType
} from './InbDeliverySerialNmbr';
import {
  InbDeliveryValAddedSrvc,
  InbDeliveryValAddedSrvcType
} from './InbDeliveryValAddedSrvc';

/**
 * This class represents the entity "A_InbDeliveryItem" of service "API_INBOUND_DELIVERY_SRV".
 */
export class InbDeliveryItem<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InbDeliveryItemType<T>
{
  /**
   * Technical entity name for InbDeliveryItem.
   */
  static _entityName = 'A_InbDeliveryItem';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath =
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002';
  /**
   * All key fields of the InbDeliveryItem entity
   */
  static _keys = ['DeliveryDocument', 'DeliveryDocumentItem'];
  /**
   * Qty (stckp.unt).
   * @nullable
   */
  actualDeliveredQtyInBaseUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Delivery Qty.
   * @nullable
   */
  actualDeliveryQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Customer Grp 1.
   * Maximum length: 3.
   * @nullable
   */
  additionalCustomerGroup1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Grp 2.
   * Maximum length: 3.
   * @nullable
   */
  additionalCustomerGroup2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Grp 3.
   * Maximum length: 3.
   * @nullable
   */
  additionalCustomerGroup3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Grp 4.
   * Maximum length: 3.
   * @nullable
   */
  additionalCustomerGroup4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Grp 5.
   * Maximum length: 3.
   * @nullable
   */
  additionalCustomerGroup5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * MaterialGroup 1.
   * Maximum length: 3.
   * @nullable
   */
  additionalMaterialGroup1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * MaterialGroup 2.
   * Maximum length: 3.
   * @nullable
   */
  additionalMaterialGroup2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * MaterialGroup 3.
   * Maximum length: 3.
   * @nullable
   */
  additionalMaterialGroup3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * MaterialGroup 4.
   * Maximum length: 3.
   * @nullable
   */
  additionalMaterialGroup4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * MaterialGroup 5.
   * Maximum length: 3.
   * @nullable
   */
  additionalMaterialGroup5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt.ProdNr.
   * Maximum length: 40.
   * @nullable
   */
  alternateProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base Unit.
   * Maximum length: 3.
   * @nullable
   */
  baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Batch.
   * Maximum length: 10.
   * @nullable
   */
  batch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Supplier Batch.
   * Maximum length: 15.
   * @nullable
   */
  batchBySupplier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Int.object no.
   * Maximum length: 18.
   * @nullable
   */
  batchClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * BOM expl.number.
   * Maximum length: 8.
   * @nullable
   */
  bomExplosion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Area.
   * Maximum length: 4.
   * @nullable
   */
  businessArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumption.
   * Maximum length: 1.
   * @nullable
   */
  consumptionPosting?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * CO Area.
   * Maximum length: 4.
   * @nullable
   */
  controllingArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Center.
   * Maximum length: 10.
   * @nullable
   */
  costCenter?: DeserializedType<T, 'Edm.String'> | null;
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
   * Engin. Change.
   * Maximum length: 17.
   * @nullable
   */
  custEngineeringChgStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery.
   * Maximum length: 10.
   */
  deliveryDocument!: DeserializedType<T, 'Edm.String'>;
  /**
   * Item.
   * Maximum length: 6.
   */
  deliveryDocumentItem!: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Category.
   * Maximum length: 4.
   * @nullable
   */
  deliveryDocumentItemCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Descr.
   * Maximum length: 40.
   * @nullable
   */
  deliveryDocumentItemText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Group.
   * Maximum length: 3.
   * @nullable
   */
  deliveryGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales unit.
   * Maximum length: 3.
   * @nullable
   */
  deliveryQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Status.
   * Maximum length: 1.
   * @nullable
   */
  deliveryRelatedBillingStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Denominat.
   * @nullable
   */
  deliveryToBaseQuantityDnmntr?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Numerator.
   * @nullable
   */
  deliveryToBaseQuantityNmrtr?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Department.
   * Maximum length: 4.
   * @nullable
   */
  departmentClassificationByCust?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distr. Channel.
   * Maximum length: 2.
   * @nullable
   */
  distributionChannel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Division.
   * Maximum length: 2.
   * @nullable
   */
  division?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed proc.time.
   * @nullable
   */
  fixedShipgProcgDurationInDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * G/L Account.
   * Maximum length: 10.
   * @nullable
   */
  glAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason for mvt.
   * Maximum length: 4.
   * @nullable
   */
  goodsMovementReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * GoodsMovementSt.
   * Maximum length: 1.
   * @nullable
   */
  goodsMovementStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Movement type.
   * Maximum length: 3.
   * @nullable
   */
  goodsMovementType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Higher-Lev.Item.
   * Maximum length: 6.
   * @nullable
   */
  higherLevelItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inspection Lot.
   * Maximum length: 12.
   * @nullable
   */
  inspectionLot?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partial lot.
   * Maximum length: 6.
   * @nullable
   */
  inspectionPartialLot?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Interco. BillSt.
   * Maximum length: 1.
   * @nullable
   */
  intercompanyBillingStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * EAN/UPC.
   * Maximum length: 18.
   * @nullable
   */
  internationalArticleNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Special Stock.
   * Maximum length: 1.
   * @nullable
   */
  inventorySpecialStockType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valuation Type.
   * Maximum length: 10.
   * @nullable
   */
  inventoryValuationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deliv. Compl.
   * @nullable
   */
  isCompletelyDelivered?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * No gds movement.
   * Maximum length: 1.
   * @nullable
   */
  isNotGoodsMovementsRelevant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Separate val.
   * @nullable
   */
  isSeparateValuation?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Receiving Batch.
   * Maximum length: 10.
   * @nullable
   */
  issgOrRcvgBatch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Mat.
   * Maximum length: 40.
   * @nullable
   */
  issgOrRcvgMaterial?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sp.ind.st.tfr.
   * Maximum length: 1.
   * @nullable
   */
  issgOrRcvgSpclStockInd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stock Category.
   * Maximum length: 1.
   * @nullable
   */
  issgOrRcvgStockCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Val. Type Tfr.
   * Maximum length: 10.
   * @nullable
   */
  issgOrRcvgValuationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving plant.
   * Maximum length: 4.
   * @nullable
   */
  issuingOrReceivingPlant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving SLoc.
   * Maximum length: 4.
   * @nullable
   */
  issuingOrReceivingStorageLoc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Block.
   * Maximum length: 2.
   * @nullable
   */
  itemBillingBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Bill.Data.
   * Maximum length: 1.
   * @nullable
   */
  itemBillingIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Deliv.Data.
   * Maximum length: 1.
   * @nullable
   */
  itemDeliveryIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item data: GM.
   * Maximum length: 1.
   * @nullable
   */
  itemGdsMvtIncompletionSts?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item.
   * Maximum length: 1.
   * @nullable
   */
  itemGeneralIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gross Weight.
   * @nullable
   */
  itemGrossWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Relev.for Bill.
   * Maximum length: 1.
   * @nullable
   */
  itemIsBillingRelevant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Net Weight.
   * @nullable
   */
  itemNetWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * It.data pckgng.
   * Maximum length: 1.
   * @nullable
   */
  itemPackingIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item data pck/putawy.
   * Maximum length: 1.
   * @nullable
   */
  itemPickingIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Volume.
   * @nullable
   */
  itemVolume?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Volume Unit.
   * Maximum length: 3.
   * @nullable
   */
  itemVolumeUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit of Weight.
   * Maximum length: 3.
   * @nullable
   */
  itemWeightUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Changed On.
   * @nullable
   */
  lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Loading Group.
   * Maximum length: 4.
   * @nullable
   */
  loadingGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date of Manuf.
   * @nullable
   */
  manufactureDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Material.
   * Maximum length: 40.
   * @nullable
   */
  material?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust. Material.
   * Maximum length: 35.
   * @nullable
   */
  materialByCustomer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mat.freight grp.
   * Maximum length: 8.
   * @nullable
   */
  materialFreightGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Group.
   * Maximum length: 9.
   * @nullable
   */
  materialGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Batch Mgmt Rqt.
   * @nullable
   */
  materialIsBatchManaged?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Batches.
   * @nullable
   */
  materialIsIntBatchManaged?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * No.serial no.
   * @nullable
   */
  numberOfSerialNumbers?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Order.
   * Maximum length: 12.
   * @nullable
   */
  orderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order item no.
   * Maximum length: 4.
   * @nullable
   */
  orderItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Qty.
   * @nullable
   */
  originalDeliveryQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * MaterialEntered.
   * Maximum length: 40.
   * @nullable
   */
  originallyRequestedMaterial?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overdeliv. Tol.
   * @nullable
   */
  overdelivTolrtdLmtRatioInPct?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Packing Status.
   * Maximum length: 1.
   * @nullable
   */
  packingStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Part.dlv./item.
   * Maximum length: 1.
   * @nullable
   */
  partialDeliveryIsAllowed?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PaytGuarantForm.
   * Maximum length: 2.
   * @nullable
   */
  paymentGuaranteeForm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmation.
   * Maximum length: 1.
   * @nullable
   */
  pickingConfirmationStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Picking ID.
   * Maximum length: 1.
   * @nullable
   */
  pickingControl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Picking Status.
   * Maximum length: 1.
   * @nullable
   */
  pickingStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plant.
   * Maximum length: 4.
   * @nullable
   */
  plant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main posting id.
   * Maximum length: 1.
   * @nullable
   */
  primaryPostingSwitch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mat.Avail.Date.
   * @nullable
   */
  productAvailabilityDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Matl Staging Tme.
   * @nullable
   */
  productAvailabilityTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Configuration.
   * Maximum length: 18.
   * @nullable
   */
  productConfiguration?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prod.hierarchy.
   * Maximum length: 18.
   * @nullable
   */
  productHierarchyNode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profit. segment.
   * Maximum length: 10.
   * @nullable
   */
  profitabilitySegment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profit Center.
   * Maximum length: 10.
   * @nullable
   */
  profitCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * POD rel. RC/SC.
   * Maximum length: 1.
   * @nullable
   */
  proofOfDeliveryRelevanceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * POD status.
   * Maximum length: 1.
   * @nullable
   */
  proofOfDeliveryStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qty. is fixed.
   * @nullable
   */
  quantityIsFixed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Recv. Point.
   * Maximum length: 25.
   * @nullable
   */
  receivingPoint?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PrDocLogSys.
   * Maximum length: 10.
   * @nullable
   */
  referenceDocumentLogicalSystem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref. Document.
   * Maximum length: 10.
   * @nullable
   */
  referenceSdDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prec.Doc.Categ.
   * Maximum length: 4.
   * @nullable
   */
  referenceSdDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Item.
   * Maximum length: 6.
   * @nullable
   */
  referenceSdDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Item Number.
   * Maximum length: 6.
   * @nullable
   */
  deliveryDocumentItemBySupplier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Promotion.
   * Maximum length: 10.
   * @nullable
   */
  retailPromotion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Type.
   * Maximum length: 1.
   * @nullable
   */
  salesDocumentItemType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Group.
   * Maximum length: 3.
   * @nullable
   */
  salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Office.
   * Maximum length: 4.
   * @nullable
   */
  salesOffice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Cat.
   * Maximum length: 4.
   * @nullable
   */
  sdDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overall Status.
   * Maximum length: 1.
   * @nullable
   */
  sdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SLED/BBD.
   * @nullable
   */
  shelfLifeExpirationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Statistics Date.
   * @nullable
   */
  statisticsDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Stock Type.
   * Maximum length: 1.
   * @nullable
   */
  stockType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storage Bin.
   * Maximum length: 10.
   * @nullable
   */
  storageBin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stor. Location.
   * Maximum length: 4.
   * @nullable
   */
  storageLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storage Type.
   * Maximum length: 3.
   * @nullable
   */
  storageType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub.movmnt type.
   * Maximum length: 3.
   * @nullable
   */
  subsequentMovementType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans. Group.
   * Maximum length: 4.
   * @nullable
   */
  transportationGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Underdel. Tol.
   * @nullable
   */
  underdelivTolrtdLmtRatioInPct?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Unlimited.
   * @nullable
   */
  unlimitedOverdeliveryIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Var. proc. time.
   * @nullable
   */
  varblShipgProcgDurationInDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Warehouse No.
   * Maximum length: 3.
   * @nullable
   */
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * WM Activ.Status.
   * Maximum length: 1.
   * @nullable
   */
  warehouseActivityStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Staging Area.
   * Maximum length: 10.
   * @nullable
   */
  warehouseStagingArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Version.
   * Maximum length: 4.
   * @nullable
   */
  deliveryVersion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stock Category.
   * Maximum length: 1.
   * @nullable
   */
  warehouseStockCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storage Bin.
   * Maximum length: 10.
   * @nullable
   */
  warehouseStorageBin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stock Segment.
   * Maximum length: 40.
   * @nullable
   */
  stockSegment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requirement Segment.
   * Maximum length: 40.
   * @nullable
   */
  requirementSegment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ProductSeasonYear.
   * Maximum length: 4.
   * @nullable
   */
  productSeasonYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Season.
   * Maximum length: 10.
   * @nullable
   */
  productSeason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Collection.
   * Maximum length: 10.
   * @nullable
   */
  productCollection?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Theme.
   * Maximum length: 10.
   * @nullable
   */
  productTheme?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Characteristic 1.
   * Maximum length: 18.
   * @nullable
   */
  productCharacteristic1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Characteristic 2.
   * Maximum length: 18.
   * @nullable
   */
  productCharacteristic2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Characteristic 3.
   * Maximum length: 18.
   * @nullable
   */
  productCharacteristic3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link InbDeliveryItemText} entity.
   */
  toDeliveryDocumentItemText!: InbDeliveryItemText<T>[];
  /**
   * One-to-many navigation property to the {@link InbDeliveryDocFlow} entity.
   */
  toDocumentFlow!: InbDeliveryDocFlow<T>[];
  /**
   * One-to-one navigation property to the {@link InbDeliverySerialNmbr} entity.
   */
  toSerialDeliveryItem?: InbDeliverySerialNmbr<T> | null;
  /**
   * One-to-many navigation property to the {@link InbDeliveryValAddedSrvc} entity.
   */
  toValueAddedService!: InbDeliveryValAddedSrvc<T>[];

  constructor(readonly _entityApi: InbDeliveryItemApi<T>) {
    super(_entityApi);
  }
}

export interface InbDeliveryItemType<
  T extends DeSerializers = DefaultDeSerializers
> {
  actualDeliveredQtyInBaseUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  actualDeliveryQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  additionalCustomerGroup1?: DeserializedType<T, 'Edm.String'> | null;
  additionalCustomerGroup2?: DeserializedType<T, 'Edm.String'> | null;
  additionalCustomerGroup3?: DeserializedType<T, 'Edm.String'> | null;
  additionalCustomerGroup4?: DeserializedType<T, 'Edm.String'> | null;
  additionalCustomerGroup5?: DeserializedType<T, 'Edm.String'> | null;
  additionalMaterialGroup1?: DeserializedType<T, 'Edm.String'> | null;
  additionalMaterialGroup2?: DeserializedType<T, 'Edm.String'> | null;
  additionalMaterialGroup3?: DeserializedType<T, 'Edm.String'> | null;
  additionalMaterialGroup4?: DeserializedType<T, 'Edm.String'> | null;
  additionalMaterialGroup5?: DeserializedType<T, 'Edm.String'> | null;
  alternateProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  batch?: DeserializedType<T, 'Edm.String'> | null;
  batchBySupplier?: DeserializedType<T, 'Edm.String'> | null;
  batchClassification?: DeserializedType<T, 'Edm.String'> | null;
  bomExplosion?: DeserializedType<T, 'Edm.String'> | null;
  businessArea?: DeserializedType<T, 'Edm.String'> | null;
  consumptionPosting?: DeserializedType<T, 'Edm.String'> | null;
  controllingArea?: DeserializedType<T, 'Edm.String'> | null;
  costCenter?: DeserializedType<T, 'Edm.String'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  creationTime?: DeserializedType<T, 'Edm.Time'> | null;
  custEngineeringChgStatus?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDocument: DeserializedType<T, 'Edm.String'>;
  deliveryDocumentItem: DeserializedType<T, 'Edm.String'>;
  deliveryDocumentItemCategory?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDocumentItemText?: DeserializedType<T, 'Edm.String'> | null;
  deliveryGroup?: DeserializedType<T, 'Edm.String'> | null;
  deliveryQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  deliveryRelatedBillingStatus?: DeserializedType<T, 'Edm.String'> | null;
  deliveryToBaseQuantityDnmntr?: DeserializedType<T, 'Edm.Decimal'> | null;
  deliveryToBaseQuantityNmrtr?: DeserializedType<T, 'Edm.Decimal'> | null;
  departmentClassificationByCust?: DeserializedType<T, 'Edm.String'> | null;
  distributionChannel?: DeserializedType<T, 'Edm.String'> | null;
  division?: DeserializedType<T, 'Edm.String'> | null;
  fixedShipgProcgDurationInDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  glAccount?: DeserializedType<T, 'Edm.String'> | null;
  goodsMovementReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  goodsMovementStatus?: DeserializedType<T, 'Edm.String'> | null;
  goodsMovementType?: DeserializedType<T, 'Edm.String'> | null;
  higherLevelItem?: DeserializedType<T, 'Edm.String'> | null;
  inspectionLot?: DeserializedType<T, 'Edm.String'> | null;
  inspectionPartialLot?: DeserializedType<T, 'Edm.String'> | null;
  intercompanyBillingStatus?: DeserializedType<T, 'Edm.String'> | null;
  internationalArticleNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventorySpecialStockType?: DeserializedType<T, 'Edm.String'> | null;
  inventoryValuationType?: DeserializedType<T, 'Edm.String'> | null;
  isCompletelyDelivered?: DeserializedType<T, 'Edm.Boolean'> | null;
  isNotGoodsMovementsRelevant?: DeserializedType<T, 'Edm.String'> | null;
  isSeparateValuation?: DeserializedType<T, 'Edm.Boolean'> | null;
  issgOrRcvgBatch?: DeserializedType<T, 'Edm.String'> | null;
  issgOrRcvgMaterial?: DeserializedType<T, 'Edm.String'> | null;
  issgOrRcvgSpclStockInd?: DeserializedType<T, 'Edm.String'> | null;
  issgOrRcvgStockCategory?: DeserializedType<T, 'Edm.String'> | null;
  issgOrRcvgValuationType?: DeserializedType<T, 'Edm.String'> | null;
  issuingOrReceivingPlant?: DeserializedType<T, 'Edm.String'> | null;
  issuingOrReceivingStorageLoc?: DeserializedType<T, 'Edm.String'> | null;
  itemBillingBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  itemBillingIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  itemDeliveryIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  itemGdsMvtIncompletionSts?: DeserializedType<T, 'Edm.String'> | null;
  itemGeneralIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  itemGrossWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  itemIsBillingRelevant?: DeserializedType<T, 'Edm.String'> | null;
  itemNetWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  itemPackingIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  itemPickingIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  itemVolume?: DeserializedType<T, 'Edm.Decimal'> | null;
  itemVolumeUnit?: DeserializedType<T, 'Edm.String'> | null;
  itemWeightUnit?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  loadingGroup?: DeserializedType<T, 'Edm.String'> | null;
  manufactureDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  material?: DeserializedType<T, 'Edm.String'> | null;
  materialByCustomer?: DeserializedType<T, 'Edm.String'> | null;
  materialFreightGroup?: DeserializedType<T, 'Edm.String'> | null;
  materialGroup?: DeserializedType<T, 'Edm.String'> | null;
  materialIsBatchManaged?: DeserializedType<T, 'Edm.Boolean'> | null;
  materialIsIntBatchManaged?: DeserializedType<T, 'Edm.Boolean'> | null;
  numberOfSerialNumbers?: DeserializedType<T, 'Edm.Int32'> | null;
  orderId?: DeserializedType<T, 'Edm.String'> | null;
  orderItem?: DeserializedType<T, 'Edm.String'> | null;
  originalDeliveryQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  originallyRequestedMaterial?: DeserializedType<T, 'Edm.String'> | null;
  overdelivTolrtdLmtRatioInPct?: DeserializedType<T, 'Edm.Decimal'> | null;
  packingStatus?: DeserializedType<T, 'Edm.String'> | null;
  partialDeliveryIsAllowed?: DeserializedType<T, 'Edm.String'> | null;
  paymentGuaranteeForm?: DeserializedType<T, 'Edm.String'> | null;
  pickingConfirmationStatus?: DeserializedType<T, 'Edm.String'> | null;
  pickingControl?: DeserializedType<T, 'Edm.String'> | null;
  pickingStatus?: DeserializedType<T, 'Edm.String'> | null;
  plant?: DeserializedType<T, 'Edm.String'> | null;
  primaryPostingSwitch?: DeserializedType<T, 'Edm.String'> | null;
  productAvailabilityDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  productAvailabilityTime?: DeserializedType<T, 'Edm.Time'> | null;
  productConfiguration?: DeserializedType<T, 'Edm.String'> | null;
  productHierarchyNode?: DeserializedType<T, 'Edm.String'> | null;
  profitabilitySegment?: DeserializedType<T, 'Edm.String'> | null;
  profitCenter?: DeserializedType<T, 'Edm.String'> | null;
  proofOfDeliveryRelevanceCode?: DeserializedType<T, 'Edm.String'> | null;
  proofOfDeliveryStatus?: DeserializedType<T, 'Edm.String'> | null;
  quantityIsFixed?: DeserializedType<T, 'Edm.Boolean'> | null;
  receivingPoint?: DeserializedType<T, 'Edm.String'> | null;
  referenceDocumentLogicalSystem?: DeserializedType<T, 'Edm.String'> | null;
  referenceSdDocument?: DeserializedType<T, 'Edm.String'> | null;
  referenceSdDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  referenceSdDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDocumentItemBySupplier?: DeserializedType<T, 'Edm.String'> | null;
  retailPromotion?: DeserializedType<T, 'Edm.String'> | null;
  salesDocumentItemType?: DeserializedType<T, 'Edm.String'> | null;
  salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  salesOffice?: DeserializedType<T, 'Edm.String'> | null;
  sdDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  sdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
  shelfLifeExpirationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  statisticsDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  stockType?: DeserializedType<T, 'Edm.String'> | null;
  storageBin?: DeserializedType<T, 'Edm.String'> | null;
  storageLocation?: DeserializedType<T, 'Edm.String'> | null;
  storageType?: DeserializedType<T, 'Edm.String'> | null;
  subsequentMovementType?: DeserializedType<T, 'Edm.String'> | null;
  transportationGroup?: DeserializedType<T, 'Edm.String'> | null;
  underdelivTolrtdLmtRatioInPct?: DeserializedType<T, 'Edm.Decimal'> | null;
  unlimitedOverdeliveryIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  varblShipgProcgDurationInDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  warehouseActivityStatus?: DeserializedType<T, 'Edm.String'> | null;
  warehouseStagingArea?: DeserializedType<T, 'Edm.String'> | null;
  deliveryVersion?: DeserializedType<T, 'Edm.String'> | null;
  warehouseStockCategory?: DeserializedType<T, 'Edm.String'> | null;
  warehouseStorageBin?: DeserializedType<T, 'Edm.String'> | null;
  stockSegment?: DeserializedType<T, 'Edm.String'> | null;
  requirementSegment?: DeserializedType<T, 'Edm.String'> | null;
  productSeasonYear?: DeserializedType<T, 'Edm.String'> | null;
  productSeason?: DeserializedType<T, 'Edm.String'> | null;
  productCollection?: DeserializedType<T, 'Edm.String'> | null;
  productTheme?: DeserializedType<T, 'Edm.String'> | null;
  productCharacteristic1?: DeserializedType<T, 'Edm.String'> | null;
  productCharacteristic2?: DeserializedType<T, 'Edm.String'> | null;
  productCharacteristic3?: DeserializedType<T, 'Edm.String'> | null;
  toDeliveryDocumentItemText: InbDeliveryItemTextType<T>[];
  toDocumentFlow: InbDeliveryDocFlowType<T>[];
  toSerialDeliveryItem?: InbDeliverySerialNmbrType<T> | null;
  toValueAddedService: InbDeliveryValAddedSrvcType<T>[];
}
