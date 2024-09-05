import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import pluginReact, { rules } from 'eslint-plugin-react';
import globals from 'globals';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReactConfig,
  prettierConfig,

  {
    plugins: {
      prettier: prettierPlugin,
    },

    rules: {
      'prettier/prettier': 'error',
      // 'react/prop-types': 0,
    },
  },
];
