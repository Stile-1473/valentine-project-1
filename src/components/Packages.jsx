import { motion } from 'framer-motion'
import {FaHeart, FaUtensils, FaGift, FaBirthdayCake, FaMusic} from 'react-icons/fa'

const packages = [
  {
    id: 1,
    name: 'Roses & Chocolate',
    price: 45,
    items: ['12 Red Roses', 'Premium Lindor Chocolate Box', 'Love Card'],
    icon: FaHeart,
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 2,
    name: 'Romantic Dinner',
    price: 120,
    items: ['Candlelit Dinner for 2', 'Wine Bottle', 'Dessert Platter'],
    icon: FaUtensils,
    color: 'from-pink-500 to-rose-500',
    best: true
  },
  {
    id: 3,
    name: 'Custom Gift Box',
    price: 80,
    items: ['Personalized Gift Box', 'Perfume', 'Jewelry', 'Love Note'],
    icon: FaGift,
    color: 'from-rose-500 to-red-500'
  },
  {
    id: 4,
    name: 'Mukomana weBosvo',
    price: 60,
    items: ['Romantic Music', 'Custom Message', 'Candles'],
    icon: FaMusic,
    color: 'from-pink-400 to-red-400'
  }
]

const Packages = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-charcoal to-red-900/10">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
            Valentine Packages
          </h2>
          <p className="text-xl text-pink-200 max-w-2xl mx-auto">
            Choose the perfect way to express your love this Valentine's Day
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                rotateY: 5,
                rotateX: 5,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              onClick={() => onSelectPackage(pkg)}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <pkg.icon className="text-white text-2xl" />
              </div>

              {pkg.best && (
                <div className="absolute -top-3 left-4 bg-yellow-400 text-charcoal text-xs font-semibold px-3 py-1 rounded-full">
                  Best Value
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2 text-center">{pkg.name}</h3>
              <div className="text-3xl font-bold text-pink-400 mb-4 text-center">${pkg.price}</div>

              <ul className="text-sm text-pink-200 mb-6 space-y-1">
                {pkg.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-pink-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 group-hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
                aria-label={`Select ${pkg.name} package`}
              >
                Select Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
