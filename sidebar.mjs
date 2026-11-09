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
    ],
  },
];
