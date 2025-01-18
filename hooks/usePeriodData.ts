import { useState, useEffect } from 'react'

export type PeriodData = {
  periods: string[]
  cycleLength: number
  periodLength: number
}

export function usePeriodData() {
  const [periodData, setPeriodData] = useState<PeriodData>({
    periods: [],
    cycleLength: 28,
    periodLength: 5
  })

  useEffect(() => {
    const storedData = localStorage.getItem('periodData')
    if (storedData) {
      setPeriodData(JSON.parse(storedData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('periodData', JSON.stringify(periodData))
  }, [periodData])

  const togglePeriodDay = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0]
    setPeriodData(prevData => {
      const newPeriods = prevData.periods.includes(dateStr)
        ? prevData.periods.filter(d => d !== dateStr)
        : [...prevData.periods, dateStr]
      return {
        ...prevData,
        periods: newPeriods.sort()
      }
    })
  }

  const isPeriodDay = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0]
    return periodData.periods.includes(dateStr)
  }

  const isPredictedPeriodDay = (date: Date) => {
    if (periodData.periods.length === 0) return false
    const lastPeriod = new Date(periodData.periods[periodData.periods.length - 1])
    const daysSinceLastPeriod = Math.floor((date.getTime() - lastPeriod.getTime()) / (1000 * 60 * 60 * 24))
    const cycleDay = ((daysSinceLastPeriod % periodData.cycleLength) + periodData.cycleLength) % periodData.cycleLength
    return date > new Date() && cycleDay < periodData.periodLength
  }

  const getNextPeriodDate = () => {
    if (periodData.periods.length === 0) return null
    const lastPeriod = new Date(periodData.periods[periodData.periods.length - 1])
    return new Date(lastPeriod.getTime() + periodData.cycleLength * 24 * 60 * 60 * 1000)
  }

  return {
    periodData,
    togglePeriodDay,
    isPeriodDay,
    isPredictedPeriodDay,
    getNextPeriodDate
  }
}

