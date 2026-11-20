import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const runtime = 'edge'
export const contentType = 'image/png'

// Monogramme simple : « M » sur fond sombre, point d'accent.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#18181b',
          borderRadius: 14,
          color: '#fafafa',
          fontSize: 42,
          fontWeight: 700,
          letterSpacing: -2,
        }}
      >
        M<span style={{ color: '#fb923c' }}>.</span>
      </div>
    ),
    size,
  )
}
