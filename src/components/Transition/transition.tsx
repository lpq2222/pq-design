import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { type CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-right' | 'zoom-in-bottom'

type TransitionProps = CSSTransitionProps<HTMLElement> & {
    animation?: AnimationName
    wrapper?: boolean
    children?: React.ReactNode
}

const Transition: React.FC<TransitionProps> = (props) => {
    const nodeRef = React.useRef<HTMLDivElement>(null)
    const { children, classNames, animation, wrapper, unmountOnExit = true, appear = true, ...restProps } = props
    return (
        <CSSTransition
            nodeRef={nodeRef}
            classNames={classNames ? classNames : animation}
            unmountOnExit={unmountOnExit}
            appear={appear}
            {...restProps}
        >
            {wrapper ? (
                <div ref={nodeRef}>{children}</div>
            ) : (
                <div ref={nodeRef} style={{ display: 'contents' }}>
                    {children}
                </div>
            )}
        </CSSTransition>
    )
}

export default Transition