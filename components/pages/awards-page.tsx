import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface AwardsPageProps {
  data: {
    awards: {
      name: string
      organization: string
      date: string
      description: string
      image: string
      url?: string
    }[]
  }
}

export default function AwardsPage({ data }: AwardsPageProps) {
  return (
    <div className="h-full">
      <div className="space-y-6">
        {data.awards.map((award, index) => (
          <div key={index} className="mb-6 border-b border-amber-200 pb-4 last:border-0">
            <div className="mb-3 flex items-start justify-between">
              <div>
                <h3 className="font-serif text-lg font-semibold text-amber-800">{award.name}</h3>
                <div className="flex justify-between">
                  <p className="font-serif text-sm italic text-amber-700">{award.organization}</p>
                  <p className="font-serif text-xs text-amber-600">{award.date}</p>
                </div>
              </div>

              {award.url && (
                <a
                  href={award.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-amber-800 hover:text-amber-600"
                  title="View Award"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>

            <div className="relative mb-3 h-32 w-full overflow-hidden rounded border-2 border-amber-100 shadow-md">
              <Image src={award.image || "/placeholder.svg"} alt={award.name} fill className="object-contain" />
            </div>

            <p className="font-serif text-sm leading-snug text-amber-900">{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

