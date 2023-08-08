/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InbDeliveryValAddedSrvc } from './InbDeliveryValAddedSrvc';
import { InbDeliveryValAddedSrvcRequestBuilder } from './InbDeliveryValAddedSrvcRequestBuilder';
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
export class InbDeliveryValAddedSrvcApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InbDeliveryValAddedSrvc<DeSerializersT>, DeSerializersT>
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
  ): InbDeliveryValAddedSrvcApi<DeSerializersT> {
    return new InbDeliveryValAddedSrvcApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InbDeliveryValAddedSrvc;

  requestBuilder(): InbDeliveryValAddedSrvcRequestBuilder<DeSerializersT> {
    return new InbDeliveryValAddedSrvcRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InbDeliveryValAddedSrvc<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InbDeliveryValAddedSrvc<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InbDeliveryValAddedSrvc<DeSerializersT>,
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
    typeof InbDeliveryValAddedSrvc,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InbDeliveryValAddedSrvc,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    VAL_ADDED_SRVC_HAS_TO_BE_ORDERED: OrderableEdmTypeField<
      InbDeliveryValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    VAL_ADDED_SRVC_INCREMENT: OrderableEdmTypeField<
      InbDeliveryValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VAL_ADDED_SRVC_IS_CREATED_MANUALLY: OrderableEdmTypeField<
      InbDeliveryValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VAL_ADDED_SRVC_ITEM_GROUP: OrderableEdmTypeField<
      InbDeliveryValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VAL_ADDED_SRVC_ITEM_NUMBER: OrderableEdmTypeField<
      InbDeliveryValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VAL_ADDED_SRVC_ITEM_NUMBER_IN_MM: OrderableEdmTypeField<
      InbDeliveryValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VAL_ADDED_SRVC_MM_REF_DOC_ITEM: OrderableEdmTypeField<
      InbDeliveryValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VAL_ADDED_SRVC_MM_REF_DOC_NMBR: OrderableEdmTypeField<
      InbDeliveryValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VAL_ADDED_SRVC_TRANSACTION_NUMBER: OrderableEdmTypeField<
      InbDeliveryValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_ADDED_SERVICE_CHARGE_CODE: OrderableEdmTypeField<
      InbDeliveryValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_ADDED_SERVICE_DELETION_CODE: OrderableEdmTypeField<
      InbDeliveryValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_ADDED_SERVICE_PRODUCT: OrderableEdmTypeField<
      InbDeliveryValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_ADDED_SERVICE_TEXT_1: OrderableEdmTypeField<
      InbDeliveryValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_ADDED_SERVICE_TEXT_2: OrderableEdmTypeField<
      InbDeliveryValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUEADDEDSERVICETEXT_3: OrderableEdmTypeField<
      InbDeliveryValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUEADDEDSERVICELONGTEXT: OrderableEdmTypeField<
      InbDeliveryValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_ADDED_SERVICE_TYPE: OrderableEdmTypeField<
      InbDeliveryValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_ADDED_SUB_SERVICE_TYPE: OrderableEdmTypeField<
      InbDeliveryValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<InbDeliveryValAddedSrvc<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link valAddedSrvcHasToBeOrdered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_HAS_TO_BE_ORDERED: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcHasToBeOrdered',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link valAddedSrvcIncrement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_INCREMENT: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcIncrement',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valAddedSrvcIsCreatedManually} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_IS_CREATED_MANUALLY: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcIsCreatedManually',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valAddedSrvcItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcItemGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valAddedSrvcItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valAddedSrvcItemNumberInMm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_ITEM_NUMBER_IN_MM: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcItemNumberInMM',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valAddedSrvcMmRefDocItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_MM_REF_DOC_ITEM: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcMMRefDocItem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valAddedSrvcMmRefDocNmbr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_MM_REF_DOC_NMBR: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcMMRefDocNmbr',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valAddedSrvcTransactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcTransactionNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valueAddedServiceChargeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SERVICE_CHARGE_CODE: fieldBuilder.buildEdmTypeField(
          'ValueAddedServiceChargeCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valueAddedServiceDeletionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SERVICE_DELETION_CODE: fieldBuilder.buildEdmTypeField(
          'ValueAddedServiceDeletionCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valueAddedServiceProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SERVICE_PRODUCT: fieldBuilder.buildEdmTypeField(
          'ValueAddedServiceProduct',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valueAddedServiceText1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SERVICE_TEXT_1: fieldBuilder.buildEdmTypeField(
          'ValueAddedServiceText1',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valueAddedServiceText2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SERVICE_TEXT_2: fieldBuilder.buildEdmTypeField(
          'ValueAddedServiceText2',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valueaddedservicetext3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUEADDEDSERVICETEXT_3: fieldBuilder.buildEdmTypeField(
          'Valueaddedservicetext3',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valueaddedservicelongtext} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUEADDEDSERVICELONGTEXT: fieldBuilder.buildEdmTypeField(
          'Valueaddedservicelongtext',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valueAddedServiceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SERVICE_TYPE: fieldBuilder.buildEdmTypeField(
          'ValueAddedServiceType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valueAddedSubServiceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SUB_SERVICE_TYPE: fieldBuilder.buildEdmTypeField(
          'ValueAddedSubServiceType',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InbDeliveryValAddedSrvc)
      };
    }

    return this._schema;
  }
}
