import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const StickyWhatsApp = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi, I would like to order. Please assist me.')
    window.open(`https://wa.me/263786828855?text=${message}`, '_blank')
  }

  return (
    <motion.div className="fixed bottom-6 right-6 z-50 md:hidden" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
      <motion.button onClick={openWhatsApp} aria-label="Order in 30 seconds via WhatsApp" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30">
        <motion.span animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 1.6 }} className="inline-block">
          <FaWhatsapp className="text-2xl" />
        </motion.span>
      </motion.button>
    </motion.div>
  )
}

export default StickyWhatsApp
