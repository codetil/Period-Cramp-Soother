
'use client'

import { useState, useEffect } from 'react'
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Loader2 } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { UserButton } from '@clerk/nextjs'

export default function WashroomPage() {
  const [loading, setLoading] = useState(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [washrooms, setWashrooms] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const findNearbyWashrooms = () => {
    setLoading(true);
    setError(null);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setUserLocation(userPos);
          
          // In a real application, you would make an API call to a service that provides nearby washrooms
          // For example, using Google Places API or Overpass API (OpenStreetMap)
          // This is a mock implementation
          fetchNearbyWashrooms(userPos.lat, userPos.lng);
        },
        (err) => {
          setError("Error accessing your location. Please enable location services.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
    }
  };

  const fetchNearbyWashrooms = async (lat: number, lng: number) => {
    try {
      // Mock API call - in a real implementation you would call an actual API
      // const response = await fetch(`/api/washrooms?lat=${lat}&lng=${lng}`);
      // const data = await response.json();
      
      // Simulating API response with mock data
      setTimeout(() => {
        const mockWashrooms = [
          { id: 1, name: "Public Restroom - City Park", distance: "0.3 km", address: "123 Park Avenue" },
          { id: 2, name: "Shopping Mall Washroom", distance: "0.7 km", address: "456 Main Street" },
          { id: 3, name: "Coffee Shop Restroom", distance: "1.1 km", address: "789 Oak Road" },
          { id: 4, name: "Gas Station Bathroom", distance: "1.5 km", address: "101 Highway Avenue" }
        ];
        
        setWashrooms(mockWashrooms);
        setLoading(false);
      }, 1500);
      
    } catch (error) {
      setError("Failed to fetch nearby washrooms. Please try again.");
      setLoading(false);
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 w-full">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Nearby Washrooms</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex items-center gap-2 ml-auto">
              <ModeToggle />
              <UserButton />
            </div>
          </div>
        </header>
        
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="mx-auto w-full max-w-6xl">
            <Card>
              <CardHeader>
                <CardTitle>Find Nearby Washrooms</CardTitle>
                <CardDescription>
                  Locate public washrooms and restrooms near your current location
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <Button 
                    onClick={findNearbyWashrooms} 
                    disabled={loading}
                    className="w-full sm:w-auto"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Finding washrooms...
                      </>
                    ) : (
                      <>
                        <MapPin className="mr-2 h-4 w-4" />
                        Find Nearby Washrooms
                      </>
                    )}
                  </Button>
                  
                  {error && (
                    <div className="text-red-500 mt-2">{error}</div>
                  )}
                  
                  <div className="grid gap-4 mt-4">
                    {washrooms.map((washroom) => (
                      <Card key={washroom.id}>
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">{washroom.name}</CardTitle>
                          <CardDescription>{washroom.address}</CardDescription>
                        </CardHeader>
                        <CardFooter className="p-4 pt-0 flex justify-between">
                          <span>{washroom.distance}</span>
                          <Button variant="outline">Get Directions</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                  
                  {washrooms.length === 0 && !loading && !error && (
                    <div className="text-center py-8 text-gray-500">
                      Click the button above to find washrooms near you
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}