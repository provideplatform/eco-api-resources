"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InbDeliveryHeaderTextRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link InbDeliveryHeaderText} entity.
 */
class InbDeliveryHeaderTextRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `InbDeliveryHeaderText` entity based on its keys.
     * @param deliveryDocument Key property. See {@link InbDeliveryHeaderText.deliveryDocument}.
     * @param textElement Key property. See {@link InbDeliveryHeaderText.textElement}.
     * @param language Key property. See {@link InbDeliveryHeaderText.language}.
     * @returns A request builder for creating requests to retrieve one `InbDeliveryHeaderText` entity based on its keys.
     */
    getByKey(deliveryDocument, textElement, language) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            DeliveryDocument: deliveryDocument,
            TextElement: textElement,
            Language: language
        });
    }
    /**
     * Returns a request builder for querying all `InbDeliveryHeaderText` entities.
     * @returns A request builder for creating requests to retrieve all `InbDeliveryHeaderText` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.InbDeliveryHeaderTextRequestBuilder = InbDeliveryHeaderTextRequestBuilder;
//# sourceMappingURL=InbDeliveryHeaderTextRequestBuilder.js.map