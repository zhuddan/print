import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './tailwind.css'

async function enableMocking() {
  if (import.meta.env.PROD) {
    return
  }
  const { worker } = await import('./mocks/browser')
  return worker.start({
    serviceWorker: {
      url: '/mockServiceWorker.js',
    },
    waitUntilReady: false,
    onUnhandledRequest(request, print) {
      if (request.url.startsWith('~/api/')) {
        print.warning()
      }
    },
  })
}
enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
