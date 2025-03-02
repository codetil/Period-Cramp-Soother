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
    // Here you would make a request to an external API like Google Places API
    // Example API call: 
    // const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=restroom&key=${process.env.GOOGLE_MAPS_API_KEY}`);
    // const data = await response.json();
    
    // For now, we'll return mock data
    const washrooms = [
      { id: 1, name: "Public Restroom - City Park", distance: "0.3 km", address: "123 Park Avenue" },
      { id: 2, name: "Shopping Mall Washroom", distance: "0.7 km", address: "456 Main Street" },
      { id: 3, name: "Coffee Shop Restroom", distance: "1.1 km", address: "789 Oak Road" },
      { id: 4, name: "Gas Station Bathroom", distance: "1.5 km", address: "101 Highway Avenue" }
    ];
    
    return NextResponse.json({ washrooms });
  } catch (error) {
    console.error('Error fetching washroom data:', error);
    return NextResponse.json({ error: 'Failed to fetch washroom data' }, { status: 500 });
  }
}