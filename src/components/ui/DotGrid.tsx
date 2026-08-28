export default function DotGrid({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none select-none ${className}`}
      width="100%"
      height="100%"
      aria-hidden="true"
    >
      <defs>
        <pattern id="dotGrid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
        </pattern>
        <radialGradient id="dotFade" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="dotMask">
          <rect width="100%" height="100%" fill="url(#dotFade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotGrid)" mask="url(#dotMask)" />
    </svg>
  )
}
