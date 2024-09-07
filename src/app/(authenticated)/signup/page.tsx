'use client'

import { useState } from 'react'
import {
  Form,
  Input,
  Button,
  Upload,
  message,
  Typography,
  Row,
  Col,
} from 'antd'
import { UploadOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function SignupPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const { mutateAsync: createUser } = Api.user.create.useMutation()
  const { mutateAsync: upload } = useUploadPublic()

  const [form] = Form.useForm()
  const [profilePhotoUrl, setProfilePhotoUrl] = useState<string | null>(null)

  const handleFinish = async (values: any) => {
    try {
      const userCreated = await createUser({
        data: {
          name: values.name,
          email: values.email,
          mobileNumber: values.mobileNumber,
          emergencyContactNumber: values.emergencyContactNumber,
          aadhaarCardNumber: values.aadhaarCardNumber,
          pictureUrl: profilePhotoUrl,
        },
      })
      enqueueSnackbar('User registered successfully!', { variant: 'success' })
      router.push('/home')
    } catch (error) {
      enqueueSnackbar('Failed to register user', { variant: 'error' })
    }
  }

  const handleUpload = async (file: File) => {
    try {
      const { url } = await upload({ file })
      setProfilePhotoUrl(url)
      message.success('Profile photo uploaded successfully')
    } catch (error) {
      message.error('Failed to upload profile photo')
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col span={24}>
          <Title level={2}>Register for the App</Title>
          <Text>Please fill out the form below to register for the app.</Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <Form form={form} layout="vertical" onFinish={handleFinish}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="mobileNumber"
              label="Mobile Number"
              rules={[
                { required: true, message: 'Please enter your mobile number' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Please enter your email' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="emergencyContactNumber"
              label="Emergency Contact Number"
              rules={[
                {
                  required: true,
                  message: 'Please enter your emergency contact number',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="aadhaarCardNumber"
              label="Aadhaar Card Number"
              rules={[
                {
                  required: true,
                  message: 'Please enter your Aadhaar card number',
                },
                { len: 12, message: 'Aadhaar card number must be 12 digits' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="profilePhoto"
              label="Profile Photo"
              valuePropName="fileList"
              getValueFromEvent={e => (Array.isArray(e) ? e : e && e.fileList)}
            >
              <Upload
                name="profilePhoto"
                listType="picture"
                customRequest={({ file, onSuccess }) => {
                  handleUpload(file as File)
                  onSuccess && onSuccess('ok')
                }}
              >
                <Button icon={<UploadOutlined />}>Upload Profile Photo</Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
