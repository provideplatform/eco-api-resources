"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InbDeliveryAddress = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_InbDeliveryAddress" of service "API_INBOUND_DELIVERY_SRV".
 */
class InbDeliveryAddress extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.InbDeliveryAddress = InbDeliveryAddress;
/**
 * Technical entity name for InbDeliveryAddress.
 */
InbDeliveryAddress._entityName = 'A_InbDeliveryAddress';
/**
 * Default url path for the according service.
 */
InbDeliveryAddress._defaultBasePath = '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002';
/**
 * All key fields of the InbDeliveryAddress entity
 */
InbDeliveryAddress._keys = ['AddressID'];
//# sourceMappingURL=InbDeliveryAddress.js.map