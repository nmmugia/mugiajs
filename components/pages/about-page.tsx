import Image from "next/image"
import { Github, Linkedin, Twitter, Globe } from "lucide-react"

interface AboutPageProps {
  data: {
    bio: string
    photo: string
    socialLinks?: {
      name: string
      url: string
      icon: string
    }[]
  }
}

export default function AboutPage({ data }: AboutPageProps) {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "github":
        return <Github className="h-4 w-4" />
      case "linkedin":
        return <Linkedin className="h-4 w-4" />
      case "twitter":
        return <Twitter className="h-4 w-4" />
      case "globe":
      default:
        return <Globe className="h-4 w-4" />
    }
  }

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="relative mb-4 h-64 w-48 overflow-hidden rounded border-4 border-amber-100 shadow-md">
        <Image src={data.photo || "/placeholder.svg"} alt="Profile Photo" fill className="object-cover" />
        <div className="absolute inset-0 border border-amber-800/10"></div>
      </div>

      <div className="prose-compact prose-amber max-w-sm text-center font-serif text-amber-900">
          <p className="first-letter:font-bold">
            {data.bio}
          </p>
      </div>

      {/* Social Links */}
      {data.socialLinks && data.socialLinks.length > 0 && (
        <div className="mt-4 flex items-center justify-center space-x-4">
          {data.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-amber-100 p-2 text-amber-800 transition-colors hover:bg-amber-200"
              title={link.name}
            >
              {getIcon(link.icon)}
            </a>
          ))}
        </div>
      )}

      {/* Decorative flourish */}
      <div className="mt-6 h-6 w-32 opacity-30">
        <svg viewBox="0 0 100 20" className="h-full w-full fill-amber-800">
          <path d="M0,10 C30,0 70,20 100,10 L100,0 L0,0 Z" />
        </svg>
      </div>
    </div>
  )
}

