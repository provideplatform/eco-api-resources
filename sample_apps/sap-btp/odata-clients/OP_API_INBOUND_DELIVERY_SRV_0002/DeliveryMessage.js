"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryMessage = exports.DeliveryMessageField = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * DeliveryMessageField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class DeliveryMessageField extends odata_v2_1.ComplexTypeField {
    /**
     * Creates an instance of DeliveryMessageField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, DeliveryMessage, fieldOptions);
        this._fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
        /**
         * Representation of the {@link DeliveryMessage.collectiveProcessing} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.collectiveProcessing = this._fieldBuilder.buildEdmTypeField('CollectiveProcessing', 'Edm.String', true);
        /**
         * Representation of the {@link DeliveryMessage.deliveryDocument} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.deliveryDocument = this._fieldBuilder.buildEdmTypeField('DeliveryDocument', 'Edm.String', true);
        /**
         * Representation of the {@link DeliveryMessage.deliveryDocumentItem} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.deliveryDocumentItem = this._fieldBuilder.buildEdmTypeField('DeliveryDocumentItem', 'Edm.String', true);
        /**
         * Representation of the {@link DeliveryMessage.scheduleLine} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.scheduleLine = this._fieldBuilder.buildEdmTypeField('ScheduleLine', 'Edm.String', true);
        /**
         * Representation of the {@link DeliveryMessage.collectiveProcessingMsgCounter} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.collectiveProcessingMsgCounter = this._fieldBuilder.buildEdmTypeField('CollectiveProcessingMsgCounter', 'Edm.String', true);
        /**
         * Representation of the {@link DeliveryMessage.systemMessageIdentification} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.systemMessageIdentification = this._fieldBuilder.buildEdmTypeField('SystemMessageIdentification', 'Edm.String', true);
        /**
         * Representation of the {@link DeliveryMessage.systemMessageNumber} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.systemMessageNumber = this._fieldBuilder.buildEdmTypeField('SystemMessageNumber', 'Edm.String', true);
        /**
         * Representation of the {@link DeliveryMessage.systemMessageType} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.systemMessageType = this._fieldBuilder.buildEdmTypeField('SystemMessageType', 'Edm.String', true);
        /**
         * Representation of the {@link DeliveryMessage.systemMessageVariable1} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.systemMessageVariable1 = this._fieldBuilder.buildEdmTypeField('SystemMessageVariable1', 'Edm.String', true);
        /**
         * Representation of the {@link DeliveryMessage.systemMessageVariable2} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.systemMessageVariable2 = this._fieldBuilder.buildEdmTypeField('SystemMessageVariable2', 'Edm.String', true);
        /**
         * Representation of the {@link DeliveryMessage.systemMessageVariable3} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.systemMessageVariable3 = this._fieldBuilder.buildEdmTypeField('SystemMessageVariable3', 'Edm.String', true);
        /**
         * Representation of the {@link DeliveryMessage.systemMessageVariable4} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.systemMessageVariable4 = this._fieldBuilder.buildEdmTypeField('SystemMessageVariable4', 'Edm.String', true);
        /**
         * Representation of the {@link DeliveryMessage.collectiveProcessingType} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.collectiveProcessingType = this._fieldBuilder.buildEdmTypeField('CollectiveProcessingType', 'Edm.String', true);
    }
}
exports.DeliveryMessageField = DeliveryMessageField;
var DeliveryMessage;
(function (DeliveryMessage) {
    /**
     * Metadata information on all properties of the `DeliveryMessage` complex type.
     */
    DeliveryMessage._propertyMetadata = [
        {
            originalName: 'CollectiveProcessing',
            name: 'collectiveProcessing',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'DeliveryDocument',
            name: 'deliveryDocument',
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
            originalName: 'ScheduleLine',
            name: 'scheduleLine',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'CollectiveProcessingMsgCounter',
            name: 'collectiveProcessingMsgCounter',
            type: 'Edm.String',
            isCollection: false
        },
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
            originalName: 'CollectiveProcessingType',
            name: 'collectiveProcessingType',
            type: 'Edm.String',
            isCollection: false
        }
    ];
})(DeliveryMessage || (exports.DeliveryMessage = DeliveryMessage = {}));
//# sourceMappingURL=DeliveryMessage.js.map