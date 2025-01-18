import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Wifi } from 'lucide-react'

export function WifiSetupForm() {
  return (
    <Card className="w-full max-w-md shadow-xl">
      <CardHeader className="text-center space-y-2">
        <div className="mx-auto bg-teal-500 rounded-full p-3 w-fit">
          <Wifi size={32} className="text-white" />
        </div>
        <CardTitle className="text-2xl font-bold text-teal-700">
          Menstrual Cramp Soother
        </CardTitle>
        <CardDescription className="text-teal-600 font-medium">
          WiFi Setup
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action="/getWiFi" method="post" className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="ssid" className="block font-medium text-gray-700">
              WiFi Name (SSID)
            </label>
            <Input 
              type="text" 
              id="ssid" 
              name="id" 
              required 
              className="w-full border-teal-300 focus:border-teal-500 focus:ring-teal-500"
              placeholder="Enter your WiFi name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="pswd" className="block font-medium text-gray-700">
              Password
            </label>
            <Input 
              type="password" 
              id="pswd" 
              name="pswd" 
              required 
              className="w-full border-teal-300 focus:border-teal-500 focus:ring-teal-500"
              placeholder="Enter your WiFi password"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Connect
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

