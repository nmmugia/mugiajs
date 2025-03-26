interface AwardsIntroPageProps {
  data: {
    title: string
    description: string
  }
}

export default function AwardsIntroPage({ data }: AwardsIntroPageProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h2 className="mb-4 font-serif text-2xl font-bold text-amber-800">{data.title}</h2>

      <div className="mb-6 h-[2px] w-32 bg-gradient-to-r from-amber-300/0 via-amber-300 to-amber-300/0"></div>

      <div className="prose-compact prose-amber max-w-sm text-center font-serif text-amber-900">
        <p className="drop-cap">{data.description}</p>
      </div>

      {/* Decorative flourish */}
      <div className="mt-auto h-6 w-32 opacity-30">
        <svg viewBox="0 0 100 20" className="h-full w-full fill-amber-800">
          <path d="M0,10 C30,0 70,20 100,10 L100,0 L0,0 Z" />
        </svg>
      </div>
    </div>
  )
}

