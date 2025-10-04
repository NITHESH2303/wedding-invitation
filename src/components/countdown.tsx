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
        <div className="bg-gradient-to-r from-mint-200 to-gentle-200 text-navy-800 rounded-2xl p-6 shadow-lg" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
          <h3 className="text-2xl font-extrabold mb-3 tracking-widest-em uppercase">🎉 The Big Day is Here! 🎉</h3>
          <p className="text-lg font-bold">Join us to witness the magic of love!</p>
          <div className="mt-4 text-xl font-extrabold tracking-widest-em">
            💕 BOOBANA & GIRI 💕
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="text-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-mint-200 to-gentle-200 rounded-2xl p-4 shadow-lg hover:scale-105 transition-all duration-300" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
          <div className="text-3xl md:text-4xl font-extrabold text-navy-800 animate-tick">{timeLeft.days}</div>
          <div className="text-sm font-bold text-navy-700 uppercase tracking-wider">Days</div>
        </div>
        <div className="bg-gradient-to-br from-gentle-200 to-dusty-200 rounded-2xl p-4 shadow-lg hover:scale-105 transition-all duration-300" style={{animationDelay: '0.1s', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
          <div className="text-3xl md:text-4xl font-extrabold text-navy-800 animate-tick">{timeLeft.hours}</div>
          <div className="text-sm font-bold text-navy-700 uppercase tracking-wider">Hours</div>
        </div>
        <div className="bg-gradient-to-br from-dusty-200 to-mint-200 rounded-2xl p-4 shadow-lg hover:scale-105 transition-all duration-300" style={{animationDelay: '0.2s', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
          <div className="text-3xl md:text-4xl font-extrabold text-navy-800 animate-tick">{timeLeft.minutes}</div>
          <div className="text-sm font-bold text-navy-700 uppercase tracking-wider">Minutes</div>
        </div>
        <div className="bg-gradient-to-br from-mint-200 to-gentle-200 rounded-2xl p-4 shadow-lg hover:scale-105 transition-all duration-300" style={{animationDelay: '0.3s', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
          <div className="text-3xl md:text-4xl font-extrabold text-navy-800 animate-tick">{timeLeft.seconds}</div>
          <div className="text-sm font-bold text-navy-700 uppercase tracking-wider">Seconds</div>
        </div>
      </div>
    </div>
  )
}