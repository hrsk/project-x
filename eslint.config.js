// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginA11y from "eslint-plugin-jsx-a11y"; // опционально

export default [
    // Базовые рекомендации ESLint для JS
    js.configs.recommended,

    // TypeScript: правила без типов + с типами
    ...tseslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked, // включает правила, требующие типов

    // React рекомендации (flat-конфиг у плагина есть)
    pluginReact.configs.flat.recommended,
    {
        files: ["**/*.{ts,tsx,js,jsx}"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                // Включаем типовую инфу для recommendedTypeChecked
                project: true,                // ESLint сам найдёт ближайший tsconfig.json
                tsconfigRootDir: import.meta.dirname,
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {jsx: true}
            },
            globals: {
                ...globals.browser,
                ...globals.jest,
                __DEV_MODE__: true,
            }
        },
        plugins: {
            "@typescript-eslint": tseslint.plugin,
            react: pluginReact,
            "react-hooks": pluginReactHooks,
            "jsx-a11y": pluginA11y
        },
        settings: {
            react: {version: "detect"},
        },

        rules: {
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            indent: [2, 4],
            'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.tsx']}],
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'no-unused-vars': 'warn',
            'react/require-default-props': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-props-no-spreading': 'warn',
            'react/function-component-definition': 'off',
            'no-shadow': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-underscore-dangle': 'off',
            "@typescript-eslint/no-misused-promises": "warn",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/ban-ts-comment": "warn",
            "@typescript-eslint/no-floating-promises": "warn",
        }
    }
];