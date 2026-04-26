export const desserts = [
  {
    id: "1",
    category: "Waffle",
    name: "Waffle with Berries",
    price: 650,  
    image: {
      desktop: "assests/image-waffle-desktop.jpg",
      thumbnail: "assests/image-waffle-thumbnail.jpg"
    }
  },
  {
    id: "2",
    category: "Crème Brûlée",
    name: "Vanilla Bean Crème Brûlée",
    price: 700,
    image: {
      desktop: "assests/image-creme-brulee-desktop.jpg",
      thumbnail: "assests/image-creme-brulee-thumbnail.jpg"
    }
  },
  {
    id: "3",
    category: "Macaron",
    name: "Macaron Mix of Five",
    price: 800,
    image: {
      desktop: "assests/image-macaron-desktop.jpg",
      thumbnail: "assests/image-macaron-thumbnail.jpg"
    }
  },
  {
    id: "4",
    category: "Tiramisu",
    name: "Classic Tiramisu",
    price: 550,
    image: {
      desktop: "assests/image-tiramisu-desktop.jpg",
      thumbnail: "assests/image-tiramisu-thumbnail.jpg"
    }
  },
  {
    id: "5",
    category: "Baklava",
    name: "Pistachio Baklava",
    price: 400,
    image: {
      desktop: "assests/image-baklava-desktop.jpg",
      thumbnail: "assests/image-baklava-thumbnail.jpg"
    }
  },
  {
    id: "6",
    category: "Pie",
    name: "Lemon Meringue Pie",
    price: 500,
    image: {
      desktop: "assests/image-meringue-desktop.jpg",
      thumbnail: "assests/image-meringue-thumbnail.jpg"
    }
  },
  {
    id: "7",
    category: "Cake",
    name: "Red Velvet Cake",
    price: 450,
    image: {
      desktop: "assests/image-cake-desktop.jpg",
      thumbnail: "assests/image-cake-thumbnail.jpg"
    }
  },
  {
    id: "8",
    category: "Brownie",
    name: "Salted Caramel Brownie",
    price: 550,
    image: {
      desktop: "assests/image-brownie-desktop.jpg",
      thumbnail: "assests/image-brownie-thumbnail.jpg"
    }
  },
  {
    id: "9",
    category: "Panna Cotta",
    name: "Vanilla Panna Cotta",
    price: 650,
    image: {
      desktop: "assests/image-panna-cotta-desktop.jpg",
      thumbnail: "assests/image-panna-cotta-thumbnail.jpg"
    }
  }
];



// this is for coverting money .. 
export function moneyConvert(priceCents){
    return (priceCents/100).toFixed(2);
}