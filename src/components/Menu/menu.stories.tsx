import type { Meta, StoryObj } from '@storybook/react';
import Menu from './menu';
import { MenuItem } from './menuItem';
import { SubMenu } from './subMenu';

const meta: Meta<typeof Menu> = {
    title: 'Menu',
    id: 'Menu',
    component: Menu,
    subcomponents: {
        MenuItem,
        SubMenu,
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
    args: {
        defaultIndex: '0',
        mode: 'horizontal',
    },
    render: (args) => (
        <Menu {...args}>
            <MenuItem>cool link</MenuItem>
            <MenuItem disabled>cool link2</MenuItem>
            <SubMenu title="dropdown">
                <MenuItem>dropdown 1</MenuItem>
                <MenuItem>dropdown 2</MenuItem>
            </SubMenu>
            <MenuItem>cool link3</MenuItem>
        </Menu>
    ),
    name: '默认菜单',
};

export const Vertical: Story = {
    args: {
        defaultIndex: '0',
        mode: 'vertical',
        defaultOpenSubMenus: ['2'],
    },
    render: (args) => (
        <Menu {...args}>
            <MenuItem>cool link</MenuItem>
            <MenuItem disabled>cool link2</MenuItem>
            <SubMenu title="dropdown">
                <MenuItem>dropdown 1</MenuItem>
                <MenuItem>dropdown 2</MenuItem>
            </SubMenu>
            <MenuItem>cool link3</MenuItem>
        </Menu>
    ),
    name: '竖向菜单',
};
