import Image from "next/image"

interface ChapterIntroPageProps {
  data: {
    title: string
    company: string
    period: string
    companyLogo: string
  }
}

export default function ChapterIntroPage({ data }: ChapterIntroPageProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="relative mb-6 h-16 w-32">
        <Image src={data.companyLogo || "/placeholder.svg"} alt={data.company} fill className="object-contain" />
      </div>

      <h2 className="mb-2 font-serif text-2xl font-bold text-amber-800">{data.title}</h2>
      <p className="mb-4 font-serif text-lg italic text-amber-700">
        {data.company} | {data.period}
      </p>

      <div className="mb-6 h-[2px] w-32 bg-gradient-to-r from-amber-300/0 via-amber-300 to-amber-300/0"></div>

      <div className="prose-compact prose-amber max-w-sm text-center font-serif text-amber-900">
        <p className="drop-cap">
          This chapter details my journey at {data.company}, where I grew both professionally and personally.
        </p>
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

