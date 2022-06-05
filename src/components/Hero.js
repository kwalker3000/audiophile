
import React from 'react';
import Image from 'next/image';

import { Button } from './Button';
import { Img } from './Img'

import heroM from '../../public/assets/home/mobile/image-hero.jpg';
import heroT from '../../public/assets/home/tablet/image-hero.jpg';
import heroD from '../../public/assets/home/desktop/image-hero.jpg';


export const Hero = () => {
    return (
        <div id="hero">
          <div className="hero">
            <div className="hero__img img-wrapper_hero">
              <Img
                mobImg={heroM}
                tabImg={heroT}
                desImg={heroD}
                defaultImg={heroD}
                descr="headphones"/>
            </div>
            <div className="hero__content">
              <div className="hero__text text-wrapper_hero">
                <p className="hero__overline overline">
                  NEW PRODUCT
                </p>
                <h1 className="hero__head head_level-1">
                  XX99 Mark II Headphones
                </h1>
                <p className="hero__body paragraph">
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </p>
              </div>
              <div className="hero__btn">
                <Button
                  bk="#D87D4A"
                  bkhvr="#FBAF85"
                  clr="#FFF"
                  clrhvr="#FFF"/>
              </div>
            </div>
          </div>
        </div>
    )
}
