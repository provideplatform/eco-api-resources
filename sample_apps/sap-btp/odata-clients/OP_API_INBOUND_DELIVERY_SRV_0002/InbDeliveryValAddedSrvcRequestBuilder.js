"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InbDeliveryValAddedSrvcRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link InbDeliveryValAddedSrvc} entity.
 */
class InbDeliveryValAddedSrvcRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `InbDeliveryValAddedSrvc` entity based on its keys.
     * @param valAddedSrvcItemGroup Key property. See {@link InbDeliveryValAddedSrvc.valAddedSrvcItemGroup}.
     * @param valAddedSrvcItemNumber Key property. See {@link InbDeliveryValAddedSrvc.valAddedSrvcItemNumber}.
     * @param valAddedSrvcTransactionNumber Key property. See {@link InbDeliveryValAddedSrvc.valAddedSrvcTransactionNumber}.
     * @param valueAddedServiceType Key property. See {@link InbDeliveryValAddedSrvc.valueAddedServiceType}.
     * @param valueAddedSubServiceType Key property. See {@link InbDeliveryValAddedSrvc.valueAddedSubServiceType}.
     * @returns A request builder for creating requests to retrieve one `InbDeliveryValAddedSrvc` entity based on its keys.
     */
    getByKey(valAddedSrvcItemGroup, valAddedSrvcItemNumber, valAddedSrvcTransactionNumber, valueAddedServiceType, valueAddedSubServiceType) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ValAddedSrvcItemGroup: valAddedSrvcItemGroup,
            ValAddedSrvcItemNumber: valAddedSrvcItemNumber,
            ValAddedSrvcTransactionNumber: valAddedSrvcTransactionNumber,
            ValueAddedServiceType: valueAddedServiceType,
            ValueAddedSubServiceType: valueAddedSubServiceType
        });
    }
    /**
     * Returns a request builder for querying all `InbDeliveryValAddedSrvc` entities.
     * @returns A request builder for creating requests to retrieve all `InbDeliveryValAddedSrvc` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.InbDeliveryValAddedSrvcRequestBuilder = InbDeliveryValAddedSrvcRequestBuilder;
//# sourceMappingURL=InbDeliveryValAddedSrvcRequestBuilder.js.map