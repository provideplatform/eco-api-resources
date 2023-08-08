"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InbDeliveryItemRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const InbDeliveryItem_1 = require("./InbDeliveryItem");
/**
 * Request builder class for operations supported on the {@link InbDeliveryItem} entity.
 */
class InbDeliveryItemRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `InbDeliveryItem` entity based on its keys.
     * @param deliveryDocument Key property. See {@link InbDeliveryItem.deliveryDocument}.
     * @param deliveryDocumentItem Key property. See {@link InbDeliveryItem.deliveryDocumentItem}.
     * @returns A request builder for creating requests to retrieve one `InbDeliveryItem` entity based on its keys.
     */
    getByKey(deliveryDocument, deliveryDocumentItem) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            DeliveryDocument: deliveryDocument,
            DeliveryDocumentItem: deliveryDocumentItem
        });
    }
    /**
     * Returns a request builder for querying all `InbDeliveryItem` entities.
     * @returns A request builder for creating requests to retrieve all `InbDeliveryItem` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for updating an entity of type `InbDeliveryItem`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InbDeliveryItem`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(deliveryDocumentOrEntity, deliveryDocumentItem) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, deliveryDocumentOrEntity instanceof InbDeliveryItem_1.InbDeliveryItem
            ? deliveryDocumentOrEntity
            : {
                DeliveryDocument: deliveryDocumentOrEntity,
                DeliveryDocumentItem: deliveryDocumentItem
            });
    }
}
exports.InbDeliveryItemRequestBuilder = InbDeliveryItemRequestBuilder;
//# sourceMappingURL=InbDeliveryItemRequestBuilder.js.map