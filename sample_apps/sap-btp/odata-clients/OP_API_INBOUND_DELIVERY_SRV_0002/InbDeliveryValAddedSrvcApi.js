"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InbDeliveryValAddedSrvcApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const InbDeliveryValAddedSrvc_1 = require("./InbDeliveryValAddedSrvc");
const InbDeliveryValAddedSrvcRequestBuilder_1 = require("./InbDeliveryValAddedSrvcRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class InbDeliveryValAddedSrvcApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = InbDeliveryValAddedSrvc_1.InbDeliveryValAddedSrvc;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new InbDeliveryValAddedSrvcApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new InbDeliveryValAddedSrvcRequestBuilder_1.InbDeliveryValAddedSrvcRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(InbDeliveryValAddedSrvc_1.InbDeliveryValAddedSrvc, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link valAddedSrvcHasToBeOrdered} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VAL_ADDED_SRVC_HAS_TO_BE_ORDERED: fieldBuilder.buildEdmTypeField('ValAddedSrvcHasToBeOrdered', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link valAddedSrvcIncrement} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VAL_ADDED_SRVC_INCREMENT: fieldBuilder.buildEdmTypeField('ValAddedSrvcIncrement', 'Edm.String', false),
                /**
                 * Static representation of the {@link valAddedSrvcIsCreatedManually} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VAL_ADDED_SRVC_IS_CREATED_MANUALLY: fieldBuilder.buildEdmTypeField('ValAddedSrvcIsCreatedManually', 'Edm.String', false),
                /**
                 * Static representation of the {@link valAddedSrvcItemGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VAL_ADDED_SRVC_ITEM_GROUP: fieldBuilder.buildEdmTypeField('ValAddedSrvcItemGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link valAddedSrvcItemNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VAL_ADDED_SRVC_ITEM_NUMBER: fieldBuilder.buildEdmTypeField('ValAddedSrvcItemNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link valAddedSrvcItemNumberInMm} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VAL_ADDED_SRVC_ITEM_NUMBER_IN_MM: fieldBuilder.buildEdmTypeField('ValAddedSrvcItemNumberInMM', 'Edm.String', false),
                /**
                 * Static representation of the {@link valAddedSrvcMmRefDocItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VAL_ADDED_SRVC_MM_REF_DOC_ITEM: fieldBuilder.buildEdmTypeField('ValAddedSrvcMMRefDocItem', 'Edm.String', false),
                /**
                 * Static representation of the {@link valAddedSrvcMmRefDocNmbr} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VAL_ADDED_SRVC_MM_REF_DOC_NMBR: fieldBuilder.buildEdmTypeField('ValAddedSrvcMMRefDocNmbr', 'Edm.String', false),
                /**
                 * Static representation of the {@link valAddedSrvcTransactionNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VAL_ADDED_SRVC_TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField('ValAddedSrvcTransactionNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link valueAddedServiceChargeCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE_ADDED_SERVICE_CHARGE_CODE: fieldBuilder.buildEdmTypeField('ValueAddedServiceChargeCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link valueAddedServiceDeletionCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE_ADDED_SERVICE_DELETION_CODE: fieldBuilder.buildEdmTypeField('ValueAddedServiceDeletionCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link valueAddedServiceProduct} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE_ADDED_SERVICE_PRODUCT: fieldBuilder.buildEdmTypeField('ValueAddedServiceProduct', 'Edm.String', false),
                /**
                 * Static representation of the {@link valueAddedServiceText1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE_ADDED_SERVICE_TEXT_1: fieldBuilder.buildEdmTypeField('ValueAddedServiceText1', 'Edm.String', false),
                /**
                 * Static representation of the {@link valueAddedServiceText2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE_ADDED_SERVICE_TEXT_2: fieldBuilder.buildEdmTypeField('ValueAddedServiceText2', 'Edm.String', false),
                /**
                 * Static representation of the {@link valueaddedservicetext3} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUEADDEDSERVICETEXT_3: fieldBuilder.buildEdmTypeField('Valueaddedservicetext3', 'Edm.String', false),
                /**
                 * Static representation of the {@link valueaddedservicelongtext} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUEADDEDSERVICELONGTEXT: fieldBuilder.buildEdmTypeField('Valueaddedservicelongtext', 'Edm.String', false),
                /**
                 * Static representation of the {@link valueAddedServiceType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE_ADDED_SERVICE_TYPE: fieldBuilder.buildEdmTypeField('ValueAddedServiceType', 'Edm.String', false),
                /**
                 * Static representation of the {@link valueAddedSubServiceType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE_ADDED_SUB_SERVICE_TYPE: fieldBuilder.buildEdmTypeField('ValueAddedSubServiceType', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', InbDeliveryValAddedSrvc_1.InbDeliveryValAddedSrvc)
            };
        }
        return this._schema;
    }
}
exports.InbDeliveryValAddedSrvcApi = InbDeliveryValAddedSrvcApi;
//# sourceMappingURL=InbDeliveryValAddedSrvcApi.js.map