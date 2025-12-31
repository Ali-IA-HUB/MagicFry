import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const categories = [
  {
    label: 'Burger Menüler',
    slug: 'burger-menuler',
    image: 'https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    label: 'Cajun Roll',
    slug: 'cajun-roll',
    image: 'https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    label: 'Sandviç Menüler',
    slug: 'sandvic-menuler',
    image: 'https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    label: 'Taco',
    slug: 'taco',
    image: 'https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    label: 'Cajun Şiş',
    slug: 'cajun-sis',
   image: 'https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    label: 'Wings',
    slug: 'wings',
    image: 'https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    label: 'Ekstra Lezzetler',
    slug: 'ekstra-lezzetler',
    image: 'https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    label: 'Gurme Burgerler',
    slug: 'gurme-burgerler',
    image: 'https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

function MenuCategories() {
  const [active, setActive] = useState(categories[0]?.slug || '')
  const navigate = useNavigate()

  const handleSelect = (slug) => {
    setActive(slug)
    navigate(`/menu?category=${slug}`)
  }

  return (
    <section className="w-full bg-[#f6f1e7] py-10">
      <div className="no-scrollbar mx-auto flex w-screen gap-2 overflow-x-auto snap-x snap-mandatory scroll-smooth rounded-3xl border border-black/5 bg-white shadow-lg shadow-black/10">
        {categories.map((item) => {
          const isActive = item.slug === active
          return (
            <button
              key={item.slug}
              type="button"
              onClick={() => handleSelect(item.slug)}
              className={`group relative flex basis-[20vw] min-w-[20vw] shrink-0 flex-col items-center justify-between gap-4 px-3 py-6 snap-start transition-all duration-500 ease-in-out ${
                isActive ? 'bg-primary text-white scale-105' : 'bg-[#f6f1e7] text-black'
              }`}
            >
              <div className="relative h-24 w-full">
                <img
                  src={item.image}
                  alt={item.label}
                  className={`absolute inset-0 mx-auto h-full w-auto max-w-[90%] object-contain transition-all duration-500 ease-in-out ${
                    isActive
                      ? 'scale-110 drop-shadow-[0_18px_28px_rgba(0,0,0,0.18)]'
                      : 'scale-100 group-hover:scale-105'
                  }`}
                  loading="lazy"
                />
              </div>
              <span
                className={`text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-500 ease-in-out ${
                  isActive ? 'text-white' : 'text-black/70 group-hover:text-black'
                }`}
              >
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default MenuCategories
