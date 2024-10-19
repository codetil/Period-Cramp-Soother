export default function Recommendations({ intensityLevel }: { intensityLevel: number }) {
  const getRecommendations = (level: number) => {
    if (level <= 3) {
      return ['Light exercise', 'Stay hydrated', 'Gentle stretching']
    } else if (level <= 7) {
      return ['Apply heat', 'Take a warm bath', 'Practice deep breathing']
    } else {
      return ['Rest', 'Drink water', 'Contact your healthcare provider if severe']
    }
  }

  const recommendations = getRecommendations(intensityLevel)

  return (
    <ul className="list-disc pl-5">
      {recommendations.map((rec, index) => (
        <li key={index}>{rec}</li>
      ))}
    </ul>
  )
}