"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InbDeliveryDocFlowRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link InbDeliveryDocFlow} entity.
 */
class InbDeliveryDocFlowRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `InbDeliveryDocFlow` entity based on its keys.
     * @param precedingDocument Key property. See {@link InbDeliveryDocFlow.precedingDocument}.
     * @param precedingDocumentItem Key property. See {@link InbDeliveryDocFlow.precedingDocumentItem}.
     * @param subsequentDocumentCategory Key property. See {@link InbDeliveryDocFlow.subsequentDocumentCategory}.
     * @returns A request builder for creating requests to retrieve one `InbDeliveryDocFlow` entity based on its keys.
     */
    getByKey(precedingDocument, precedingDocumentItem, subsequentDocumentCategory) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            PrecedingDocument: precedingDocument,
            PrecedingDocumentItem: precedingDocumentItem,
            SubsequentDocumentCategory: subsequentDocumentCategory
        });
    }
    /**
     * Returns a request builder for querying all `InbDeliveryDocFlow` entities.
     * @returns A request builder for creating requests to retrieve all `InbDeliveryDocFlow` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for updating an entity of type `InbDeliveryDocFlow`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InbDeliveryDocFlow`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.InbDeliveryDocFlowRequestBuilder = InbDeliveryDocFlowRequestBuilder;
//# sourceMappingURL=InbDeliveryDocFlowRequestBuilder.js.map