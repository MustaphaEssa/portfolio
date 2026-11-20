import { ImageResponse } from 'next/og'

export const alt = 'Mustapha Essaàdaoui, développeur Front-End'
export const size = { width: 1200, height: 630 }
export const runtime = 'edge'
export const contentType = 'image/png'

export default function OpengraphImage() {
  const years = new Date().getFullYear() - 2009

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#0c0c0e',
          color: '#f4f4f5',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, color: '#fb923c' }}>Développeur Front-End</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 96, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>
            Mustapha Essaàdaoui
          </div>
          <div style={{ display: 'flex', marginTop: 28, fontSize: 34, color: '#a1a1aa' }}>
            Shopify, PrestaShop, Drupal, React. {years} ans d&apos;intégration.
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#a1a1aa' }}>mustapha-essaadaoui.vercel.app</div>
      </div>
    ),
    size,
  )
}
