import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import arrow from '../../public/assets/shared/desktop/icon-arrow-right.svg'

export const Category = ({className, src, name}) => {
  const [isActive, setIsActive] = React.useState(false)
  return (
    <Link href={`/${name}`}>
      <a
        className={`link ${className}`}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <div className="category__content">
          <div className="img-wrapper_category">
              <Image
		  src={src}
		  alt={name}
		  width="100%"
		  height="100%"
		  layout='responsive'
		  objectFit='cover'/>
          </div>
          <p className="category__title title">{name}</p>
          <div className="wrapper_p">
            <p className="category__sub-title sub-title op">Shop</p>
            <div
              className={`${isActive ? 'arrow_active' : ''} img-wrapper_arrow`}
            >
              <Image src={arrow} alt="" />
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}