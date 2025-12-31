function FoodCard({ title, description, price, image }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/5 transition duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-black/30">
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <span className="shrink-0 text-base font-semibold text-primary">{price}</span>
        </div>
        <p className="text-sm text-white/70">{description}</p>
      </div>
    </article>
  )
}

export default FoodCard
