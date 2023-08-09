"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InbDeliveryItem = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_InbDeliveryItem" of service "API_INBOUND_DELIVERY_SRV".
 */
class InbDeliveryItem extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.InbDeliveryItem = InbDeliveryItem;
/**
 * Technical entity name for InbDeliveryItem.
 */
InbDeliveryItem._entityName = 'A_InbDeliveryItem';
/**
 * Default url path for the according service.
 */
InbDeliveryItem._defaultBasePath = '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002';
/**
 * All key fields of the InbDeliveryItem entity
 */
InbDeliveryItem._keys = ['DeliveryDocument', 'DeliveryDocumentItem'];
//# sourceMappingURL=InbDeliveryItem.js.map