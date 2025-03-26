"use client"

import { motion } from "framer-motion"

interface BookCoverProps {
  onOpen: () => void
  title: string
  author: string
}

export default function BookCover({ onOpen, title, author }: BookCoverProps) {
  return (
    <motion.div
      className="book-cover relative mx-auto aspect-[2/3] w-full max-w-md cursor-pointer overflow-hidden rounded-lg shadow-[0_20px_30px_-15px_rgba(0,0,0,0.5)]"
      initial={{ scale: 0.9, opacity: 0, rotateY: 30 }}
      animate={{ scale: 1, opacity: 1, rotateY: 0 }}
      transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
      onClick={onOpen}
      whileHover={{ scale: 1.05, rotateY: 15 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Leather texture background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-800 to-amber-950">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=600')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* Book spine */}
      <div className="absolute left-0 top-0 h-full w-[30px] bg-gradient-to-r from-amber-950 to-amber-800">
        <div className="absolute left-[15px] top-0 h-full w-[1px] bg-amber-700/30"></div>
      </div>

      {/* Embossed border */}
      <div className="absolute inset-0 m-6 rounded border-[3px] border-amber-500/30 shadow-[inset_0_0_10px_rgba(0,0,0,0.3)]"></div>

      {/* Gold foil effect */}
      <div className="relative flex h-full flex-col items-center justify-center p-10">
        <div className="mb-8 h-[2px] w-32 bg-gradient-to-r from-amber-300/0 via-amber-300 to-amber-300/0"></div>

        <div className="mb-6 text-center">
          <div className="mb-2 font-serif text-lg font-light uppercase tracking-[0.3em] text-amber-300/80">
            The Chronicles of
          </div>
          <h3 className="font-serif text-3xl font-bold uppercase tracking-wide text-amber-300 md:text-4xl lg:text-5xl">
            {title}
          </h3>
        </div>

        <div className="mb-8 h-[2px] w-32 bg-gradient-to-r from-amber-300/0 via-amber-300 to-amber-300/0"></div>

        {/* Decorative emblem */}
        <div className="mb-8 h-24 w-24 rounded-full border-2 border-amber-300/50 p-1">
          <div className="flex h-full w-full items-center justify-center rounded-full border border-amber-300/30">
            <div className="font-serif text-4xl font-light text-amber-300">M&M</div>
          </div>
        </div>

        <p className="font-serif text-xl font-light text-amber-300/80">By</p>
        <p className="font-serif text-2xl font-semibold text-amber-300">{author}</p>

        <div className="absolute bottom-6 left-0 right-0 text-center font-serif text-sm italic text-amber-300/60">
          <p>Click to open</p>
        </div>
      </div>

      {/* Book edge effect */}
      <div className="absolute bottom-0 right-0 h-full w-[10px] bg-gradient-to-l from-amber-200/20 to-transparent"></div>
      <div className="absolute bottom-0 right-0 h-[10px] w-full bg-gradient-to-t from-amber-200/20 to-transparent"></div>
    </motion.div>
  )
}

