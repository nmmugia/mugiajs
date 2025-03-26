interface TitlePageProps {
  data: {
    name: string
    title: string
  }
}

export default function TitlePage({ data }: TitlePageProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="mb-8 h-[2px] w-32 bg-gradient-to-r from-amber-300/0 via-amber-300 to-amber-300/0"></div>

      <div className="mb-6 text-center">
        <div className="mb-2 font-serif text-lg font-light uppercase tracking-[0.3em] text-amber-800/80">
          The Chronicles of
        </div>
        <h3 className="font-serif text-3xl font-bold uppercase tracking-wide text-amber-800 md:text-4xl">
          {data.name}
        </h3>
      </div>

      <div className="mb-8 h-[2px] w-32 bg-gradient-to-r from-amber-300/0 via-amber-300 to-amber-300/0"></div>

      {/* Decorative emblem */}
      <div className="mb-8 h-20 w-20 rounded-full border-2 border-amber-800/50 p-1">
        <div className="flex h-full w-full items-center justify-center rounded-full border border-amber-800/30">
          <div className="font-serif text-3xl font-light text-amber-800">M&M</div>
        </div>
      </div>

      <p className="font-serif text-xl font-light text-amber-800/80">{data.title}</p>

      <div className="mt-6 text-center font-serif text-sm italic text-amber-700">
        <p>Turn the page to begin my story...</p>
      </div>
    </div>
  )
}

