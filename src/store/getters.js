export default {
  getCards: (state) => {
    const count = (state.lenght * state.lenght) / 2;
    let allImages = state.images.concat();
    const cards = [];
    // Типо будут настройки и там можно будет выбирать игровое поле 4x4, 5x5.
    // Карточки в каждой игре не будут повторяться
    for (let i = 0; i < count; i += 1) {
      const randomImage = allImages[Math.floor(Math.random() * allImages.length)];
      cards.push({
        pair_id: i + 1,
        image: randomImage,
      });
      allImages = allImages.filter((image) => image !== randomImage);
    }
    return cards;
  },
  getLenght: (state) => state.lenght,
  getShirt: (state) => state.shirt,
  getResults: (state) => state.results.sort((a, b) => (a.result > b.result ? 1 : -1)),
  getUserName: (state) => state.userName,
};
