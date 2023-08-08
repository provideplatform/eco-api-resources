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
 * DeliveryMessage
 */
export interface DeliveryMessage<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Group.
   * @nullable
   */
  collectiveProcessing?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * SD Document.
   * @nullable
   */
  deliveryDocument?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item.
   * @nullable
   */
  deliveryDocumentItem?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Schedule Line.
   * @nullable
   */
  scheduleLine?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Counter.
   * @nullable
   */
  collectiveProcessingMsgCounter?: DeserializedType<
    DeSerializersT,
    'Edm.String'
  >;
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
   * Group Type.
   * @nullable
   */
  collectiveProcessingType?: DeserializedType<DeSerializersT, 'Edm.String'>;
}
/**
 * DeliveryMessageField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DeliveryMessageField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DeliveryMessage,
  NullableT,
  SelectableT
> {
  private _fieldBuilder;
  /**
   * Representation of the {@link DeliveryMessage.collectiveProcessing} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  collectiveProcessing: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link DeliveryMessage.deliveryDocument} property for query construction.
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
   * Representation of the {@link DeliveryMessage.deliveryDocumentItem} property for query construction.
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
   * Representation of the {@link DeliveryMessage.scheduleLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  scheduleLine: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link DeliveryMessage.collectiveProcessingMsgCounter} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  collectiveProcessingMsgCounter: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link DeliveryMessage.systemMessageIdentification} property for query construction.
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
   * Representation of the {@link DeliveryMessage.systemMessageNumber} property for query construction.
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
   * Representation of the {@link DeliveryMessage.systemMessageType} property for query construction.
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
   * Representation of the {@link DeliveryMessage.systemMessageVariable1} property for query construction.
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
   * Representation of the {@link DeliveryMessage.systemMessageVariable2} property for query construction.
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
   * Representation of the {@link DeliveryMessage.systemMessageVariable3} property for query construction.
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
   * Representation of the {@link DeliveryMessage.systemMessageVariable4} property for query construction.
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
   * Representation of the {@link DeliveryMessage.collectiveProcessingType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  collectiveProcessingType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Creates an instance of DeliveryMessageField.
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
export declare namespace DeliveryMessage {
  /**
   * Metadata information on all properties of the `DeliveryMessage` complex type.
   */
  const _propertyMetadata: PropertyMetadata<DeliveryMessage>[];
}
