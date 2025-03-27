"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ChapterPageProps {
  chapter: {
    title: string
    company: string
    companyLogo: string
    period: string
    story: string
    responsibilities: string[]
    projectImages: string[]
    teamPhotos: string[]
  }
  position: "left" | "right"
}

export default function ChapterPage({ chapter, position }: ChapterPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentTeamPhotoIndex, setCurrentTeamPhotoIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === chapter.projectImages.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? chapter.projectImages.length - 1 : prev - 1))
  }

  const nextTeamPhoto = () => {
    setCurrentTeamPhotoIndex((prev) => (prev === chapter.teamPhotos.length - 1 ? 0 : prev + 1))
  }

  const prevTeamPhoto = () => {
    setCurrentTeamPhotoIndex((prev) => (prev === 0 ? chapter.teamPhotos.length - 1 : prev - 1))
  }

  // Left page shows story and responsibilities
  if (position === "left") {
    return (
      <div className="h-full">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-serif text-xl font-bold text-amber-800">{chapter.company}</h3>
          <p className="font-serif text-sm italic text-amber-700">{chapter.period}</p>
        </div>

        <div className="prose-compact prose-amber max-w-none font-serif text-sm leading-snug text-amber-900">
          <p className="first-letter:font-bold">
            {chapter.story}
          </p>
        </div>

        <div className="mt-4">
          <h3 className="mb-2 font-serif text-base font-semibold text-amber-800">Responsibilities</h3>
          <ul className="space-y-1 font-serif text-sm">
            {chapter.responsibilities.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-700"></span>
                <span className="text-amber-900">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Decorative flourish */}
        <div className="mt-6 flex justify-center">
          <div className="h-6 w-32 opacity-30">
            <svg viewBox="0 0 100 20" className="h-full w-full fill-amber-800">
              <path d="M0,10 C30,20 70,0 100,10 L100,20 L0,20 Z" />
            </svg>
          </div>
        </div>
      </div>
    )
  }

  // Right page shows images
  return (
    <div className="h-full">
      <div className="mb-4 flex items-center justify-between">
        <div className="relative h-10 w-20">
          <Image
            src={chapter.companyLogo || "/placeholder.svg"}
            alt={chapter.company}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="font-serif text-base italic text-amber-700">Chapter {chapter.title}</h3>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="mb-2 font-serif text-base font-semibold text-amber-800">Project Showcase</h3>
          <div className="relative aspect-video w-full overflow-hidden rounded border-2 border-amber-100 shadow-md">
            <Image
              src={chapter.projectImages[currentImageIndex] || "/placeholder.svg"}
              alt={`Project image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-between p-2">
              <button
                onClick={prevImage}
                className="rounded-full bg-black/30 p-1 text-white backdrop-blur-sm transition-all hover:bg-black/50"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextImage}
                className="rounded-full bg-black/30 p-1 text-white backdrop-blur-sm transition-all hover:bg-black/50"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
              {chapter.projectImages.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 w-1 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-2 font-serif text-base font-semibold text-amber-800">Team Memories</h3>
          <div className="relative aspect-video w-full overflow-hidden rounded border-2 border-amber-100 shadow-md">
            <Image
              src={chapter.teamPhotos[currentTeamPhotoIndex] || "/placeholder.svg"}
              alt={`Team photo ${currentTeamPhotoIndex + 1}`}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-between p-2">
              <button
                onClick={prevTeamPhoto}
                className="rounded-full bg-black/30 p-1 text-white backdrop-blur-sm transition-all hover:bg-black/50"
                aria-label="Previous team photo"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextTeamPhoto}
                className="rounded-full bg-black/30 p-1 text-white backdrop-blur-sm transition-all hover:bg-black/50"
                aria-label="Next team photo"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
              {chapter.teamPhotos.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 w-1 rounded-full ${index === currentTeamPhotoIndex ? "bg-white" : "bg-white/50"}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

