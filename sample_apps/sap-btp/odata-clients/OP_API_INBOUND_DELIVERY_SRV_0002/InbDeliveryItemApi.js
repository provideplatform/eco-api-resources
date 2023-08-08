"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InbDeliveryItemApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const InbDeliveryItem_1 = require("./InbDeliveryItem");
const InbDeliveryItemRequestBuilder_1 = require("./InbDeliveryItemRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class InbDeliveryItemApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = InbDeliveryItem_1.InbDeliveryItem;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new InbDeliveryItemApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_DELIVERY_DOCUMENT_ITEM_TEXT: new odata_v2_1.Link('to_DeliveryDocumentItemText', this, linkedApis[0]),
            TO_DOCUMENT_FLOW: new odata_v2_1.Link('to_DocumentFlow', this, linkedApis[1]),
            TO_SERIAL_DELIVERY_ITEM: new odata_v2_1.OneToOneLink('to_SerialDeliveryItem', this, linkedApis[2]),
            TO_VALUE_ADDED_SERVICE: new odata_v2_1.Link('to_ValueAddedService', this, linkedApis[3])
        };
        return this;
    }
    requestBuilder() {
        return new InbDeliveryItemRequestBuilder_1.InbDeliveryItemRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(InbDeliveryItem_1.InbDeliveryItem, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link actualDeliveredQtyInBaseUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACTUAL_DELIVERED_QTY_IN_BASE_UNIT: fieldBuilder.buildEdmTypeField('ActualDeliveredQtyInBaseUnit', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link actualDeliveryQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACTUAL_DELIVERY_QUANTITY: fieldBuilder.buildEdmTypeField('ActualDeliveryQuantity', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link additionalCustomerGroup1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_CUSTOMER_GROUP_1: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup1', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalCustomerGroup2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_CUSTOMER_GROUP_2: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup2', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalCustomerGroup3} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_CUSTOMER_GROUP_3: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup3', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalCustomerGroup4} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_CUSTOMER_GROUP_4: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup4', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalCustomerGroup5} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_CUSTOMER_GROUP_5: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup5', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalMaterialGroup1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_MATERIAL_GROUP_1: fieldBuilder.buildEdmTypeField('AdditionalMaterialGroup1', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalMaterialGroup2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_MATERIAL_GROUP_2: fieldBuilder.buildEdmTypeField('AdditionalMaterialGroup2', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalMaterialGroup3} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_MATERIAL_GROUP_3: fieldBuilder.buildEdmTypeField('AdditionalMaterialGroup3', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalMaterialGroup4} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_MATERIAL_GROUP_4: fieldBuilder.buildEdmTypeField('AdditionalMaterialGroup4', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalMaterialGroup5} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_MATERIAL_GROUP_5: fieldBuilder.buildEdmTypeField('AdditionalMaterialGroup5', 'Edm.String', true),
                /**
                 * Static representation of the {@link alternateProductNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ALTERNATE_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField('AlternateProductNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link baseUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BASE_UNIT: fieldBuilder.buildEdmTypeField('BaseUnit', 'Edm.String', true),
                /**
                 * Static representation of the {@link batch} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BATCH: fieldBuilder.buildEdmTypeField('Batch', 'Edm.String', true),
                /**
                 * Static representation of the {@link batchBySupplier} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BATCH_BY_SUPPLIER: fieldBuilder.buildEdmTypeField('BatchBySupplier', 'Edm.String', true),
                /**
                 * Static representation of the {@link batchClassification} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BATCH_CLASSIFICATION: fieldBuilder.buildEdmTypeField('BatchClassification', 'Edm.String', true),
                /**
                 * Static representation of the {@link bomExplosion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BOM_EXPLOSION: fieldBuilder.buildEdmTypeField('BOMExplosion', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessArea} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_AREA: fieldBuilder.buildEdmTypeField('BusinessArea', 'Edm.String', true),
                /**
                 * Static representation of the {@link consumptionPosting} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONSUMPTION_POSTING: fieldBuilder.buildEdmTypeField('ConsumptionPosting', 'Edm.String', true),
                /**
                 * Static representation of the {@link controllingArea} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONTROLLING_AREA: fieldBuilder.buildEdmTypeField('ControllingArea', 'Edm.String', true),
                /**
                 * Static representation of the {@link costCenter} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COST_CENTER: fieldBuilder.buildEdmTypeField('CostCenter', 'Edm.String', true),
                /**
                 * Static representation of the {@link createdByUser} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_BY_USER: fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true),
                /**
                 * Static representation of the {@link creationDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link creationTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_TIME: fieldBuilder.buildEdmTypeField('CreationTime', 'Edm.Time', true),
                /**
                 * Static representation of the {@link custEngineeringChgStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUST_ENGINEERING_CHG_STATUS: fieldBuilder.buildEdmTypeField('CustEngineeringChgStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link deliveryDocument} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_DOCUMENT: fieldBuilder.buildEdmTypeField('DeliveryDocument', 'Edm.String', false),
                /**
                 * Static representation of the {@link deliveryDocumentItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField('DeliveryDocumentItem', 'Edm.String', false),
                /**
                 * Static representation of the {@link deliveryDocumentItemCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_DOCUMENT_ITEM_CATEGORY: fieldBuilder.buildEdmTypeField('DeliveryDocumentItemCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link deliveryDocumentItemText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_DOCUMENT_ITEM_TEXT: fieldBuilder.buildEdmTypeField('DeliveryDocumentItemText', 'Edm.String', true),
                /**
                 * Static representation of the {@link deliveryGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_GROUP: fieldBuilder.buildEdmTypeField('DeliveryGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link deliveryQuantityUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_QUANTITY_UNIT: fieldBuilder.buildEdmTypeField('DeliveryQuantityUnit', 'Edm.String', true),
                /**
                 * Static representation of the {@link deliveryRelatedBillingStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_RELATED_BILLING_STATUS: fieldBuilder.buildEdmTypeField('DeliveryRelatedBillingStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link deliveryToBaseQuantityDnmntr} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_TO_BASE_QUANTITY_DNMNTR: fieldBuilder.buildEdmTypeField('DeliveryToBaseQuantityDnmntr', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link deliveryToBaseQuantityNmrtr} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_TO_BASE_QUANTITY_NMRTR: fieldBuilder.buildEdmTypeField('DeliveryToBaseQuantityNmrtr', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link departmentClassificationByCust} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DEPARTMENT_CLASSIFICATION_BY_CUST: fieldBuilder.buildEdmTypeField('DepartmentClassificationByCust', 'Edm.String', true),
                /**
                 * Static representation of the {@link distributionChannel} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISTRIBUTION_CHANNEL: fieldBuilder.buildEdmTypeField('DistributionChannel', 'Edm.String', true),
                /**
                 * Static representation of the {@link division} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DIVISION: fieldBuilder.buildEdmTypeField('Division', 'Edm.String', true),
                /**
                 * Static representation of the {@link fixedShipgProcgDurationInDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FIXED_SHIPG_PROCG_DURATION_IN_DAYS: fieldBuilder.buildEdmTypeField('FixedShipgProcgDurationInDays', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link glAccount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GL_ACCOUNT: fieldBuilder.buildEdmTypeField('GLAccount', 'Edm.String', true),
                /**
                 * Static representation of the {@link goodsMovementReasonCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GOODS_MOVEMENT_REASON_CODE: fieldBuilder.buildEdmTypeField('GoodsMovementReasonCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link goodsMovementStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GOODS_MOVEMENT_STATUS: fieldBuilder.buildEdmTypeField('GoodsMovementStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link goodsMovementType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GOODS_MOVEMENT_TYPE: fieldBuilder.buildEdmTypeField('GoodsMovementType', 'Edm.String', true),
                /**
                 * Static representation of the {@link higherLevelItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HIGHER_LEVEL_ITEM: fieldBuilder.buildEdmTypeField('HigherLevelItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link inspectionLot} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSPECTION_LOT: fieldBuilder.buildEdmTypeField('InspectionLot', 'Edm.String', true),
                /**
                 * Static representation of the {@link inspectionPartialLot} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSPECTION_PARTIAL_LOT: fieldBuilder.buildEdmTypeField('InspectionPartialLot', 'Edm.String', true),
                /**
                 * Static representation of the {@link intercompanyBillingStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INTERCOMPANY_BILLING_STATUS: fieldBuilder.buildEdmTypeField('IntercompanyBillingStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link internationalArticleNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INTERNATIONAL_ARTICLE_NUMBER: fieldBuilder.buildEdmTypeField('InternationalArticleNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link inventorySpecialStockType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INVENTORY_SPECIAL_STOCK_TYPE: fieldBuilder.buildEdmTypeField('InventorySpecialStockType', 'Edm.String', true),
                /**
                 * Static representation of the {@link inventoryValuationType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INVENTORY_VALUATION_TYPE: fieldBuilder.buildEdmTypeField('InventoryValuationType', 'Edm.String', true),
                /**
                 * Static representation of the {@link isCompletelyDelivered} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_COMPLETELY_DELIVERED: fieldBuilder.buildEdmTypeField('IsCompletelyDelivered', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isNotGoodsMovementsRelevant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_NOT_GOODS_MOVEMENTS_RELEVANT: fieldBuilder.buildEdmTypeField('IsNotGoodsMovementsRelevant', 'Edm.String', true),
                /**
                 * Static representation of the {@link isSeparateValuation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_SEPARATE_VALUATION: fieldBuilder.buildEdmTypeField('IsSeparateValuation', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link issgOrRcvgBatch} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ISSG_OR_RCVG_BATCH: fieldBuilder.buildEdmTypeField('IssgOrRcvgBatch', 'Edm.String', true),
                /**
                 * Static representation of the {@link issgOrRcvgMaterial} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ISSG_OR_RCVG_MATERIAL: fieldBuilder.buildEdmTypeField('IssgOrRcvgMaterial', 'Edm.String', true),
                /**
                 * Static representation of the {@link issgOrRcvgSpclStockInd} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ISSG_OR_RCVG_SPCL_STOCK_IND: fieldBuilder.buildEdmTypeField('IssgOrRcvgSpclStockInd', 'Edm.String', true),
                /**
                 * Static representation of the {@link issgOrRcvgStockCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ISSG_OR_RCVG_STOCK_CATEGORY: fieldBuilder.buildEdmTypeField('IssgOrRcvgStockCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link issgOrRcvgValuationType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ISSG_OR_RCVG_VALUATION_TYPE: fieldBuilder.buildEdmTypeField('IssgOrRcvgValuationType', 'Edm.String', true),
                /**
                 * Static representation of the {@link issuingOrReceivingPlant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ISSUING_OR_RECEIVING_PLANT: fieldBuilder.buildEdmTypeField('IssuingOrReceivingPlant', 'Edm.String', true),
                /**
                 * Static representation of the {@link issuingOrReceivingStorageLoc} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ISSUING_OR_RECEIVING_STORAGE_LOC: fieldBuilder.buildEdmTypeField('IssuingOrReceivingStorageLoc', 'Edm.String', true),
                /**
                 * Static representation of the {@link itemBillingBlockReason} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ITEM_BILLING_BLOCK_REASON: fieldBuilder.buildEdmTypeField('ItemBillingBlockReason', 'Edm.String', true),
                /**
                 * Static representation of the {@link itemBillingIncompletionStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ITEM_BILLING_INCOMPLETION_STATUS: fieldBuilder.buildEdmTypeField('ItemBillingIncompletionStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link itemDeliveryIncompletionStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ITEM_DELIVERY_INCOMPLETION_STATUS: fieldBuilder.buildEdmTypeField('ItemDeliveryIncompletionStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link itemGdsMvtIncompletionSts} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ITEM_GDS_MVT_INCOMPLETION_STS: fieldBuilder.buildEdmTypeField('ItemGdsMvtIncompletionSts', 'Edm.String', true),
                /**
                 * Static representation of the {@link itemGeneralIncompletionStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ITEM_GENERAL_INCOMPLETION_STATUS: fieldBuilder.buildEdmTypeField('ItemGeneralIncompletionStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link itemGrossWeight} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ITEM_GROSS_WEIGHT: fieldBuilder.buildEdmTypeField('ItemGrossWeight', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link itemIsBillingRelevant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ITEM_IS_BILLING_RELEVANT: fieldBuilder.buildEdmTypeField('ItemIsBillingRelevant', 'Edm.String', true),
                /**
                 * Static representation of the {@link itemNetWeight} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ITEM_NET_WEIGHT: fieldBuilder.buildEdmTypeField('ItemNetWeight', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link itemPackingIncompletionStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ITEM_PACKING_INCOMPLETION_STATUS: fieldBuilder.buildEdmTypeField('ItemPackingIncompletionStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link itemPickingIncompletionStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ITEM_PICKING_INCOMPLETION_STATUS: fieldBuilder.buildEdmTypeField('ItemPickingIncompletionStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link itemVolume} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ITEM_VOLUME: fieldBuilder.buildEdmTypeField('ItemVolume', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link itemVolumeUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ITEM_VOLUME_UNIT: fieldBuilder.buildEdmTypeField('ItemVolumeUnit', 'Edm.String', true),
                /**
                 * Static representation of the {@link itemWeightUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ITEM_WEIGHT_UNIT: fieldBuilder.buildEdmTypeField('ItemWeightUnit', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastChangeDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField('LastChangeDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link loadingGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOADING_GROUP: fieldBuilder.buildEdmTypeField('LoadingGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link manufactureDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MANUFACTURE_DATE: fieldBuilder.buildEdmTypeField('ManufactureDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link material} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MATERIAL: fieldBuilder.buildEdmTypeField('Material', 'Edm.String', true),
                /**
                 * Static representation of the {@link materialByCustomer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MATERIAL_BY_CUSTOMER: fieldBuilder.buildEdmTypeField('MaterialByCustomer', 'Edm.String', true),
                /**
                 * Static representation of the {@link materialFreightGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MATERIAL_FREIGHT_GROUP: fieldBuilder.buildEdmTypeField('MaterialFreightGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link materialGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MATERIAL_GROUP: fieldBuilder.buildEdmTypeField('MaterialGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link materialIsBatchManaged} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MATERIAL_IS_BATCH_MANAGED: fieldBuilder.buildEdmTypeField('MaterialIsBatchManaged', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link materialIsIntBatchManaged} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MATERIAL_IS_INT_BATCH_MANAGED: fieldBuilder.buildEdmTypeField('MaterialIsIntBatchManaged', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link numberOfSerialNumbers} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NUMBER_OF_SERIAL_NUMBERS: fieldBuilder.buildEdmTypeField('NumberOfSerialNumbers', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link orderId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORDER_ID: fieldBuilder.buildEdmTypeField('OrderID', 'Edm.String', true),
                /**
                 * Static representation of the {@link orderItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORDER_ITEM: fieldBuilder.buildEdmTypeField('OrderItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link originalDeliveryQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORIGINAL_DELIVERY_QUANTITY: fieldBuilder.buildEdmTypeField('OriginalDeliveryQuantity', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link originallyRequestedMaterial} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORIGINALLY_REQUESTED_MATERIAL: fieldBuilder.buildEdmTypeField('OriginallyRequestedMaterial', 'Edm.String', true),
                /**
                 * Static representation of the {@link overdelivTolrtdLmtRatioInPct} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OVERDELIV_TOLRTD_LMT_RATIO_IN_PCT: fieldBuilder.buildEdmTypeField('OverdelivTolrtdLmtRatioInPct', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link packingStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PACKING_STATUS: fieldBuilder.buildEdmTypeField('PackingStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link partialDeliveryIsAllowed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARTIAL_DELIVERY_IS_ALLOWED: fieldBuilder.buildEdmTypeField('PartialDeliveryIsAllowed', 'Edm.String', true),
                /**
                 * Static representation of the {@link paymentGuaranteeForm} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_GUARANTEE_FORM: fieldBuilder.buildEdmTypeField('PaymentGuaranteeForm', 'Edm.String', true),
                /**
                 * Static representation of the {@link pickingConfirmationStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PICKING_CONFIRMATION_STATUS: fieldBuilder.buildEdmTypeField('PickingConfirmationStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link pickingControl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PICKING_CONTROL: fieldBuilder.buildEdmTypeField('PickingControl', 'Edm.String', true),
                /**
                 * Static representation of the {@link pickingStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PICKING_STATUS: fieldBuilder.buildEdmTypeField('PickingStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link plant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANT: fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', true),
                /**
                 * Static representation of the {@link primaryPostingSwitch} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRIMARY_POSTING_SWITCH: fieldBuilder.buildEdmTypeField('PrimaryPostingSwitch', 'Edm.String', true),
                /**
                 * Static representation of the {@link productAvailabilityDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_AVAILABILITY_DATE: fieldBuilder.buildEdmTypeField('ProductAvailabilityDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link productAvailabilityTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_AVAILABILITY_TIME: fieldBuilder.buildEdmTypeField('ProductAvailabilityTime', 'Edm.Time', true),
                /**
                 * Static representation of the {@link productConfiguration} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_CONFIGURATION: fieldBuilder.buildEdmTypeField('ProductConfiguration', 'Edm.String', true),
                /**
                 * Static representation of the {@link productHierarchyNode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_HIERARCHY_NODE: fieldBuilder.buildEdmTypeField('ProductHierarchyNode', 'Edm.String', true),
                /**
                 * Static representation of the {@link profitabilitySegment} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROFITABILITY_SEGMENT: fieldBuilder.buildEdmTypeField('ProfitabilitySegment', 'Edm.String', true),
                /**
                 * Static representation of the {@link profitCenter} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROFIT_CENTER: fieldBuilder.buildEdmTypeField('ProfitCenter', 'Edm.String', true),
                /**
                 * Static representation of the {@link proofOfDeliveryRelevanceCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROOF_OF_DELIVERY_RELEVANCE_CODE: fieldBuilder.buildEdmTypeField('ProofOfDeliveryRelevanceCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link proofOfDeliveryStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROOF_OF_DELIVERY_STATUS: fieldBuilder.buildEdmTypeField('ProofOfDeliveryStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link quantityIsFixed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUANTITY_IS_FIXED: fieldBuilder.buildEdmTypeField('QuantityIsFixed', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link receivingPoint} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RECEIVING_POINT: fieldBuilder.buildEdmTypeField('ReceivingPoint', 'Edm.String', true),
                /**
                 * Static representation of the {@link referenceDocumentLogicalSystem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REFERENCE_DOCUMENT_LOGICAL_SYSTEM: fieldBuilder.buildEdmTypeField('ReferenceDocumentLogicalSystem', 'Edm.String', true),
                /**
                 * Static representation of the {@link referenceSdDocument} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REFERENCE_SD_DOCUMENT: fieldBuilder.buildEdmTypeField('ReferenceSDDocument', 'Edm.String', true),
                /**
                 * Static representation of the {@link referenceSdDocumentCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REFERENCE_SD_DOCUMENT_CATEGORY: fieldBuilder.buildEdmTypeField('ReferenceSDDocumentCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link referenceSdDocumentItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REFERENCE_SD_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField('ReferenceSDDocumentItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link deliveryDocumentItemBySupplier} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_DOCUMENT_ITEM_BY_SUPPLIER: fieldBuilder.buildEdmTypeField('DeliveryDocumentItemBySupplier', 'Edm.String', true),
                /**
                 * Static representation of the {@link retailPromotion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RETAIL_PROMOTION: fieldBuilder.buildEdmTypeField('RetailPromotion', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesDocumentItemType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_DOCUMENT_ITEM_TYPE: fieldBuilder.buildEdmTypeField('SalesDocumentItemType', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_GROUP: fieldBuilder.buildEdmTypeField('SalesGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesOffice} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_OFFICE: fieldBuilder.buildEdmTypeField('SalesOffice', 'Edm.String', true),
                /**
                 * Static representation of the {@link sdDocumentCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SD_DOCUMENT_CATEGORY: fieldBuilder.buildEdmTypeField('SDDocumentCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link sdProcessStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SD_PROCESS_STATUS: fieldBuilder.buildEdmTypeField('SDProcessStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link shelfLifeExpirationDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHELF_LIFE_EXPIRATION_DATE: fieldBuilder.buildEdmTypeField('ShelfLifeExpirationDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link statisticsDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATISTICS_DATE: fieldBuilder.buildEdmTypeField('StatisticsDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link stockType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STOCK_TYPE: fieldBuilder.buildEdmTypeField('StockType', 'Edm.String', true),
                /**
                 * Static representation of the {@link storageBin} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STORAGE_BIN: fieldBuilder.buildEdmTypeField('StorageBin', 'Edm.String', true),
                /**
                 * Static representation of the {@link storageLocation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STORAGE_LOCATION: fieldBuilder.buildEdmTypeField('StorageLocation', 'Edm.String', true),
                /**
                 * Static representation of the {@link storageType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STORAGE_TYPE: fieldBuilder.buildEdmTypeField('StorageType', 'Edm.String', true),
                /**
                 * Static representation of the {@link subsequentMovementType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUBSEQUENT_MOVEMENT_TYPE: fieldBuilder.buildEdmTypeField('SubsequentMovementType', 'Edm.String', true),
                /**
                 * Static representation of the {@link transportationGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRANSPORTATION_GROUP: fieldBuilder.buildEdmTypeField('TransportationGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link underdelivTolrtdLmtRatioInPct} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNDERDELIV_TOLRTD_LMT_RATIO_IN_PCT: fieldBuilder.buildEdmTypeField('UnderdelivTolrtdLmtRatioInPct', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link unlimitedOverdeliveryIsAllowed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNLIMITED_OVERDELIVERY_IS_ALLOWED: fieldBuilder.buildEdmTypeField('UnlimitedOverdeliveryIsAllowed', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link varblShipgProcgDurationInDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VARBL_SHIPG_PROCG_DURATION_IN_DAYS: fieldBuilder.buildEdmTypeField('VarblShipgProcgDurationInDays', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link warehouse} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WAREHOUSE: fieldBuilder.buildEdmTypeField('Warehouse', 'Edm.String', true),
                /**
                 * Static representation of the {@link warehouseActivityStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WAREHOUSE_ACTIVITY_STATUS: fieldBuilder.buildEdmTypeField('WarehouseActivityStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link warehouseStagingArea} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WAREHOUSE_STAGING_AREA: fieldBuilder.buildEdmTypeField('WarehouseStagingArea', 'Edm.String', true),
                /**
                 * Static representation of the {@link deliveryVersion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_VERSION: fieldBuilder.buildEdmTypeField('DeliveryVersion', 'Edm.String', true),
                /**
                 * Static representation of the {@link warehouseStockCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WAREHOUSE_STOCK_CATEGORY: fieldBuilder.buildEdmTypeField('WarehouseStockCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link warehouseStorageBin} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WAREHOUSE_STORAGE_BIN: fieldBuilder.buildEdmTypeField('WarehouseStorageBin', 'Edm.String', true),
                /**
                 * Static representation of the {@link stockSegment} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STOCK_SEGMENT: fieldBuilder.buildEdmTypeField('StockSegment', 'Edm.String', true),
                /**
                 * Static representation of the {@link requirementSegment} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REQUIREMENT_SEGMENT: fieldBuilder.buildEdmTypeField('RequirementSegment', 'Edm.String', true),
                /**
                 * Static representation of the {@link productSeasonYear} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_SEASON_YEAR: fieldBuilder.buildEdmTypeField('ProductSeasonYear', 'Edm.String', true),
                /**
                 * Static representation of the {@link productSeason} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_SEASON: fieldBuilder.buildEdmTypeField('ProductSeason', 'Edm.String', true),
                /**
                 * Static representation of the {@link productCollection} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_COLLECTION: fieldBuilder.buildEdmTypeField('ProductCollection', 'Edm.String', true),
                /**
                 * Static representation of the {@link productTheme} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_THEME: fieldBuilder.buildEdmTypeField('ProductTheme', 'Edm.String', true),
                /**
                 * Static representation of the {@link productCharacteristic1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_CHARACTERISTIC_1: fieldBuilder.buildEdmTypeField('ProductCharacteristic1', 'Edm.String', true),
                /**
                 * Static representation of the {@link productCharacteristic2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_CHARACTERISTIC_2: fieldBuilder.buildEdmTypeField('ProductCharacteristic2', 'Edm.String', true),
                /**
                 * Static representation of the {@link productCharacteristic3} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_CHARACTERISTIC_3: fieldBuilder.buildEdmTypeField('ProductCharacteristic3', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', InbDeliveryItem_1.InbDeliveryItem)
            };
        }
        return this._schema;
    }
}
exports.InbDeliveryItemApi = InbDeliveryItemApi;
//# sourceMappingURL=InbDeliveryItemApi.js.map