module.exports = {
  root: true,
  extends: 'next/core-web-vitals',

  plugins: [
    'simple-import-sort',
    // 'unused-imports'
  ],

  overrides: [
    {
      files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
      rules: {
        // 'import/no-duplicates': 'error',
        // 'unused-imports/no-unused-imports-ts': 'error',

        // 'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
        // 'unused-imports/no-unused-imports': 'error',
        // 'unused-imports/no-unused-vars': [
        //   'warn',
        //   {
        //     vars: 'all',
        //     varsIgnorePattern: '^_',
        //     args: 'after-used',
        //     argsIgnorePattern: '^_',
        //   },
        // ],

        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^react$'],
              ['^next'],
              ['^@?\\w'],
              [
                ['^@ui', '^@components/(.*)$', '^@/(.*)$'],
                ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              ].flat(),
              ['^.+\\.s?css$'],
            ],
          },
        ],
      },
    },
  ],
}
