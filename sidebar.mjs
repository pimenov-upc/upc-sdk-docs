import translations from './i18n.mjs';

export default [
  {
    label: "Getting Started",
    translations: translations.gettingStarted,
    items: [
      { label: "Overview UPC SDK", translations: translations.overview, slug: "overview" },
      { label: "Certificates and Keys", translations: translations.certificatesAndKeys, slug: "certificates" },
      { label: "Work Environments", translations: translations.environments, slug: "environments" },
    ],
  },
  {
    label: "Common",
    translations: translations.common,
    collapsed: false,
    items: [
      { label: "Overview", translations: translations.commonOverview, slug: "common/overview" },
      { label: "Constants", translations: translations.constants, slug: "common/base/constants" },
      { label: "Structures and Types", translations: translations.structuresAndTypes, slug: "common/base/structures" },
      { label: "Functions", translations: translations.functions, slug: "common/base/functions" },
      { label: "Base class UpcService", translations: translations.classes, slug: "common/base/classes" },
      { label: "Errors", translations: translations.errors, slug: "common/base/errors" },
      {
        label: "HttpTransport",
        translations: translations.httpTransport,
        slug: "common/http-transport/http-transport"
      },
      {
        label: "XmlUtils",
        translations: translations.xmlUtils,
        slug: "common/xml-utils/xml-utils"
      },
      {
        label: "Host Codes",
        translations: translations.hostCodes,
        slug: "common/codes/host-codes"
      },
      {
        label: "Transaction Codes",
        translations: translations.tranCodes,
        slug: "common/codes/transaction-codes"
      },
    ],
  },
  {
    label: "Artifacts",
    translations: translations.artifacts,
    collapsed: false,
    items: [
      {
        label: "UpcSignService",
        translations: translations.signService,
        slug: "artifacts/sign-service"
      },
      {
        label: "UpcBinInfo",
        translations: translations.binInfo,
        slug: "artifacts/bin-info"
      },
      {
        label: "UpcCheckoutXml",
        translations: translations.checkoutXml,
        slug: "artifacts/checkout-xml"
      },
      {
        label: "UpcRefundXml",
        translations: translations.refundXml,
        slug: "artifacts/refund-xml"
      },
      {
        label: "UpcTokenServiceXml",
        translations: translations.tokenServiceXml,
        slug: "artifacts/token-service-xml"
      },
      {
        label: "UpcTokenService",
        translations: translations.tokenService,
        slug: "artifacts/token-service"
      },
    ],
  },
  // {
  //   label: "Utility modules",
  //   translations: translations.utilities,
  //   collapsed: true,
  //   items: [
  //   ],
  // },
  // {
  //   label: "Operation Codes",
  //   translations: translations.operationCodes,
  //   collapsed: true,
  //   items: [
  //   ],
  // },
];
