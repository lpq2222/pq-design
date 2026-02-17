import React from 'react';
import type { ReactElement, InputHTMLAttributes } from 'react';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';
import Icon from '../Icon/icon';

type InputSize = 'lg' | 'sm';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'>{
    /**是否禁用 Input */
    disabled?: boolean;
    /**设置 Input 的尺寸，支持 lg 或者是 sm */
    size?: InputSize;
    /**添加图标，在右侧悬浮添加一个图标，用于提示 */
    icon?: IconProp;
    /**添加前缀 用于配置一些固定组合 */
    prepend?: string | ReactElement;
    /**添加后缀 用于配置一些固定组合 */
    append?: string | ReactElement;
}

/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 * 
 * ~~~js
 * //引用方式
 * import { Input } from 'pq-component-library'
 * ~~~
 * 支持 HTMLInput 的所有基本属性
 */
export const Input: React.FC<InputProps> = (props) => {
    //取出各种属性
    const {
        disabled,
        size,
        icon,
        prepend,
        append,
        style,
        ...restProps
    } = props
    //根据属性计算不同的className
    const classes = classNames('pq-input-wrapper',{
        [`input-size-${size}`]: size,
        'is-disabled': disabled,
        'input-group': prepend || append,
        'input-group-append': !!append,
        'input-group-prepend': !!prepend,
    })
    return (
        //根据属性判断是否要添加特定的节点
        <div className={classes} style={style}>
            {prepend && <div className="pq-input-group-prepend">{prepend}</div>}
            {icon && <div className="icon-wrapper"><Icon icon={icon} title="icon" /></div>}
            <input className="pq-input-inner" disabled={disabled} {...restProps} />
            {append && <div className="pq-input-group-append">{append}</div>}
        </div>
    )

}