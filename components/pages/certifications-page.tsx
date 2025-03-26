import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface CertificationsPageProps {
  data: {
    certifications: {
      name: string
      issuer: string
      date: string
      image: string
      url?: string
    }[]
  }
}

export default function CertificationsPage({ data }: CertificationsPageProps) {
  return (
    <div className="h-full">
      <div className="space-y-6">
        {data.certifications.map((cert, index) => (
          <div key={index} className="mb-6 border-b border-amber-200 pb-4 last:border-0">
            <div className="mb-3 flex items-start justify-between">
              <div>
                <h3 className="font-serif text-lg font-semibold text-amber-800">{cert.name}</h3>
                <div className="flex justify-between">
                  <p className="font-serif text-sm italic text-amber-700">{cert.issuer}</p>
                  <p className="font-serif text-xs text-amber-600">{cert.date}</p>
                </div>
              </div>

              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-amber-800 hover:text-amber-600"
                  title="View Certificate"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>

            <div className="relative mb-3 h-32 w-full overflow-hidden rounded border-2 border-amber-100 shadow-md">
              <Image src={cert.image || "/placeholder.svg"} alt={cert.name} fill className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

