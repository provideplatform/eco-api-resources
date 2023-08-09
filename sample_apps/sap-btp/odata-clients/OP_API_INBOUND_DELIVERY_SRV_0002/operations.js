"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operations = exports.putawayOneItemWithSalesQuantity = exports.putawayOneItemWithBaseQuantity = exports.setPutawayQuantityWithBaseQuantity = exports.deleteSerialNumberFromDeliveryItem = exports.deleteAllSerialNumbersFromDeliveryItem = exports.addSerialNumberToDeliveryItem = exports.reverseGoodsReceipt = exports.putawayOneItem = exports.putawayAllItems = exports.postGoodsReceipt = exports.confirmPutawayOneItem = exports.confirmPutawayAllItems = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const PutawayReport_1 = require("./PutawayReport");
const DeliveryMessage_1 = require("./DeliveryMessage");
/**
 * Confirm Putaway All Items.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function confirmPutawayAllItems(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        deliveryDocument: new odata_v2_1.OperationParameter('DeliveryDocument', 'Edm.String', parameters.deliveryDocument)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002', 'ConfirmPutawayAllItems', data => (0, odata_v2_1.transformReturnValueForComplexTypeList)(data, data => (0, odata_v2_1.entityDeserializer)(deSerializers || odata_v2_1.defaultDeSerializers).deserializeComplexType(data, PutawayReport_1.PutawayReport)), params, deSerializers);
}
exports.confirmPutawayAllItems = confirmPutawayAllItems;
/**
 * Confirm Putaway One Item.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function confirmPutawayOneItem(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        deliveryDocumentItem: new odata_v2_1.OperationParameter('DeliveryDocumentItem', 'Edm.String', parameters.deliveryDocumentItem),
        deliveryDocument: new odata_v2_1.OperationParameter('DeliveryDocument', 'Edm.String', parameters.deliveryDocument)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002', 'ConfirmPutawayOneItem', data => (0, odata_v2_1.transformReturnValueForComplexTypeList)(data, data => (0, odata_v2_1.entityDeserializer)(deSerializers || odata_v2_1.defaultDeSerializers).deserializeComplexType(data, PutawayReport_1.PutawayReport)), params, deSerializers);
}
exports.confirmPutawayOneItem = confirmPutawayOneItem;
/**
 * Post Goods Receipt.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function postGoodsReceipt(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        deliveryDocument: new odata_v2_1.OperationParameter('DeliveryDocument', 'Edm.String', parameters.deliveryDocument)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002', 'PostGoodsReceipt', data => (0, odata_v2_1.transformReturnValueForComplexTypeList)(data, data => (0, odata_v2_1.entityDeserializer)(deSerializers || odata_v2_1.defaultDeSerializers).deserializeComplexType(data, PutawayReport_1.PutawayReport)), params, deSerializers);
}
exports.postGoodsReceipt = postGoodsReceipt;
/**
 * Putaway All Items.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function putawayAllItems(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        deliveryDocument: new odata_v2_1.OperationParameter('DeliveryDocument', 'Edm.String', parameters.deliveryDocument)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002', 'PutawayAllItems', data => (0, odata_v2_1.transformReturnValueForComplexTypeList)(data, data => (0, odata_v2_1.entityDeserializer)(deSerializers || odata_v2_1.defaultDeSerializers).deserializeComplexType(data, PutawayReport_1.PutawayReport)), params, deSerializers);
}
exports.putawayAllItems = putawayAllItems;
/**
 * Putaway One Item.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function putawayOneItem(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        deliveryDocumentItem: new odata_v2_1.OperationParameter('DeliveryDocumentItem', 'Edm.String', parameters.deliveryDocumentItem),
        deliveryDocument: new odata_v2_1.OperationParameter('DeliveryDocument', 'Edm.String', parameters.deliveryDocument)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002', 'PutawayOneItem', data => (0, odata_v2_1.transformReturnValueForComplexTypeList)(data, data => (0, odata_v2_1.entityDeserializer)(deSerializers || odata_v2_1.defaultDeSerializers).deserializeComplexType(data, PutawayReport_1.PutawayReport)), params, deSerializers);
}
exports.putawayOneItem = putawayOneItem;
/**
 * Reverse Goods Receipt.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function reverseGoodsReceipt(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        actualGoodsMovementDate: new odata_v2_1.OperationParameter('ActualGoodsMovementDate', 'Edm.DateTime', parameters.actualGoodsMovementDate),
        deliveryDocument: new odata_v2_1.OperationParameter('DeliveryDocument', 'Edm.String', parameters.deliveryDocument)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002', 'ReverseGoodsReceipt', data => (0, odata_v2_1.transformReturnValueForComplexTypeList)(data, data => (0, odata_v2_1.entityDeserializer)(deSerializers || odata_v2_1.defaultDeSerializers).deserializeComplexType(data, DeliveryMessage_1.DeliveryMessage)), params, deSerializers);
}
exports.reverseGoodsReceipt = reverseGoodsReceipt;
/**
 * Add Serial Number To Delivery Item.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function addSerialNumberToDeliveryItem(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        serialNumber: new odata_v2_1.OperationParameter('SerialNumber', 'Edm.String', parameters.serialNumber),
        deliveryDocumentItem: new odata_v2_1.OperationParameter('DeliveryDocumentItem', 'Edm.String', parameters.deliveryDocumentItem),
        deliveryDocument: new odata_v2_1.OperationParameter('DeliveryDocument', 'Edm.String', parameters.deliveryDocument)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002', 'AddSerialNumberToDeliveryItem', data => (0, odata_v2_1.transformReturnValueForComplexTypeList)(data, data => (0, odata_v2_1.entityDeserializer)(deSerializers || odata_v2_1.defaultDeSerializers).deserializeComplexType(data, PutawayReport_1.PutawayReport)), params, deSerializers);
}
exports.addSerialNumberToDeliveryItem = addSerialNumberToDeliveryItem;
/**
 * Delete All Serial Numbers From Delivery Item.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function deleteAllSerialNumbersFromDeliveryItem(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        deliveryDocumentItem: new odata_v2_1.OperationParameter('DeliveryDocumentItem', 'Edm.String', parameters.deliveryDocumentItem),
        deliveryDocument: new odata_v2_1.OperationParameter('DeliveryDocument', 'Edm.String', parameters.deliveryDocument)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002', 'DeleteAllSerialNumbersFromDeliveryItem', data => (0, odata_v2_1.transformReturnValueForComplexTypeList)(data, data => (0, odata_v2_1.entityDeserializer)(deSerializers || odata_v2_1.defaultDeSerializers).deserializeComplexType(data, PutawayReport_1.PutawayReport)), params, deSerializers);
}
exports.deleteAllSerialNumbersFromDeliveryItem = deleteAllSerialNumbersFromDeliveryItem;
/**
 * Delete Serial Number From Delivery Item.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function deleteSerialNumberFromDeliveryItem(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        serialNumber: new odata_v2_1.OperationParameter('SerialNumber', 'Edm.String', parameters.serialNumber),
        deliveryDocumentItem: new odata_v2_1.OperationParameter('DeliveryDocumentItem', 'Edm.String', parameters.deliveryDocumentItem),
        deliveryDocument: new odata_v2_1.OperationParameter('DeliveryDocument', 'Edm.String', parameters.deliveryDocument)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002', 'DeleteSerialNumberFromDeliveryItem', data => (0, odata_v2_1.transformReturnValueForComplexTypeList)(data, data => (0, odata_v2_1.entityDeserializer)(deSerializers || odata_v2_1.defaultDeSerializers).deserializeComplexType(data, PutawayReport_1.PutawayReport)), params, deSerializers);
}
exports.deleteSerialNumberFromDeliveryItem = deleteSerialNumberFromDeliveryItem;
/**
 * Set Putaway Quantity With Base Quantity.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function setPutawayQuantityWithBaseQuantity(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        deliveryDocumentItem: new odata_v2_1.OperationParameter('DeliveryDocumentItem', 'Edm.String', parameters.deliveryDocumentItem),
        deliveryDocument: new odata_v2_1.OperationParameter('DeliveryDocument', 'Edm.String', parameters.deliveryDocument),
        baseUnit: new odata_v2_1.OperationParameter('BaseUnit', 'Edm.String', parameters.baseUnit),
        actualDeliveredQtyInBaseUnit: new odata_v2_1.OperationParameter('ActualDeliveredQtyInBaseUnit', 'Edm.Decimal', parameters.actualDeliveredQtyInBaseUnit)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002', 'SetPutawayQuantityWithBaseQuantity', data => (0, odata_v2_1.transformReturnValueForComplexTypeList)(data, data => (0, odata_v2_1.entityDeserializer)(deSerializers || odata_v2_1.defaultDeSerializers).deserializeComplexType(data, PutawayReport_1.PutawayReport)), params, deSerializers);
}
exports.setPutawayQuantityWithBaseQuantity = setPutawayQuantityWithBaseQuantity;
/**
 * Putaway One Item With Base Quantity.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function putawayOneItemWithBaseQuantity(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        deliveryDocumentItem: new odata_v2_1.OperationParameter('DeliveryDocumentItem', 'Edm.String', parameters.deliveryDocumentItem),
        deliveryDocument: new odata_v2_1.OperationParameter('DeliveryDocument', 'Edm.String', parameters.deliveryDocument),
        baseUnit: new odata_v2_1.OperationParameter('BaseUnit', 'Edm.String', parameters.baseUnit),
        actualDeliveredQtyInBaseUnit: new odata_v2_1.OperationParameter('ActualDeliveredQtyInBaseUnit', 'Edm.Decimal', parameters.actualDeliveredQtyInBaseUnit)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002', 'PutawayOneItemWithBaseQuantity', data => (0, odata_v2_1.transformReturnValueForComplexTypeList)(data, data => (0, odata_v2_1.entityDeserializer)(deSerializers || odata_v2_1.defaultDeSerializers).deserializeComplexType(data, PutawayReport_1.PutawayReport)), params, deSerializers);
}
exports.putawayOneItemWithBaseQuantity = putawayOneItemWithBaseQuantity;
/**
 * Putaway One Item With Sales Quantity.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function putawayOneItemWithSalesQuantity(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        deliveryQuantityUnit: new odata_v2_1.OperationParameter('DeliveryQuantityUnit', 'Edm.String', parameters.deliveryQuantityUnit),
        deliveryDocumentItem: new odata_v2_1.OperationParameter('DeliveryDocumentItem', 'Edm.String', parameters.deliveryDocumentItem),
        deliveryDocument: new odata_v2_1.OperationParameter('DeliveryDocument', 'Edm.String', parameters.deliveryDocument),
        actualDeliveryQuantity: new odata_v2_1.OperationParameter('ActualDeliveryQuantity', 'Edm.Decimal', parameters.actualDeliveryQuantity)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002', 'PutawayOneItemWithSalesQuantity', data => (0, odata_v2_1.transformReturnValueForComplexTypeList)(data, data => (0, odata_v2_1.entityDeserializer)(deSerializers || odata_v2_1.defaultDeSerializers).deserializeComplexType(data, PutawayReport_1.PutawayReport)), params, deSerializers);
}
exports.putawayOneItemWithSalesQuantity = putawayOneItemWithSalesQuantity;
exports.operations = {
    confirmPutawayAllItems,
    confirmPutawayOneItem,
    postGoodsReceipt,
    putawayAllItems,
    putawayOneItem,
    reverseGoodsReceipt,
    addSerialNumberToDeliveryItem,
    deleteAllSerialNumbersFromDeliveryItem,
    deleteSerialNumberFromDeliveryItem,
    setPutawayQuantityWithBaseQuantity,
    putawayOneItemWithBaseQuantity,
    putawayOneItemWithSalesQuantity
};
//# sourceMappingURL=operations.js.map