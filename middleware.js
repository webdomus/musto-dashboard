/**
 * Vercel Edge Middleware — Basic Auth
 * Musto Calzature Reports
 *
 * Credenziali: modificare le variabili sotto oppure usare
 * Vercel Environment Variables (AUTH_USER, AUTH_PASS) nella dashboard.
 */

const AUTH_USER = process.env.AUTH_USER || 'musto'
const AUTH_PASS = process.env.AUTH_PASS || 'reports2026'

export const config = {
  matcher: '/:path*',
}

export default function middleware(request) {
  const authHeader = request.headers.get('Authorization')

  if (authHeader && authHeader.startsWith('Basic ')) {
    const base64 = authHeader.slice('Basic '.length)
    const decoded = atob(base64)
    const colonIndex = decoded.indexOf(':')
    const user = decoded.slice(0, colonIndex)
    const pass = decoded.slice(colonIndex + 1)

    if (user === AUTH_USER && pass === AUTH_PASS) {
      // Autenticato: lascia passare la richiesta
      return
    }
  }

  // Non autenticato: richiedi credenziali
  return new Response('Accesso riservato. Inserire le credenziali.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Musto Calzature Reports"',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
