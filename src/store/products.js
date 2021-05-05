import photoBag from '../assets/images/bags/bag1.png'
import photoShoe from '../assets/images/shoes/shoe1.jpg'
import photoHat from '../assets/images/hats/hat1.jpg'

export function products(store) {
  store.on('@init', () => ({
    products: [
      {
        id: 1,
        name: 'bag1',
        price: 145,
        photo: photoBag,
        type: 'bags',
      },
      {
        id: 2,
        name: 'bag2',
        price: 110,
        photo: photoBag,
        type: 'bags',
      },
      {
        id: 3,
        name: 'bag3',
        price: 200,
        photo: photoBag,
        type: 'bags',
      },
      {
        id: 4,
        name: 'abag4',
        price: 255,
        photo: photoBag,
        type: 'bags',
      },
      {
        id: 5,
        name: 'bag5',
        price: 35,
        photo: photoBag,
        type: 'bags',
      },
      {
        id: 6,
        name: 'zshoe1',
        price: 1458,
        photo: photoShoe,
        type: 'shoes',
      },
      {
        id: 7,
        name: 'shoe2',
        price: 117,
        photo: photoShoe,
        type: 'shoes',
      },
      {
        id: 8,
        name: 'shoe3',
        price: 20,
        photo: photoShoe,
        type: 'shoes',
      },
      {
        id: 9,
        name: 'shoe4',
        price: 259,
        photo: photoShoe,
        type: 'shoes',
      },
      {
        id: 10,
        name: 'shoe5',
        price: 467,
        photo: photoShoe,
        type: 'shoes',
      },
      {
        id: 11,
        name: 'shoe6',
        price: 580,
        photo: photoShoe,
        type: 'shoes',
      },
      {
        id: 12,
        name: 'shoe7',
        price: 1000,
        photo: photoShoe,
        type: 'shoes',
      },
      {
        id: 13,
        name: 'shoe8',
        price: 203,
        photo: photoShoe,
        type: 'shoes',
      },
      {
        id: 14,
        name: 'shoe9',
        price: 29,
        photo: photoShoe,
        type: 'shoes',
      },
      {
        id: 15,
        name: 'shoe10',
        price: 33,
        photo: photoShoe,
        type: 'shoes',
      },
      {
        id: 16,
        name: 'shoe11',
        price: 333,
        photo: photoShoe,
        type: 'shoes',
      },
      {
        id: 17,
        name: 'shoe12',
        price: 115,
        photo: photoShoe,
        type: 'shoes',
      },
      {
        id: 18,
        name: 'shoe13',
        price: 212,
        photo: photoShoe,
        type: 'shoes',
      },
      {
        id: 19,
        name: 'shoe14',
        price: 258,
        photo: photoShoe,
        type: 'shoes',
      },
      {
        id: 20,
        name: 'shoe15',
        price: 135,
        photo: photoShoe,
        type: 'shoes',
      },
      {
        id: 21,
        name: 'hat1',
        price: 135,
        photo: photoHat,
        type: 'hats',
      },
      {
        id: 22,
        name: 'hat2',
        price: 111,
        photo: photoHat,
        type: 'hats',
      },
      {
        id: 23,
        name: 'hat3',
        price: 97,
        photo: photoHat,
        type: 'hats',
      },
      {
        id: 24,
        name: 'hat4',
        price: 312,
        photo: photoHat,
        type: 'hats',
      },
      {
        id: 25,
        name: 'hat5',
        price: 178,
        photo: photoHat,
        type: 'hats',
      },
      {
        id: 26,
        name: 'hat6',
        price: 188,
        photo: photoHat,
        type: 'hats',
      },
      {
        id: 27,
        name: 'hat7',
        price: 44,
        photo: photoHat,
        type: 'hats',
      },
    ],
  }))

  store.on('products/sort', ({ products }, sortType) => {
    let productsArr = [...products]

    switch (sortType) {
      case 'sortName':
        if (
          localStorage.getItem('sortby_name') === 'null' ||
          localStorage.getItem('sortby_name') === 'desc'
        ) {
          localStorage.setItem('sortby_name', 'asc')
          productsArr.sort((a, b) => a.name.localeCompare(b.name))
        } else if (localStorage.getItem('sortby_name') === 'asc') {
          localStorage.setItem('sortby_name', 'desc')
          productsArr.sort((a, b) => b.name.localeCompare(a.name))
        }

        break

      case 'sortPrice':
        if (
          localStorage.getItem('sortby_price') === 'null' ||
          localStorage.getItem('sortby_price') === 'desc'
        ) {
          localStorage.setItem('sortby_price', 'asc')
          productsArr.sort((a, b) => a.price - b.price)
        } else if (localStorage.getItem('sortby_price') === 'asc') {
          localStorage.setItem('sortby_price', 'desc')
          productsArr.sort((a, b) => b.price - a.price)
        }
        break

      default:
        break
    }

    return { products: productsArr }
  })
}

export default products
