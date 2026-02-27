import React from 'react'
import type { FC } from 'react'
import type { ThemeProps } from '../Icon/icon'
export interface ProgressProps {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
  theme?: ThemeProps;
}

const Progress: FC<ProgressProps> = (props) => {
  const {
    percent,
    strokeHeight = 15,
    showText = true,
    styles,
    theme = 'primary',
  } = props
  return (
    <div className="pq-progress-bar" style={styles}>
      <div className="pq-progress-bar-outer" style={{ height: `${strokeHeight}px`}}>
        <div 
          className={`pq-progress-bar-inner color-${theme}`}
          style={{width: `${percent}%`}}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  )
}

export default Progress
