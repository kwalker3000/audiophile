import React, { useState, useEffect } from 'react'

export const CarrierRates = ({ rates, getShippingCost }) => {
  const [shipment, setShipment] = React.useState(
    rates[rates.length - 1].shipping_amount.amount
  )

  rates.sort((a, b) => a.shipping_amount.amount - b.shipping_amount.amount)

  rates[0].checked = 'checked'

  useEffect(() => {
    getShippingCost(shipment)
    if (rates.length == 0) {
      getShippingCost(-1)
    }
  }, [])

  let handleChange = (e) => {
    let { value } = e.target
    setShipment(value)
    getShippingCost(value)
  }

  return (
    <div>
      <fieldset className="form__fieldset fieldset">
        <legend className="form__label label"> Delivery Type: </legend>
        {rates.map((rate, index) => (
          <label
            key={index}
            className="form__label label input"
            style={{
              border: '1px solid #cfcfcf',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <input
              className=""
              onChange={(e) => handleChange(e)}
              defaultChecked={rate.checked}
              style={{
                order: '-1',
                accentColor: '#d87d4a',
                cursor: 'pointer',
              }}
              type="radio"
              value={rate.shipping_amount.amount}
              name="carrier"
              required
            />{' '}
            {rate.service_type}
            <span style={{ fontStyle: 'italic' }}>
              $ {rate.shipping_amount.amount}
            </span>
          </label>
        ))}
      </fieldset>
    </div>
  )
}
