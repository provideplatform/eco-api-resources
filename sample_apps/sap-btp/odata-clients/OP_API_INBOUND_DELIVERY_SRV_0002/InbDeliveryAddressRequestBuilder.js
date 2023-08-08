"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InbDeliveryAddressRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link InbDeliveryAddress} entity.
 */
class InbDeliveryAddressRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `InbDeliveryAddress` entity based on its keys.
     * @param addressId Key property. See {@link InbDeliveryAddress.addressId}.
     * @returns A request builder for creating requests to retrieve one `InbDeliveryAddress` entity based on its keys.
     */
    getByKey(addressId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { AddressID: addressId });
    }
    /**
     * Returns a request builder for querying all `InbDeliveryAddress` entities.
     * @returns A request builder for creating requests to retrieve all `InbDeliveryAddress` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.InbDeliveryAddressRequestBuilder = InbDeliveryAddressRequestBuilder;
//# sourceMappingURL=InbDeliveryAddressRequestBuilder.js.map