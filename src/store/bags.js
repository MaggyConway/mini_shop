import photo from '../assets/images/bags/bag1.png';

export function bags (store) {
    store.on('@init', () => (
      { 
        bags: [
          {
            id: 1,
            name: 'bag1',
            price: '$145',
            photo: photo
          },
          {
            id: 2,
            name: 'bag2',
            price: '$110',
            photo: photo
          },
          {
            id: 3,
            name: 'bag3',
            price: '$200',
            photo: photo
          },
          {
            id: 4,
            name: 'bag4',
            price: '$255',
            photo: photo
          },
          {
            id: 5,
            name: 'bag5',
            price: '$35',
            photo: photo
          }
        ]
      }
    ));
  
    // store.on('bags/add', ({ bags }, bag) => {
    //   return { bags: bags.concat([bag]) }
    // });
};

export default bags;