import React from 'react'

import classNames from 'classnames'

interface LogoProps extends React.SVGAttributes<SVGElement> {
  children?: never
  // color?: string
  className?: string
}

export const RunIcon = (props: LogoProps) => (
  <svg
    width="31"
    height="25"
    viewBox="0 0 31 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M25.1589 9.78034C27.4705 10.8566 27.4705 14.1434 25.1589 15.2197L12.0163 21.3389C10.0276 22.2649 7.75 20.813 7.75 18.6193L7.75 6.38074C7.75 4.18702 10.0276 2.73513 12.0163 3.66109L25.1589 9.78034Z"
      className={classNames('fill-green-700', props.className)}
    />
  </svg>
)
