"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceItemObjListRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link MaintenanceItemObjList} entity.
 */
class MaintenanceItemObjListRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `MaintenanceItemObjList` entity based on its keys.
     * @param maintenanceItemObject Key property. See {@link MaintenanceItemObjList.maintenanceItemObject}.
     * @param maintenanceItemObjectList Key property. See {@link MaintenanceItemObjList.maintenanceItemObjectList}.
     * @returns A request builder for creating requests to retrieve one `MaintenanceItemObjList` entity based on its keys.
     */
    getByKey(maintenanceItemObject, maintenanceItemObjectList) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            MaintenanceItemObject: maintenanceItemObject,
            MaintenanceItemObjectList: maintenanceItemObjectList
        });
    }
    /**
     * Returns a request builder for querying all `MaintenanceItemObjList` entities.
     * @returns A request builder for creating requests to retrieve all `MaintenanceItemObjList` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.MaintenanceItemObjListRequestBuilder = MaintenanceItemObjListRequestBuilder;
//# sourceMappingURL=MaintenanceItemObjListRequestBuilder.js.map