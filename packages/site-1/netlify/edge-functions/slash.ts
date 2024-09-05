import type {Config} from '@netlify/edge-functions'

export default async function(req: Request) {
  const url = new URL(req.url)
  if (url.pathname.endsWith('/')) {
    return new URL(url.pathname.slice(0, -1), req.url)
  }
}

export const config: Config = {
  excludedPath: [
    '/favicon.ico',
    '/*.css',
    '/.js'
  ],
  path: '/*'
}