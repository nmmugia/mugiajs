import Image from "next/image"

interface ResumePageProps {
  data: {
    name: string
    title: string
    bio: string
    photo: string
    experience: {
      company: string
      role: string
      period: string
      description: string
    }[]
  }
  position: "left" | "right"
}

export default function ResumePage({ data, position }: ResumePageProps) {
  // Left page shows photo and bio
  if (position === "left") {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative mb-4 h-64 w-48 overflow-hidden rounded border-4 border-amber-100 shadow-md">
          <Image src={data.photo || "/placeholder.svg"} alt={data.name} fill className="object-cover" />
          <div className="absolute inset-0 border border-amber-800/10"></div>
        </div>

        <h1 className="mb-1 font-serif text-2xl font-bold text-amber-900">{data.name}</h1>
        <h2 className="mb-4 font-serif text-lg italic text-amber-700">{data.title}</h2>

        <div className="prose-compact prose-amber max-w-sm text-center font-serif text-amber-900">
          <p className="first-letter:float-left first-letter:font-bold">
            {data.bio}
          </p>
        </div>

        {/* Decorative flourish */}
        <div className="mt-6 h-6 w-32 opacity-30">
          <svg viewBox="0 0 100 20" className="h-full w-full fill-amber-800">
            <path d="M0,10 C30,0 70,20 100,10 L100,0 L0,0 Z" />
          </svg>
        </div>
      </div>
    )
  }

  // Right page shows experience
  return (
    <div className="h-full">
      <h2 className="mb-4 border-b border-amber-200 pb-2 font-serif text-xl font-bold text-amber-900">
        Professional Experience
      </h2>

      <div className="space-y-4">
        {data.experience.map((exp, index) => (
          <div key={index} className="relative pl-4">
            <div className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-amber-700"></div>
            <h3 className="font-serif text-lg font-semibold text-amber-800">{exp.company}</h3>
            <div className="mb-1 flex justify-between">
              <p className="font-serif text-sm italic text-amber-700">{exp.role}</p>
              <p className="font-serif text-xs text-amber-600">{exp.period}</p>
            </div>
            <p className="font-serif text-sm leading-snug text-amber-900">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center font-serif text-sm italic text-amber-700">
        <p>Turn the page to explore my journey chapter by chapter...</p>
      </div>
    </div>
  )
}

