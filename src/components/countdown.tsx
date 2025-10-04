import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const targetDate = new Date('2025-11-22T18:00:00').getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference <= 0) {
        setIsExpired(true)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }
    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    
    return () => clearInterval(interval)
  }, [])

  if (isExpired) {
    return (
      <div className="text-center">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold mb-4">🎉 The Big Day is Here! 🎉</h3>
          <p className="text-xl">Join us to witness the magic of love!</p>
          <div className="mt-4 text-2xl">
            💕 Boobana & Giri 💕
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="text-center animate-fade-in">
      <h3 className="text-2xl font-semibold text-gray-700 mb-6">Countdown to Our Special Day</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 animate-countdown-pulse hover:scale-105 transition-transform duration-300">
          <div className="text-3xl font-bold text-red-600 animate-tick">{timeLeft.days}</div>
          <div className="text-sm text-gray-600 font-medium">Days</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 animate-countdown-pulse hover:scale-105 transition-transform duration-300">
          <div className="text-3xl font-bold text-red-600 animate-tick">{timeLeft.hours}</div>
          <div className="text-sm text-gray-600 font-medium">Hours</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 animate-countdown-pulse hover:scale-105 transition-transform duration-300">
          <div className="text-3xl font-bold text-red-600 animate-tick">{timeLeft.minutes}</div>
          <div className="text-sm text-gray-600 font-medium">Minutes</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 animate-countdown-pulse hover:scale-105 transition-transform duration-300">
          <div className="text-3xl font-bold text-red-600 animate-tick">{timeLeft.seconds}</div>
          <div className="text-sm text-gray-600 font-medium">Seconds</div>
        </div>
      </div>
    </div>
  )
}