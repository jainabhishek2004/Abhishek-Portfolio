function Marquee({ items, type = "text" }: { items: string[] | { name: string; src: string }[], type?: "text" | "logos" }) {
  return (
    <div className="relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-border bg-secondary-background text-foreground font-base">
      <div className="animate-marquee whitespace-nowrap py-12 flex items-center">
        {type === "text" ? (
          (items as string[]).map((item) => (
            <span key={item} className="mx-4 text-4xl">
              {item}
            </span>
          ))
        ) : (
          (items as { name: string; src: string }[]).map((logo) => (
            <div key={logo.name} className="mx-6 flex flex-col items-center gap-3">
              <img 
                src={logo.src} 
                alt={logo.name}
                className="h-12 w-12 object-contain transition-all duration-300"
              />
              <span className="text-sm font-medium text-foreground/70">{logo.name}</span>
            </div>
          ))
        )}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-12 flex items-center">
        {type === "text" ? (
          (items as string[]).map((item) => (
            <span key={item} className="mx-4 text-4xl">
              {item}
            </span>
          ))
        ) : (
          (items as { name: string; src: string }[]).map((logo) => (
            <div key={logo.name} className="mx-6 flex flex-col items-center gap-3">
              <img 
                src={logo.src} 
                alt={logo.name}
                className="h-12 w-12 object-contain  transition-all duration-300"
              />
              <span className="text-sm font-medium text-foreground/70">{logo.name}</span>
            </div>
          ))
        )}
      </div>
    </div>
  )

}

export default Marquee;