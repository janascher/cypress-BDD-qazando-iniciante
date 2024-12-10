const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
    projectId: 'yac1pw',
    e2e: {
        baseUrl: 'https://automationpratice.com.br/',
        // defaultCommandTimeout: 5000,
        specPattern: '**/*.feature', // extensão dos arquivos
        viewportWidth: 1366, // Largura do viewport
        viewportHeight: 768, // Altura do viewport
        setupNodeEvents(on, config) {
            addCucumberPreprocessorPlugin(on, config);
            on(
                'file:preprocessor',
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                })
            );

            return config;
        },
    },
});
