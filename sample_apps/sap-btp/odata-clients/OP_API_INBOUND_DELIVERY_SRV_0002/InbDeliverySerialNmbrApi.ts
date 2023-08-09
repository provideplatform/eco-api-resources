/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InbDeliverySerialNmbr } from './InbDeliverySerialNmbr';
import { InbDeliverySerialNmbrRequestBuilder } from './InbDeliverySerialNmbrRequestBuilder';
import { MaintenanceItemObjListApi } from './MaintenanceItemObjListApi';
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
  Link
} from '@sap-cloud-sdk/odata-v2';
export class InbDeliverySerialNmbrApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InbDeliverySerialNmbr<DeSerializersT>, DeSerializersT>
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
  ): InbDeliverySerialNmbrApi<DeSerializersT> {
    return new InbDeliverySerialNmbrApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link toMaintenanceItemObject} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_MAINTENANCE_ITEM_OBJECT: Link<
      InbDeliverySerialNmbr<DeSerializersT>,
      DeSerializersT,
      MaintenanceItemObjListApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [MaintenanceItemObjListApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TO_MAINTENANCE_ITEM_OBJECT: new Link(
        'to_MaintenanceItemObject',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = InbDeliverySerialNmbr;

  requestBuilder(): InbDeliverySerialNmbrRequestBuilder<DeSerializersT> {
    return new InbDeliverySerialNmbrRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InbDeliverySerialNmbr<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InbDeliverySerialNmbr<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InbDeliverySerialNmbr<DeSerializersT>,
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
    typeof InbDeliverySerialNmbr,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InbDeliverySerialNmbr,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DELIVERY_DATE: OrderableEdmTypeField<
      InbDeliverySerialNmbr<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      false,
      true
    >;
    DELIVERY_DOCUMENT: OrderableEdmTypeField<
      InbDeliverySerialNmbr<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_DOCUMENT_ITEM: OrderableEdmTypeField<
      InbDeliverySerialNmbr<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ITEM_OBJECT_LIST: OrderableEdmTypeField<
      InbDeliverySerialNmbr<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SD_DOCUMENT_CATEGORY: OrderableEdmTypeField<
      InbDeliverySerialNmbr<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toMaintenanceItemObject} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_MAINTENANCE_ITEM_OBJECT: Link<
      InbDeliverySerialNmbr<DeSerializersT>,
      DeSerializersT,
      MaintenanceItemObjListApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InbDeliverySerialNmbr<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link deliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'DeliveryDate',
          'Edm.DateTime',
          false
        ),
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
         * Static representation of the {@link maintenanceItemObjectList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ITEM_OBJECT_LIST: fieldBuilder.buildEdmTypeField(
          'MaintenanceItemObjectList',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sdDocumentCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SD_DOCUMENT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'SDDocumentCategory',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InbDeliverySerialNmbr)
      };
    }

    return this._schema;
  }
}
