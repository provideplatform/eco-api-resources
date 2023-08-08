/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { ProductFootprintsApi } from './ProductFootprintsApi';

/**
 * This class represents the entity "ProductFootprints" of service "ProductFootprintsService".
 */
export class ProductFootprints<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductFootprintsType<T>
{
  /**
   * Technical entity name for ProductFootprints.
   */
  static _entityName = 'ProductFootprints';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ProductFootprints entity
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  id!: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Calculated Month.
   * @nullable
   */
  calculatedMonth?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Calculated Year.
   * @nullable
   */
  calculatedYear?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Calculation Run Timestamp.
   * @nullable
   */
  calculationRunTimestamp?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Footprint Inventory.
   * Maximum length: 60.
   * @nullable
   */
  footprintInventory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Footprint Inventory Name.
   * @nullable
   */
  footprintInventoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Footprint Inventory Type.
   * Maximum length: 2.
   * @nullable
   */
  footprintInventoryType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Footprint Inventory Type Name.
   * Maximum length: 255.
   * @nullable
   */
  footprintInventoryTypeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product.
   * Maximum length: 60.
   * @nullable
   */
  product?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Name.
   * @nullable
   */
  productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plant.
   * Maximum length: 60.
   * @nullable
   */
  plant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plant Name.
   * @nullable
   */
  plantName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Co 2 E Quantity.
   * @nullable
   */
  totalCo2EQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Total Co 2 E Quantity Uo M.
   * Maximum length: 3.
   * @nullable
   */
  totalCo2EQuantityUoM?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Co 2 E Quantity Uo M Name.
   * Maximum length: 1000.
   * @nullable
   */
  totalCo2EQuantityUoMName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculated Status.
   * Maximum length: 2.
   * @nullable
   */
  calculatedStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculated Status Name.
   * Maximum length: 255.
   * @nullable
   */
  calculatedStatusName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Quantity.
   * @nullable
   */
  productQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Product Quantity Uo M.
   * Maximum length: 3.
   * @nullable
   */
  productQuantityUoM?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Quantity Uo M Name.
   * Maximum length: 1000.
   * @nullable
   */
  productQuantityUoMName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Co 2 E Per Unit Quantity.
   * @nullable
   */
  co2EPerUnitQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Co 2 E Per Unit Quantity Uo M.
   * Maximum length: 3.
   * @nullable
   */
  co2EPerUnitQuantityUoM?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Co 2 E Per Unit Quantity Uo M Name.
   * Maximum length: 1000.
   * @nullable
   */
  co2EPerUnitQuantityUoMName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: ProductFootprintsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductFootprintsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  calculatedMonth?: DeserializedType<T, 'Edm.Int32'> | null;
  calculatedYear?: DeserializedType<T, 'Edm.Int32'> | null;
  calculationRunTimestamp?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  footprintInventory?: DeserializedType<T, 'Edm.String'> | null;
  footprintInventoryName?: DeserializedType<T, 'Edm.String'> | null;
  footprintInventoryType?: DeserializedType<T, 'Edm.String'> | null;
  footprintInventoryTypeName?: DeserializedType<T, 'Edm.String'> | null;
  product?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  plant?: DeserializedType<T, 'Edm.String'> | null;
  plantName?: DeserializedType<T, 'Edm.String'> | null;
  totalCo2EQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  totalCo2EQuantityUoM?: DeserializedType<T, 'Edm.String'> | null;
  totalCo2EQuantityUoMName?: DeserializedType<T, 'Edm.String'> | null;
  calculatedStatus?: DeserializedType<T, 'Edm.String'> | null;
  calculatedStatusName?: DeserializedType<T, 'Edm.String'> | null;
  productQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  productQuantityUoM?: DeserializedType<T, 'Edm.String'> | null;
  productQuantityUoMName?: DeserializedType<T, 'Edm.String'> | null;
  co2EPerUnitQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  co2EPerUnitQuantityUoM?: DeserializedType<T, 'Edm.String'> | null;
  co2EPerUnitQuantityUoMName?: DeserializedType<T, 'Edm.String'> | null;
}
