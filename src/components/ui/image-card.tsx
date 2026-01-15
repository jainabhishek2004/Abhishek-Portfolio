import { cn } from "@/lib/utils"

type ProjectCardProps = {
  imageUrl: string
  title: string
  year: string
  description: string
  tech: string[]
  website?: string
  source?: string
  className?: string
}

export default function ProjectCard({
  imageUrl,
  title,
  year,
  description,
  tech,
  website,
  source,
  className,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "w-full overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow flex flex-col",
        className
      )}
    >
      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full aspect-video object-cover border-b-2 border-border"
      />

      {/* Content */}
      <div className="p-4 flex flex-col gap-3 text-main-foreground">
        {/* Title + Year */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg">{title}</h3>
          <span className="text-sm">{year}</span>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="border-2 border-border px-2 py-1 rounded-base text-xs bg-secondary-background"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Actions */}
        {(website || source) && (
          <div className="flex gap-3 pt-2">
            {website && (
              <a
                href={website}
                target="_blank"
                className="border-2 border-border px-3 py-1 rounded-base shadow-shadow bg-background text-sm"
              >
                Website
              </a>
            )}
            {source && (
              <a
                href={source}
                target="_blank"
                className="border-2 border-border px-3 py-1 rounded-base shadow-shadow bg-background text-sm"
              >
                Source
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
