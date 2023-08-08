# Offset Emissions in SAP BTP

## Sustainability Footprint Data in oData and SAP BTP

Carbon emission factors and emissions actuals may not always be in S/4 HANA on-prem. Offerings like SAP's Sustainability Footprint data manage this data in SAP BTP or cloud native platforms. 

In the case of SAP Concur - the emissions per flight are known via API, but aren't necessarily replicated to the S/4 HANA.

The SAP Cloud SDK is used for reference on how to connect to SAP BTP APIs. Its also useful for connecting to other oData-based APIs, such as Azure's Sustainability API.

While some proxies are already available - we recommend reviewing the instructions on [generating the oData client](https://sap.github.io/cloud-sdk/docs/js/features/odata/generate-client) so you can nimbly offset those emissions no matter the data source :)