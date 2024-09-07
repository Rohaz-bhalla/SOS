'use client'

import { useState, useEffect } from 'react'
import { Prisma } from '@prisma/client'
import {
  Typography,
  Button,
  List,
  Modal,
  Form,
  Input,
  Space,
  Popconfirm,
} from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function EmergencyContactPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [contacts, setContacts] = useState<
    Prisma.EmergencyContactGetPayload<{ include: { user: true } }>[] | null
  >(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingContact, setEditingContact] =
    useState<Prisma.EmergencyContactGetPayload<{
      include: { user: true }
    }> | null>(null)

  const { data, isLoading, refetch } = Api.user.findUnique.useQuery({
    where: { id: user?.id },
    include: { emergencyContacts: true },
  })

  const { mutateAsync: createContact } =
    Api.emergencyContact.create.useMutation()
  const { mutateAsync: updateContact } =
    Api.emergencyContact.update.useMutation()
  const { mutateAsync: deleteContact } =
    Api.emergencyContact.delete.useMutation()

  useEffect(() => {
    if (data?.emergencyContacts) {
      setContacts(data.emergencyContacts)
    }
  }, [data])

  const handleAddContact = () => {
    setEditingContact(null)
    setIsModalVisible(true)
  }

  const handleEditContact = (
    contact: Prisma.EmergencyContactGetPayload<{ include: { user: true } }>,
  ) => {
    setEditingContact(contact)
    setIsModalVisible(true)
  }

  const handleDeleteContact = async (id: string) => {
    await deleteContact({ where: { id } })
    enqueueSnackbar('Contact deleted successfully', { variant: 'success' })
    refetch()
  }

  const handleModalOk = async (values: any) => {
    if (editingContact) {
      await updateContact({ where: { id: editingContact.id }, data: values })
      enqueueSnackbar('Contact updated successfully', { variant: 'success' })
    } else {
      await createContact({ data: { ...values, userId: user?.id } })
      enqueueSnackbar('Contact added successfully', { variant: 'success' })
    }
    setIsModalVisible(false)
    refetch()
  }

  const handleModalCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Emergency Contacts</Title>
      <Text>
        Manage your list of emergency contacts to ensure the right people are
        notified in case of an emergency.
      </Text>
      <Space style={{ marginTop: 20, marginBottom: 20 }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAddContact}
        >
          Add Contact
        </Button>
      </Space>
      <List
        bordered
        dataSource={contacts}
        renderItem={item => (
          <List.Item
            actions={[
              <Button
                icon={<EditOutlined />}
                onClick={() => handleEditContact(item)}
              >
                Edit
              </Button>,
              <Popconfirm
                title="Are you sure to delete this contact?"
                onConfirm={() => handleDeleteContact(item.id)}
              >
                <Button icon={<DeleteOutlined />} danger>
                  Delete
                </Button>
              </Popconfirm>,
            ]}
          >
            <List.Item.Meta
              title={item.name}
              description={`${item.relation} - ${item.contactNo}`}
            />
          </List.Item>
        )}
      />
      <Modal
        title={editingContact ? 'Edit Contact' : 'Add Contact'}
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        <Form
          initialValues={
            editingContact || {
              name: '',
              relation: '',
              contactNo: '',
              email: '',
            }
          }
          onFinish={handleModalOk}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input the name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="relation"
            label="Relation"
            rules={[{ required: true, message: 'Please input the relation!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="contactNo"
            label="Contact Number"
            rules={[
              { required: true, message: 'Please input the contact number!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
