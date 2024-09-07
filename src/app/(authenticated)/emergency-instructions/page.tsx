'use client'

import { Typography, Spin, Row, Col, Card } from 'antd'
import { SafetyOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function EmergencyInstructionsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  // Fetch emergency instructions
  const { data: instructions, isLoading: instructionsLoading } =
    Api.emergencyInstructions.findMany.useQuery({})
  const { data: guides, isLoading: guidesLoading } =
    Api.emergencyGuides.findMany.useQuery({})

  if (instructionsLoading || guidesLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2} style={{ textAlign: 'center' }}>
        Emergency Instructions
      </Title>
      <Paragraph style={{ textAlign: 'center' }}>
        As a user, you can view emergency instructions and access step-by-step
        guides for different emergency scenarios, so that you are prepared to
        act quickly.
      </Paragraph>
      <Row gutter={[16, 16]} justify="center">
        {instructions?.map(instruction => (
          <Col xs={24} sm={12} md={8} lg={6} key={instruction.id}>
            <Card
              title={
                <>
                  <SafetyOutlined /> {instruction.title}
                </>
              }
              bordered={false}
              hoverable
            >
              <Text>{instruction.description}</Text>
            </Card>
          </Col>
        ))}
      </Row>
      <Title level={3} style={{ textAlign: 'center', marginTop: '40px' }}>
        Step-by-Step Guides
      </Title>
      <Row gutter={[16, 16]} justify="center">
        {guides?.map(guide => (
          <Col xs={24} sm={12} md={8} lg={6} key={guide.id}>
            <Card
              title={
                <>
                  <SafetyOutlined /> {guide.title}
                </>
              }
              bordered={false}
              hoverable
            >
              <Text>{guide.description}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
