"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InbDeliverySerialNmbrApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const InbDeliverySerialNmbr_1 = require("./InbDeliverySerialNmbr");
const InbDeliverySerialNmbrRequestBuilder_1 = require("./InbDeliverySerialNmbrRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class InbDeliverySerialNmbrApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = InbDeliverySerialNmbr_1.InbDeliverySerialNmbr;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new InbDeliverySerialNmbrApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_MAINTENANCE_ITEM_OBJECT: new odata_v2_1.Link('to_MaintenanceItemObject', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new InbDeliverySerialNmbrRequestBuilder_1.InbDeliverySerialNmbrRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(InbDeliverySerialNmbr_1.InbDeliverySerialNmbr, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link deliveryDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_DATE: fieldBuilder.buildEdmTypeField('DeliveryDate', 'Edm.DateTime', false),
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
                 * Static representation of the {@link maintenanceItemObjectList} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAINTENANCE_ITEM_OBJECT_LIST: fieldBuilder.buildEdmTypeField('MaintenanceItemObjectList', 'Edm.Int64', false),
                /**
                 * Static representation of the {@link sdDocumentCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SD_DOCUMENT_CATEGORY: fieldBuilder.buildEdmTypeField('SDDocumentCategory', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', InbDeliverySerialNmbr_1.InbDeliverySerialNmbr)
            };
        }
        return this._schema;
    }
}
exports.InbDeliverySerialNmbrApi = InbDeliverySerialNmbrApi;
//# sourceMappingURL=InbDeliverySerialNmbrApi.js.map