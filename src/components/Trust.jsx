import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Takudzwa B.',
    message: 'The Valentine package was absolutely perfect! My partner was so surprised and happy. The delivery was right on time.',
    rating: 5
  },
  {
    name: 'Admire K.',
    message: 'Amazing service! Ordered through WhatsApp and everything was handled so smoothly. Will definitely order again.',
    rating: 5
  },
  {
    name: 'Emma M.',
    message: 'The custom gift box exceeded my expectations. Every detail was perfect, from the packaging to the personal touch.',
    rating: 5
  }
]

const Trust = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-charcoal to-red-900/10">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
            Loved by Couples Everywhere
          </h2>
          <p className="text-xl text-pink-200 max-w-2xl mx-auto">
            Join thousands of happy customers who made their Valentine's Day unforgettable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="text-pink-400 text-2xl mb-4 opacity-50" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              <p className="text-white mb-6 leading-relaxed">
                "{testimonial.message}"
              </p>

              <div className="text-pink-300 font-semibold">
                - {testimonial.name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-pink-200">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>Same-day delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>100% satisfaction guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>Secure WhatsApp ordering</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>Personalized service</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Trust
