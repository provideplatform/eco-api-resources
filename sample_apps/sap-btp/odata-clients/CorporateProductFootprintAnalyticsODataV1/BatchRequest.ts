/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v4';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import { ProductFootprints } from './index';

/**
 * Batch builder for operations supported on the CorporateProductFootprintAnalyticsODataV1.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadCorporateProductFootprintAnalyticsODataV1RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadCorporateProductFootprintAnalyticsODataV1RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadCorporateProductFootprintAnalyticsODataV1RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadCorporateProductFootprintAnalyticsODataV1RequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadCorporateProductFootprintAnalyticsODataV1RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultCorporateProductFootprintAnalyticsODataV1Path,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the CorporateProductFootprintAnalyticsODataV1.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    WriteCorporateProductFootprintAnalyticsODataV1RequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<
    WriteCorporateProductFootprintAnalyticsODataV1RequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteCorporateProductFootprintAnalyticsODataV1RequestBuilder<DeSerializersT>
    | Array<
        WriteCorporateProductFootprintAnalyticsODataV1RequestBuilder<DeSerializersT>
      >,
  ...rest: Array<
    WriteCorporateProductFootprintAnalyticsODataV1RequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultCorporateProductFootprintAnalyticsODataV1Path = '/';
export type ReadCorporateProductFootprintAnalyticsODataV1RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<ProductFootprints<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductFootprints<DeSerializersT>, DeSerializersT>;
export type WriteCorporateProductFootprintAnalyticsODataV1RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<ProductFootprints<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductFootprints<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductFootprints<DeSerializersT>, DeSerializersT>;
