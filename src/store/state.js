/* eslint-disable global-require */
export default () => ({
  // наши карточки
  images: [
    require('@/assets/img/1.jpg'),
    require('@/assets/img/2.jpg'),
    require('@/assets/img/3.jpg'),
    require('@/assets/img/4.jpg'),
    require('@/assets/img/5.jpg'),
    require('@/assets/img/6.jpg'),
    require('@/assets/img/7.jpg'),
    require('@/assets/img/8.jpg'),
    require('@/assets/img/9.jpg'),
    require('@/assets/img/10.jpg'),
    require('@/assets/img/11.jpg'),
    require('@/assets/img/12.jpg'),
    require('@/assets/img/13.jpg'),
    require('@/assets/img/14.jpg'),
    require('@/assets/img/15.jpg'),
    require('@/assets/img/16.jpg'),
    require('@/assets/img/17.jpg'),
    require('@/assets/img/18.jpg'),
  ],
  // потом можно сделать несколько рубашек и выбирать нужную в настройках
  shirt: require('@/assets/img/shirt.jpg'),
  // потом можно выбирать количество карточек для игры
  lenght: 6,
  lenghtLimit: 6,
});
