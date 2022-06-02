module.exports = {
    bracketSpacing: true,
    bracketSameLine: false,
    singleQuote: false,
    trailingComma: "all",
    semi: true,
    useTabs: false,
    tabWidth: 4,
    endOfLine: "lf",

    plugins: [require("@trivago/prettier-plugin-sort-imports")],
    importOrder: [
        "<THIRD_PARTY_MODULES>",
        "@/(.*)$",
        "request|response",
        "controller|service",
        "^../(.*)$",
        "^./(.*)$",
        "(^../.*)types",
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderParserPlugins: ["typescript", "decorators-legacy"],

    overrides: [
        {
            files: ["*.json", "*.yaml", "*.yml"],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
