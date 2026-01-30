import { useEffect, useState } from 'react'

const sampleLocations = ['Harare', 'Bulawayo', 'Mutare', 'Gweru']

const SocialProof = () => {
  const [notifs, setNotifs] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      const location = sampleLocations[Math.floor(Math.random() * sampleLocations.length)]
      const text = `Someone in ${location} just placed an order`
      const id = Date.now()
      setNotifs((s) => [...s, { id, text }])
      setTimeout(() => setNotifs((s) => s.filter((n) => n.id !== id)), 4500)
    }, 8000 + Math.random() * 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div aria-live="polite" className="fixed bottom-20 left-4 z-50 space-y-2">
      {notifs.map((n) => (
        <div key={n.id} className="bg-white/10 text-slate-500 rounded-lg px-4 py-2 shadow-lg text-sm backdrop-blur-sm">
          {n.text}
        </div>
      ))}
    </div>
  )
}

export default SocialProof
