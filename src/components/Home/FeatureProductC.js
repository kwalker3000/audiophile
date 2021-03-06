import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Img } from '../Img'
import { LinkBtn } from '../LinkBtn'

import yx1M from '../../../public/assets/home/mobile/image-earphones-yx1.jpg'
import yx1T from '../../../public/assets/home/tablet/image-earphones-yx1.jpg'
import yx1D from '../../../public/assets/home/desktop/image-earphones-yx1.jpg'

export const FeatureProductC = () => {
  return (
    <div id="ft-prod-c">
      <div className="ft-prod-c">
        <div className="ft-prod-c__img img-wrapper_prod-c">
          <Img
            mobImg={yx1M}
            tabImg={yx1T}
            desImg={yx1D}
            defaultImg={yx1T}
            descr="black and white photo of the yx1 earphones placed in a stylish casing"
          />
        </div>
        <div className="ft-prod-c__content content-wrapper">
          <h2 className="ft-prod-c__head head_level-2">yx1 earphones</h2>
          <div className="ft-prod-c__btn">
            <LinkBtn path="/earphones/yx1-earphones" theme="inverse" />
          </div>
        </div>
      </div>
    </div>
  )
}
