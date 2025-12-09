import { defineConfig } from 'cypress'

export default defineConfig({
  // Configurações gerais
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 10000,
  requestTimeout: 10000,
  pageLoadTimeout: 30000,
  numTestsKeptInMemory: 50,
  video: true,                    // grava vídeo dos testes
  videoCompression: 32,
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  fixturesFolder: 'cypress/fixtures',
  chromeWebSecurity: false,

  
  retries: {
    runMode: 2,    
  },

  e2e: {
    
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',


    supportFile: 'cypress/support/e2e.{js,ts}',

    
    baseUrl: 'http://localhost:3000',

   
    setupNodeEvents(on, config) {
    
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
        table(message) {
          console.table(message)
          return null
        },
      })

     
      return config
    },
  },

 
  component: {
    devServer: {
      framework: 'react',      
      bundler: 'webpack',
    },
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/component.{js,ts}',
  },
})