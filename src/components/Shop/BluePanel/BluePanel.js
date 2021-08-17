import './styles.scss'
import { useStoreon } from 'storeon/react'
import { useState } from 'react'

const BluePanel = () => {
  const { dispatch } = useStoreon('products')
  let [sortActive, setAct] = useState(null)
  let [minPrice, setMinPrice] = useState(0)
  let [maxPrice, setMaxPrice] = useState(0)

  function sortByName(e) {
    setAct('name')
    dispatch('products/sort', 'sortName')
    localStorage.setItem('sortby_price', null)
  }

  function sortByPrice(e) {
    setAct('price')
    dispatch('products/sort', 'sortPrice')
    localStorage.setItem('sortby_name', null)
  }

  function filter(e) {
    // console.log(e.target)
    // console.log('minPrice = ', minPrice)
    // console.log('maxPrice = ', maxPrice)

    let rangeObj = {
      min: Number(minPrice),
      max: Number(maxPrice),
    }

    dispatch('products/filter', rangeObj)
  }

  return (
    <div className='sort-filter wrapper'>
      <div className='sorting'>
        Сортировать по:
        <span
          className={`${sortActive === 'name' ? ' act' : ''}`}
          onClick={sortByName}
        >
          названию
        </span>
        <span
          className={`${sortActive === 'price' ? ' act' : ''}`}
          onClick={sortByPrice}
        >
          цене
        </span>
      </div>
      <div className='filter'>
        <div className='price'>
          <input
            type='number'
            placeholder='Цена от...'
            onChange={(e) => {
              setMinPrice(e.target.value)
            }}
          />
          <input
            type='number'
            placeholder='Цена до...'
            onChange={(e) => {
              setMaxPrice(e.target.value)
            }}
          />
          <button onClick={filter} className='filter-btn'>
            Filter
          </button>
        </div>
      </div>
    </div>
  )
}

export default BluePanel
