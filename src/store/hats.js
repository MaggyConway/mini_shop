import photo from '../assets/images/hats/hat1.jpg';

export function hats (store) {
    store.on('@init', () => (
      { 
        hats: [
          {
            id: 1,
            name: 'hat1',
            price: '$135',
            photo: photo
          },
          {
            id: 2,
            name: 'hat2',
            price: '$111',
            photo: photo
          },
          {
            id: 3,
            name: 'hat3',
            price: '$97',
            photo: photo
          },
          {
            id: 4,
            name: 'hat4',
            price: '$312',
            photo: photo
          },
          {
            id: 5,
            name: 'hat5',
            price: '$178',
            photo: photo
          },
          {
            id: 6,
            name: 'hat6',
            price: '$188',
            photo: photo
          },
          {
            id: 7,
            name: 'hat7',
            price: '$44',
            photo: photo
          }
        ]
      }
    ));
  
    // store.on('hats/add', ({ hats }, hat) => {
    //   return { hats: hats.concat([hat]) }
    // });
};

export default hats;