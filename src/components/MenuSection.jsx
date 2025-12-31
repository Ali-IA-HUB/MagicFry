import FoodCard from './FoodCard'

export const MENU_IMAGE =
  'https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export const menuItems = [
  {
    title: 'Crispy Chicken Combo',
    description: 'Our signature 12-spice crust with golden fries and house slaw.',
    price: '$14.99',
  },
  {
    title: 'Blazin’ Wings Bucket',
    description: 'Twelve fiery wings tossed in smoky heat, served with cool ranch.',
    price: '$18.50',
  },
  {
    title: 'Honey Heat Tenders',
    description: 'Hand-battered tenders drizzled with sweet heat glaze.',
    price: '$12.75',
  },
  {
    title: 'Garlic Butter Thighs',
    description: 'Juicy thighs finished with roasted garlic butter and herbs.',
    price: '$13.40',
  },
  {
    title: 'Spiced Popcorn Chicken',
    description: 'Bite-sized crunch with our addictive smoky seasoning.',
    price: '$10.25',
  },
  {
    title: 'Midnight Snack Sandwich',
    description: 'Crispy filet, pickles, charred jalapeño mayo on a brioche.',
    price: '$11.95',
  },
]

function MenuSection({ limit }) {
  const items = limit ? menuItems.slice(0, limit) : menuItems

  return (
    <section
      id="menu"
      className="rounded-3xl border border-white/5 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur md:p-10"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-3 text-center">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl">Our Irresistible Menu</h2>
        <p className="text-base text-white/75 sm:text-lg">
          Bold flavors, crisp textures, and sauces crafted to keep you coming back for more.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <FoodCard
            key={item.title}
            title={item.title}
            description={item.description}
            price={item.price}
            image={MENU_IMAGE}
          />
        ))}
      </div>
    </section>
  )
}

export default MenuSection
