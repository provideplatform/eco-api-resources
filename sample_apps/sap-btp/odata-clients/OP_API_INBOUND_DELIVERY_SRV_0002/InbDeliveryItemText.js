"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InbDeliveryItemText = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_InbDeliveryItemText" of service "API_INBOUND_DELIVERY_SRV".
 */
class InbDeliveryItemText extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.InbDeliveryItemText = InbDeliveryItemText;
/**
 * Technical entity name for InbDeliveryItemText.
 */
InbDeliveryItemText._entityName = 'A_InbDeliveryItemText';
/**
 * Default url path for the according service.
 */
InbDeliveryItemText._defaultBasePath = '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002';
/**
 * All key fields of the InbDeliveryItemText entity
 */
InbDeliveryItemText._keys = [
    'DeliveryDocument',
    'DeliveryDocumentItem',
    'TextElement',
    'Language'
];
//# sourceMappingURL=InbDeliveryItemText.js.map