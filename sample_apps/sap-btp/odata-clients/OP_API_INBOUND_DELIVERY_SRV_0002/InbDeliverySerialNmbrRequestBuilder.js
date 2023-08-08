"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InbDeliverySerialNmbrRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link InbDeliverySerialNmbr} entity.
 */
class InbDeliverySerialNmbrRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `InbDeliverySerialNmbr` entity based on its keys.
     * @param maintenanceItemObjectList Key property. See {@link InbDeliverySerialNmbr.maintenanceItemObjectList}.
     * @returns A request builder for creating requests to retrieve one `InbDeliverySerialNmbr` entity based on its keys.
     */
    getByKey(maintenanceItemObjectList) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { MaintenanceItemObjectList: maintenanceItemObjectList });
    }
    /**
     * Returns a request builder for querying all `InbDeliverySerialNmbr` entities.
     * @returns A request builder for creating requests to retrieve all `InbDeliverySerialNmbr` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.InbDeliverySerialNmbrRequestBuilder = InbDeliverySerialNmbrRequestBuilder;
//# sourceMappingURL=InbDeliverySerialNmbrRequestBuilder.js.map