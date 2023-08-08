/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InbDeliveryDocFlow } from './InbDeliveryDocFlow';
import { InbDeliveryDocFlowRequestBuilder } from './InbDeliveryDocFlowRequestBuilder';
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
} from '@sap-cloud-sdk/odata-v2';
export class InbDeliveryDocFlowApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InbDeliveryDocFlow<DeSerializersT>, DeSerializersT>
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
  ): InbDeliveryDocFlowApi<DeSerializersT> {
    return new InbDeliveryDocFlowApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InbDeliveryDocFlow;

  requestBuilder(): InbDeliveryDocFlowRequestBuilder<DeSerializersT> {
    return new InbDeliveryDocFlowRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InbDeliveryDocFlow<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InbDeliveryDocFlow<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InbDeliveryDocFlow<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof InbDeliveryDocFlow,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InbDeliveryDocFlow,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DELIVERY_VERSION: OrderableEdmTypeField<
      InbDeliveryDocFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRECEDING_DOCUMENT: OrderableEdmTypeField<
      InbDeliveryDocFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRECEDING_DOCUMENT_CATEGORY: OrderableEdmTypeField<
      InbDeliveryDocFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRECEDING_DOCUMENT_ITEM: OrderableEdmTypeField<
      InbDeliveryDocFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUANTITY_IN_BASE_UNIT: OrderableEdmTypeField<
      InbDeliveryDocFlow<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    SD_FULFILLMENT_CALCULATION_RULE: OrderableEdmTypeField<
      InbDeliveryDocFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBSEQUENT_DOCUMENT: OrderableEdmTypeField<
      InbDeliveryDocFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBSEQUENT_DOCUMENT_CATEGORY: OrderableEdmTypeField<
      InbDeliveryDocFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUBSEQUENT_DOCUMENT_ITEM: OrderableEdmTypeField<
      InbDeliveryDocFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFER_ORDER_IN_WRHS_MGMT_IS_CONFD: OrderableEdmTypeField<
      InbDeliveryDocFlow<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ALL_FIELDS: AllFields<InbDeliveryDocFlow<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link deliveryVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_VERSION: fieldBuilder.buildEdmTypeField(
          'DeliveryVersion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link precedingDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRECEDING_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'PrecedingDocument',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link precedingDocumentCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRECEDING_DOCUMENT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'PrecedingDocumentCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link precedingDocumentItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRECEDING_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField(
          'PrecedingDocumentItem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link quantityInBaseUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_IN_BASE_UNIT: fieldBuilder.buildEdmTypeField(
          'QuantityInBaseUnit',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link sdFulfillmentCalculationRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SD_FULFILLMENT_CALCULATION_RULE: fieldBuilder.buildEdmTypeField(
          'SDFulfillmentCalculationRule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subsequentDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSEQUENT_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'SubsequentDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subsequentDocumentCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSEQUENT_DOCUMENT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'SubsequentDocumentCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link subsequentDocumentItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSEQUENT_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField(
          'SubsequentDocumentItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transferOrderInWrhsMgmtIsConfd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ORDER_IN_WRHS_MGMT_IS_CONFD: fieldBuilder.buildEdmTypeField(
          'TransferOrderInWrhsMgmtIsConfd',
          'Edm.Boolean',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InbDeliveryDocFlow)
      };
    }

    return this._schema;
  }
}
