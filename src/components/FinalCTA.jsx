import { motion } from 'framer-motion'
import { FaWhatsapp, FaHeart } from 'react-icons/fa'

const FinalCTA = () => {
  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent("Hi!\nI would like to order something special for Valentine's Day!\nPlease help me choose the perfect package.")
    window.open(`https://wa.me/263786828855?text=${message}`, '_blank')
  }

  return (
    <section className="py-20 bg-gradient-to-r from-pink-600 to-red-600 relative overflow-hidden">
      {/* Animated Background Hearts */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white/10 text-6xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: -100,
            opacity: [0, 0.5, 0.5, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            repeatDelay: 2
          }}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${Math.random() * 100}%`
          }}
        >
          <FaHeart />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Don't Wait!
            <br />
            Make This Valentine's Day
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Unforgettable
            </span>
          </h2>

          <motion.p
            className="text-xl text-pink-100 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Express your love with our carefully curated Valentine packages.
            Fast, reliable, and delivered with care.
          </motion.p>

          <motion.button
            className="bg-white text-red-600 font-bold py-4 px-12 rounded-2xl text-xl flex items-center gap-3 mx-auto shadow-2xl hover:shadow-white/25 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(255, 255, 255, 0.4)',
                '0 0 0 20px rgba(255, 255, 255, 0)',
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            onClick={handleWhatsAppOrder}
            aria-label="Order now on WhatsApp"
            // ensure visible focus for keyboard users
            tabIndex={0}
            className={
              "bg-white text-red-600 font-bold py-4 px-12 rounded-2xl text-xl flex items-center gap-3 mx-auto shadow-2xl hover:shadow-white/25 transition-all duration-300 group focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            }
          >
            <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
            Order Now on WhatsApp
          </motion.button>

          <motion.p
            className="text-pink-200 mt-6 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FaHeart className="inline text-pink-200 mr-2" aria-hidden="true" />
            Limited time offers • Same-day delivery available • 100% satisfaction guarantee
          </motion.p>
        </motion.div>
      </div>

      {/* Sticky WhatsApp Button for Mobile */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 md:hidden"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <button
          onClick={handleWhatsAppOrder}
          aria-label="Open WhatsApp to order"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
        >
          <FaWhatsapp className="text-2xl" />
        </button>
      </motion.div>
    </section>
  )
}

export default FinalCTA
