const translations = {
  gettingStarted: {
    uk: "Початок роботи",
  },
  overview: {
    uk: "Огляд",
  },
  common: {
    uk: "Загальне",
  },
  constants: {
    uk: "Константи",
  },
  structuresAndTypes: {
    uk: "Структури та типи",
  },
  functions: {
    uk: "Функції",
  },
  classes: {
    uk: "Класи",
  },
  errors: {
    uk: "Помилки",
  },
  hostCodes: {
    uk: "Коди відповідей HostCode",
  },
  tranCodes: {
    uk: "Коди відповідей TranCode",
  },
  artifacts: {
    uk: "Артефакти",
  },
  signService: {
    uk: "UpcSignService",
  },
  binInfo: {
    uk: "UpcBinInfo",
  },
  checkoutXml: {
    uk: "UpcCheckoutXml",
  },
  refundXml: {
    uk: "UpcRefundXml",
  },
  tokenServiceXml: {
    uk: "UpcTokenServiceXml",
  },
  tokenService: {
    uk: "UpcTokenService",
  },
};

export default [
  {
    label: "Getting Started",
    translations: translations.gettingStarted,
    items: [
      { label: "Overview", translations: translations.overview, slug: "overview" },
    ],
  },
  {
    label: "Common",
    translations: translations.common,
    collapsed: false,
    items: [
      { label: "Overview", translations: translations.overview, slug: "general/common/overview" },
      { label: "Constants", translations: translations.constants, slug: "general/common/constants" },
      { label: "Structures and Types", translations: translations.structuresAndTypes, slug: "general/common/structures" },
      { label: "Functions", translations: translations.functions, slug: "general/common/functions" },
      { label: "Classes", translations: translations.classes, slug: "general/common/classes" },
      { label: "Errors", translations: translations.errors, slug: "general/common/errors" },
      { label: "Host Codes Responses", translations: translations.hostCodes, slug: "general/common/host-codes" },
      { label: "Transaction Codes Responses", translations: translations.tranCodes, slug: "general/common/transaction-codes" },
    ],
  },
  {
    label: "Artifacts",
    translations: translations.artifacts,
    collapsed: true,
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
];
