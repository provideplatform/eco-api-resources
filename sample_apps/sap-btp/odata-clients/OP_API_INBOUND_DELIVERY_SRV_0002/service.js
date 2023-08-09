"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.opApiInboundDeliverySrv0002 = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const InbDeliveryValAddedSrvcApi_1 = require("./InbDeliveryValAddedSrvcApi");
const MaintenanceItemObjListApi_1 = require("./MaintenanceItemObjListApi");
const InbDeliveryDocFlowApi_1 = require("./InbDeliveryDocFlowApi");
const InbDeliveryHeaderApi_1 = require("./InbDeliveryHeaderApi");
const InbDeliveryItemApi_1 = require("./InbDeliveryItemApi");
const InbDeliveryPartnerApi_1 = require("./InbDeliveryPartnerApi");
const InbDeliverySerialNmbrApi_1 = require("./InbDeliverySerialNmbrApi");
const InbDeliveryAddressApi_1 = require("./InbDeliveryAddressApi");
const InbDeliveryHeaderTextApi_1 = require("./InbDeliveryHeaderTextApi");
const InbDeliveryItemTextApi_1 = require("./InbDeliveryItemTextApi");
const operations_1 = require("./operations");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function opApiInboundDeliverySrv0002(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new OpApiInboundDeliverySrv0002((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
exports.opApiInboundDeliverySrv0002 = opApiInboundDeliverySrv0002;
class OpApiInboundDeliverySrv0002 {
    constructor(deSerializers) {
        this.apis = {};
        this.deSerializers = deSerializers;
    }
    initApi(key, entityApi) {
        if (!this.apis[key]) {
            this.apis[key] = entityApi._privateFactory(this.deSerializers);
        }
        return this.apis[key];
    }
    get inbDeliveryValAddedSrvcApi() {
        return this.initApi('inbDeliveryValAddedSrvcApi', InbDeliveryValAddedSrvcApi_1.InbDeliveryValAddedSrvcApi);
    }
    get maintenanceItemObjListApi() {
        return this.initApi('maintenanceItemObjListApi', MaintenanceItemObjListApi_1.MaintenanceItemObjListApi);
    }
    get inbDeliveryDocFlowApi() {
        return this.initApi('inbDeliveryDocFlowApi', InbDeliveryDocFlowApi_1.InbDeliveryDocFlowApi);
    }
    get inbDeliveryHeaderApi() {
        const api = this.initApi('inbDeliveryHeaderApi', InbDeliveryHeaderApi_1.InbDeliveryHeaderApi);
        const linkedApis = [
            this.initApi('inbDeliveryHeaderTextApi', InbDeliveryHeaderTextApi_1.InbDeliveryHeaderTextApi),
            this.initApi('inbDeliveryItemApi', InbDeliveryItemApi_1.InbDeliveryItemApi),
            this.initApi('inbDeliveryPartnerApi', InbDeliveryPartnerApi_1.InbDeliveryPartnerApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get inbDeliveryItemApi() {
        const api = this.initApi('inbDeliveryItemApi', InbDeliveryItemApi_1.InbDeliveryItemApi);
        const linkedApis = [
            this.initApi('inbDeliveryItemTextApi', InbDeliveryItemTextApi_1.InbDeliveryItemTextApi),
            this.initApi('inbDeliveryDocFlowApi', InbDeliveryDocFlowApi_1.InbDeliveryDocFlowApi),
            this.initApi('inbDeliverySerialNmbrApi', InbDeliverySerialNmbrApi_1.InbDeliverySerialNmbrApi),
            this.initApi('inbDeliveryValAddedSrvcApi', InbDeliveryValAddedSrvcApi_1.InbDeliveryValAddedSrvcApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get inbDeliveryPartnerApi() {
        const api = this.initApi('inbDeliveryPartnerApi', InbDeliveryPartnerApi_1.InbDeliveryPartnerApi);
        const linkedApis = [
            this.initApi('inbDeliveryAddressApi', InbDeliveryAddressApi_1.InbDeliveryAddressApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get inbDeliverySerialNmbrApi() {
        const api = this.initApi('inbDeliverySerialNmbrApi', InbDeliverySerialNmbrApi_1.InbDeliverySerialNmbrApi);
        const linkedApis = [
            this.initApi('maintenanceItemObjListApi', MaintenanceItemObjListApi_1.MaintenanceItemObjListApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get inbDeliveryAddressApi() {
        return this.initApi('inbDeliveryAddressApi', InbDeliveryAddressApi_1.InbDeliveryAddressApi);
    }
    get inbDeliveryHeaderTextApi() {
        return this.initApi('inbDeliveryHeaderTextApi', InbDeliveryHeaderTextApi_1.InbDeliveryHeaderTextApi);
    }
    get inbDeliveryItemTextApi() {
        return this.initApi('inbDeliveryItemTextApi', InbDeliveryItemTextApi_1.InbDeliveryItemTextApi);
    }
    get operations() {
        return {
            confirmPutawayAllItems: (parameter) => (0, operations_1.confirmPutawayAllItems)(parameter, this.deSerializers),
            confirmPutawayOneItem: (parameter) => (0, operations_1.confirmPutawayOneItem)(parameter, this.deSerializers),
            postGoodsReceipt: (parameter) => (0, operations_1.postGoodsReceipt)(parameter, this.deSerializers),
            putawayAllItems: (parameter) => (0, operations_1.putawayAllItems)(parameter, this.deSerializers),
            putawayOneItem: (parameter) => (0, operations_1.putawayOneItem)(parameter, this.deSerializers),
            reverseGoodsReceipt: (parameter) => (0, operations_1.reverseGoodsReceipt)(parameter, this.deSerializers),
            addSerialNumberToDeliveryItem: (parameter) => (0, operations_1.addSerialNumberToDeliveryItem)(parameter, this.deSerializers),
            deleteAllSerialNumbersFromDeliveryItem: (parameter) => (0, operations_1.deleteAllSerialNumbersFromDeliveryItem)(parameter, this.deSerializers),
            deleteSerialNumberFromDeliveryItem: (parameter) => (0, operations_1.deleteSerialNumberFromDeliveryItem)(parameter, this.deSerializers),
            setPutawayQuantityWithBaseQuantity: (parameter) => (0, operations_1.setPutawayQuantityWithBaseQuantity)(parameter, this.deSerializers),
            putawayOneItemWithBaseQuantity: (parameter) => (0, operations_1.putawayOneItemWithBaseQuantity)(parameter, this.deSerializers),
            putawayOneItemWithSalesQuantity: (parameter) => (0, operations_1.putawayOneItemWithSalesQuantity)(parameter, this.deSerializers)
        };
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map