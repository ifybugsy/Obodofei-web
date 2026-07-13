interface TeamCardProps {
  name: string
  title: string
  image?: string
  bio?: string
  large?: boolean
}

export default function TeamCard({ name, title, image, bio, large = false }: TeamCardProps) {
  return (
    <div className={`group rounded-2xl overflow-hidden border border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transform hover:scale-105 ${large ? 'lg:col-span-1' : ''}`}>
      {/* Image Container */}
      <div className={`relative bg-gradient-to-br from-primary to-secondary overflow-hidden ${large ? 'h-80 md:h-96' : 'h-48 md:h-56'}`}>
        {image ? (
          <>
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <div className="text-6xl font-bold text-primary-foreground opacity-20 group-hover:opacity-40 transition-opacity duration-300">
              {name.charAt(0)}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 bg-gradient-to-b from-card to-card/50">
        <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{name}</h3>
        <p className="text-secondary font-semibold mb-3 group-hover:text-accent transition-colors duration-300">{title}</p>
        {bio && <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>}
      </div>
    </div>
  )
}
