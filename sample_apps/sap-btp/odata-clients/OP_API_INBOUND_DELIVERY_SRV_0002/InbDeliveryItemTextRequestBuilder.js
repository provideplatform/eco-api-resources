"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InbDeliveryItemTextRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link InbDeliveryItemText} entity.
 */
class InbDeliveryItemTextRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `InbDeliveryItemText` entity based on its keys.
     * @param deliveryDocument Key property. See {@link InbDeliveryItemText.deliveryDocument}.
     * @param deliveryDocumentItem Key property. See {@link InbDeliveryItemText.deliveryDocumentItem}.
     * @param textElement Key property. See {@link InbDeliveryItemText.textElement}.
     * @param language Key property. See {@link InbDeliveryItemText.language}.
     * @returns A request builder for creating requests to retrieve one `InbDeliveryItemText` entity based on its keys.
     */
    getByKey(deliveryDocument, deliveryDocumentItem, textElement, language) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            DeliveryDocument: deliveryDocument,
            DeliveryDocumentItem: deliveryDocumentItem,
            TextElement: textElement,
            Language: language
        });
    }
    /**
     * Returns a request builder for querying all `InbDeliveryItemText` entities.
     * @returns A request builder for creating requests to retrieve all `InbDeliveryItemText` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.InbDeliveryItemTextRequestBuilder = InbDeliveryItemTextRequestBuilder;
//# sourceMappingURL=InbDeliveryItemTextRequestBuilder.js.map