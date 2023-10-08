import { useEffect, useState } from 'react'

export type LocationInfo = { placeName: string; latLng: [number, number] }

import { catchError, debounceTime, EMPTY, Subject, tap } from 'rxjs'

export const useDebounce = (delay: number = 1000) => {
  const [debouncedSet$] = useState(() => new Subject<() => void>())
  useEffect(() => {
    const subscription = debouncedSet$
      .pipe(
        debounceTime(delay),
        tap((func) => func()),
        catchError(() => EMPTY),
      )
      .subscribe()
    return () => subscription.unsubscribe()
  }, [delay, debouncedSet$])

  return debouncedSet$
}

export const useDebouncedValue = <T>(value: T, delay: number = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  const debouncedSet$ = useDebounce(delay)

  useEffect(() => {
    debouncedSet$.next(() => setDebouncedValue(value))
  }, [debouncedSet$, value])

  return debouncedValue
}

export const TAKE_COUNT = 12
export const useTakeSkip = (initialSkip = 0, initialTake = TAKE_COUNT) => {
  const [skip, setSkip] = useState(() => initialSkip)
  const [take, setTake] = useState(() => initialTake)

  return { take, skip, setTake, setSkip }
}

export const useSearchLocation = () => {
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false)
  const [locationInfo, setLocationInfo] = useState<LocationInfo[]>(() => [])

  const debouncedSearchText = useDebouncedValue(searchText, 300)

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${debouncedSearchText}.json?fuzzyMatch=true&access_token=pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ`,
    )
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.features?.map((x: any) => ({
          placeName: x.place_name,
          latLng: [x.center[1], x.center[0]],
        }))

        setLocationInfo(filtered)
      })
      .finally(() => setLoading(false))
  }, [debouncedSearchText, setLocationInfo])

  return { loading, setLoading, searchText, setSearchText, locationInfo }
}
