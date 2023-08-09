"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InbDeliveryDocFlowApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const InbDeliveryDocFlow_1 = require("./InbDeliveryDocFlow");
const InbDeliveryDocFlowRequestBuilder_1 = require("./InbDeliveryDocFlowRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class InbDeliveryDocFlowApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = InbDeliveryDocFlow_1.InbDeliveryDocFlow;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new InbDeliveryDocFlowApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new InbDeliveryDocFlowRequestBuilder_1.InbDeliveryDocFlowRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(InbDeliveryDocFlow_1.InbDeliveryDocFlow, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link deliveryVersion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_VERSION: fieldBuilder.buildEdmTypeField('DeliveryVersion', 'Edm.String', true),
                /**
                 * Static representation of the {@link precedingDocument} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRECEDING_DOCUMENT: fieldBuilder.buildEdmTypeField('PrecedingDocument', 'Edm.String', false),
                /**
                 * Static representation of the {@link precedingDocumentCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRECEDING_DOCUMENT_CATEGORY: fieldBuilder.buildEdmTypeField('PrecedingDocumentCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link precedingDocumentItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRECEDING_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField('PrecedingDocumentItem', 'Edm.String', false),
                /**
                 * Static representation of the {@link quantityInBaseUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUANTITY_IN_BASE_UNIT: fieldBuilder.buildEdmTypeField('QuantityInBaseUnit', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link sdFulfillmentCalculationRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SD_FULFILLMENT_CALCULATION_RULE: fieldBuilder.buildEdmTypeField('SDFulfillmentCalculationRule', 'Edm.String', true),
                /**
                 * Static representation of the {@link subsequentDocument} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUBSEQUENT_DOCUMENT: fieldBuilder.buildEdmTypeField('SubsequentDocument', 'Edm.String', true),
                /**
                 * Static representation of the {@link subsequentDocumentCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUBSEQUENT_DOCUMENT_CATEGORY: fieldBuilder.buildEdmTypeField('SubsequentDocumentCategory', 'Edm.String', false),
                /**
                 * Static representation of the {@link subsequentDocumentItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUBSEQUENT_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField('SubsequentDocumentItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link transferOrderInWrhsMgmtIsConfd} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRANSFER_ORDER_IN_WRHS_MGMT_IS_CONFD: fieldBuilder.buildEdmTypeField('TransferOrderInWrhsMgmtIsConfd', 'Edm.Boolean', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', InbDeliveryDocFlow_1.InbDeliveryDocFlow)
            };
        }
        return this._schema;
    }
}
exports.InbDeliveryDocFlowApi = InbDeliveryDocFlowApi;
//# sourceMappingURL=InbDeliveryDocFlowApi.js.map