/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InbDeliveryItemText } from './InbDeliveryItemText';
import { InbDeliveryItemTextRequestBuilder } from './InbDeliveryItemTextRequestBuilder';
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
export class InbDeliveryItemTextApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InbDeliveryItemText<DeSerializersT>, DeSerializersT>
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
  ): InbDeliveryItemTextApi<DeSerializersT> {
    return new InbDeliveryItemTextApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InbDeliveryItemText;

  requestBuilder(): InbDeliveryItemTextRequestBuilder<DeSerializersT> {
    return new InbDeliveryItemTextRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InbDeliveryItemText<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InbDeliveryItemText<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InbDeliveryItemText<DeSerializersT>,
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
    typeof InbDeliveryItemText,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InbDeliveryItemText,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DELIVERY_DOCUMENT: OrderableEdmTypeField<
      InbDeliveryItemText<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_DOCUMENT_ITEM: OrderableEdmTypeField<
      InbDeliveryItemText<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEXT_ELEMENT: OrderableEdmTypeField<
      InbDeliveryItemText<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE: OrderableEdmTypeField<
      InbDeliveryItemText<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEXT_ELEMENT_DESCRIPTION: OrderableEdmTypeField<
      InbDeliveryItemText<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEXT_ELEMENT_TEXT: OrderableEdmTypeField<
      InbDeliveryItemText<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_LONG_TEXT_IS_FORMATTED: OrderableEdmTypeField<
      InbDeliveryItemText<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    ALL_FIELDS: AllFields<InbDeliveryItemText<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link deliveryDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'DeliveryDocument',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link deliveryDocumentItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField(
          'DeliveryDocumentItem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link textElement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_ELEMENT: fieldBuilder.buildEdmTypeField(
          'TextElement',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link language} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE: fieldBuilder.buildEdmTypeField(
          'Language',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link textElementDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_ELEMENT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TextElementDescription',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link textElementText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_ELEMENT_TEXT: fieldBuilder.buildEdmTypeField(
          'TextElementText',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link deliveryLongTextIsFormatted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_LONG_TEXT_IS_FORMATTED: fieldBuilder.buildEdmTypeField(
          'DeliveryLongTextIsFormatted',
          'Edm.Boolean',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InbDeliveryItemText)
      };
    }

    return this._schema;
  }
}
