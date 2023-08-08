"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InbDeliveryAddressApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const InbDeliveryAddress_1 = require("./InbDeliveryAddress");
const InbDeliveryAddressRequestBuilder_1 = require("./InbDeliveryAddressRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class InbDeliveryAddressApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = InbDeliveryAddress_1.InbDeliveryAddress;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new InbDeliveryAddressApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new InbDeliveryAddressRequestBuilder_1.InbDeliveryAddressRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(InbDeliveryAddress_1.InbDeliveryAddress, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link addressId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false),
                /**
                 * Static representation of the {@link additionalStreetPrefixName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_STREET_PREFIX_NAME: fieldBuilder.buildEdmTypeField('AdditionalStreetPrefixName', 'Edm.String', false),
                /**
                 * Static representation of the {@link additionalStreetSuffixName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_STREET_SUFFIX_NAME: fieldBuilder.buildEdmTypeField('AdditionalStreetSuffixName', 'Edm.String', false),
                /**
                 * Static representation of the {@link addressTimeZone} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_TIME_ZONE: fieldBuilder.buildEdmTypeField('AddressTimeZone', 'Edm.String', false),
                /**
                 * Static representation of the {@link building} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUILDING: fieldBuilder.buildEdmTypeField('Building', 'Edm.String', false),
                /**
                 * Static representation of the {@link businessPartnerName1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_NAME_1: fieldBuilder.buildEdmTypeField('BusinessPartnerName1', 'Edm.String', false),
                /**
                 * Static representation of the {@link businessPartnerName2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_NAME_2: fieldBuilder.buildEdmTypeField('BusinessPartnerName2', 'Edm.String', false),
                /**
                 * Static representation of the {@link businessPartnerName3} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_NAME_3: fieldBuilder.buildEdmTypeField('BusinessPartnerName3', 'Edm.String', false),
                /**
                 * Static representation of the {@link businessPartnerName4} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_NAME_4: fieldBuilder.buildEdmTypeField('BusinessPartnerName4', 'Edm.String', false),
                /**
                 * Static representation of the {@link careOfName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CARE_OF_NAME: fieldBuilder.buildEdmTypeField('CareOfName', 'Edm.String', false),
                /**
                 * Static representation of the {@link cityCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CITY_CODE: fieldBuilder.buildEdmTypeField('CityCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link cityName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CITY_NAME: fieldBuilder.buildEdmTypeField('CityName', 'Edm.String', false),
                /**
                 * Static representation of the {@link citySearch} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CITY_SEARCH: fieldBuilder.buildEdmTypeField('CitySearch', 'Edm.String', false),
                /**
                 * Static representation of the {@link companyPostalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_POSTAL_CODE: fieldBuilder.buildEdmTypeField('CompanyPostalCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link correspondenceLanguage} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CORRESPONDENCE_LANGUAGE: fieldBuilder.buildEdmTypeField('CorrespondenceLanguage', 'Edm.String', false),
                /**
                 * Static representation of the {@link country} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', false),
                /**
                 * Static representation of the {@link county} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', false),
                /**
                 * Static representation of the {@link deliveryServiceNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_SERVICE_NUMBER: fieldBuilder.buildEdmTypeField('DeliveryServiceNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link deliveryServiceTypeCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_SERVICE_TYPE_CODE: fieldBuilder.buildEdmTypeField('DeliveryServiceTypeCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link district} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISTRICT: fieldBuilder.buildEdmTypeField('District', 'Edm.String', false),
                /**
                 * Static representation of the {@link faxNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FAX_NUMBER: fieldBuilder.buildEdmTypeField('FaxNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link floor} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FLOOR: fieldBuilder.buildEdmTypeField('Floor', 'Edm.String', false),
                /**
                 * Static representation of the {@link formOfAddress} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FORM_OF_ADDRESS: fieldBuilder.buildEdmTypeField('FormOfAddress', 'Edm.String', false),
                /**
                 * Static representation of the {@link fullName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FULL_NAME: fieldBuilder.buildEdmTypeField('FullName', 'Edm.String', false),
                /**
                 * Static representation of the {@link homeCityName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOME_CITY_NAME: fieldBuilder.buildEdmTypeField('HomeCityName', 'Edm.String', false),
                /**
                 * Static representation of the {@link houseNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOUSE_NUMBER: fieldBuilder.buildEdmTypeField('HouseNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link houseNumberSupplementText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOUSE_NUMBER_SUPPLEMENT_TEXT: fieldBuilder.buildEdmTypeField('HouseNumberSupplementText', 'Edm.String', false),
                /**
                 * Static representation of the {@link nation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NATION: fieldBuilder.buildEdmTypeField('Nation', 'Edm.String', false),
                /**
                 * Static representation of the {@link person} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON: fieldBuilder.buildEdmTypeField('Person', 'Edm.String', false),
                /**
                 * Static representation of the {@link phoneNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PHONE_NUMBER: fieldBuilder.buildEdmTypeField('PhoneNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link poBox} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX: fieldBuilder.buildEdmTypeField('POBox', 'Edm.String', false),
                /**
                 * Static representation of the {@link poBoxDeviatingCityName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX_DEVIATING_CITY_NAME: fieldBuilder.buildEdmTypeField('POBoxDeviatingCityName', 'Edm.String', false),
                /**
                 * Static representation of the {@link poBoxDeviatingCountry} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX_DEVIATING_COUNTRY: fieldBuilder.buildEdmTypeField('POBoxDeviatingCountry', 'Edm.String', false),
                /**
                 * Static representation of the {@link poBoxDeviatingRegion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX_DEVIATING_REGION: fieldBuilder.buildEdmTypeField('POBoxDeviatingRegion', 'Edm.String', false),
                /**
                 * Static representation of the {@link poBoxIsWithoutNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX_IS_WITHOUT_NUMBER: fieldBuilder.buildEdmTypeField('POBoxIsWithoutNumber', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link poBoxLobbyName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX_LOBBY_NAME: fieldBuilder.buildEdmTypeField('POBoxLobbyName', 'Edm.String', false),
                /**
                 * Static representation of the {@link poBoxPostalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX_POSTAL_CODE: fieldBuilder.buildEdmTypeField('POBoxPostalCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link postalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                POSTAL_CODE: fieldBuilder.buildEdmTypeField('PostalCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link prfrdCommMediumType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRFRD_COMM_MEDIUM_TYPE: fieldBuilder.buildEdmTypeField('PrfrdCommMediumType', 'Edm.String', false),
                /**
                 * Static representation of the {@link region} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REGION: fieldBuilder.buildEdmTypeField('Region', 'Edm.String', false),
                /**
                 * Static representation of the {@link roomNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ROOM_NUMBER: fieldBuilder.buildEdmTypeField('RoomNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link searchTerm1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SEARCH_TERM_1: fieldBuilder.buildEdmTypeField('SearchTerm1', 'Edm.String', false),
                /**
                 * Static representation of the {@link streetName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STREET_NAME: fieldBuilder.buildEdmTypeField('StreetName', 'Edm.String', false),
                /**
                 * Static representation of the {@link streetPrefixName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STREET_PREFIX_NAME: fieldBuilder.buildEdmTypeField('StreetPrefixName', 'Edm.String', false),
                /**
                 * Static representation of the {@link streetSearch} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STREET_SEARCH: fieldBuilder.buildEdmTypeField('StreetSearch', 'Edm.String', false),
                /**
                 * Static representation of the {@link streetSuffixName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STREET_SUFFIX_NAME: fieldBuilder.buildEdmTypeField('StreetSuffixName', 'Edm.String', false),
                /**
                 * Static representation of the {@link taxJurisdiction} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TAX_JURISDICTION: fieldBuilder.buildEdmTypeField('TaxJurisdiction', 'Edm.String', false),
                /**
                 * Static representation of the {@link transportZone} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRANSPORT_ZONE: fieldBuilder.buildEdmTypeField('TransportZone', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', InbDeliveryAddress_1.InbDeliveryAddress)
            };
        }
        return this._schema;
    }
}
exports.InbDeliveryAddressApi = InbDeliveryAddressApi;
//# sourceMappingURL=InbDeliveryAddressApi.js.map