import React from 'react'

import classNames from 'classnames'

interface LogoProps extends React.SVGAttributes<SVGElement> {
  children?: never
  className?: string
}

export const Logo = (props: LogoProps) => (
  <svg
    width="41"
    height="36"
    viewBox="0 0 41 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.88551 36L15.8621 0H29.3621C32.1277 0 34.366 0.515625 36.0769 1.54688C37.7879 2.56641 38.9773 3.97852 39.6453 5.7832C40.3132 7.57617 40.4539 9.62109 40.0672 11.918C39.6922 14.2266 38.866 16.2773 37.5886 18.0703C36.323 19.8633 34.6531 21.2754 32.5789 22.3066C30.5047 23.3262 28.0789 23.8359 25.3015 23.8359H16.3543L17.2507 18.4746H25.3191C26.9363 18.4746 28.3074 18.1934 29.4324 17.6309C30.5691 17.0684 31.4656 16.2949 32.1218 15.3105C32.7781 14.3262 33.2117 13.1953 33.4226 11.918C33.6218 10.6406 33.5574 9.51563 33.2293 8.54297C32.9011 7.57031 32.2625 6.81445 31.3132 6.27539C30.3757 5.72461 29.0925 5.44922 27.4636 5.44922H21.4871L16.407 36H9.88551Z"
      className={classNames('fill-white', props.className)}
    />
    <path
      d="M0.899683 18.4658H19.3359L18.4363 23.8315H0L0.899683 18.4658Z"
      className={classNames('fill-white', props.className)}
    />
  </svg>
)
