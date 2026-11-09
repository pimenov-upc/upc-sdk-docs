export default [
  {
    label: "Getting Started",
    items: [
      { label: "Overview", slug: "overview" },
    ]
  },
  {
    label: "Common",
    collapsed: false,
    items: [
      { label: "Overview", slug: "common/general/overview" },
      { label: "Constants", slug: "common/general/constants" },
      { label: "Structures and Types", slug: "common/general/structures" },
      { label: "Functions", slug: "common/general/functions" },
      { label: "Classes", slug: "common/general/classes" },
      { label: "Errors", slug: "common/general/errors" },
    ]
  },
  {
    label: "Artifacts",
    collapsed: true,
    items: [
      { 
        label: "Bin Info", collapsed: true, items: [
          { label: "Overview", slug: "artifacts/upc-bin-info/overview" },
          { label: "Class UpcBinInfo", slug: "artifacts/upc-bin-info/class" }
        ] 
      },
    ]
  },
]
