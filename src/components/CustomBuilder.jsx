import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaGift, FaTimes } from "react-icons/fa";
import { generateMessage } from "../utils/messageGenerator";

/* ------------------ CONFIG ------------------ */

const PRODUCTS = [
  { key: "flowers", label: "Flowers" },
  { key: "chocolates", label: "Chocolates" },
  { key: "teddy", label: "Teddy Bear" },
  { key: "perfume", label: "Perfume" },
  { key: "dinner", label: "Romantic Dinner" },
  { key: "customGift", label: "Custom Gift" },
];

const suggestByBudget = (budget) => {
  if (budget <= 50) return ["flowers", "chocolates"];
  if (budget <= 120) return ["flowers", "teddy", "perfume"];
  return ["flowers", "dinner", "customGift"];
};

/* ------------------ COMPONENT ------------------ */

const CustomBuilder = ({ eventMode = "Valentine" }) => {
  const [open, setOpen] = useState(false);

  const [products, setProducts] = useState({
    flowers: false,
    chocolates: false,
    teddy: false,
    perfume: false,
    dinner: false,
    customGift: false,
  });

  const [budget, setBudget] = useState(50);
  const [delivery, setDelivery] = useState("delivery");
  const [zone, setZone] = useState("Harare");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  /* 🔮 AUTO SUGGEST PRODUCTS */
  useEffect(() => {
    const suggested = suggestByBudget(budget);
    setProducts((prev) => {
      const updated = { ...prev };
      suggested.forEach((key) => (updated[key] = true));
      return updated;
    });
  }, [budget]);

  const toggleProduct = (key) => {
    setProducts((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const selection = useMemo(
      () => ({
        products,
        budget,
        delivery,
        zone,
        location,
        date,
        time,
        notes,
        eventMode,
      }),
      [products, budget, delivery, zone, location, date, time, notes, eventMode]
  );

  const handleWhatsApp = () => {
    const message = generateMessage({
      packageName: "Custom Valentine Package",
      selection,
    });

    window.open(
        `https://wa.me/263786828855?text=${encodeURIComponent(message)}`,
        "_blank"
    );
  };

  return (
      <section className="py-12 bg-gradient-to-b from-charcoal to-red-900/5">
        <div className="max-w-4xl mx-auto px-4">

          {/* BUTTON FIRST */}
          {!open && (
              <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
              >
                <button
                    onClick={() => setOpen(true)}
                    className="inline-flex items-center gap-3
                         bg-gradient-to-r from-pink-500 to-red-500
                         text-white font-bold py-4 px-8
                         rounded-2xl text-lg"
                >
                  <FaGift />
                  Build Your Own {eventMode} Gift
                </button>
              </motion.div>
          )}

          {/* FORM */}
          <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden mt-8"
                >
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 space-y-6">

                    {/* CLOSE BUTTON */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setOpen(false)}
                        aria-label="Close builder"
                        className="absolute top-4 right-4
                             bg-white/10 border border-white/20
                             rounded-full p-2
                             text-pink-200 hover:text-white"
                    >
                      <FaTimes size={16} />
                    </motion.button>

                    <h2 className="text-2xl font-bold
                               bg-gradient-to-r from-pink-400 to-red-400
                               bg-clip-text text-transparent">
                      Customize Your {eventMode} Surprise
                    </h2>

                    {/* PRODUCTS AS CARDS */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {PRODUCTS.map((item) => {
                        const active = products[item.key];
                        return (
                            <motion.button
                                key={item.key}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => toggleProduct(item.key)}
                                className={`rounded-xl p-4 border text-center transition
                          ${
                                    active
                                        ? "bg-pink-500/20 border-pink-400 text-white"
                                        : "bg-white/10 border-pink-300/30 text-pink-200"
                                }`}
                            >
                              {item.label}
                            </motion.button>
                        );
                      })}
                    </div>

                    {/* BUDGET */}
                    <div>
                      <label className="block text-pink-200 mb-2">
                        Budget (${budget})
                      </label>
                      <input
                          type="range"
                          min="20"
                          max="500"
                          value={budget}
                          onChange={(e) => setBudget(Number(e.target.value))}
                          className="w-full"
                      />
                    </div>

                    {/* DELIVERY */}
                    <div className="flex flex-wrap gap-4 items-center">
                      {["delivery", "pickup"].map((opt) => (
                          <label key={opt} className="flex items-center gap-2">
                            <input
                                type="radio"
                                checked={delivery === opt}
                                onChange={() => setDelivery(opt)}
                            />
                            <span className="text-pink-200 capitalize">{opt}</span>
                          </label>
                      ))}

                      <select
                          value={zone}
                          onChange={(e) => setZone(e.target.value)}
                          className="bg-white/10 border border-pink-300/30
                               rounded-xl px-3 py-2 text-black"
                      >
                        <option>Harare</option>
                        <option>Bulawayo</option>
                        <option>Mutare</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* DETAILS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                          placeholder="Delivery location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="input"
                      />
                      <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="input"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                          type="time"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className="input"
                      />
                      <textarea
                          placeholder="Custom gift idea or special instructions"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          rows={3}
                          className="textarea"
                      />
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                      <button
                          onClick={handleWhatsApp}
                          className="bg-gradient-to-r from-green-500 to-green-600
                               text-white font-bold py-3 px-6 rounded-2xl
                               flex items-center gap-3"
                      >
                        <FaWhatsapp />
                        Order via WhatsApp
                      </button>

                      <span className="text-pink-200">
                    Estimated:{" "}
                        <strong className="text-white">${budget}</strong>
                  </span>
                    </div>

                  </div>
                </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
  );
};

export default CustomBuilder;
