"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultOpApiInboundDeliverySrv0002Path = exports.changeset = exports.batch = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const util_1 = require("@sap-cloud-sdk/util");
function batch(first, ...rest) {
    return new odata_v2_1.ODataBatchRequestBuilder(exports.defaultOpApiInboundDeliverySrv0002Path, (0, util_1.transformVariadicArgumentToArray)(first, rest));
}
exports.batch = batch;
function changeset(first, ...rest) {
    return new odata_v2_1.BatchChangeSet((0, util_1.transformVariadicArgumentToArray)(first, rest));
}
exports.changeset = changeset;
exports.defaultOpApiInboundDeliverySrv0002Path = '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002';
//# sourceMappingURL=BatchRequest.js.map