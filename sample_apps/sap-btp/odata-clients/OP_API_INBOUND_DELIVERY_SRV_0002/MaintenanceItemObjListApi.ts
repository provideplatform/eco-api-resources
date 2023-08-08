/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaintenanceItemObjList } from './MaintenanceItemObjList';
import { MaintenanceItemObjListRequestBuilder } from './MaintenanceItemObjListRequestBuilder';
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
export class MaintenanceItemObjListApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MaintenanceItemObjList<DeSerializersT>, DeSerializersT>
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
  ): MaintenanceItemObjListApi<DeSerializersT> {
    return new MaintenanceItemObjListApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MaintenanceItemObjList;

  requestBuilder(): MaintenanceItemObjListRequestBuilder<DeSerializersT> {
    return new MaintenanceItemObjListRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MaintenanceItemObjList<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MaintenanceItemObjList<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaintenanceItemObjList<DeSerializersT>,
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
    typeof MaintenanceItemObjList,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaintenanceItemObjList,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ASSEMBLY: OrderableEdmTypeField<
      MaintenanceItemObjList<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EQUIPMENT: OrderableEdmTypeField<
      MaintenanceItemObjList<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUNCTIONAL_LOCATION: OrderableEdmTypeField<
      MaintenanceItemObjList<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ITEM_OBJECT: OrderableEdmTypeField<
      MaintenanceItemObjList<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAINTENANCE_ITEM_OBJECT_LIST: OrderableEdmTypeField<
      MaintenanceItemObjList<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MAINTENANCE_NOTIFICATION: OrderableEdmTypeField<
      MaintenanceItemObjList<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINT_OBJECT_LOC_ACCT_ASSGMT_NMBR: OrderableEdmTypeField<
      MaintenanceItemObjList<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MATERIAL: OrderableEdmTypeField<
      MaintenanceItemObjList<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERIAL_NUMBER: OrderableEdmTypeField<
      MaintenanceItemObjList<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<MaintenanceItemObjList<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link assembly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSEMBLY: fieldBuilder.buildEdmTypeField(
          'Assembly',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link equipment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EQUIPMENT: fieldBuilder.buildEdmTypeField(
          'Equipment',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link functionalLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_LOCATION: fieldBuilder.buildEdmTypeField(
          'FunctionalLocation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maintenanceItemObject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ITEM_OBJECT: fieldBuilder.buildEdmTypeField(
          'MaintenanceItemObject',
          'Edm.Int32',
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
         * Static representation of the {@link maintenanceNotification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_NOTIFICATION: fieldBuilder.buildEdmTypeField(
          'MaintenanceNotification',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maintObjectLocAcctAssgmtNmbr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINT_OBJECT_LOC_ACCT_ASSGMT_NMBR: fieldBuilder.buildEdmTypeField(
          'MaintObjectLocAcctAssgmtNmbr',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link material} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL: fieldBuilder.buildEdmTypeField(
          'Material',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link serialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'SerialNumber',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MaintenanceItemObjList)
      };
    }

    return this._schema;
  }
}
