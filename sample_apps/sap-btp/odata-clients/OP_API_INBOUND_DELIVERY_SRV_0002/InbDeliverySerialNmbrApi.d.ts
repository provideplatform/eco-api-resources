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
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export declare class InbDeliverySerialNmbrApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InbDeliverySerialNmbr<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): InbDeliverySerialNmbrApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [MaintenanceItemObjListApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof InbDeliverySerialNmbr;
  requestBuilder(): InbDeliverySerialNmbrRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    InbDeliverySerialNmbr<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    InbDeliverySerialNmbr<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof InbDeliverySerialNmbr,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    DELIVERY_DATE: OrderableEdmTypeField<
      InbDeliverySerialNmbr<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.DateTime',
      false,
      true
    >;
    DELIVERY_DOCUMENT: OrderableEdmTypeField<
      InbDeliverySerialNmbr<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_DOCUMENT_ITEM: OrderableEdmTypeField<
      InbDeliverySerialNmbr<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ITEM_OBJECT_LIST: OrderableEdmTypeField<
      InbDeliverySerialNmbr<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SD_DOCUMENT_CATEGORY: OrderableEdmTypeField<
      InbDeliverySerialNmbr<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
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
    ALL_FIELDS: AllFields<
      InbDeliverySerialNmbr<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >
    >;
  };
}
