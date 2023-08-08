/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  Entity,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v2';
/**
 * PutawayReport
 */
export interface PutawayReport<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Message ID.
   * @nullable
   */
  systemMessageIdentification?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Message Number.
   * @nullable
   */
  systemMessageNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Message Type.
   * @nullable
   */
  systemMessageType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Message var.
   * @nullable
   */
  systemMessageVariable1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Message var.
   * @nullable
   */
  systemMessageVariable2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Message var.
   * @nullable
   */
  systemMessageVariable3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Message var.
   * @nullable
   */
  systemMessageVariable4?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Batch.
   * @nullable
   */
  batch?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sales unit.
   * @nullable
   */
  deliveryQuantityUnit?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Delivery Qty.
   * @nullable
   */
  actualDeliveryQuantity?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Item Descr.
   * @nullable
   */
  deliveryDocumentItemText?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Material.
   * @nullable
   */
  material?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item.
   * @nullable
   */
  deliveryDocumentItem?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Delivery.
   * @nullable
   */
  deliveryDocument?: DeserializedType<DeSerializersT, 'Edm.String'>;
}
/**
 * PutawayReportField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PutawayReportField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PutawayReport,
  NullableT,
  SelectableT
> {
  private _fieldBuilder;
  /**
   * Representation of the {@link PutawayReport.systemMessageIdentification} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemMessageIdentification: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link PutawayReport.systemMessageNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemMessageNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link PutawayReport.systemMessageType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemMessageType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link PutawayReport.systemMessageVariable1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemMessageVariable1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link PutawayReport.systemMessageVariable2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemMessageVariable2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link PutawayReport.systemMessageVariable3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemMessageVariable3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link PutawayReport.systemMessageVariable4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemMessageVariable4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link PutawayReport.batch} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batch: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link PutawayReport.deliveryQuantityUnit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryQuantityUnit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link PutawayReport.actualDeliveryQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualDeliveryQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  >;
  /**
   * Representation of the {@link PutawayReport.deliveryDocumentItemText} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryDocumentItemText: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link PutawayReport.material} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  material: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link PutawayReport.deliveryDocumentItem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryDocumentItem: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link PutawayReport.deliveryDocument} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryDocument: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Creates an instance of PutawayReportField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  );
}
export declare namespace PutawayReport {
  /**
   * Metadata information on all properties of the `PutawayReport` complex type.
   */
  const _propertyMetadata: PropertyMetadata<PutawayReport>[];
}
