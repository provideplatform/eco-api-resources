/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InbDeliveryHeader } from './InbDeliveryHeader';
import { InbDeliveryHeaderRequestBuilder } from './InbDeliveryHeaderRequestBuilder';
import { InbDeliveryHeaderTextApi } from './InbDeliveryHeaderTextApi';
import { InbDeliveryItemApi } from './InbDeliveryItemApi';
import { InbDeliveryPartnerApi } from './InbDeliveryPartnerApi';
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
  Time,
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class InbDeliveryHeaderApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InbDeliveryHeader<DeSerializersT>, DeSerializersT>
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
  ): InbDeliveryHeaderApi<DeSerializersT> {
    return new InbDeliveryHeaderApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link toDeliveryDocumentText} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DELIVERY_DOCUMENT_TEXT: Link<
      InbDeliveryHeader<DeSerializersT>,
      DeSerializersT,
      InbDeliveryHeaderTextApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toDeliveryDocumentItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DELIVERY_DOCUMENT_ITEM: Link<
      InbDeliveryHeader<DeSerializersT>,
      DeSerializersT,
      InbDeliveryItemApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toDeliveryDocumentPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DELIVERY_DOCUMENT_PARTNER: Link<
      InbDeliveryHeader<DeSerializersT>,
      DeSerializersT,
      InbDeliveryPartnerApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      InbDeliveryHeaderTextApi<DeSerializersT>,
      InbDeliveryItemApi<DeSerializersT>,
      InbDeliveryPartnerApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_DELIVERY_DOCUMENT_TEXT: new Link(
        'to_DeliveryDocumentText',
        this,
        linkedApis[0]
      ),
      TO_DELIVERY_DOCUMENT_ITEM: new Link(
        'to_DeliveryDocumentItem',
        this,
        linkedApis[1]
      ),
      TO_DELIVERY_DOCUMENT_PARTNER: new Link(
        'to_DeliveryDocumentPartner',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = InbDeliveryHeader;

  requestBuilder(): InbDeliveryHeaderRequestBuilder<DeSerializersT> {
    return new InbDeliveryHeaderRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InbDeliveryHeader<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InbDeliveryHeader<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<InbDeliveryHeader<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof InbDeliveryHeader,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InbDeliveryHeader,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RECEIVING_LOCATION_TIME_ZONE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTUAL_DELIVERY_ROUTE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTUAL_GOODS_MOVEMENT_DATE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    ACTUAL_GOODS_MOVEMENT_TIME: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.Time',
      true,
      true
    >;
    BILLING_DOCUMENT_DATE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    BILL_OF_LADING: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPLETE_DELIVERY_IS_DEFINED: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    CONFIRMATION_TIME: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.Time',
      true,
      true
    >;
    CREATED_BY_USER: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CREATION_TIME: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.Time',
      true,
      true
    >;
    CUSTOMER_GROUP: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_BLOCK_REASON: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    DELIVERY_DOCUMENT: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_DOCUMENT_BY_SUPPLIER: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_DOCUMENT_TYPE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_IS_IN_PLANT: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    DELIVERY_PRIORITY: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TIME: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.Time',
      true,
      true
    >;
    DELIVERY_VERSION: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPRECIATION_PERCENTAGE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    DISTR_STATUS_BY_DECENTRALIZED_WRHS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    EXTERNAL_IDENTIFICATION_TYPE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_TRANSPORT_SYSTEM: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FACTORY_CALENDAR_BY_CUSTOMER: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOODS_ISSUE_OR_RECEIPT_SLIP_NUMBER: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOODS_ISSUE_TIME: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.Time',
      true,
      true
    >;
    HANDLING_UNIT_IN_STOCK: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HDR_GENERAL_INCOMPLETION_STATUS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HDR_GOODS_MVT_INCOMPLETION_STATUS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_BILLG_INCOMPLETION_STATUS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_BILLING_BLOCK_REASON: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_DELIV_INCOMPLETION_STATUS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_GROSS_WEIGHT: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    HEADER_NET_WEIGHT: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    HEADER_PACKING_INCOMPLETION_STS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_PICKG_INCOMPLETION_STATUS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_VOLUME: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    HEADER_VOLUME_UNIT: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_WEIGHT_UNIT: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOTERMS_CLASSIFICATION: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOTERMS_TRANSFER_LOCATION: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERCOMPANY_BILLING_DATE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    INTERNAL_FINANCIAL_DOCUMENT: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_FOR_SINGLE_WAREHOUSE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_EXPORT_DELIVERY: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_DATE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LOADING_POINT: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_TIME: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.Time',
      true,
      true
    >;
    MEANS_OF_TRANSPORT: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MEANS_OF_TRANSPORT_REF_MATERIAL: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MEANS_OF_TRANSPORT_TYPE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_COMBINATION_IS_ALLOWED: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ORDER_ID: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERALL_DELIV_CONF_STATUS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERALL_DELIV_RELTD_BILLG_STATUS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERALL_GOODS_MOVEMENT_STATUS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERALL_INTCO_BILLING_STATUS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERALL_PACKING_STATUS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERALL_PICKING_CONF_STATUS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERALL_PICKING_STATUS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERALL_PROOF_OF_DELIVERY_STATUS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERALL_SD_PROCESS_STATUS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERALL_WAREHOUSE_ACTIVITY_STATUS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVRL_ITM_DELIV_INCOMPLETION_STS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVRL_ITM_GDS_MVT_INCOMPLETION_STS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVRL_ITM_GENERAL_INCOMPLETION_STS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVRL_ITM_PACKING_INCOMPLETION_STS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVRL_ITM_PICKING_INCOMPLETION_STS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_GUARANTEE_PROCEDURE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKED_ITEMS_LOCATION: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKING_DATE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PICKING_TIME: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.Time',
      true,
      true
    >;
    PLANNED_GOODS_ISSUE_DATE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PROOF_OF_DELIVERY_DATE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PROPOSED_DELIVERY_ROUTE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_PLANT: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_SCHEDULE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_DISTRICT: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_OFFICE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORGANIZATION: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SD_DOCUMENT_CATEGORY: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPMENT_BLOCK_REASON: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CONDITION: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_POINT: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_TYPE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_TO_PARTY: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOLD_TO_PARTY: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPECIAL_PROCESSING_CODE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICS_CURRENCY: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPLIER: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_BLOCK_STATUS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_CREDIT_CHECK_STATUS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_NUMBER_OF_PACKAGE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CURRENCY: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_GROUP: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_PLANNING_DATE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    TRANSPORTATION_PLANNING_STATUS: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_PLANNING_TIME: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.Time',
      true,
      true
    >;
    UNLOADING_POINT_NAME: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_GATE: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_STAGING_AREA: OrderableEdmTypeField<
      InbDeliveryHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toDeliveryDocumentText} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DELIVERY_DOCUMENT_TEXT: Link<
      InbDeliveryHeader<DeSerializersT>,
      DeSerializersT,
      InbDeliveryHeaderTextApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toDeliveryDocumentItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DELIVERY_DOCUMENT_ITEM: Link<
      InbDeliveryHeader<DeSerializersT>,
      DeSerializersT,
      InbDeliveryItemApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toDeliveryDocumentPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DELIVERY_DOCUMENT_PARTNER: Link<
      InbDeliveryHeader<DeSerializersT>,
      DeSerializersT,
      InbDeliveryPartnerApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InbDeliveryHeader<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link receivingLocationTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_LOCATION_TIME_ZONE: fieldBuilder.buildEdmTypeField(
          'ReceivingLocationTimeZone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link actualDeliveryRoute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_DELIVERY_ROUTE: fieldBuilder.buildEdmTypeField(
          'ActualDeliveryRoute',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link actualGoodsMovementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_GOODS_MOVEMENT_DATE: fieldBuilder.buildEdmTypeField(
          'ActualGoodsMovementDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link actualGoodsMovementTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_GOODS_MOVEMENT_TIME: fieldBuilder.buildEdmTypeField(
          'ActualGoodsMovementTime',
          'Edm.Time',
          true
        ),
        /**
         * Static representation of the {@link billingDocumentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'BillingDocumentDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link billOfLading} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_LADING: fieldBuilder.buildEdmTypeField(
          'BillOfLading',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link completeDeliveryIsDefined} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETE_DELIVERY_IS_DEFINED: fieldBuilder.buildEdmTypeField(
          'CompleteDeliveryIsDefined',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link confirmationTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMATION_TIME: fieldBuilder.buildEdmTypeField(
          'ConfirmationTime',
          'Edm.Time',
          true
        ),
        /**
         * Static representation of the {@link createdByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY_USER: fieldBuilder.buildEdmTypeField(
          'CreatedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_DATE: fieldBuilder.buildEdmTypeField(
          'CreationDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link creationTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_TIME: fieldBuilder.buildEdmTypeField(
          'CreationTime',
          'Edm.Time',
          true
        ),
        /**
         * Static representation of the {@link customerGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_GROUP: fieldBuilder.buildEdmTypeField(
          'CustomerGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryBlockReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_BLOCK_REASON: fieldBuilder.buildEdmTypeField(
          'DeliveryBlockReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'DeliveryDate',
          'Edm.DateTime',
          true
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
         * Static representation of the {@link deliveryDocumentBySupplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DOCUMENT_BY_SUPPLIER: fieldBuilder.buildEdmTypeField(
          'DeliveryDocumentBySupplier',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'DeliveryDocumentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryIsInPlant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_IS_IN_PLANT: fieldBuilder.buildEdmTypeField(
          'DeliveryIsInPlant',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link deliveryPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_PRIORITY: fieldBuilder.buildEdmTypeField(
          'DeliveryPriority',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TIME: fieldBuilder.buildEdmTypeField(
          'DeliveryTime',
          'Edm.Time',
          true
        ),
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
         * Static representation of the {@link depreciationPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'DepreciationPercentage',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link distrStatusByDecentralizedWrhs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTR_STATUS_BY_DECENTRALIZED_WRHS: fieldBuilder.buildEdmTypeField(
          'DistrStatusByDecentralizedWrhs',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link externalIdentificationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_IDENTIFICATION_TYPE: fieldBuilder.buildEdmTypeField(
          'ExternalIdentificationType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalTransportSystem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_TRANSPORT_SYSTEM: fieldBuilder.buildEdmTypeField(
          'ExternalTransportSystem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link factoryCalendarByCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTORY_CALENDAR_BY_CUSTOMER: fieldBuilder.buildEdmTypeField(
          'FactoryCalendarByCustomer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link goodsIssueOrReceiptSlipNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_ISSUE_OR_RECEIPT_SLIP_NUMBER: fieldBuilder.buildEdmTypeField(
          'GoodsIssueOrReceiptSlipNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link goodsIssueTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_ISSUE_TIME: fieldBuilder.buildEdmTypeField(
          'GoodsIssueTime',
          'Edm.Time',
          true
        ),
        /**
         * Static representation of the {@link handlingUnitInStock} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HANDLING_UNIT_IN_STOCK: fieldBuilder.buildEdmTypeField(
          'HandlingUnitInStock',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hdrGeneralIncompletionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HDR_GENERAL_INCOMPLETION_STATUS: fieldBuilder.buildEdmTypeField(
          'HdrGeneralIncompletionStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hdrGoodsMvtIncompletionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HDR_GOODS_MVT_INCOMPLETION_STATUS: fieldBuilder.buildEdmTypeField(
          'HdrGoodsMvtIncompletionStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link headerBillgIncompletionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_BILLG_INCOMPLETION_STATUS: fieldBuilder.buildEdmTypeField(
          'HeaderBillgIncompletionStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link headerBillingBlockReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_BILLING_BLOCK_REASON: fieldBuilder.buildEdmTypeField(
          'HeaderBillingBlockReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link headerDelivIncompletionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_DELIV_INCOMPLETION_STATUS: fieldBuilder.buildEdmTypeField(
          'HeaderDelivIncompletionStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link headerGrossWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_GROSS_WEIGHT: fieldBuilder.buildEdmTypeField(
          'HeaderGrossWeight',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link headerNetWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_NET_WEIGHT: fieldBuilder.buildEdmTypeField(
          'HeaderNetWeight',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link headerPackingIncompletionSts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_PACKING_INCOMPLETION_STS: fieldBuilder.buildEdmTypeField(
          'HeaderPackingIncompletionSts',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link headerPickgIncompletionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_PICKG_INCOMPLETION_STATUS: fieldBuilder.buildEdmTypeField(
          'HeaderPickgIncompletionStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link headerVolume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_VOLUME: fieldBuilder.buildEdmTypeField(
          'HeaderVolume',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link headerVolumeUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_VOLUME_UNIT: fieldBuilder.buildEdmTypeField(
          'HeaderVolumeUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link headerWeightUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_WEIGHT_UNIT: fieldBuilder.buildEdmTypeField(
          'HeaderWeightUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link incotermsClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOTERMS_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'IncotermsClassification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link incotermsTransferLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOTERMS_TRANSFER_LOCATION: fieldBuilder.buildEdmTypeField(
          'IncotermsTransferLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intercompanyBillingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_BILLING_DATE: fieldBuilder.buildEdmTypeField(
          'IntercompanyBillingDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link internalFinancialDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_FINANCIAL_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'InternalFinancialDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDeliveryForSingleWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELIVERY_FOR_SINGLE_WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'IsDeliveryForSingleWarehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isExportDelivery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXPORT_DELIVERY: fieldBuilder.buildEdmTypeField(
          'IsExportDelivery',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastChangeDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField(
          'LastChangeDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link lastChangedByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGED_BY_USER: fieldBuilder.buildEdmTypeField(
          'LastChangedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_DATE: fieldBuilder.buildEdmTypeField(
          'LoadingDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link loadingPoint} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_POINT: fieldBuilder.buildEdmTypeField(
          'LoadingPoint',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_TIME: fieldBuilder.buildEdmTypeField(
          'LoadingTime',
          'Edm.Time',
          true
        ),
        /**
         * Static representation of the {@link meansOfTransport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEANS_OF_TRANSPORT: fieldBuilder.buildEdmTypeField(
          'MeansOfTransport',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link meansOfTransportRefMaterial} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEANS_OF_TRANSPORT_REF_MATERIAL: fieldBuilder.buildEdmTypeField(
          'MeansOfTransportRefMaterial',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link meansOfTransportType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEANS_OF_TRANSPORT_TYPE: fieldBuilder.buildEdmTypeField(
          'MeansOfTransportType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderCombinationIsAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_COMBINATION_IS_ALLOWED: fieldBuilder.buildEdmTypeField(
          'OrderCombinationIsAllowed',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link orderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ID: fieldBuilder.buildEdmTypeField('OrderID', 'Edm.String', true),
        /**
         * Static representation of the {@link overallDelivConfStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERALL_DELIV_CONF_STATUS: fieldBuilder.buildEdmTypeField(
          'OverallDelivConfStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overallDelivReltdBillgStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERALL_DELIV_RELTD_BILLG_STATUS: fieldBuilder.buildEdmTypeField(
          'OverallDelivReltdBillgStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overallGoodsMovementStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERALL_GOODS_MOVEMENT_STATUS: fieldBuilder.buildEdmTypeField(
          'OverallGoodsMovementStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overallIntcoBillingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERALL_INTCO_BILLING_STATUS: fieldBuilder.buildEdmTypeField(
          'OverallIntcoBillingStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overallPackingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERALL_PACKING_STATUS: fieldBuilder.buildEdmTypeField(
          'OverallPackingStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overallPickingConfStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERALL_PICKING_CONF_STATUS: fieldBuilder.buildEdmTypeField(
          'OverallPickingConfStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overallPickingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERALL_PICKING_STATUS: fieldBuilder.buildEdmTypeField(
          'OverallPickingStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overallProofOfDeliveryStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERALL_PROOF_OF_DELIVERY_STATUS: fieldBuilder.buildEdmTypeField(
          'OverallProofOfDeliveryStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overallSdProcessStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERALL_SD_PROCESS_STATUS: fieldBuilder.buildEdmTypeField(
          'OverallSDProcessStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overallWarehouseActivityStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERALL_WAREHOUSE_ACTIVITY_STATUS: fieldBuilder.buildEdmTypeField(
          'OverallWarehouseActivityStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ovrlItmDelivIncompletionSts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVRL_ITM_DELIV_INCOMPLETION_STS: fieldBuilder.buildEdmTypeField(
          'OvrlItmDelivIncompletionSts',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ovrlItmGdsMvtIncompletionSts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVRL_ITM_GDS_MVT_INCOMPLETION_STS: fieldBuilder.buildEdmTypeField(
          'OvrlItmGdsMvtIncompletionSts',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ovrlItmGeneralIncompletionSts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVRL_ITM_GENERAL_INCOMPLETION_STS: fieldBuilder.buildEdmTypeField(
          'OvrlItmGeneralIncompletionSts',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ovrlItmPackingIncompletionSts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVRL_ITM_PACKING_INCOMPLETION_STS: fieldBuilder.buildEdmTypeField(
          'OvrlItmPackingIncompletionSts',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ovrlItmPickingIncompletionSts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVRL_ITM_PICKING_INCOMPLETION_STS: fieldBuilder.buildEdmTypeField(
          'OvrlItmPickingIncompletionSts',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentGuaranteeProcedure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_GUARANTEE_PROCEDURE: fieldBuilder.buildEdmTypeField(
          'PaymentGuaranteeProcedure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickedItemsLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKED_ITEMS_LOCATION: fieldBuilder.buildEdmTypeField(
          'PickedItemsLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKING_DATE: fieldBuilder.buildEdmTypeField(
          'PickingDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link pickingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKING_TIME: fieldBuilder.buildEdmTypeField(
          'PickingTime',
          'Edm.Time',
          true
        ),
        /**
         * Static representation of the {@link plannedGoodsIssueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_GOODS_ISSUE_DATE: fieldBuilder.buildEdmTypeField(
          'PlannedGoodsIssueDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link proofOfDeliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROOF_OF_DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'ProofOfDeliveryDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link proposedDeliveryRoute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPOSED_DELIVERY_ROUTE: fieldBuilder.buildEdmTypeField(
          'ProposedDeliveryRoute',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingPlant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_PLANT: fieldBuilder.buildEdmTypeField(
          'ReceivingPlant',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link routeSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_SCHEDULE: fieldBuilder.buildEdmTypeField(
          'RouteSchedule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesDistrict} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_DISTRICT: fieldBuilder.buildEdmTypeField(
          'SalesDistrict',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOffice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_OFFICE: fieldBuilder.buildEdmTypeField(
          'SalesOffice',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOrganization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORGANIZATION: fieldBuilder.buildEdmTypeField(
          'SalesOrganization',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sdDocumentCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SD_DOCUMENT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'SDDocumentCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipmentBlockReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_BLOCK_REASON: fieldBuilder.buildEdmTypeField(
          'ShipmentBlockReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingCondition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CONDITION: fieldBuilder.buildEdmTypeField(
          'ShippingCondition',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingPoint} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_POINT: fieldBuilder.buildEdmTypeField(
          'ShippingPoint',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_TYPE: fieldBuilder.buildEdmTypeField(
          'ShippingType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipToParty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_TO_PARTY: fieldBuilder.buildEdmTypeField(
          'ShipToParty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link soldToParty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOLD_TO_PARTY: fieldBuilder.buildEdmTypeField(
          'SoldToParty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link specialProcessingCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_PROCESSING_CODE: fieldBuilder.buildEdmTypeField(
          'SpecialProcessingCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statisticsCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICS_CURRENCY: fieldBuilder.buildEdmTypeField(
          'StatisticsCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER: fieldBuilder.buildEdmTypeField(
          'Supplier',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalBlockStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_BLOCK_STATUS: fieldBuilder.buildEdmTypeField(
          'TotalBlockStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalCreditCheckStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_CREDIT_CHECK_STATUS: fieldBuilder.buildEdmTypeField(
          'TotalCreditCheckStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalNumberOfPackage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_NUMBER_OF_PACKAGE: fieldBuilder.buildEdmTypeField(
          'TotalNumberOfPackage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'TransactionCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_GROUP: fieldBuilder.buildEdmTypeField(
          'TransportationGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationPlanningDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_PLANNING_DATE: fieldBuilder.buildEdmTypeField(
          'TransportationPlanningDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link transportationPlanningStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_PLANNING_STATUS: fieldBuilder.buildEdmTypeField(
          'TransportationPlanningStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationPlanningTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_PLANNING_TIME: fieldBuilder.buildEdmTypeField(
          'TransportationPlanningTime',
          'Edm.Time',
          true
        ),
        /**
         * Static representation of the {@link unloadingPointName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_POINT_NAME: fieldBuilder.buildEdmTypeField(
          'UnloadingPointName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'Warehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseGate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_GATE: fieldBuilder.buildEdmTypeField(
          'WarehouseGate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseStagingArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_STAGING_AREA: fieldBuilder.buildEdmTypeField(
          'WarehouseStagingArea',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InbDeliveryHeader)
      };
    }

    return this._schema;
  }
}
