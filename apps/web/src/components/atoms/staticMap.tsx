import polyline from '@mapbox/polyline'
import Image from 'next/image'

export const StaticDirection = ({
  start,
  end,
  padding = [100, 100, 100],
  pitch = 45,
  coordinates,
  className = 'w-full shadow-xl aspect-square',
}: {
  start: { lng: number; lat: number }
  end: { lng: number; lat: number }
  padding?: [number, number, number]
  pitch?: number
  coordinates: [number, number][]
  className?: string
}) => {
  if (!coordinates.length) {
    return <div className="w-full bg-gray-100 shadow-xl aspect-square" />
  }

  const encodedPolyline = polyline.fromGeoJSON({
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates,
    },
    properties: {},
  })

  const boundingBox = [
    Math.min(start.lng, end.lng),
    Math.min(start.lat, end.lat),
    Math.max(start.lng, end.lng),
    Math.max(start.lat, end.lat),
  ].join(',')

  const paddingString = padding.join(',')

  const url = `https://api.mapbox.com/styles/v1/iamkarthick/clk4em1h900i201pf3jvuei21/static/pin-s-a+000(${
    start.lng
  },${start.lat}),pin-s-b+000(${end.lng},${
    end.lat
  }),path-2+000(${encodeURIComponent(
    encodedPolyline,
  )})/[${boundingBox}]/400x400?padding=${paddingString}&access_token=${
    process.env.NEXT_PUBLIC_MAPBOX_TOKEN
  }`

  return (
    <Image
      width={500}
      height={500}
      src={url}
      alt="Map"
      className={` ${className}`}
    />
  )
}

export const StaticMapLocation = ({
  position,
  padding = [50, 50, 50],
  className = 'w-full shadow-xl aspect-square',
}: {
  position: { lng: number; lat: number }
  padding?: [number, number, number]
  className?: string
}) => {
  if (!position) {
    return <div className="w-full bg-gray-100 shadow-xl aspect-square" />
  }

  const url = `https://api.mapbox.com/styles/v1/iamkarthick/clk4em1h900i201pf3jvuei21/static/${position.lng},${position.lat},9,0/400x400?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`
  const url2 = `https://api.mapbox.com/styles/v1/iamkarthick/clk4em1h900i201pf3jvuei21/static/pin-s(${position.lng},${position.lat})/${position.lng},${position.lat},9,0/400x400?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`

  return (
    <Image
      width={500}
      height={500}
      src={url2}
      alt="Map"
      className={` ${className}`}
    />
  )
}
