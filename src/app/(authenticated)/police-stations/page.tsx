'use client'

import { Typography, Button, List, Card, Spin } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import MapboxGeocoder, {
  GeocodeService,
} from '@mapbox/mapbox-sdk/services/geocoding'
import mapboxgl, { LngLatLike, Map } from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useEffect, useRef, useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function PoliceStationsManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const mapContainer = useRef(null)
  const [geocodingClient, setGeocodingClient] = useState<GeocodeService>()
  const [map, setMap] = useState<Map>()

  const { data: secrets } = Api.configuration.getPublic.useQuery()
  const {
    data: policeStations,
    isLoading: isLoadingStations,
    refetch,
  } = Api.policeStation.findMany.useQuery({ include: { officers: true } })
  const { mutateAsync: addPoliceStation } = Api.user.update.useMutation()

  useEffect(() => {
    const accessToken = secrets?.['PUBLIC_MAPBOX_ACCESS_TOKEN']
    if (!accessToken) return

    mapboxgl.accessToken = accessToken
    const geocodingClient = MapboxGeocoder(mapboxgl)
    setGeocodingClient(geocodingClient)

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.006, 40.7128],
      zoom: 12,
    })
    setMap(map)

    return () => map.remove()
  }, [secrets])

  const flyTo = (name: string, latitude: number, longitude: number) => {
    const coordinates: LngLatLike = [longitude, latitude]
    new mapboxgl.Marker()
      .setLngLat(coordinates)
      .setPopup(
        new mapboxgl.Popup().setHTML(`<h3 style="color: black;">${name}</h3>`),
      )
      .addTo(map)

    map.flyTo({ center: coordinates, zoom: 15 })
  }

  const handleAddPoliceStation = async (stationId: string) => {
    try {
      await addPoliceStation({
        where: { id: user.id },
        data: { sosAlerts: { connect: { id: stationId } } },
      })
      enqueueSnackbar('Police station added to your list', {
        variant: 'success',
      })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to add police station', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2} style={{ textAlign: 'center' }}>
        Nearby Police Stations
      </Title>
      <Text
        type="secondary"
        style={{ display: 'block', textAlign: 'center', marginBottom: '20px' }}
      >
        View nearby police stations on the map and add them to your list for
        quick access in case of an emergency.
      </Text>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        <div
          ref={mapContainer}
          style={{ height: '500px', width: '100%', maxWidth: '800px' }}
        />
      </div>
      {isLoadingStations ? (
        <Spin size="large" style={{ display: 'block', margin: '0 auto' }} />
      ) : (
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={policeStations}
          renderItem={station => (
            <List.Item>
              <Card
                title={station.name}
                extra={
                  <Button
                    icon={<PlusOutlined />}
                    onClick={() => handleAddPoliceStation(station.id)}
                  >
                    Add
                  </Button>
                }
                onClick={() =>
                  flyTo(station.name, station.latitude, station.longitude)
                }
              >
                <p>Latitude: {station.latitude.toString()}</p>
                <p>Longitude: {station.longitude.toString()}</p>
                <p>Officers:</p>
                <ul>
                  {station.officers?.map(officer => (
                    <li key={officer.id}>
                      {officer.name} - {officer.rank}
                    </li>
                  ))}
                </ul>
              </Card>
            </List.Item>
          )}
        />
      )}
    </PageLayout>
  )
}
