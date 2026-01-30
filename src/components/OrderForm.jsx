import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaCalendarAlt, FaMinus, FaPlus } from 'react-icons/fa'

const OrderForm = ({ selectedPackage }) => {
  const [quantity, setQuantity] = useState(1)
  const [date, setDate] = useState('')
  const [zone, setZone] = useState('Harare')
  const [message, setMessage] = useState('')

  const handleWhatsAppOrder = () => {
    if (!selectedPackage) {
      alert('Please select a package first')
      return
    }

    const orderMessage = `Hi!\nI would like to order:\nPackage: ${selectedPackage.name}\nDate: ${date || 'TBD'}\nTime: ${'TBD'}\nLocation: ${selectedPackage.name ? zone : 'TBD'}\nQuantity: ${quantity}\n${message ? `Message: ${message}` : ''}\nThank you!`

    const encodedMessage = encodeURIComponent(orderMessage)
    window.open(`https://wa.me/263786828855?text=${encodedMessage}`, '_blank')
  }

  if (!selectedPackage) {
    return (
      <section id="order-form" className="py-20 bg-gradient-to-b from-red-900/10 to-charcoal">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Ready to Order?
            </h2>
            <p className="text-xl text-pink-200">
              Select a package above to get started with your Valentine's order
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="order-form" className="py-20 bg-gradient-to-b from-red-900/10 to-charcoal">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Complete Your Order
            </h2>

            {/* Selected Package Display */}
            <div className="bg-white/5 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-2">
                Selected: {selectedPackage.name}
              </h3>
              <p className="text-pink-300 text-lg font-bold">${selectedPackage.price}</p>
              <ul className="text-sm text-pink-200 mt-2">
                {selectedPackage.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-pink-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-white font-medium mb-3">Quantity</label>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center text-white transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
                  aria-label="Decrease quantity"
                >
                  <FaMinus />
                </button>
                <span className="text-2xl font-bold text-white min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center text-white transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
                  aria-label="Increase quantity"
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            {/* Date Picker */}
            <div className="mb-6">
              <label htmlFor="delivery-date" className="block text-white font-medium mb-3">Delivery Date</label>
              <div className="relative">
                <input
                  id="delivery-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white/10 border border-pink-300/30 rounded-xl px-4 py-3 text-white placeholder-pink-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                  min={new Date().toISOString().split('T')[0]}
                />
                <FaCalendarAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 text-pink-300 pointer-events-none" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-white font-medium mb-3">Delivery Zone</label>
              <select value={zone} onChange={(e) => setZone(e.target.value)} className="w-full bg-white/10 border border-pink-300/30 rounded-xl px-4 py-3 text-white">
                <option>Harare</option>
                <option>Bulawayo</option>
                <option>Mutare</option>
                <option>Other</option>
              </select>
            </div>

            {/* Optional Message */}
            <div className="mb-8">
              <label className="block text-white font-medium mb-3">Special Message (Optional)</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Add a personal message..."
                className="w-full bg-white/10 border border-pink-300/30 rounded-xl px-4 py-3 text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
                rows="3"
              />
            </div>

            {/* Total and Order Button */}
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-6">
                Total: ${(selectedPackage.price * quantity).toFixed(2)}
              </div>

              <motion.button
                onClick={handleWhatsAppOrder}
                className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl text-lg flex items-center gap-3 mx-auto shadow-2xl hover:shadow-green-500/25 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Place order via WhatsApp"
              >
                <FaWhatsapp className="text-2xl" />
                Order on WhatsApp
              </motion.button>

              <p className="text-pink-200 text-sm mt-4">
                We'll confirm your order instantly via WhatsApp
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OrderForm
