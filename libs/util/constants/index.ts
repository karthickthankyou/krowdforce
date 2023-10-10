export type CityType = {
  id: number
  name: string
  englishName: string
  lat: number
  lng: number
}
export const cities: CityType[] = [
  { id: 1, name: 'சென்னை', englishName: 'Chennai', lat: 13.0827, lng: 80.2707 },
  {
    id: 2,
    name: 'ಬೆಂಗಳೂರು',
    englishName: 'Bengaluru',
    lat: 12.9716,
    lng: 77.5946,
  },
  {
    id: 3,
    name: 'തിരുവനന്തപുരം',
    englishName: 'Trivandrum',
    lat: 8.5241,
    lng: 76.9366,
  },

  {
    id: 4,
    name: 'అమరావతి',
    englishName: 'Amaravati',
    lat: 16.5062,
    lng: 80.648,
  },
  {
    id: 5,
    name: 'హైదరాబాద్',
    englishName: 'Hyderabad',
    lat: 17.385,
    lng: 78.4867,
  },
  { id: 7, name: 'मुंबई', englishName: 'Mumbai', lat: 19.076, lng: 72.8777 },
  { id: 8, name: 'पुणे', englishName: 'Pune', lat: 18.5204, lng: 73.8567 },
  { id: 9, name: 'কলকাতা', englishName: 'Kolkata', lat: 22.5726, lng: 88.3639 },
  {
    id: 6,
    name: 'नयी दिल्ली',
    englishName: 'New Delhi',
    lat: 28.6139,
    lng: 77.209,
  },
]

export const initialViewState = {
  longitude: 80.2707,
  latitude: 13.0827,
  zoom: 8,
}

export type boundsType = {
  ne_lat: number
  ne_lng: number
  sw_lat: number
  sw_lng: number
}

export const initialBounds = {
  ne_lat: 15.363624935782738,
  ne_lng: 82.74586061924367,
  sw_lat: 10.801454608662539,
  sw_lng: 77.79553938075622,
}

export const ITEMS_PER_PAGE = 2
export const FIRST_PAGE = 1
