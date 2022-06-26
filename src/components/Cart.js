import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useAppContext } from '../context/appContext'
import { Img } from './Img'
import { Counter } from './Counter'
import { UpdateCart } from './UpdateCart'
import { LinkBtn } from './LinkBtn'

import icon from '../../public/assets/shared/desktop/icon-cart.svg'

export const Cart = ({ toggleCart, isCartOpen, renderCart }) => {
  let { cart, updateCart, emptyCart } = useAppContext()

  const [isUpdateCart, setIsUpdateCart] = useState(false)
  const [orderSize, setOrderSize] = useState([])

  let isEmpty = cart.length == 0

  useEffect(() => {
    let arr = new Array(cart.length).fill(0)
    setOrderSize(arr)
  }, [cart, isUpdateCart])

  let getTotalCost = () => {
    let total = 0
    cart.forEach((item) => (total += item.price * item.count))
    return total.toLocaleString('en-US')
  }

  let handleDropDown = () => {
    toggleCart()
    setIsUpdateCart(false)
  }

  let adjustedSize = (adjustment, index) => {
    setIsUpdateCart(true)
    let copy = [...orderSize]
    copy[index] += adjustment
    setOrderSize((pre) => copy)
  }

  let updateOrderSize = (action, index) => {
    switch (action) {
      case 'increase': {
        adjustedSize(1, index)
        break
      }
      case 'decrease': {
        adjustedSize(-1, index)
        break
      }
    }
  }

  let resetCart = () => {
    handleDropDown()
    emptyCart()
  }

  let cartItems = cart.map((item, index) => (
    <div className="dropdown__item item-wrapper" key={item.id}>
      <div className="misc-wrapper">
        <div className="dropdown__img img-wrapper">
          <Img defaultImg={item.img} descr={item.name} remote={true} />
        </div>
        <div className="dropdown__text text-wrapper">
          <h3 className="dropdown__head head_level-3">
            {item.name.split(' ').slice(0, -1).join(' ')}
          </h3>
          <p className="dropdown__body paragraph">$ {item.price}</p>
        </div>
      </div>
      <div className="dropdown__counter counter-wrapper">
        <Counter
          stock={item.limit}
          orderSize={item.count}
          className={{ counter: 'counter_cart', count: 'count_cart' }}
          updateOrderSize={updateOrderSize}
          index={index}
          adjustment={orderSize[index]}
        />
      </div>
    </div>
  ))

  return (
    <div id="cart">
      <div className="cart">
        <button className="image-wrapper_cart" onClick={() => handleDropDown()}>
          {!isEmpty && <div className="cart-status"></div>}
          <Image src={icon} alt="cart icon" />
        </button>
      </div>

      {isCartOpen && (
        <div className="cart__dropdown dropdown">
          <div className="cart__title title">
            <h2 className="cart__head head_level-2">cart</h2>
            <button
              className="btn btn-text btn_cart btn_reset"
              onClick={() => resetCart()}
            >
              Remove all
            </button>
          </div>
          <div>{cartItems}</div>
          <div className="">
            {isUpdateCart ? (
              <UpdateCart
                orderSize={orderSize}
                updateCart={updateCart}
                handleDropDown={handleDropDown}
                renderCart={renderCart}
              />
            ) : (
              <div className="dropdown__tail tail-wrapper">
                <p className="paragraph">Total</p>
                <p className="head_level-3">$ {getTotalCost()}</p>
                <LinkBtn path="/checkout" text="checkout" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
