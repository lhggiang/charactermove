class Hero {
  constructor(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
  }
  getHeroElement() {
    return `<img src="${this.image}" width="${this.size}" height="${this.size}" style="top:${this.top}px; left:${this.left}px; position:absolute;"/>`;
  }
  moveRight() {
    this.left += 30;
  }
}
let hero = new Hero(
  "https://danviet.mediacdn.vn/upload/4-2018/images/2018-12-04/Dan-mang-phat-sot-voi-con-vat-giong-y-het-Pikachu-poty_pikachu_3-1543909375-width630height400.jpg",
  20,
  30,
  200
);
function start() {
  if (hero.left < window.innerWidth - hero.size) {
    hero.moveRight();
  }
  document.getElementById("game").innerHTML = hero.getHeroElement();
}
start();
