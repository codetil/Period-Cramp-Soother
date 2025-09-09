// app/api/washrooms/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  
  if (!lat || !lng) {
    return NextResponse.json({ error: 'Missing latitude or longitude' }, { status: 400 });
  }

  try {
    // Parse coordinates for mock data generation
    const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);
    
    // Here you would make a request to an external API like Google Places API
    // Example API call: 
    // const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=restroom&key=${process.env.GOOGLE_MAPS_API_KEY}`);
    // const data = await response.json();
    
    // Generate location-aware mock data based on the provided coordinates
    const washrooms = [
      { 
        id: 1, 
        name: "Public Restroom - City Park", 
        distance: "0.3 km", 
        address: "Near your location",
        coordinates: { lat: latitude + 0.002, lng: longitude + 0.001 }
      },
      { 
        id: 2, 
        name: "Shopping Mall Washroom", 
        distance: "0.7 km", 
        address: "Main shopping district",
        coordinates: { lat: latitude - 0.003, lng: longitude + 0.004 }
      },
      { 
        id: 3, 
        name: "Coffee Shop Restroom", 
        distance: "1.1 km", 
        address: "Downtown area",
        coordinates: { lat: latitude + 0.005, lng: longitude - 0.002 }
      },
      { 
        id: 4, 
        name: "Gas Station Bathroom", 
        distance: "1.5 km", 
        address: "Highway access road",
        coordinates: { lat: latitude - 0.007, lng: longitude - 0.003 }
      }
    ];
    
    console.log(`Found washrooms near coordinates: ${lat}, ${lng}`);
    return NextResponse.json({ 
      washrooms,
      userLocation: { lat: latitude, lng: longitude }
    });
  } catch (error) {
    console.error('Error fetching washroom data:', error);
    return NextResponse.json({ error: 'Failed to fetch washroom data' }, { status: 500 });
  }
}