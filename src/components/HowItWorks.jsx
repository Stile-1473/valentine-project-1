import { motion } from 'framer-motion'
import { FaSearch, FaMousePointer, FaCheck } from 'react-icons/fa'

const steps = [
  {
    icon: FaSearch,
    title: 'Choose Package',
    description: 'Browse our romantic Valentine packages and select the perfect one for your special someone.'
  },
  {
    icon: FaMousePointer,
    title: 'Click WhatsApp',
    description: 'Fill in the details and click the WhatsApp button to instantly connect with our team.'
  },
  {
    icon: FaCheck,
    title: 'Confirm Order',
    description: 'Our team will confirm your order and ensure everything is perfect for your special day.'
  }
]

const HowItWorks = () => {
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
            How It Works
          </h2>
          <p className="text-xl text-pink-200 max-w-2xl mx-auto">
            Three simple steps to make this Valentine's Day unforgettable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon className="text-white text-2xl" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-pink-400 to-red-400 transform -translate-y-1/2" style={{ width: 'calc(100vw / 3 - 5rem)' }} />
                )}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-charcoal font-bold text-sm">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-pink-200 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
