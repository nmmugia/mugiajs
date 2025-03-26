import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface ProjectsPageProps {
  data: {
    projects: {
      title: string
      type: string
      period: string
      description: string
      technologies: string[]
      image: string
      link?: string
    }[]
    isLast?: boolean
  }
}

export default function ProjectsPage({ data }: ProjectsPageProps) {
  return (
    <div className="h-full">
      <div className="space-y-6">
        {data.projects.map((project, index) => (
          <div key={index} className="mb-6 border-b border-amber-200 pb-4 last:border-0">
            <div className="mb-3 flex items-start justify-between">
              <div>
                <h3 className="font-serif text-lg font-semibold text-amber-800">{project.title}</h3>
                <div className="flex justify-between">
                  <p className="font-serif text-sm italic text-amber-700">{project.type}</p>
                  <p className="font-serif text-xs text-amber-600">{project.period}</p>
                </div>
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-amber-800 hover:text-amber-600"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>

            <div className="relative mb-3 aspect-video w-full overflow-hidden rounded border-2 border-amber-100 shadow-md">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>

            <p className="mb-2 font-serif text-sm leading-snug text-amber-900">{project.description}</p>

            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-800">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {data.isLast && (
        <div className="mt-4 text-center font-serif text-sm italic text-amber-700">
          <p>Thank you for exploring my journey!</p>
        </div>
      )}
    </div>
  )
}

