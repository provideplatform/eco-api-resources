/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { InbDeliveryAddressApi } from './InbDeliveryAddressApi';
/**
 * This class represents the entity "A_InbDeliveryAddress" of service "API_INBOUND_DELIVERY_SRV".
 */
export declare class InbDeliveryAddress<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InbDeliveryAddressType<T>
{
  readonly _entityApi: InbDeliveryAddressApi<T>;
  /**
   * Technical entity name for InbDeliveryAddress.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the InbDeliveryAddress entity
   */
  static _keys: string[];
  /**
   * Address number.
   * Maximum length: 10.
   */
  addressId: DeserializedType<T, 'Edm.String'>;
  /**
   * Street 3.
   * Maximum length: 40.
   */
  additionalStreetPrefixName: DeserializedType<T, 'Edm.String'>;
  /**
   * Street 5.
   * Maximum length: 40.
   */
  additionalStreetSuffixName: DeserializedType<T, 'Edm.String'>;
  /**
   * Time Zone.
   * Maximum length: 6.
   */
  addressTimeZone: DeserializedType<T, 'Edm.String'>;
  /**
   * Building Code.
   * Maximum length: 20.
   */
  building: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * Maximum length: 40.
   */
  businessPartnerName1: DeserializedType<T, 'Edm.String'>;
  /**
   * Name 2.
   * Maximum length: 40.
   */
  businessPartnerName2: DeserializedType<T, 'Edm.String'>;
  /**
   * Name 3.
   * Maximum length: 40.
   */
  businessPartnerName3: DeserializedType<T, 'Edm.String'>;
  /**
   * Name 4.
   * Maximum length: 40.
   */
  businessPartnerName4: DeserializedType<T, 'Edm.String'>;
  /**
   * c/o.
   * Maximum length: 40.
   */
  careOfName: DeserializedType<T, 'Edm.String'>;
  /**
   * City Code.
   * Maximum length: 12.
   */
  cityCode: DeserializedType<T, 'Edm.String'>;
  /**
   * City.
   * Maximum length: 40.
   */
  cityName: DeserializedType<T, 'Edm.String'>;
  /**
   * City.
   * Maximum length: 25.
   */
  citySearch: DeserializedType<T, 'Edm.String'>;
  /**
   * Company Post Cd.
   * Maximum length: 10.
   */
  companyPostalCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Language.
   * Maximum length: 2.
   */
  correspondenceLanguage: DeserializedType<T, 'Edm.String'>;
  /**
   * Country/Region.
   * Maximum length: 3.
   */
  country: DeserializedType<T, 'Edm.String'>;
  /**
   * County.
   * Maximum length: 40.
   */
  county: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery Service No.
   * Maximum length: 10.
   */
  deliveryServiceNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Delvry Serv Type.
   * Maximum length: 4.
   */
  deliveryServiceTypeCode: DeserializedType<T, 'Edm.String'>;
  /**
   * District.
   * Maximum length: 40.
   */
  district: DeserializedType<T, 'Edm.String'>;
  /**
   * Fax.
   * Maximum length: 30.
   */
  faxNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Floor.
   * Maximum length: 10.
   */
  floor: DeserializedType<T, 'Edm.String'>;
  /**
   * Title.
   * Maximum length: 4.
   */
  formOfAddress: DeserializedType<T, 'Edm.String'>;
  /**
   * Fullname.
   * Maximum length: 80.
   */
  fullName: DeserializedType<T, 'Edm.String'>;
  /**
   * Different City.
   * Maximum length: 40.
   */
  homeCityName: DeserializedType<T, 'Edm.String'>;
  /**
   * House Number.
   * Maximum length: 10.
   */
  houseNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Supplement.
   * Maximum length: 10.
   */
  houseNumberSupplementText: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Version.
   * Maximum length: 1.
   */
  nation: DeserializedType<T, 'Edm.String'>;
  /**
   * Person Number.
   * Maximum length: 10.
   */
  person: DeserializedType<T, 'Edm.String'>;
  /**
   * Telephone.
   * Maximum length: 30.
   */
  phoneNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * PO Box.
   * Maximum length: 10.
   */
  poBox: DeserializedType<T, 'Edm.String'>;
  /**
   * PO Box City.
   * Maximum length: 40.
   */
  poBoxDeviatingCityName: DeserializedType<T, 'Edm.String'>;
  /**
   * PO Box Country/Region.
   * Maximum length: 3.
   */
  poBoxDeviatingCountry: DeserializedType<T, 'Edm.String'>;
  /**
   * PO Region.
   * Maximum length: 3.
   */
  poBoxDeviatingRegion: DeserializedType<T, 'Edm.String'>;
  /**
   * PO Box w/o no.
   */
  poBoxIsWithoutNumber: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * PO Box Lobby.
   * Maximum length: 40.
   */
  poBoxLobbyName: DeserializedType<T, 'Edm.String'>;
  /**
   * PO Box Post Cde.
   * Maximum length: 10.
   */
  poBoxPostalCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Postal Code.
   * Maximum length: 10.
   */
  postalCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Comm. Method.
   * Maximum length: 3.
   */
  prfrdCommMediumType: DeserializedType<T, 'Edm.String'>;
  /**
   * Region.
   * Maximum length: 3.
   */
  region: DeserializedType<T, 'Edm.String'>;
  /**
   * Room Number.
   * Maximum length: 10.
   */
  roomNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Search Term 1.
   * Maximum length: 20.
   */
  searchTerm1: DeserializedType<T, 'Edm.String'>;
  /**
   * Street.
   * Maximum length: 60.
   */
  streetName: DeserializedType<T, 'Edm.String'>;
  /**
   * Street 2.
   * Maximum length: 40.
   */
  streetPrefixName: DeserializedType<T, 'Edm.String'>;
  /**
   * Street.
   * Maximum length: 25.
   */
  streetSearch: DeserializedType<T, 'Edm.String'>;
  /**
   * Street 4.
   * Maximum length: 40.
   */
  streetSuffixName: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Jurisdictn.
   * Maximum length: 15.
   */
  taxJurisdiction: DeserializedType<T, 'Edm.String'>;
  /**
   * Transport.zone.
   * Maximum length: 10.
   */
  transportZone: DeserializedType<T, 'Edm.String'>;
  constructor(_entityApi: InbDeliveryAddressApi<T>);
}
export interface InbDeliveryAddressType<
  T extends DeSerializers = DefaultDeSerializers
> {
  addressId: DeserializedType<T, 'Edm.String'>;
  additionalStreetPrefixName: DeserializedType<T, 'Edm.String'>;
  additionalStreetSuffixName: DeserializedType<T, 'Edm.String'>;
  addressTimeZone: DeserializedType<T, 'Edm.String'>;
  building: DeserializedType<T, 'Edm.String'>;
  businessPartnerName1: DeserializedType<T, 'Edm.String'>;
  businessPartnerName2: DeserializedType<T, 'Edm.String'>;
  businessPartnerName3: DeserializedType<T, 'Edm.String'>;
  businessPartnerName4: DeserializedType<T, 'Edm.String'>;
  careOfName: DeserializedType<T, 'Edm.String'>;
  cityCode: DeserializedType<T, 'Edm.String'>;
  cityName: DeserializedType<T, 'Edm.String'>;
  citySearch: DeserializedType<T, 'Edm.String'>;
  companyPostalCode: DeserializedType<T, 'Edm.String'>;
  correspondenceLanguage: DeserializedType<T, 'Edm.String'>;
  country: DeserializedType<T, 'Edm.String'>;
  county: DeserializedType<T, 'Edm.String'>;
  deliveryServiceNumber: DeserializedType<T, 'Edm.String'>;
  deliveryServiceTypeCode: DeserializedType<T, 'Edm.String'>;
  district: DeserializedType<T, 'Edm.String'>;
  faxNumber: DeserializedType<T, 'Edm.String'>;
  floor: DeserializedType<T, 'Edm.String'>;
  formOfAddress: DeserializedType<T, 'Edm.String'>;
  fullName: DeserializedType<T, 'Edm.String'>;
  homeCityName: DeserializedType<T, 'Edm.String'>;
  houseNumber: DeserializedType<T, 'Edm.String'>;
  houseNumberSupplementText: DeserializedType<T, 'Edm.String'>;
  nation: DeserializedType<T, 'Edm.String'>;
  person: DeserializedType<T, 'Edm.String'>;
  phoneNumber: DeserializedType<T, 'Edm.String'>;
  poBox: DeserializedType<T, 'Edm.String'>;
  poBoxDeviatingCityName: DeserializedType<T, 'Edm.String'>;
  poBoxDeviatingCountry: DeserializedType<T, 'Edm.String'>;
  poBoxDeviatingRegion: DeserializedType<T, 'Edm.String'>;
  poBoxIsWithoutNumber: DeserializedType<T, 'Edm.Boolean'>;
  poBoxLobbyName: DeserializedType<T, 'Edm.String'>;
  poBoxPostalCode: DeserializedType<T, 'Edm.String'>;
  postalCode: DeserializedType<T, 'Edm.String'>;
  prfrdCommMediumType: DeserializedType<T, 'Edm.String'>;
  region: DeserializedType<T, 'Edm.String'>;
  roomNumber: DeserializedType<T, 'Edm.String'>;
  searchTerm1: DeserializedType<T, 'Edm.String'>;
  streetName: DeserializedType<T, 'Edm.String'>;
  streetPrefixName: DeserializedType<T, 'Edm.String'>;
  streetSearch: DeserializedType<T, 'Edm.String'>;
  streetSuffixName: DeserializedType<T, 'Edm.String'>;
  taxJurisdiction: DeserializedType<T, 'Edm.String'>;
  transportZone: DeserializedType<T, 'Edm.String'>;
}
