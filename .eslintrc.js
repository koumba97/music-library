module.exports = {
    extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
    rules: {
        "@typescript-eslint/no-unsafe-function-type": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@next/next/no-img-element": "off",
        "prefer-const": "off",
        "react-hooks/exhaustive-deps": "off",
        "@typescript-eslint/no-unused-expressions": "off",
    },
};
