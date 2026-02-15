import React, { useState, createContext } from 'react'
import classNames from 'classnames'
import {type MenuItemProps } from './menuItem'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: string) => void

export interface MenuProps {
    defaultIndex?: string
    className?: string
    mode?: MenuMode
    style?: React.CSSProperties
    onSelect?: SelectCallback
    children?: React.ReactNode
    defaultOpenSubMenus?: string[]
}

interface IMenuContext {
    index: string
    onSelect?: SelectCallback
    mode?: MenuMode
    defaultOpenSubMenus?: string[]
}

export const MenuContext = createContext<IMenuContext>({ index: '0', onSelect: undefined, defaultOpenSubMenus: [] })
export const Menu: React.FC<MenuProps> = (props) => {
    const { className, mode = 'horizontal', style, children, defaultIndex = '0', onSelect, defaultOpenSubMenus = []} = props
    const [currentActive, setActive] = useState(defaultIndex)
    const classees = classNames('pq-menu', className, {
        'pq-menu-vertical': mode === 'vertical',
        'pq-menu-horizontal': mode !== 'vertical'
    })
    const handleClick = (index: string) => {
        setActive(index)
        if (onSelect) {
            onSelect(index)
        }
    }
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubMenus: defaultOpenSubMenus
    }
    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) return null
            const childElement = child as React.ReactElement
            const typeWithDisplayName = childElement.type as { displayName?: string } | undefined
            const displayName = typeWithDisplayName?.displayName
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childElement, {
                    index: index.toString()
                } as Partial<MenuItemProps>)
            } else {
                console.error("Warning: Menu has a child which is not a MenuItem or SubMenu component")
                return null
            }
        })
    }
    return (
        <ul className={classees} style={style} data-testid="test-menu">
            <MenuContext.Provider value={passedContext}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}

export default Menu