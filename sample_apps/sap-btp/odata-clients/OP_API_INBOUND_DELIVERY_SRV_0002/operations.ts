/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import {
  entityDeserializer,
  transformReturnValueForComplexTypeList,
  DeSerializers,
  DefaultDeSerializers,
  defaultDeSerializers,
  OperationParameter,
  OperationRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { opApiInboundDeliverySrv0002 } from './service';
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
export function confirmPutawayAllItems<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ConfirmPutawayAllItemsParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ConfirmPutawayAllItemsParameters<DeSerializersT>,
  PutawayReport[]
> {
  const params = {
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'ConfirmPutawayAllItems',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PutawayReport)
      ),
    params,
    deSerializers
  );
}

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
export function confirmPutawayOneItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ConfirmPutawayOneItemParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ConfirmPutawayOneItemParameters<DeSerializersT>,
  PutawayReport[]
> {
  const params = {
    deliveryDocumentItem: new OperationParameter(
      'DeliveryDocumentItem',
      'Edm.String',
      parameters.deliveryDocumentItem
    ),
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'ConfirmPutawayOneItem',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PutawayReport)
      ),
    params,
    deSerializers
  );
}

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
export function postGoodsReceipt<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PostGoodsReceiptParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  PostGoodsReceiptParameters<DeSerializersT>,
  PutawayReport[]
> {
  const params = {
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'PostGoodsReceipt',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PutawayReport)
      ),
    params,
    deSerializers
  );
}

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
export function putawayAllItems<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PutawayAllItemsParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  PutawayAllItemsParameters<DeSerializersT>,
  PutawayReport[]
> {
  const params = {
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'PutawayAllItems',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PutawayReport)
      ),
    params,
    deSerializers
  );
}

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
export function putawayOneItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PutawayOneItemParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  PutawayOneItemParameters<DeSerializersT>,
  PutawayReport[]
> {
  const params = {
    deliveryDocumentItem: new OperationParameter(
      'DeliveryDocumentItem',
      'Edm.String',
      parameters.deliveryDocumentItem
    ),
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'PutawayOneItem',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PutawayReport)
      ),
    params,
    deSerializers
  );
}

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
export function reverseGoodsReceipt<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ReverseGoodsReceiptParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ReverseGoodsReceiptParameters<DeSerializersT>,
  DeliveryMessage[]
> {
  const params = {
    actualGoodsMovementDate: new OperationParameter(
      'ActualGoodsMovementDate',
      'Edm.DateTime',
      parameters.actualGoodsMovementDate
    ),
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'ReverseGoodsReceipt',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, DeliveryMessage)
      ),
    params,
    deSerializers
  );
}

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
export function addSerialNumberToDeliveryItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: AddSerialNumberToDeliveryItemParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  AddSerialNumberToDeliveryItemParameters<DeSerializersT>,
  PutawayReport[]
> {
  const params = {
    serialNumber: new OperationParameter(
      'SerialNumber',
      'Edm.String',
      parameters.serialNumber
    ),
    deliveryDocumentItem: new OperationParameter(
      'DeliveryDocumentItem',
      'Edm.String',
      parameters.deliveryDocumentItem
    ),
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'AddSerialNumberToDeliveryItem',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PutawayReport)
      ),
    params,
    deSerializers
  );
}

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
export function deleteAllSerialNumbersFromDeliveryItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DeleteAllSerialNumbersFromDeliveryItemParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  DeleteAllSerialNumbersFromDeliveryItemParameters<DeSerializersT>,
  PutawayReport[]
> {
  const params = {
    deliveryDocumentItem: new OperationParameter(
      'DeliveryDocumentItem',
      'Edm.String',
      parameters.deliveryDocumentItem
    ),
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'DeleteAllSerialNumbersFromDeliveryItem',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PutawayReport)
      ),
    params,
    deSerializers
  );
}

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
export function deleteSerialNumberFromDeliveryItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DeleteSerialNumberFromDeliveryItemParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  DeleteSerialNumberFromDeliveryItemParameters<DeSerializersT>,
  PutawayReport[]
> {
  const params = {
    serialNumber: new OperationParameter(
      'SerialNumber',
      'Edm.String',
      parameters.serialNumber
    ),
    deliveryDocumentItem: new OperationParameter(
      'DeliveryDocumentItem',
      'Edm.String',
      parameters.deliveryDocumentItem
    ),
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'DeleteSerialNumberFromDeliveryItem',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PutawayReport)
      ),
    params,
    deSerializers
  );
}

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
export function setPutawayQuantityWithBaseQuantity<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SetPutawayQuantityWithBaseQuantityParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  SetPutawayQuantityWithBaseQuantityParameters<DeSerializersT>,
  PutawayReport[]
> {
  const params = {
    deliveryDocumentItem: new OperationParameter(
      'DeliveryDocumentItem',
      'Edm.String',
      parameters.deliveryDocumentItem
    ),
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    ),
    baseUnit: new OperationParameter(
      'BaseUnit',
      'Edm.String',
      parameters.baseUnit
    ),
    actualDeliveredQtyInBaseUnit: new OperationParameter(
      'ActualDeliveredQtyInBaseUnit',
      'Edm.Decimal',
      parameters.actualDeliveredQtyInBaseUnit
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'SetPutawayQuantityWithBaseQuantity',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PutawayReport)
      ),
    params,
    deSerializers
  );
}

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
export function putawayOneItemWithBaseQuantity<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PutawayOneItemWithBaseQuantityParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  PutawayOneItemWithBaseQuantityParameters<DeSerializersT>,
  PutawayReport[]
> {
  const params = {
    deliveryDocumentItem: new OperationParameter(
      'DeliveryDocumentItem',
      'Edm.String',
      parameters.deliveryDocumentItem
    ),
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    ),
    baseUnit: new OperationParameter(
      'BaseUnit',
      'Edm.String',
      parameters.baseUnit
    ),
    actualDeliveredQtyInBaseUnit: new OperationParameter(
      'ActualDeliveredQtyInBaseUnit',
      'Edm.Decimal',
      parameters.actualDeliveredQtyInBaseUnit
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'PutawayOneItemWithBaseQuantity',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PutawayReport)
      ),
    params,
    deSerializers
  );
}

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
export function putawayOneItemWithSalesQuantity<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PutawayOneItemWithSalesQuantityParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  PutawayOneItemWithSalesQuantityParameters<DeSerializersT>,
  PutawayReport[]
> {
  const params = {
    deliveryQuantityUnit: new OperationParameter(
      'DeliveryQuantityUnit',
      'Edm.String',
      parameters.deliveryQuantityUnit
    ),
    deliveryDocumentItem: new OperationParameter(
      'DeliveryDocumentItem',
      'Edm.String',
      parameters.deliveryDocumentItem
    ),
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    ),
    actualDeliveryQuantity: new OperationParameter(
      'ActualDeliveryQuantity',
      'Edm.Decimal',
      parameters.actualDeliveryQuantity
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'PutawayOneItemWithSalesQuantity',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PutawayReport)
      ),
    params,
    deSerializers
  );
}

export const operations = {
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
