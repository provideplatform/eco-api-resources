"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InbDeliveryHeaderRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const InbDeliveryHeader_1 = require("./InbDeliveryHeader");
/**
 * Request builder class for operations supported on the {@link InbDeliveryHeader} entity.
 */
class InbDeliveryHeaderRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `InbDeliveryHeader` entity based on its keys.
     * @param deliveryDocument Key property. See {@link InbDeliveryHeader.deliveryDocument}.
     * @returns A request builder for creating requests to retrieve one `InbDeliveryHeader` entity based on its keys.
     */
    getByKey(deliveryDocument) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            DeliveryDocument: deliveryDocument
        });
    }
    /**
     * Returns a request builder for querying all `InbDeliveryHeader` entities.
     * @returns A request builder for creating requests to retrieve all `InbDeliveryHeader` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `InbDeliveryHeader` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InbDeliveryHeader`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `InbDeliveryHeader`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InbDeliveryHeader`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(deliveryDocumentOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, deliveryDocumentOrEntity instanceof InbDeliveryHeader_1.InbDeliveryHeader
            ? deliveryDocumentOrEntity
            : { DeliveryDocument: deliveryDocumentOrEntity });
    }
}
exports.InbDeliveryHeaderRequestBuilder = InbDeliveryHeaderRequestBuilder;
//# sourceMappingURL=InbDeliveryHeaderRequestBuilder.js.map