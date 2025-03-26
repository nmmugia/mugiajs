import TitlePage from "./title-page"
import AboutPage from "./about-page"
import ExperienceIntroPage from "./experience-intro-page"
import ExperiencePage from "./experience-page"
import ChapterIntroPage from "./chapter-intro-page"
import ChapterPage from "./chapter-page"
import ProjectsIntroPage from "./projects-intro-page"
import ProjectsPage from "./projects-page"
import SkillsIntroPage from "./skills-intro-page"
import SkillsPage from "./skills-page"
import CertificationsIntroPage from "./certifications-intro-page"
import CertificationsPage from "./certifications-page"
import AwardsIntroPage from "./awards-intro-page"
import AwardsPage from "./awards-page"

interface PageContentProps {
  pageData: {
    type:
      | "title"
      | "about"
      | "experience-intro"
      | "experience"
      | "chapter-intro"
      | "chapter"
      | "projects-intro"
      | "projects"
      | "skills-intro"
      | "skills"
      | "certifications-intro"
      | "certifications"
      | "awards-intro"
      | "awards"
    content: any
    pageNumber: number
  } | null
  position: "left" | "right"
}

export default function PageContent({ pageData, position }: PageContentProps) {
  if (!pageData || !pageData.content) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="font-serif italic text-amber-800/50">This page is blank</p>
      </div>
    )
  }

  return (
    <div className="relative h-full overflow-y-auto">
      {/* Page header */}
      <div className="mb-3 border-b border-amber-200/50 pb-1 text-center">
        <p className="font-serif text-xs italic text-amber-800/70">
          {pageData.type === "title"
            ? "Title Page"
            : pageData.type === "about"
              ? "About Me"
              : pageData.type === "skills-intro" || pageData.type === "skills"
                ? "Skills & Expertise"
                : pageData.type === "experience-intro" || pageData.type === "experience"
                  ? "Professional Experience"
                  : pageData.type === "chapter-intro" || pageData.type === "chapter"
                    ? pageData.content.title || "Chapter"
                    : pageData.type === "projects-intro" || pageData.type === "projects"
                      ? "Projects Showcase"
                      : pageData.type === "certifications-intro" || pageData.type === "certifications"
                        ? "Certifications"
                        : pageData.type === "awards-intro" || pageData.type === "awards"
                          ? "Awards & Recognition"
                          : "Page"}
        </p>
      </div>

      {/* Page content */}
      <div className="h-[calc(100%-3rem)]">
        {pageData.type === "title" && <TitlePage data={pageData.content} />}

        {pageData.type === "about" && <AboutPage data={pageData.content} />}

        {pageData.type === "skills-intro" && <SkillsIntroPage data={pageData.content} />}

        {pageData.type === "skills" && <SkillsPage data={pageData.content} />}

        {pageData.type === "experience-intro" && <ExperienceIntroPage data={pageData.content} />}

        {pageData.type === "experience" && <ExperiencePage data={pageData.content} />}

        {pageData.type === "chapter-intro" && <ChapterIntroPage data={pageData.content} />}

        {pageData.type === "chapter" && <ChapterPage chapter={pageData.content} position={position} />}

        {pageData.type === "projects-intro" && <ProjectsIntroPage data={pageData.content} />}

        {pageData.type === "projects" && <ProjectsPage data={pageData.content} />}

        {pageData.type === "certifications-intro" && <CertificationsIntroPage data={pageData.content} />}

        {pageData.type === "certifications" && <CertificationsPage data={pageData.content} />}

        {pageData.type === "awards-intro" && <AwardsIntroPage data={pageData.content} />}

        {pageData.type === "awards" && <AwardsPage data={pageData.content} />}
      </div>

      {/* Page number */}
      <div className={`absolute bottom-0 ${position === "left" ? "left-0" : "right-0"} p-2`}>
        <p className="font-serif text-xs text-amber-800/70">{pageData.pageNumber}</p>
      </div>

      {/* Page decoration */}
      <div className="absolute bottom-6 left-1/2 h-3 w-12 -translate-x-1/2 opacity-20">
        <svg viewBox="0 0 100 20" className="h-full w-full fill-amber-800">
          <path d="M0,10 C30,20 70,0 100,10 L100,20 L0,20 Z" />
        </svg>
      </div>
    </div>
  )
}

