"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InbDeliveryValAddedSrvc = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_InbDeliveryValAddedSrvc" of service "API_INBOUND_DELIVERY_SRV".
 */
class InbDeliveryValAddedSrvc extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.InbDeliveryValAddedSrvc = InbDeliveryValAddedSrvc;
/**
 * Technical entity name for InbDeliveryValAddedSrvc.
 */
InbDeliveryValAddedSrvc._entityName = 'A_InbDeliveryValAddedSrvc';
/**
 * Default url path for the according service.
 */
InbDeliveryValAddedSrvc._defaultBasePath = '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002';
/**
 * All key fields of the InbDeliveryValAddedSrvc entity
 */
InbDeliveryValAddedSrvc._keys = [
    'ValAddedSrvcItemGroup',
    'ValAddedSrvcItemNumber',
    'ValAddedSrvcTransactionNumber',
    'ValueAddedServiceType',
    'ValueAddedSubServiceType'
];
//# sourceMappingURL=InbDeliveryValAddedSrvc.js.map