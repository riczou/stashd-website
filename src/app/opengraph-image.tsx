import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Stashd - Save workouts. Get fit.'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Logo circle with gradient */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: 28,
            background: 'linear-gradient(135deg, #3ECF8E 0%, #2BA66E 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
            boxShadow: '0 20px 60px rgba(62, 207, 142, 0.3)',
          }}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
        </div>

        {/* App name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#FAFAFA',
            marginBottom: 16,
          }}
        >
          Stashd
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 36,
            color: '#3ECF8E',
            fontWeight: 600,
          }}
        >
          Save workouts. Get fit.
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: '#6B7280',
            marginTop: 24,
            maxWidth: 600,
            textAlign: 'center',
          }}
        >
          AI-powered workout saving from TikTok, Instagram & YouTube
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
