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
  EdmTypeField,
  Entity,
  FieldBuilder,
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
export class DeliveryMessageField<
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
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
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
  > = this._fieldBuilder.buildEdmTypeField(
    'CollectiveProcessing',
    'Edm.String',
    true
  );
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
  > = this._fieldBuilder.buildEdmTypeField(
    'DeliveryDocument',
    'Edm.String',
    true
  );
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
  > = this._fieldBuilder.buildEdmTypeField(
    'DeliveryDocumentItem',
    'Edm.String',
    true
  );
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
  > = this._fieldBuilder.buildEdmTypeField('ScheduleLine', 'Edm.String', true);
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
  > = this._fieldBuilder.buildEdmTypeField(
    'CollectiveProcessingMsgCounter',
    'Edm.String',
    true
  );
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
  > = this._fieldBuilder.buildEdmTypeField(
    'SystemMessageIdentification',
    'Edm.String',
    true
  );
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
  > = this._fieldBuilder.buildEdmTypeField(
    'SystemMessageNumber',
    'Edm.String',
    true
  );
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
  > = this._fieldBuilder.buildEdmTypeField(
    'SystemMessageType',
    'Edm.String',
    true
  );
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
  > = this._fieldBuilder.buildEdmTypeField(
    'SystemMessageVariable1',
    'Edm.String',
    true
  );
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
  > = this._fieldBuilder.buildEdmTypeField(
    'SystemMessageVariable2',
    'Edm.String',
    true
  );
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
  > = this._fieldBuilder.buildEdmTypeField(
    'SystemMessageVariable3',
    'Edm.String',
    true
  );
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
  > = this._fieldBuilder.buildEdmTypeField(
    'SystemMessageVariable4',
    'Edm.String',
    true
  );
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
  > = this._fieldBuilder.buildEdmTypeField(
    'CollectiveProcessingType',
    'Edm.String',
    true
  );

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
  ) {
    super(fieldName, fieldOf, deSerializers, DeliveryMessage, fieldOptions);
  }
}

export namespace DeliveryMessage {
  /**
   * Metadata information on all properties of the `DeliveryMessage` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DeliveryMessage>[] = [
    {
      originalName: 'CollectiveProcessing',
      name: 'collectiveProcessing',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DeliveryDocument',
      name: 'deliveryDocument',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DeliveryDocumentItem',
      name: 'deliveryDocumentItem',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ScheduleLine',
      name: 'scheduleLine',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CollectiveProcessingMsgCounter',
      name: 'collectiveProcessingMsgCounter',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SystemMessageIdentification',
      name: 'systemMessageIdentification',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SystemMessageNumber',
      name: 'systemMessageNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SystemMessageType',
      name: 'systemMessageType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SystemMessageVariable1',
      name: 'systemMessageVariable1',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SystemMessageVariable2',
      name: 'systemMessageVariable2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SystemMessageVariable3',
      name: 'systemMessageVariable3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SystemMessageVariable4',
      name: 'systemMessageVariable4',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CollectiveProcessingType',
      name: 'collectiveProcessingType',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
