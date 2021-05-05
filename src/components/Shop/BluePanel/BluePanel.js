import './styles.scss'
import { useStoreon } from 'storeon/react'
import { useState } from 'react'

const BluePanel = () => {
  const { dispatch } = useStoreon('products')
  let [sortActive, setAct] = useState(null)

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
          <input type='number' placeholder='Цена от...' />
          <input type='number' placeholder='Цена до...' />
        </div>
      </div>
    </div>
  )
}

export default BluePanel
