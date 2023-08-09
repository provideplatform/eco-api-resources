"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceItemObjListApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const MaintenanceItemObjList_1 = require("./MaintenanceItemObjList");
const MaintenanceItemObjListRequestBuilder_1 = require("./MaintenanceItemObjListRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class MaintenanceItemObjListApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = MaintenanceItemObjList_1.MaintenanceItemObjList;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new MaintenanceItemObjListApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new MaintenanceItemObjListRequestBuilder_1.MaintenanceItemObjListRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(MaintenanceItemObjList_1.MaintenanceItemObjList, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link assembly} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ASSEMBLY: fieldBuilder.buildEdmTypeField('Assembly', 'Edm.String', false),
                /**
                 * Static representation of the {@link equipment} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EQUIPMENT: fieldBuilder.buildEdmTypeField('Equipment', 'Edm.String', false),
                /**
                 * Static representation of the {@link functionalLocation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FUNCTIONAL_LOCATION: fieldBuilder.buildEdmTypeField('FunctionalLocation', 'Edm.String', false),
                /**
                 * Static representation of the {@link maintenanceItemObject} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAINTENANCE_ITEM_OBJECT: fieldBuilder.buildEdmTypeField('MaintenanceItemObject', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link maintenanceItemObjectList} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAINTENANCE_ITEM_OBJECT_LIST: fieldBuilder.buildEdmTypeField('MaintenanceItemObjectList', 'Edm.Int64', false),
                /**
                 * Static representation of the {@link maintenanceNotification} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAINTENANCE_NOTIFICATION: fieldBuilder.buildEdmTypeField('MaintenanceNotification', 'Edm.String', false),
                /**
                 * Static representation of the {@link maintObjectLocAcctAssgmtNmbr} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAINT_OBJECT_LOC_ACCT_ASSGMT_NMBR: fieldBuilder.buildEdmTypeField('MaintObjectLocAcctAssgmtNmbr', 'Edm.String', false),
                /**
                 * Static representation of the {@link material} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MATERIAL: fieldBuilder.buildEdmTypeField('Material', 'Edm.String', false),
                /**
                 * Static representation of the {@link serialNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERIAL_NUMBER: fieldBuilder.buildEdmTypeField('SerialNumber', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', MaintenanceItemObjList_1.MaintenanceItemObjList)
            };
        }
        return this._schema;
    }
}
exports.MaintenanceItemObjListApi = MaintenanceItemObjListApi;
//# sourceMappingURL=MaintenanceItemObjListApi.js.map