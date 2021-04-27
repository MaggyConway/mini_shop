import photo from '../assets/images/shoes/shoe1.jpg';

export function shoes (store) {
    store.on('@init', () => (
      { 
        shoes: [
          {
            id: 1,
            name: 'shoe1',
            price: '$333',
            photo: photo
          },
          {
            id: 2,
            name: 'shoe2',
            price: '$115',
            photo: photo
          },
          {
            id: 3,
            name: 'shoe3',
            price: '$212',
            photo: photo
          },
          {
            id: 4,
            name: 'shoe4',
            price: '$258',
            photo: photo
          },
          {
            id: 5,
            name: 'shoe5',
            price: '$135',
            photo: photo
          },
          {
            id: 6,
            name: 'shoe6',
            price: '$1458',
            photo: photo
          },
          {
            id: 7,
            name: 'shoe7',
            price: '$117',
            photo: photo
          },
          {
            id: 8,
            name: 'shoe8',
            price: '$20',
            photo: photo
          },
          {
            id: 9,
            name: 'shoe9',
            price: '$259',
            photo: photo
          },
          {
            id: 10,
            name: 'shoe10',
            price: '$467',
            photo: photo
          },
          {
            id: 11,
            name: 'shoe11',
            price: '$580',
            photo: photo
          },
          {
            id: 12,
            name: 'shoe12',
            price: '$1000',
            photo: photo
          },
          {
            id: 13,
            name: 'shoe13',
            price: '$203',
            photo: photo
          },
          {
            id: 14,
            name: 'shoe14',
            price: '$29',
            photo: photo
          },
          {
            id: 15,
            name: 'shoe15',
            price: '$33',
            photo: photo
          }
        ]
      }
    ));
  
    // store.on('shoes/add', ({ shoes }, shoe) => {
    //   return { shoes: shoes.concat([shoe]) }
    // });
};

export default shoes;