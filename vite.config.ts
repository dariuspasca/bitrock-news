import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import codegen from 'vite-plugin-graphql-codegen'

// https://vitejs.dev/config/
export default ({ mode }: any) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    plugins: [
      vue(),
      codegen({
        runOnBuild: false,
        config: {
          schema: [
            {
              [`${process.env.VITE_PUBLIC_SUPABASE_URL}/graphql/v1`]: {
                headers: {
                  apiKey: process.env.VITE_PUBLIC_SUPABASE_ANON_KEY ?? ''
                }
              }
            }
          ],
          documents: 'src/graphql/**/*.ts',
          config: {
            preResolveTypes: true
          },
          generates: {
            'src/types/graphql.types.ts': {
              plugins: ['typescript', 'typescript-operations', 'typescript-vue-apollo'],
              config: {
                avoidOptionals: true,
                typesPrefix: 'I',
                skipTypename: true,
                operationResultSuffix: 'Result',
                flattenGeneratedTypesIncludeFragments: true,
                dedupeOperationSuffix: true,
                useTypeImports: true,
                vueCompositionApiImportFrom: 'vue'
              }
            }
          },
          hooks: {
            afterOneFileWrite: ['prettier --write']
          }
        }
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}
