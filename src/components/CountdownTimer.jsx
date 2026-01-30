import { useState, useEffect } from 'react'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      // Target: Feb 14 at local midnight
      const valentine = new Date(now.getFullYear(), 1, 14, 0, 0, 0, 0)

      if (now > valentine) {
        valentine.setFullYear(valentine.getFullYear() + 1)
      }

      const difference = valentine - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      } else {
        // When reached or passed, explicitly show zeros
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])
  return (
    <div role="timer" aria-live="polite" aria-atomic="true" className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 inline-block">
      <h3 className="text-pink-300 text-sm mb-4 font-medium">Valentine's Day Countdown</h3>
      <div className="flex gap-3 flex-wrap justify-center text-center">
        {['days', 'hours', 'minutes', 'seconds'].map((unit) => {
          const value = timeLeft[unit] ?? 0
          const display = unit === 'days' ? value : String(value).padStart(2, '0')
          return (
            <div key={unit} className="flex flex-col items-center w-20 sm:w-auto">
              <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-lg p-3 w-full sm:min-w-[60px]">
                <div className="text-2xl font-bold text-white" aria-hidden="true">{display}</div>
              </div>
              <div className="text-xs text-pink-200 mt-1 capitalize" aria-label={unit}>{unit}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CountdownTimer
