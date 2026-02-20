import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Input } from './input'

const meta: Meta<typeof Input> = {
  title: '第九章：Input',
  id: 'Input',
  component: Input,
  tags: ['autodocs'],
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ width: '350px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof Input>

const Template = (args: React.ComponentProps<typeof Input>) => <Input {...args} />

export const Default: Story = {
  render: Template,
  args: {
    placeholder: 'default Input',
  },
  name: '默认的 Input',
}

export const Disabled: Story = {
  render: Template,
  args: {
    placeholder: 'disabled input',
    disabled: true,
  },
  name: '被禁用的 Input',
}

export const WithIcon: Story = {
  render: Template,
  args: {
    placeholder: 'input with icon',
    icon: faSearch,
  },
  name: '带图标的 Input',
}

export const Sizes: Story = {
  render: () => (
    <>
      <Input defaultValue="large size" size="lg" />
      <Input placeholder="small size" size="sm" />
    </>
  ),
  name: '大小不同的 Input',
}

export const PrependAppend: Story = {
  render: () => (
    <>
      <Input defaultValue="prepend text" prepend="https://" />
      <Input defaultValue="google" append=".com" />
    </>
  ),
  name: '带前后缀的 Input',
}
