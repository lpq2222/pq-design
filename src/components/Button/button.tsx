import React from "react";
import classNames from "classnames";
import { ButtonSize, ButtonType } from './types';

interface BaseButtonProps {
    className?: string
    /**设置 Button 的禁用 */
    disabled?: boolean
    /**设置 Button 的尺寸 */
    size?: ButtonSize
    /**设置 Button 的类型 */
    btnType?: ButtonType
    children: React.ReactNode
    href?: string
}
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
/**
 * 页面中最常用的按钮元素，适合于完成特定的交互，支持 HTML button 和 a 链接的所有属性
 * ### 引用方法
 * ```tsx
 * import { Button, ButtonSize, ButtonType } from 'pq-component-library'
 * ```
 * @param props - Button 的 props，包含 children、size、btnType、disabled、href 等
 * @returns 渲染的 &lt;button&gt; 或 &lt;a&gt; 元素
 */
export const Button: React.FC<ButtonProps> = (props) => {
    const {
        btnType = ButtonType.Default,
        className,
        disabled = false,
        size,
        children,
        href,
        ...restProps
    } = props
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled
    })
    if (btnType === ButtonType.Link && href) {
        return (
            <a
                className={classes}
                href={href}
                {...restProps}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >
                {children}
            </button>
        )
    }
}

export default Button
export { ButtonType, ButtonSize }