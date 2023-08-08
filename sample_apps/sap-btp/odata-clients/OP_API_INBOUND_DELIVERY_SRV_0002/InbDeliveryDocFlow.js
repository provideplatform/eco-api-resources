"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InbDeliveryDocFlow = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_InbDeliveryDocFlow" of service "API_INBOUND_DELIVERY_SRV".
 */
class InbDeliveryDocFlow extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.InbDeliveryDocFlow = InbDeliveryDocFlow;
/**
 * Technical entity name for InbDeliveryDocFlow.
 */
InbDeliveryDocFlow._entityName = 'A_InbDeliveryDocFlow';
/**
 * Default url path for the according service.
 */
InbDeliveryDocFlow._defaultBasePath = '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002';
/**
 * All key fields of the InbDeliveryDocFlow entity
 */
InbDeliveryDocFlow._keys = [
    'PrecedingDocument',
    'PrecedingDocumentItem',
    'SubsequentDocumentCategory'
];
//# sourceMappingURL=InbDeliveryDocFlow.js.map