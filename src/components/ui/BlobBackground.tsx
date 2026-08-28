import { useId } from 'react'

type BlobBackgroundProps = {
  className?: string
  variant?: 'amber' | 'dual'
}

export default function BlobBackground({ className = '', variant = 'amber' }: BlobBackgroundProps) {
  const uid = useId()
  const amberId = `blobAmber-${uid}`
  const slateId = `blobSlate-${uid}`

  return (
    <svg
      className={`pointer-events-none select-none ${className}`}
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={amberId} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35" />
          <stop offset="55%" stopColor="#f59e0b" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={slateId} cx="65%" cy="70%" r="70%">
          <stop offset="0%" stopColor="#3d444f" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#3d444f" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#3d444f" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path
        d="M 620 120 C 720 190 760 320 720 440 C 680 560 570 620 450 650 C 330 680 190 660 120 570 C 50 480 60 330 140 230 C 220 130 340 60 460 60 C 520 60 560 80 620 120 Z"
        fill={`url(#${amberId})`}
      />
      {variant === 'dual' && (
        <path
          d="M 200 500 C 120 460 80 370 110 280 C 140 190 240 140 330 150 C 420 160 490 220 520 300 C 550 380 530 470 460 520 C 390 570 280 540 200 500 Z"
          fill={`url(#${slateId})`}
        />
      )}
    </svg>
  )
}
