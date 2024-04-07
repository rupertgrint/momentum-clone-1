const body = document.querySelector('body'),
  images = [
    'image/bg/1.jpg',
    'image/bg/2.jpg',
    'image/bg/3.jpg',
    'image/bg/4.jpg',
    'image/bg/5.jpg',
    'image/bg/6.jpg',
    'image/bg/7.jpg',
    'image/bg/8.jpg',
  ];

export function setBackground() {
  const randomNumber = Math.floor(Math.random() * images.length);

  body.style.background = 'url(' + images[randomNumber] + ') center';
  body.style.backgroundSize = 'cover';
}
