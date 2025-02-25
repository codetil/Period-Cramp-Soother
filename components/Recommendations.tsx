"use client";

import { Card } from "@/components/ui/card";
import { Heart, Moon, Sun, Droplets, Battery, Coffee } from "lucide-react";

export function Rec({ userData }: { userData?: { name: string; email: string; avatar: string } }) {
  const recommendations = [
    {
      icon: <Heart className="w-6 h-6 text-indigo-500" />,
      title: "Self-Care",
      description: "Take time for gentle exercise like yoga or walking. Practice relaxation techniques.",
    },
    {
      icon: <Moon className="w-6 h-6 text-indigo-500" />,
      title: "Rest",
      description: "Ensure 7-9 hours of quality sleep. Consider taking short naps if needed.",
    },
    {
      icon: <Sun className="w-6 h-6 text-amber-500" />,
      title: "Light Exercise",
      description: "Engage in moderate activities like swimming or stretching to help with cramps.",
    },
    {
      icon: <Droplets className="w-6 h-6 text-blue-500" />,
      title: "Hydration",
      description: "Drink plenty of water and herbal teas to stay hydrated and reduce bloating.",
    },
    {
      icon: <Battery className="w-6 h-6 text-green-500" />,
      title: "Energy",
      description: "Eat iron-rich foods and consider supplements if recommended by your doctor.",
    },
    {
      icon: <Coffee className="w-6 h-6 text-slate-700" />,
      title: "Diet",
      description: "Reduce caffeine and salt intake. Increase fruits, vegetables, and whole grains.",
    },
  ];

  return (
    <main className="min-h-screen from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Personalized recommendations for {userData?.name || "User"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((rec, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-white rounded-full shadow-sm">
                  {rec.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    {rec.title}
                  </h3>
                  <p className="mt-1">{rec.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">
            Important Notes
          </h2>
          <div className="prose max-w-none">
            <ul className="space-y-4 ">
              <li>Track your symptoms regularly for better health management</li>
              <li>Consult with healthcare providers for personalized medical advice</li>
              <li>Everyone's body is different - what works for others might not work for you</li>
              <li>Consider using health tracking apps for more detailed monitoring</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}