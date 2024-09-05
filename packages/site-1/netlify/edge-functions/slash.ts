import type {Config} from '@netlify/edge-functions'

export { stripSlash as default } from 'https://deno.land/x/slash_handler/mod.ts'

export const config: Config = {
  excludedPath: [
    '/favicon.ico',
    '/*.css',
    '/.js'
  ],
  path: '/*'
}