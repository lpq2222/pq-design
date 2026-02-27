import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';
import { ButtonSize, ButtonType } from './types';

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        children: {
            description: '按钮内容',
            control: 'text',
            table: {
                type: { summary: 'ReactNode' },
                defaultValue: { summary: '-' },
            },
        },
        className: {
            description: '自定义类名',
            control: 'text',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '-' },
            },
        },
        disabled: {
            description: '设置 Button 的禁用',
            control: 'boolean',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        size: {
            description: '设置 Button 的尺寸',
            control: 'radio',
            options: Object.values(ButtonSize),
            table: {
                type: { summary: '"lg" | "sm"' },
                defaultValue: { summary: '-' },
            },
        },
        btnType: {
            description: '设置 Button 的类型',
            control: 'radio',
            options: Object.values(ButtonType),
            table: {
                type: { summary: '"link" | "primary" | "default" | "danger"' },
                defaultValue: { summary: '"default"' },
            },
        },
        href: {
            description: '链接地址（btnType 为 Link 时有效）',
            control: 'text',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '-' },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Template 是渲染函数，要 return JSX；Storybook 10 用 render + args，不用 .bind({})
const Template = (args: React.ComponentProps<typeof Button>) => <Button {...args} />;

export const Default: Story = {
    render: Template,
    args: {
        children: 'Default Button',
    },
    name: 'Default',
};

export const Large: Story = {
    render: Template,
    args: {
        size: ButtonSize.Large,
        children: 'Large Button',
    },
    name: 'Large',
};

export const Small: Story = {
    render: Template,
    args: {
        size: ButtonSize.Small,
        children: 'Small Button',
    },
    name: 'Small',
};

export const Primary: Story = {
    render: Template,
    args: {
        btnType: ButtonType.Primary,
        children: 'Primary Button',
    },
    name: 'Primary',
};

export const Danger: Story = {
    render: Template,
    args: {
        btnType: ButtonType.Danger,
        children: 'Danger Button',
    },
    name: 'Danger',
};

export const Link: Story = {
    render: Template,
    args: {
        btnType: ButtonType.Link,
        children: 'Link Button',
        href: 'https://www.google.com',
    },
    name: 'Link',
};