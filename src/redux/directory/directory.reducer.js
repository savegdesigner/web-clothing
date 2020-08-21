const INITIAL_STATE = {
  sections: [
    {
      title: "Hats",
      imageUrl:
        "https://media.dollskill.com/media/6kmVVViQDF42J3D8J3BrkkeTgGIdgLWI-34.jpg",
      id: 1,
      linkUrl: "hats",
    },
    {
      title: "Jackets",
      imageUrl: "https://farm4.static.flickr.com/3445/4563445162_070c132144_o.jpg",
      id: 2,
      linkUrl: "jackets",
    },
    {
      title: "Sneakers",
      imageUrl: "https://cdn.trendhunterstatic.com/thumbs/shoe-model.jpeg",
      id: 3,
      linkUrl: "sneakers",
    },
    {
      title: "Womens",
      imageUrl:
        "https://assets.vogue.com/photos/5e2e2c52dab24500085f1f95/master/w_2560%2Cc_limit/GettyImages-1202143819.jpg",
      size: "large",
      id: 4,
      linkUrl: "womens",
    },
    {
      title: "Mens",
      imageUrl:
        "https://static.highsnobiety.com/thumbor/uWl0sysc8NtrHfRKcfkqkAZEd8A=/fit-in/480x600/smart/static.highsnobiety.com/wp-content/uploads/2019/12/19105013/2010s-decade-luxury-streetwear-became-one-11.jpg",
      size: "large",
      id: 5,
      linkUrl: "mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
