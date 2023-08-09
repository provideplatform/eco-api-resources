"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InbDeliveryPartnerRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link InbDeliveryPartner} entity.
 */
class InbDeliveryPartnerRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `InbDeliveryPartner` entity based on its keys.
     * @param partnerFunction Key property. See {@link InbDeliveryPartner.partnerFunction}.
     * @param sdDocument Key property. See {@link InbDeliveryPartner.sdDocument}.
     * @returns A request builder for creating requests to retrieve one `InbDeliveryPartner` entity based on its keys.
     */
    getByKey(partnerFunction, sdDocument) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            PartnerFunction: partnerFunction,
            SDDocument: sdDocument
        });
    }
    /**
     * Returns a request builder for querying all `InbDeliveryPartner` entities.
     * @returns A request builder for creating requests to retrieve all `InbDeliveryPartner` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.InbDeliveryPartnerRequestBuilder = InbDeliveryPartnerRequestBuilder;
//# sourceMappingURL=InbDeliveryPartnerRequestBuilder.js.map