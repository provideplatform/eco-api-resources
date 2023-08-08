/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductFootprints } from './ProductFootprints';
import { ProductFootprintsRequestBuilder } from './ProductFootprintsRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class ProductFootprintsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductFootprints<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): ProductFootprintsApi<DeSerializersT> {
    return new ProductFootprintsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductFootprints;

  requestBuilder(): ProductFootprintsRequestBuilder<DeSerializersT> {
    return new ProductFootprintsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductFootprints<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductFootprints<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductFootprints<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ProductFootprints,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductFootprints,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CALCULATED_MONTH: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CALCULATED_YEAR: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CALCULATION_RUN_TIMESTAMP: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    FOOTPRINT_INVENTORY: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOOTPRINT_INVENTORY_NAME: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOOTPRINT_INVENTORY_TYPE: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOOTPRINT_INVENTORY_TYPE_NAME: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANT_NAME: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_CO_2_E_QUANTITY: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    TOTAL_CO_2_E_QUANTITY_UO_M: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_CO_2_E_QUANTITY_UO_M_NAME: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATED_STATUS: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATED_STATUS_NAME: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_QUANTITY: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PRODUCT_QUANTITY_UO_M: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_QUANTITY_UO_M_NAME: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CO_2_E_PER_UNIT_QUANTITY: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CO_2_E_PER_UNIT_QUANTITY_UO_M: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CO_2_E_PER_UNIT_QUANTITY_UO_M_NAME: OrderableEdmTypeField<
      ProductFootprints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProductFootprints<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.Guid', false),
        /**
         * Static representation of the {@link calculatedMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_MONTH: fieldBuilder.buildEdmTypeField(
          'CalculatedMonth',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link calculatedYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_YEAR: fieldBuilder.buildEdmTypeField(
          'CalculatedYear',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link calculationRunTimestamp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_RUN_TIMESTAMP: fieldBuilder.buildEdmTypeField(
          'CalculationRunTimestamp',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link footprintInventory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOOTPRINT_INVENTORY: fieldBuilder.buildEdmTypeField(
          'FootprintInventory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link footprintInventoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOOTPRINT_INVENTORY_NAME: fieldBuilder.buildEdmTypeField(
          'FootprintInventoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link footprintInventoryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOOTPRINT_INVENTORY_TYPE: fieldBuilder.buildEdmTypeField(
          'FootprintInventoryType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link footprintInventoryTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOOTPRINT_INVENTORY_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'FootprintInventoryTypeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link product} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT: fieldBuilder.buildEdmTypeField('Product', 'Edm.String', true),
        /**
         * Static representation of the {@link productName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NAME: fieldBuilder.buildEdmTypeField(
          'ProductName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANT: fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', true),
        /**
         * Static representation of the {@link plantName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANT_NAME: fieldBuilder.buildEdmTypeField(
          'PlantName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalCo2EQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_CO_2_E_QUANTITY: fieldBuilder.buildEdmTypeField(
          'TotalCO2eQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link totalCo2EQuantityUoM} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_CO_2_E_QUANTITY_UO_M: fieldBuilder.buildEdmTypeField(
          'TotalCO2eQuantityUoM',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalCo2EQuantityUoMName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_CO_2_E_QUANTITY_UO_M_NAME: fieldBuilder.buildEdmTypeField(
          'TotalCO2eQuantityUoMName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calculatedStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_STATUS: fieldBuilder.buildEdmTypeField(
          'CalculatedStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calculatedStatusName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_STATUS_NAME: fieldBuilder.buildEdmTypeField(
          'CalculatedStatusName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ProductQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link productQuantityUoM} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_QUANTITY_UO_M: fieldBuilder.buildEdmTypeField(
          'ProductQuantityUoM',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productQuantityUoMName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_QUANTITY_UO_M_NAME: fieldBuilder.buildEdmTypeField(
          'ProductQuantityUoMName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link co2EPerUnitQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CO_2_E_PER_UNIT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CO2ePerUnitQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link co2EPerUnitQuantityUoM} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CO_2_E_PER_UNIT_QUANTITY_UO_M: fieldBuilder.buildEdmTypeField(
          'CO2ePerUnitQuantityUoM',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link co2EPerUnitQuantityUoMName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CO_2_E_PER_UNIT_QUANTITY_UO_M_NAME: fieldBuilder.buildEdmTypeField(
          'CO2ePerUnitQuantityUoMName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductFootprints)
      };
    }

    return this._schema;
  }
}
