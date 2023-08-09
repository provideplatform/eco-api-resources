"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutawayReport = exports.PutawayReportField = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * PutawayReportField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class PutawayReportField extends odata_v2_1.ComplexTypeField {
    /**
     * Creates an instance of PutawayReportField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, PutawayReport, fieldOptions);
        this._fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
        /**
         * Representation of the {@link PutawayReport.systemMessageIdentification} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.systemMessageIdentification = this._fieldBuilder.buildEdmTypeField('SystemMessageIdentification', 'Edm.String', true);
        /**
         * Representation of the {@link PutawayReport.systemMessageNumber} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.systemMessageNumber = this._fieldBuilder.buildEdmTypeField('SystemMessageNumber', 'Edm.String', true);
        /**
         * Representation of the {@link PutawayReport.systemMessageType} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.systemMessageType = this._fieldBuilder.buildEdmTypeField('SystemMessageType', 'Edm.String', true);
        /**
         * Representation of the {@link PutawayReport.systemMessageVariable1} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.systemMessageVariable1 = this._fieldBuilder.buildEdmTypeField('SystemMessageVariable1', 'Edm.String', true);
        /**
         * Representation of the {@link PutawayReport.systemMessageVariable2} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.systemMessageVariable2 = this._fieldBuilder.buildEdmTypeField('SystemMessageVariable2', 'Edm.String', true);
        /**
         * Representation of the {@link PutawayReport.systemMessageVariable3} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.systemMessageVariable3 = this._fieldBuilder.buildEdmTypeField('SystemMessageVariable3', 'Edm.String', true);
        /**
         * Representation of the {@link PutawayReport.systemMessageVariable4} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.systemMessageVariable4 = this._fieldBuilder.buildEdmTypeField('SystemMessageVariable4', 'Edm.String', true);
        /**
         * Representation of the {@link PutawayReport.batch} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.batch = this._fieldBuilder.buildEdmTypeField('Batch', 'Edm.String', true);
        /**
         * Representation of the {@link PutawayReport.deliveryQuantityUnit} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.deliveryQuantityUnit = this._fieldBuilder.buildEdmTypeField('DeliveryQuantityUnit', 'Edm.String', true);
        /**
         * Representation of the {@link PutawayReport.actualDeliveryQuantity} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.actualDeliveryQuantity = this._fieldBuilder.buildEdmTypeField('ActualDeliveryQuantity', 'Edm.Decimal', true);
        /**
         * Representation of the {@link PutawayReport.deliveryDocumentItemText} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.deliveryDocumentItemText = this._fieldBuilder.buildEdmTypeField('DeliveryDocumentItemText', 'Edm.String', true);
        /**
         * Representation of the {@link PutawayReport.material} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.material = this._fieldBuilder.buildEdmTypeField('Material', 'Edm.String', true);
        /**
         * Representation of the {@link PutawayReport.deliveryDocumentItem} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.deliveryDocumentItem = this._fieldBuilder.buildEdmTypeField('DeliveryDocumentItem', 'Edm.String', true);
        /**
         * Representation of the {@link PutawayReport.deliveryDocument} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.deliveryDocument = this._fieldBuilder.buildEdmTypeField('DeliveryDocument', 'Edm.String', true);
    }
}
exports.PutawayReportField = PutawayReportField;
var PutawayReport;
(function (PutawayReport) {
    /**
     * Metadata information on all properties of the `PutawayReport` complex type.
     */
    PutawayReport._propertyMetadata = [
        {
            originalName: 'SystemMessageIdentification',
            name: 'systemMessageIdentification',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'SystemMessageNumber',
            name: 'systemMessageNumber',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'SystemMessageType',
            name: 'systemMessageType',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'SystemMessageVariable1',
            name: 'systemMessageVariable1',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'SystemMessageVariable2',
            name: 'systemMessageVariable2',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'SystemMessageVariable3',
            name: 'systemMessageVariable3',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'SystemMessageVariable4',
            name: 'systemMessageVariable4',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'Batch',
            name: 'batch',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'DeliveryQuantityUnit',
            name: 'deliveryQuantityUnit',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'ActualDeliveryQuantity',
            name: 'actualDeliveryQuantity',
            type: 'Edm.Decimal',
            isCollection: false
        },
        {
            originalName: 'DeliveryDocumentItemText',
            name: 'deliveryDocumentItemText',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'Material',
            name: 'material',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'DeliveryDocumentItem',
            name: 'deliveryDocumentItem',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'DeliveryDocument',
            name: 'deliveryDocument',
            type: 'Edm.String',
            isCollection: false
        }
    ];
})(PutawayReport || (exports.PutawayReport = PutawayReport = {}));
//# sourceMappingURL=PutawayReport.js.map