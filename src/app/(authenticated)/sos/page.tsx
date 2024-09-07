'use client'

import { Typography, List, Card, Spin } from 'antd'
import { AlertOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function SOSAlertHistoryPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: sosAlerts,
    isLoading,
    refetch,
  } = Api.sosAlert.findMany.useQuery({
    where: { userId: user?.id },
    include: { location: true, policeStation: true },
  })

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2} style={{ textAlign: 'center' }}>
        SOS Alert History
      </Title>
      <Text
        type="secondary"
        style={{ display: 'block', textAlign: 'center', marginBottom: '20px' }}
      >
        Here you can view the history of your SOS alerts and see the details of
        each alert.
      </Text>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={sosAlerts}
        renderItem={alert => (
          <List.Item>
            <Card
              title={`Alert at ${dayjs(alert.alertTime).format('YYYY-MM-DD HH:mm:ss')}`}
              bordered={false}
            >
              <Text>
                <AlertOutlined /> Alert Time:{' '}
                {dayjs(alert.alertTime).format('YYYY-MM-DD HH:mm:ss')}
              </Text>
              <br />
              <Text>
                <AlertOutlined /> Location:{' '}
                {alert.location?.latitude.toString()},{' '}
                {alert.location?.longitude.toString()}
              </Text>
              <br />
              <Text>
                <AlertOutlined /> Police Station: {alert.policeStation?.name}
              </Text>
            </Card>
          </List.Item>
        )}
      />
    </PageLayout>
  )
}
