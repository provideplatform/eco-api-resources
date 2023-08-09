/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import {
  DeSerializers,
  DefaultDeSerializers,
  OperationRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { PutawayReport } from './PutawayReport';
import { DeliveryMessage } from './DeliveryMessage';
/**
 * Type of the parameters to be passed to {@link confirmPutawayAllItems}.
 */
export interface ConfirmPutawayAllItemsParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
}
/**
 * Confirm Putaway All Items.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export declare function confirmPutawayAllItems<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ConfirmPutawayAllItemsParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  ConfirmPutawayAllItemsParameters<DeSerializersT>,
  PutawayReport[]
>;
/**
 * Type of the parameters to be passed to {@link confirmPutawayOneItem}.
 */
export interface ConfirmPutawayOneItemParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Delivery Document Item.
   */
  deliveryDocumentItem?: string | null;
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
}
/**
 * Confirm Putaway One Item.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export declare function confirmPutawayOneItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ConfirmPutawayOneItemParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  ConfirmPutawayOneItemParameters<DeSerializersT>,
  PutawayReport[]
>;
/**
 * Type of the parameters to be passed to {@link postGoodsReceipt}.
 */
export interface PostGoodsReceiptParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
}
/**
 * Post Goods Receipt.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export declare function postGoodsReceipt<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PostGoodsReceiptParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  PostGoodsReceiptParameters<DeSerializersT>,
  PutawayReport[]
>;
/**
 * Type of the parameters to be passed to {@link putawayAllItems}.
 */
export interface PutawayAllItemsParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
}
/**
 * Putaway All Items.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export declare function putawayAllItems<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PutawayAllItemsParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  PutawayAllItemsParameters<DeSerializersT>,
  PutawayReport[]
>;
/**
 * Type of the parameters to be passed to {@link putawayOneItem}.
 */
export interface PutawayOneItemParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Delivery Document Item.
   */
  deliveryDocumentItem?: string | null;
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
}
/**
 * Putaway One Item.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export declare function putawayOneItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PutawayOneItemParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  PutawayOneItemParameters<DeSerializersT>,
  PutawayReport[]
>;
/**
 * Type of the parameters to be passed to {@link reverseGoodsReceipt}.
 */
export interface ReverseGoodsReceiptParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Actual Goods Movement Date.
   */
  actualGoodsMovementDate?: Moment | null;
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
}
/**
 * Reverse Goods Receipt.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export declare function reverseGoodsReceipt<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ReverseGoodsReceiptParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  ReverseGoodsReceiptParameters<DeSerializersT>,
  DeliveryMessage[]
>;
/**
 * Type of the parameters to be passed to {@link addSerialNumberToDeliveryItem}.
 */
export interface AddSerialNumberToDeliveryItemParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Serial Number.
   */
  serialNumber?: string | null;
  /**
   * Delivery Document Item.
   */
  deliveryDocumentItem?: string | null;
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
}
/**
 * Add Serial Number To Delivery Item.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export declare function addSerialNumberToDeliveryItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: AddSerialNumberToDeliveryItemParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  AddSerialNumberToDeliveryItemParameters<DeSerializersT>,
  PutawayReport[]
>;
/**
 * Type of the parameters to be passed to {@link deleteAllSerialNumbersFromDeliveryItem}.
 */
export interface DeleteAllSerialNumbersFromDeliveryItemParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Delivery Document Item.
   */
  deliveryDocumentItem?: string | null;
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
}
/**
 * Delete All Serial Numbers From Delivery Item.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export declare function deleteAllSerialNumbersFromDeliveryItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DeleteAllSerialNumbersFromDeliveryItemParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  DeleteAllSerialNumbersFromDeliveryItemParameters<DeSerializersT>,
  PutawayReport[]
>;
/**
 * Type of the parameters to be passed to {@link deleteSerialNumberFromDeliveryItem}.
 */
export interface DeleteSerialNumberFromDeliveryItemParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Serial Number.
   */
  serialNumber?: string | null;
  /**
   * Delivery Document Item.
   */
  deliveryDocumentItem?: string | null;
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
}
/**
 * Delete Serial Number From Delivery Item.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export declare function deleteSerialNumberFromDeliveryItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DeleteSerialNumberFromDeliveryItemParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  DeleteSerialNumberFromDeliveryItemParameters<DeSerializersT>,
  PutawayReport[]
>;
/**
 * Type of the parameters to be passed to {@link setPutawayQuantityWithBaseQuantity}.
 */
export interface SetPutawayQuantityWithBaseQuantityParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Delivery Document Item.
   */
  deliveryDocumentItem?: string | null;
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
  /**
   * Base Unit.
   */
  baseUnit?: string | null;
  /**
   * Actual Delivered Qty In Base Unit.
   */
  actualDeliveredQtyInBaseUnit?: BigNumber | null;
}
/**
 * Set Putaway Quantity With Base Quantity.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export declare function setPutawayQuantityWithBaseQuantity<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SetPutawayQuantityWithBaseQuantityParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  SetPutawayQuantityWithBaseQuantityParameters<DeSerializersT>,
  PutawayReport[]
>;
/**
 * Type of the parameters to be passed to {@link putawayOneItemWithBaseQuantity}.
 */
export interface PutawayOneItemWithBaseQuantityParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Delivery Document Item.
   */
  deliveryDocumentItem?: string | null;
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
  /**
   * Base Unit.
   */
  baseUnit?: string | null;
  /**
   * Actual Delivered Qty In Base Unit.
   */
  actualDeliveredQtyInBaseUnit?: BigNumber | null;
}
/**
 * Putaway One Item With Base Quantity.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export declare function putawayOneItemWithBaseQuantity<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PutawayOneItemWithBaseQuantityParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  PutawayOneItemWithBaseQuantityParameters<DeSerializersT>,
  PutawayReport[]
>;
/**
 * Type of the parameters to be passed to {@link putawayOneItemWithSalesQuantity}.
 */
export interface PutawayOneItemWithSalesQuantityParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Delivery Quantity Unit.
   */
  deliveryQuantityUnit?: string | null;
  /**
   * Delivery Document Item.
   */
  deliveryDocumentItem?: string | null;
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
  /**
   * Actual Delivery Quantity.
   */
  actualDeliveryQuantity?: BigNumber | null;
}
/**
 * Putaway One Item With Sales Quantity.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export declare function putawayOneItemWithSalesQuantity<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PutawayOneItemWithSalesQuantityParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  PutawayOneItemWithSalesQuantityParameters<DeSerializersT>,
  PutawayReport[]
>;
export declare const operations: {
  confirmPutawayAllItems: typeof confirmPutawayAllItems;
  confirmPutawayOneItem: typeof confirmPutawayOneItem;
  postGoodsReceipt: typeof postGoodsReceipt;
  putawayAllItems: typeof putawayAllItems;
  putawayOneItem: typeof putawayOneItem;
  reverseGoodsReceipt: typeof reverseGoodsReceipt;
  addSerialNumberToDeliveryItem: typeof addSerialNumberToDeliveryItem;
  deleteAllSerialNumbersFromDeliveryItem: typeof deleteAllSerialNumbersFromDeliveryItem;
  deleteSerialNumberFromDeliveryItem: typeof deleteSerialNumberFromDeliveryItem;
  setPutawayQuantityWithBaseQuantity: typeof setPutawayQuantityWithBaseQuantity;
  putawayOneItemWithBaseQuantity: typeof putawayOneItemWithBaseQuantity;
  putawayOneItemWithSalesQuantity: typeof putawayOneItemWithSalesQuantity;
};
