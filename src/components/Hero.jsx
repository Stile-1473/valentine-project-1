import { motion } from 'framer-motion'
import { FaWhatsapp, FaHeart } from 'react-icons/fa'
import CountdownTimer from './CountdownTimer'

const FloatingHeart = ({ delay = 0, duration = 3 }) => (
  <motion.div
    className="absolute text-pink-300/20 text-4xl pointer-events-none"
    initial={{ y: 100, opacity: 0 }}
    animate={{
      y: -100,
      opacity: [0, 1, 1, 0],
      x: [0, 20, -20, 0]
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 5
    }}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }}
  >
    <FaHeart />
  </motion.div>
)

const Hero = () => {
  const scrollToPackages = () => {
    document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal via-red-900/20 to-pink-900/20">
      {/* Floating Hearts Background */}
      {[...Array(12)].map((_, i) => (
        <FloatingHeart key={i} delay={i * 0.5} duration={3 + Math.random() * 2} />
      ))}

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-pink-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            Order Something Special
            <br />
            This Valentine
          </h1>

          <motion.p
            className="text-lg md:text-xl text-pink-200 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Fast. Simple. Delivered with love.
          </motion.p>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <CountdownTimer />
          </motion.div>

          <motion.button
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-2xl text-lg flex items-center gap-3 mx-auto shadow-2xl hover:shadow-green-500/25 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToPackages}
            aria-label="Scroll to packages"
          >
            <FaWhatsapp className="text-2xl" />
            Order on WhatsApp
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-pink-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
