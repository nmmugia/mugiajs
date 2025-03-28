"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import BookCover from "./book-cover"
import { cn } from "@/lib/utils"
import PageContent from "./pages/page-content"

// Update the myData object to include new sections
const myData = {
  name: "Mugia Nurul Matin",
  title: "Tech Lead/Senior Software Engineer",
  bio: `I’m your Tech guy with more than 7 years of experience, including around 6 years in Fintech Industry, 1.5 years in IT consulting, and various gigs on the side for some extra experiences.`,
  photo: "https://dicoterrabucket.s3.ap-southeast-1.amazonaws.com/resume/3cf76b76-a180-442d-8871-82cf1787bc3e/925a78fae3a47f42b2ab2d1b5f8b894aaf2b4bb53635cbaa90-unnamed2-removebgcropped.jpg",
  socialLinks: [
    { name: "GitHub", url: "https://github.com/nmmugia", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mugia", icon: "linkedin" },
  ],
  experience: [
    {
      company: "Tech Lead at PT KB Finansia Multifinance (part of KB FinancialGroup)",
      role: "Jakarta, Indonesia",
      period: "Jun 2023 - Present",
      description: "KB Finansia is a multifinance company that give a financing solution for Indonesian people, in which as of December 31, 2023, PT KB Finansia Multi Finance reported total assets of IDR 8.62 trillion, reflecting an 11.2% increase from IDR 7.75 trillion in 2022. I Led a Sally Tribe which consists of 5 engineers, and later on Led a KMOB Line of Business which consists of 13 engineers. The systems that We’ve developed is a whole system that starts from gathering leads and potential sales, into a final process of financing approva",
    },
    {
      company: "Cybersecurity Software Engineer at Microsec Pte LTD",
      role: "Singapore (Remotely)",
      period: "Dec 2022 - May 2023",
      description: "Microsec is a cybersecurity company that focuses on providing secure solution for IoT and IIoT. My job was to help the team to develop our lifecycle management system for our client’s IoT devices, in which would provide a secure solution from communication between IoT devices until the lifecycle monitoring of IoT device",
    },
    {
      company: "Software Engineer III at Traveloka",
      role: "South Tangerang, Indonesia",
      period: "Jul 2022 - Dec 2022",
      description: "Traveloka is one of Indonesia’s unicorn company that has over 40 million monthly active users, making it one of the most popular travel apps in the Asia. I was assigned to Financial Service Platform to provide our Traveloka apps with financial solutions such as KYC, Paylater, points, etc",
    },
    {
      company: "Software Engineer at HawkSight Pte Ltd",
      role: "Singapore (Remotely)",
      period: "Aug 2021 - Jun 2022",
      description: "Hawksight is a Smart Crypto & DeFi Investments for Everyday Global Investors. We already have more than 500k users that using our platform. I worked on developing web app and decentralized application for Hawksight. ",
    },
    {
      company: "Software Engineer at Koinworks",
      role: "Jakarta, Indonesia",
      period: "Nov 2019 - Jul 2021",
      description: "Koinworks is Indonesia’s super financial app with more than 2 million business and personal users. Koinworks is available on the web, android, and iOS version to help people to invest, make a loan, and saving money. I was assigned mostly on the backend side to the platform team which handling users data, cash activity, third party implementation, openAPI development, etc; to support Investment and Business features. ",
    },
    {
      company: "Junior Software Engineer at PT Lattice Teknologi Mandiri",
      role: "Bandung, Indonesia",
      period: "May 2018 - Nov 2019",
      description: "Lattice is an IT Consultant company that provides various software and IoT solution. I worked on various projects there such as an ERP web software, company profile, mobile apps for marketing, survery apps, etc. ",
    },,
    {
      company: "Software Engineer (Internship) at Digital Oasis Indonesia",
      role: "Bandung, Indonesia",
      period: "Apr 2017 - Jun 2017",
      description: "Digital Oasis (PT. PILAR TIMUR TEKNOLOGI) as an IT consultant and software development company has been fulfilled various needs from Domestic and Foreign Clients since 2011. I helped the company with developing features for websites and help them to test the app.",
    },
  ],
  skills: {
    technical: [
      "Go",
      "JavaScript/TypeScript",
      "Python",
      "React",
      "Node.js",
      "Next.js",
      "PHP",
      "Java",
      "HTML5",
      "CSS3",
      "PostgreSQL, MySQL",
      "MongoDB",
      "Alibaba Cloud & AWS",
      "Docker-Kubernetes",
    ],
    soft: [
      "Team Leadership",
      "Test-Driven Development",
      "Project Management",
      "Communication",
      "Problem Solving",
      "Mentoring",
      "Agile Methodologies",
      "Negotiation",
    ],
  },
  certifications: [
    {
      name: "Japanese-Language Proficiency Test N2",
      issuer: "The Japan Foundation",
      date: "2023",
      image: "/placeholder.svg?height=200&width=300",
      url: "https://www.credly.com/badges/example",
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2021",
      image: "/placeholder.svg?height=200&width=300",
      url: "https://www.scrum.org/certificates/example",
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2020",
      image: "/placeholder.svg?height=200&width=300",
      url: "https://university.mongodb.com/certification/example",
    },
  ],
  awards: [
    {
      name: "Innovation Award",
      organization: "TechCorp",
      date: "2022",
      description: "Recognized for developing an innovative solution that increased customer engagement by 35%.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Hackathon Winner",
      organization: "TechConf 2021",
      date: "2021",
      description:
        "First place in the annual hackathon for creating an accessibility tool for visually impaired users.",
      image: "/placeholder.svg?height=200&width=300",
      url: "https://techconf.com/hackathon/2021/winners",
    },
  ],
  chapters: [
    {
      title: "First Experience in Engineering",
      company: "WebSolutions",
      companyLogo: "/placeholder.svg?height=100&width=200",
      period: "2016 - 2018",
      story:
        "My journey began at WebSolutions, where I joined as a fresh graduate eager to apply my knowledge. The team welcomed me warmly, and I quickly found myself immersed in the world of frontend development. This experience laid the foundation for my career in software engineering.",
      responsibilities: [
        "Developed responsive web interfaces using HTML5, CSS3, and JavaScript",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Optimized website performance for better user experience",
        "Participated in code reviews and team knowledge sharing sessions",
      ],
      projectImages: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      teamPhotos: ["/placeholder.svg?height=250&width=400", "/placeholder.svg?height=250&width=400"],
    },
    {
      title: "Growing as a Developer",
      company: "InnovateSoft",
      companyLogo: "/placeholder.svg?height=100&width=200",
      period: "2018 - 2020",
      story:
        "At InnovateSoft, I had the opportunity to expand my skills into full-stack development. Working with a diverse team of talented engineers, I learned the importance of clean code architecture and efficient problem-solving. This role challenged me to think beyond the frontend and consider the entire application lifecycle.",
      responsibilities: [
        "Built full-stack applications using React, Node.js, and MongoDB",
        "Implemented RESTful APIs for client-side consumption",
        "Deployed and maintained applications on AWS",
        "Mentored junior developers and conducted technical interviews",
      ],
      projectImages: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      teamPhotos: ["/placeholder.svg?height=250&width=400", "/placeholder.svg?height=250&width=400"],
    },
    {
      title: "Leading Engineering Excellence",
      company: "TechCorp",
      companyLogo: "/placeholder.svg?height=100&width=200",
      period: "2020 - Present",
      story:
        "Joining TechCorp marked a significant milestone in my career. Here, I've had the privilege of leading engineering initiatives that impact millions of users. The scale and complexity of our projects have pushed me to continuously learn and adapt. Working alongside brilliant minds has been both humbling and inspiring.",
      responsibilities: [
        "Architected and implemented scalable microservices using Node.js",
        "Led the migration from monolith to microservices architecture",
        "Implemented CI/CD pipelines for automated testing and deployment",
        "Managed a team of 5 engineers, providing technical guidance and mentorship",
      ],
      projectImages: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      teamPhotos: ["/placeholder.svg?height=250&width=400", "/placeholder.svg?height=250&width=400"],
    },
  ],
  projects: [
    {
      title: "Personal Portfolio Website",
      type: "Side Project",
      period: "2023",
      description: "Designed and developed a personal portfolio website using Next.js and Tailwind CSS.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      image: "/placeholder.svg?height=300&width=500",
      link: "https://example.com",
    },
    {
      title: "E-commerce Platform",
      type: "Freelance Project",
      period: "2022",
      description: "Built a custom e-commerce platform for a local business with full payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      image: "/placeholder.svg?height=300&width=500",
      link: "https://example.com",
    },
    {
      title: "Task Management App",
      type: "Side Project",
      period: "2021",
      description: "Created a productivity app for managing tasks and projects with team collaboration features.",
      technologies: ["React Native", "Firebase", "Redux"],
      image: "/placeholder.svg?height=300&width=500",
      link: "https://example.com",
    },
    {
      title: "Weather Forecast App",
      type: "Open Source Contribution",
      period: "2020",
      description: "Contributed to an open-source weather forecast application with geolocation features.",
      technologies: ["JavaScript", "OpenWeatherMap API", "Geolocation API"],
      image: "/placeholder.svg?height=300&width=500",
      link: "https://github.com/example/weather-app",
    },
  ],
}

// Update the createBookPages function to include the new sections
const createBookPages = () => {
  const pages = [
    // Page 1-2: Title and About Me
    {
      left: {
        type: "title",
        content: {
          name: myData.name,
          title: myData.title,
        },
        pageNumber: 1,
      },
      right: {
        type: "about",
        content: {
          bio: myData.bio,
          photo: myData.photo,
          socialLinks: myData.socialLinks,
        },
        pageNumber: 2,
      },
    },
    // Page 3-4: Skills
    {
      left: {
        type: "skills-intro",
        content: {
          title: "Skills & Expertise",
          description:
            "Throughout my career, I've developed a diverse set of technical and soft skills that enable me to deliver high-quality solutions and collaborate effectively with teams.",
        },
        pageNumber: 3,
      },
      right: {
        type: "skills",
        content: {
          skills: myData.skills,
        },
        pageNumber: 4,
      },
    },
    // Page 5-6: Experience
    {
      left: {
        type: "experience-intro",
        content: {
          title: "Professional Experience",
          description:
            "My journey through the tech industry has been filled with growth and learning. Here's a summary of my professional experience.",
        },
        pageNumber: 5,
      },
      right: {
        type: "experience",
        content: {
          experience: myData.experience,
        },
        pageNumber: 6,
      },
    },
  ]

  // Add chapter pages
  myData.chapters.forEach((chapter, index) => {
    pages.push({
      left: {
        type: "chapter-intro",
        content: {
          title: chapter.title,
          company: chapter.company,
          period: chapter.period,
          companyLogo: chapter.companyLogo,
        },
        pageNumber: 7 + index * 2,
      },
      right: {
        type: "chapter",
        content: chapter,
        pageNumber: 8 + index * 2,
      },
    })
  })

  // Add projects section
  const lastChapterPageNumber = pages[pages.length - 1].right.pageNumber

  pages.push({
    left: {
      type: "projects-intro",
      content: {
        title: "Projects Showcase",
        description:
          "Beyond my full-time roles, I've worked on various side projects, freelance work, and open-source contributions. Here's a selection of my most notable projects.",
      },
      pageNumber: lastChapterPageNumber + 1,
    },
    right: {
      type: "projects",
      content: {
        projects: myData.projects.slice(0, 2), // First two projects
      },
      pageNumber: lastChapterPageNumber + 2,
    },
  })

  // If there are more than 2 projects, add another page
  if (myData.projects.length > 2) {
    pages.push({
      left: {
        type: "projects",
        content: {
          projects: myData.projects.slice(2, 4), // Next two projects
        },
        pageNumber: lastChapterPageNumber + 3,
      },
      right: {
        type: "projects",
        content: {
          projects: myData.projects.slice(4), // Any remaining projects
        },
        pageNumber: lastChapterPageNumber + 4,
      },
    })
  }

  // Add certifications section
  const lastProjectPageNumber = pages[pages.length - 1].right.pageNumber

  pages.push({
    left: {
      type: "certifications-intro",
      content: {
        title: "Certifications",
        description:
          "I believe in continuous learning and professional development. Here are some of the certifications I've earned throughout my career.",
      },
      pageNumber: lastProjectPageNumber + 1,
    },
    right: {
      type: "certifications",
      content: {
        certifications: myData.certifications,
      },
      pageNumber: lastProjectPageNumber + 2,
    },
  })

  // Add awards section
  pages.push({
    left: {
      type: "awards-intro",
      content: {
        title: "Awards & Recognition",
        description:
          "Throughout my career, I've been fortunate to receive recognition for my work and contributions to various projects and initiatives.",
      },
      pageNumber: lastProjectPageNumber + 3,
    },
    right: {
      type: "awards",
      content: {
        awards: myData.awards,
      },
      pageNumber: lastProjectPageNumber + 4,
    },
  })

  return pages
}

export default function BookPortfolio() {
  const bookPages = createBookPages()
  const [isOpen, setIsOpen] = useState(false)
  const [currentSpread, setCurrentSpread] = useState(0) // Current spread (pair of pages)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next")
  const [showInstructions, setShowInstructions] = useState(false)
  const bookRef = useRef<HTMLDivElement>(null)

  // Drag-to-flip state
  const dragX = useMotionValue(0)
  const dragProgress = useMotionValue(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragDirection, setDragDirection] = useState<"left" | "right">("right")

  // Page turning sound effect
  const playPageTurn = () => {
    // This would be implemented with the useSound hook
    console.log("Page turn sound effect")
  }

  // Transform for page curl and rotation
  const rotateY = useTransform(dragProgress, [0, 1], dragDirection === "right" ? [0, -180] : [-180, 0])

  // Page curl transforms
  const pageCurlX = useTransform(
    dragProgress,
    [0, 0.25, 0.5, 0.75, 1],
    dragDirection === "right" ? [0, 10, 20, 10, 0] : [0, -10, -20, -10, 0],
  )

  const pageCurlY = useTransform(dragProgress, [0, 0.25, 0.5, 0.75, 1], [0, 5, 10, 5, 0])

  const pageShadowOpacity = useTransform(dragProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0.3, 0.6, 0.3, 0])

  const pagePerspective = useTransform(dragProgress, [0, 0.5, 1], [0, 10, 0])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && currentSpread > 0 && !isFlipping) {
        prevPage()
      } else if (e.key === "ArrowRight" && currentSpread < bookPages.length - 1 && !isFlipping) {
        nextPage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSpread, bookPages.length, isFlipping])

  const openBook = () => {
    setIsOpen(true)
    setTimeout(() => {
      setShowInstructions(true)
    }, 1000)
  }

  const nextPage = () => {
    if (currentSpread < bookPages.length - 1 && !isFlipping) {
      setIsFlipping(true)
      setFlipDirection("next")
      playPageTurn()

      setTimeout(() => {
        setCurrentSpread((prev) => prev + 1)
        setIsFlipping(false)
      }, 500)
    }
  }

  const prevPage = () => {
    if (currentSpread > 0 && !isFlipping) {
      setIsFlipping(true)
      setFlipDirection("prev")
      playPageTurn()

      setTimeout(() => {
        setCurrentSpread((prev) => prev - 1)
        setIsFlipping(false)
      }, 500)
    }
  }

  // Handle drag start
  const handleDragStart = (e: React.PointerEvent) => {
    if (isFlipping) return

    const bookWidth = bookRef.current?.clientWidth || 0
    const bookCenter = bookWidth / 2
    const mouseX = e.clientX

    // Determine drag direction based on where the user clicked
    if (mouseX < bookCenter) {
      // Dragging from left side (to go back)
      if (currentSpread <= 0) return // Can't go back from first spread
      setDragDirection("left")
    } else {
      // Dragging from right side (to go forward)
      if (currentSpread >= bookPages.length - 1) return // Can't go forward from last spread
      setDragDirection("right")
    }

    setIsDragging(true)
    dragX.set(0)
    dragProgress.set(0)
  }

  // Handle drag
  const handleDrag = (e: React.PointerEvent) => {
    if (!isDragging || isFlipping) return

    const bookWidth = bookRef.current?.clientWidth || 0
    const dragThreshold = bookWidth * 0.5 // Half the book width
    const mouseX = e.clientX
    const bookRect = bookRef.current?.getBoundingClientRect()
    const bookLeft = bookRect ? bookRect.left : 0

    let dragDistance = 0

    if (dragDirection === "right") {
      // Dragging from right to left (forward)
      dragDistance = Math.max(0, bookLeft + bookWidth - mouseX)
    } else {
      // Dragging from left to right (backward)
      dragDistance = Math.max(0, mouseX - bookLeft)
    }

    // Calculate progress (0 to 1)
    const progress = Math.min(1, dragDistance / dragThreshold)

    dragX.set(dragDistance)
    dragProgress.set(progress)
  }

  // Handle drag end
  const handleDragEnd = () => {
    if (!isDragging || isFlipping) return

    setIsDragging(false)
    const progress = dragProgress.get()

    // If dragged more than 40%, complete the page turn
    if (progress > 0.4) {
      if (dragDirection === "right") {
        nextPage()
      } else {
        prevPage()
      }
    } else {
      // Reset if not dragged enough
      dragProgress.set(0)
    }
  }

  // Get current spread (pair of pages)
  const getCurrentSpread = () => {
    return bookPages[currentSpread] || { left: null, right: null }
  }

  // Get next spread for animation
  const getNextSpread = () => {
    if (flipDirection === "next" && currentSpread < bookPages.length - 1) {
      return bookPages[currentSpread + 1]
    } else if (flipDirection === "prev" && currentSpread > 0) {
      return bookPages[currentSpread - 1]
    }
    return { left: null, right: null }
  }

  return (
    <div className="relative w-full max-w-6xl">
      {!isOpen ? (
        <BookCover onOpen={openBook} title="My Engineering Story" author={myData.name} />
      ) : (
        <div className="relative">
          <div
            ref={bookRef}
            className="book-container relative mx-auto aspect-[2/1.3] w-full overflow-hidden rounded-lg shadow-[0_30px_50px_rgba(0,0,0,0.3)]"
            onPointerDown={handleDragStart}
            onPointerMove={handleDrag}
            onPointerUp={handleDragEnd}
            onPointerLeave={handleDragEnd}
          >
            {/* Book binding and spine */}
            <div className="absolute inset-0 bg-amber-800">
              <div className="absolute left-1/2 top-0 h-full w-[20px] -translate-x-1/2 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900">
                <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-amber-950/30"></div>
              </div>
            </div>

            {/* Left page (always visible) */}
            <div className="absolute left-0 top-0 h-full w-1/2 bg-amber-50 p-8 shadow-[inset_0_0_30px_rgba(0,0,0,0.1)]">
              <div className="paper-texture absolute inset-0 bg-[url('/placeholder.svg?height=800&width=600')] opacity-5"></div>
              <div className="relative h-full">
                <PageContent pageData={getCurrentSpread().left} position="left" />
              </div>
            </div>

            {/* Right page (always visible) */}
            <div className="absolute right-0 top-0 h-full w-1/2 bg-amber-50 p-8 shadow-[inset_0_0_30px_rgba(0,0,0,0.1)]">
              <div className="paper-texture absolute inset-0 bg-[url('/placeholder.svg?height=800&width=600')] opacity-5"></div>
              <div className="relative h-full">
                <PageContent pageData={getCurrentSpread().right} position="right" />
              </div>
            </div>

            {/* Flipping page animation */}
            <AnimatePresence>
              {(isFlipping || isDragging) && (
                <motion.div
                  key={`flip-${currentSpread}-${flipDirection}-${isDragging}`}
                  className="absolute top-0 h-full w-1/2 origin-left bg-amber-50 p-8"
                  style={{
                    left: dragDirection === "right" || flipDirection === "next" ? "50%" : "0",
                    right: dragDirection === "right" || flipDirection === "next" ? "auto" : "50%",
                    transformOrigin: dragDirection === "right" || flipDirection === "next" ? "left" : "right",
                    backgroundImage: "url('/placeholder.svg?height=800&width=600')",
                    backgroundSize: "cover",
                    backgroundBlendMode: "overlay",
                    backgroundOpacity: 0.05,
                    zIndex: 10,
                    perspective: 1200,
                  }}
                  initial={{
                    rotateY: isDragging ? 0 : flipDirection === "next" ? 0 : -180,
                    boxShadow: "none",
                  }}
                  animate={{
                    rotateY: isDragging ? undefined : flipDirection === "next" ? -180 : 0,
                    boxShadow: isDragging
                      ? undefined
                      : flipDirection === "next"
                        ? ["0px 0px 0px rgba(0,0,0,0)", "10px 10px 15px rgba(0,0,0,0.3)", "0px 0px 0px rgba(0,0,0,0)"]
                        : ["0px 0px 0px rgba(0,0,0,0)", "-10px 10px 15px rgba(0,0,0,0.3)", "0px 0px 0px rgba(0,0,0,0)"],
                    transition: {
                      duration: 0.5,
                      ease: [0.645, 0.045, 0.355, 1.0],
                      boxShadow: {
                        times: [0, 0.5, 1],
                      },
                    },
                  }}
                  exit={{
                    rotateY: isDragging ? 0 : flipDirection === "next" ? -180 : 0,
                    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
                  }}
                >
                  {/* Page curl effect */}
                  {isDragging && (
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        boxShadow: `${dragDirection === "right" ? "-" : ""}10px 10px 15px rgba(0,0,0,${pageShadowOpacity.get()})`,
                        borderRadius: `0 ${dragDirection === "right" ? pagePerspective.get() : 0}px ${dragDirection === "right" ? pagePerspective.get() : 0}px 0`,
                        transform: `perspective(1200px) rotateY(${rotateY.get()}deg) translate3d(${pageCurlX.get()}px, ${pageCurlY.get()}px, 0px)`,
                      }}
                    />
                  )}

                  <div className="relative h-full overflow-hidden">
                    {isDragging ? (
                      <PageContent
                        pageData={dragDirection === "right" ? getNextSpread().left : getNextSpread().right}
                        position={dragDirection === "right" ? "left" : "right"}
                      />
                    ) : (
                      <PageContent
                        pageData={flipDirection === "next" ? getNextSpread().left : getNextSpread().right}
                        position={flipDirection === "next" ? "left" : "right"}
                      />
                    )}
                  </div>

                  {/* Page edge shadow */}
                  <motion.div
                    className="absolute inset-y-0 w-[1px]"
                    style={{
                      left: dragDirection === "right" || flipDirection === "next" ? 0 : "auto",
                      right: dragDirection === "left" || flipDirection === "prev" ? 0 : "auto",
                      background: `linear-gradient(to ${dragDirection === "right" || flipDirection === "next" ? "right" : "left"}, rgba(0,0,0,0.2), transparent)`,
                      opacity: isDragging ? pageShadowOpacity : 1,
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Instructions overlay - shown briefly when book opens */}
            <AnimatePresence>
              {showInstructions && (
                <motion.div
                  className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 1, duration: 1.5 }}
                  onAnimationComplete={() => setShowInstructions(false)}
                  onClick={() => setShowInstructions(false)}
                >
                  <div className="rounded-lg bg-amber-50 p-6 text-center shadow-xl">
                    <h3 className="mb-4 font-serif text-2xl font-bold text-amber-900">How to Navigate</h3>
                    <div className="mb-4 grid grid-cols-2 gap-6 text-amber-800">
                      <div className="flex flex-col items-center">
                        <div className="mb-2 flex items-center justify-center">
                          <ChevronLeft className="h-6 w-6" />
                          <span className="mx-2">or</span>
                          <div className="flex h-8 w-8 items-center justify-center rounded border border-amber-300">
                            ←
                          </div>
                        </div>
                        <p>Previous Page</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="mb-2 flex items-center justify-center">
                          <ChevronRight className="h-6 w-6" />
                          <span className="mx-2">or</span>
                          <div className="flex h-8 w-8 items-center justify-center rounded border border-amber-300">
                            →
                          </div>
                        </div>
                        <p>Next Page</p>
                      </div>
                    </div>
                    <div className="mb-2 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="12" y1="18" x2="12" y2="12"></line>
                        <line x1="9" y1="15" x2="15" y2="15"></line>
                      </svg>
                      <p>Drag page corners to turn</p>
                    </div>
                    <p className="text-sm text-amber-600">Click anywhere to dismiss</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Page corners */}
            <div
              className="page-corner absolute bottom-0 right-0 h-16 w-16 cursor-pointer bg-gradient-to-bl from-amber-200 to-transparent transition-all hover:h-20 hover:w-20"
              onClick={(e) => {
                e.stopPropagation()
                if (!isFlipping) nextPage()
              }}
              style={{
                clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
                zIndex: 20,
              }}
            ></div>
            <div
              className="page-corner-left absolute bottom-0 left-0 h-16 w-16 cursor-pointer bg-gradient-to-br from-amber-200 to-transparent transition-all hover:h-20 hover:w-20"
              onClick={(e) => {
                e.stopPropagation()
                if (!isFlipping) prevPage()
              }}
              style={{
                clipPath: "polygon(0 0, 0% 100%, 100% 100%)",
                zIndex: 20,
              }}
            ></div>
          </div>

          {/* Book navigation */}
          <div className="mt-6 flex justify-between">
            <button
              onClick={(e) => {
                e.stopPropagation()
                if (!isFlipping && currentSpread > 0) prevPage()
              }}
              disabled={currentSpread <= 0 || isFlipping}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full bg-amber-800 text-white shadow-md transition-all hover:bg-amber-700",
                (currentSpread <= 0 || isFlipping) && "opacity-50 cursor-not-allowed",
              )}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex items-center">
              <span className="font-serif italic text-amber-900">
                Pages {getCurrentSpread().left?.pageNumber || ""}-{getCurrentSpread().right?.pageNumber || ""}
              </span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation()
                if (!isFlipping && currentSpread < bookPages.length - 1) nextPage()
              }}
              disabled={currentSpread >= bookPages.length - 1 || isFlipping}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full bg-amber-800 text-white shadow-md transition-all hover:bg-amber-700",
                (currentSpread >= bookPages.length - 1 || isFlipping) && "opacity-50 cursor-not-allowed",
              )}
              aria-label="Next page"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Keyboard navigation hint */}
          <div className="mt-4 text-center font-serif text-sm text-amber-700">
            <p>Use arrow keys ← → to navigate between pages</p>
          </div>
        </div>
      )}
    </div>
  )
}

