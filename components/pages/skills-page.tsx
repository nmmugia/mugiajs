interface SkillsPageProps {
  data: {
    skills: {
      technical: string[]
      soft: string[]
    }
  }
}

export default function SkillsPage({ data }: SkillsPageProps) {
  return (
    <div className="h-full">
      <div className="mb-6">
        <h3 className="mb-3 font-serif text-lg font-semibold text-amber-800">Technical Skills</h3>
        <div className="flex flex-wrap gap-2">
          {data.skills.technical.map((skill, index) => (
            <span key={index} className="rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-800 shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 font-serif text-lg font-semibold text-amber-800">Soft Skills</h3>
        <div className="flex flex-wrap gap-2">
          {data.skills.soft.map((skill, index) => (
            <span
              key={index}
              className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-sm text-amber-800 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center font-serif text-sm italic text-amber-700">
        <p>These skills have been developed through years of professional experience and continuous learning.</p>
      </div>
    </div>
  )
}

