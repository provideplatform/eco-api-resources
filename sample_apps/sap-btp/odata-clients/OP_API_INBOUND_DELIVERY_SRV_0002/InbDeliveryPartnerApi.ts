/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InbDeliveryPartner } from './InbDeliveryPartner';
import { InbDeliveryPartnerRequestBuilder } from './InbDeliveryPartnerRequestBuilder';
import { InbDeliveryAddressApi } from './InbDeliveryAddressApi';
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
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class InbDeliveryPartnerApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InbDeliveryPartner<DeSerializersT>, DeSerializersT>
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
  ): InbDeliveryPartnerApi<DeSerializersT> {
    return new InbDeliveryPartnerApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS: OneToOneLink<
      InbDeliveryPartner<DeSerializersT>,
      DeSerializersT,
      InbDeliveryAddressApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [InbDeliveryAddressApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TO_ADDRESS: new OneToOneLink('to_Address', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = InbDeliveryPartner;

  requestBuilder(): InbDeliveryPartnerRequestBuilder<DeSerializersT> {
    return new InbDeliveryPartnerRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InbDeliveryPartner<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InbDeliveryPartner<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InbDeliveryPartner<DeSerializersT>,
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
    typeof InbDeliveryPartner,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InbDeliveryPartner,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ADDRESS_ID: OrderableEdmTypeField<
      InbDeliveryPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTACT_PERSON: OrderableEdmTypeField<
      InbDeliveryPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER: OrderableEdmTypeField<
      InbDeliveryPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARTNER_FUNCTION: OrderableEdmTypeField<
      InbDeliveryPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL: OrderableEdmTypeField<
      InbDeliveryPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SD_DOCUMENT: OrderableEdmTypeField<
      InbDeliveryPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SD_DOCUMENT_ITEM: OrderableEdmTypeField<
      InbDeliveryPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUPPLIER: OrderableEdmTypeField<
      InbDeliveryPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS: OneToOneLink<
      InbDeliveryPartner<DeSerializersT>,
      DeSerializersT,
      InbDeliveryAddressApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InbDeliveryPartner<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link addressId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_ID: fieldBuilder.buildEdmTypeField(
          'AddressID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link contactPerson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON: fieldBuilder.buildEdmTypeField(
          'ContactPerson',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link customer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER: fieldBuilder.buildEdmTypeField(
          'Customer',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link partnerFunction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTNER_FUNCTION: fieldBuilder.buildEdmTypeField(
          'PartnerFunction',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link personnel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL: fieldBuilder.buildEdmTypeField(
          'Personnel',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sdDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SD_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'SDDocument',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sdDocumentItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SD_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField(
          'SDDocumentItem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link supplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER: fieldBuilder.buildEdmTypeField(
          'Supplier',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InbDeliveryPartner)
      };
    }

    return this._schema;
  }
}
