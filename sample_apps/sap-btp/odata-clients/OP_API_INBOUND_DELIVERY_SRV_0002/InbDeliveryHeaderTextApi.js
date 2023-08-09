"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InbDeliveryHeaderTextApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const InbDeliveryHeaderText_1 = require("./InbDeliveryHeaderText");
const InbDeliveryHeaderTextRequestBuilder_1 = require("./InbDeliveryHeaderTextRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class InbDeliveryHeaderTextApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = InbDeliveryHeaderText_1.InbDeliveryHeaderText;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new InbDeliveryHeaderTextApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new InbDeliveryHeaderTextRequestBuilder_1.InbDeliveryHeaderTextRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(InbDeliveryHeaderText_1.InbDeliveryHeaderText, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link deliveryDocument} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_DOCUMENT: fieldBuilder.buildEdmTypeField('DeliveryDocument', 'Edm.String', false),
                /**
                 * Static representation of the {@link textElement} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TEXT_ELEMENT: fieldBuilder.buildEdmTypeField('TextElement', 'Edm.String', false),
                /**
                 * Static representation of the {@link language} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LANGUAGE: fieldBuilder.buildEdmTypeField('Language', 'Edm.String', false),
                /**
                 * Static representation of the {@link textElementDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TEXT_ELEMENT_DESCRIPTION: fieldBuilder.buildEdmTypeField('TextElementDescription', 'Edm.String', false),
                /**
                 * Static representation of the {@link textElementText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TEXT_ELEMENT_TEXT: fieldBuilder.buildEdmTypeField('TextElementText', 'Edm.String', false),
                /**
                 * Static representation of the {@link deliveryLongTextIsFormatted} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_LONG_TEXT_IS_FORMATTED: fieldBuilder.buildEdmTypeField('DeliveryLongTextIsFormatted', 'Edm.Boolean', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', InbDeliveryHeaderText_1.InbDeliveryHeaderText)
            };
        }
        return this._schema;
    }
}
exports.InbDeliveryHeaderTextApi = InbDeliveryHeaderTextApi;
//# sourceMappingURL=InbDeliveryHeaderTextApi.js.map