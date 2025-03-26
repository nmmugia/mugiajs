interface ExperiencePageProps {
  data: {
    experience: {
      company: string
      role: string
      period: string
      description: string
    }[]
  }
}

export default function ExperiencePage({ data }: ExperiencePageProps) {
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

