import ProductCard from '../ProductCard';
import bags_photo from '../../../assets/images/bags.png';
import shoes_photo from '../../../assets/images/shoes.jpg';
import hats_photo from '../../../assets/images/hats.jpg';

import { useState } from 'react';

import './styles.scss';

const ProductsList = ({type}) => {

    const cardsData = [
        {      id: 1,
             name: 'Item',
            price: '100$'
        },
        {      id: 2,
             name: 'Item2',
            price: '100$'
        },
        {      id: 3,
             name: 'Item3',
            price: '100$'
        },
        {      id: 4,
             name: 'Item4',
            price: '100$'
        },
        {      id: 5,
             name: 'Item5',
            price: '100$'
        },
        {      id: 6,
             name: 'Item6',
            price: '100$'
        },
        {      id: 7,
             name: 'Item7',
            price: '100$'
        },
        {      id: 8,
             name: 'Item8',
            price: '100$'
        },
        {      id: 9,
             name: 'Item9',
            price: '100$'
        },
        {      id: 10,
             name: 'Item10',
            price: '100$'
        },

        {      id: 11,
            name: 'Item',
           price: '100$'
       },
       {      id: 12,
            name: 'Item2',
           price: '100$'
       },
       {      id: 13,
            name: 'Item3',
           price: '100$'
       },
       {      id: 14,
            name: 'Item4',
           price: '100$'
       },
       {      id: 15,
            name: 'Item5',
           price: '100$'
       },
       {      id: 16,
            name: 'Item6',
           price: '100$'
       },
       {      id: 17,
            name: 'Item7',
           price: '100$'
       },
       {      id: 18,
            name: 'Item8',
           price: '100$'
       },
       {      id: 19,
            name: 'Item9',
           price: '100$'
       },
       {      id: 20,
            name: 'Item10',
           price: '100$'
       },
       {      id: 21,
        name: 'Item5',
       price: '100$'
   },
   {      id: 22,
        name: 'Item6',
       price: '100$'
   },
   {      id: 23,
        name: 'Item7',
       price: '100$'
   },
   {      id: 24,
        name: 'Item8',
       price: '100$'
   },
   {      id: 25,
        name: 'Item9',
       price: '100$'
   },
   {      id: 26,
        name: 'Item10',
       price: '100$'
   }
    ];

    let [cardsCounter, setCardsCounter] = useState(10);

    const cardStartView = cardsData.slice(0, cardsCounter);
    // const cardAllView = cardsData;

    let photo = '';
    switch (type) {
        case 'Bags':
            photo = bags_photo;
            break;
        
        case 'Shoes':
            photo = shoes_photo;
            break;
    
        case 'Hats':
            photo = hats_photo;
                break;
    
        default:
            break;
    };

    const cardsTmpl = cardStartView.map( (card) => {
        const {id, name, price} = card;
        return (
            <ProductCard
                key={id}
                photo={photo}
                name={name}
                price={price}
            />
        )
    });

    function show() {
        setCardsCounter(cardsCounter + 10);
    }

    return (
        <div className="products-list wrapper">
            <h1>{type}</h1>

            <div className="products-list--grid">
                {cardsTmpl}
            </div>

            { cardsCounter < cardsData.length &&
                <button className="products-list__btn-more" onClick={show}>show more</button>
            }
                    
        </div>
    );
};

export default ProductsList;