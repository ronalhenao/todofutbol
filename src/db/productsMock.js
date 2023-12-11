const productList = [
  {
    id: 1,
    category: "mujeres",
    description: "Las camisetas de fútbol son prendas emblemáticas que representan la identidad y pasión de un equipo. Diseñadas con colores distintivos, escudos y patrocinadores, estas prendas fusionan estilo y tradición deportiva. Su uso trasciende el campo de juego, convirtiéndolas en símbolos icónicos para los aficionados del fútbol en todo el mundo.",
    image: "https://firebasestorage.googleapis.com/v0/b/todofutbolstore-4555d.appspot.com/o/products%2Fc-boca-m-front.jpg?alt=media",
    name: "Camiseta Boca",
    price: 110,
    stock: 6
  },
  {
    id: 2,
    category: "niños",
    description: "Las camisetas de fútbol son prendas emblemáticas que representan la identidad y pasión de un equipo. Diseñadas con colores distintivos, escudos y patrocinadores, estas prendas fusionan estilo y tradición deportiva. Su uso trasciende el campo de juego, convirtiéndolas en símbolos icónicos para los aficionados del fútbol en todo el mundo.",
    image: "https://firebasestorage.googleapis.com/v0/b/todofutbolstore-4555d.appspot.com/o/products%2Fk-inter-n-front.jpg?alt=media",
    name: "Kit Internazionale",
    price: 145,
    stock: 9
  },
  {
    id: 3,
    category: "hombres",
    description: "Las camisetas de fútbol son prendas emblemáticas que representan la identidad y pasión de un equipo. Diseñadas con colores distintivos, escudos y patrocinadores, estas prendas fusionan estilo y tradición deportiva. Su uso trasciende el campo de juego, convirtiéndolas en símbolos icónicos para los aficionados del fútbol en todo el mundo.",
    image: "https://firebasestorage.googleapis.com/v0/b/todofutbolstore-4555d.appspot.com/o/products%2Fc-liverpool-h-front.jpg?alt=media",
    name: "Camiseta Liverpool",
    price: 109,
    stock: 6,
  },
  {
    id: 4,
    category: "mujeres",
    description: "Las camisetas de fútbol son prendas emblemáticas que representan la identidad y pasión de un equipo. Diseñadas con colores distintivos, escudos y patrocinadores, estas prendas fusionan estilo y tradición deportiva. Su uso trasciende el campo de juego, convirtiéndolas en símbolos icónicos para los aficionados del fútbol en todo el mundo.",
    image: "https://firebasestorage.googleapis.com/v0/b/todofutbolstore-4555d.appspot.com/o/products%2Fb-city-m-front.jpg?alt=media",
    name: "Hoodie Manchester City",
    price: 170,
    stock: 6,
  },
  {
    id: 5,
    category: "mujeres",
    description: "Las camisetas de fútbol son prendas emblemáticas que representan la identidad y pasión de un equipo. Diseñadas con colores distintivos, escudos y patrocinadores, estas prendas fusionan estilo y tradición deportiva. Su uso trasciende el campo de juego, convirtiéndolas en símbolos icónicos para los aficionados del fútbol en todo el mundo.",
    image: "https://firebasestorage.googleapis.com/v0/b/todofutbolstore-4555d.appspot.com/o/products%2Fb-barcelona-m-front.jpg?alt=media",
    name: "Hoodie Barcelona",
    price: 80,
    stock: 7,
  },
  {
    id: 6,
    category: "hombres",
    description: "Las camisetas de fútbol son prendas emblemáticas que representan la identidad y pasión de un equipo. Diseñadas con colores distintivos, escudos y patrocinadores, estas prendas fusionan estilo y tradición deportiva. Su uso trasciende el campo de juego, convirtiéndolas en símbolos icónicos para los aficionados del fútbol en todo el mundo.",
    image: "https://firebasestorage.googleapis.com/v0/b/todofutbolstore-4555d.appspot.com/o/products%2Fc-chelsea-h-front.jpg?alt=media",
    name: "Camiseta Chelsea",
    price: 168,
    stock: 4,
  },
  {
    id: 7,
    category: "hombres",
    description: "Las camisetas de fútbol son prendas emblemáticas que representan la identidad y pasión de un equipo. Diseñadas con colores distintivos, escudos y patrocinadores, estas prendas fusionan estilo y tradición deportiva. Su uso trasciende el campo de juego, convirtiéndolas en símbolos icónicos para los aficionados del fútbol en todo el mundo.",
    image: "https://firebasestorage.googleapis.com/v0/b/todofutbolstore-4555d.appspot.com/o/products%2Fc-nacional-h-front.jpg?alt=media",
    name: "Camiseta Atlético Nacional",
    price: 210,
    stock: 17,
  },
  {
    id: 8,
    category: "niños",
    description: "Las camisetas de fútbol son prendas emblemáticas que representan la identidad y pasión de un equipo. Diseñadas con colores distintivos, escudos y patrocinadores, estas prendas fusionan estilo y tradición deportiva. Su uso trasciende el campo de juego, convirtiéndolas en símbolos icónicos para los aficionados del fútbol en todo el mundo.",
    image: "https://firebasestorage.googleapis.com/v0/b/todofutbolstore-4555d.appspot.com/o/products%2Fk-city-n-front.jpg?alt=media",
    name: "Kit Manchester City",
    price: 160,
    stock: 2,
  },
  {
    id: 9,
    category: "hombres",
    description: "Las camisetas de fútbol son prendas emblemáticas que representan la identidad y pasión de un equipo. Diseñadas con colores distintivos, escudos y patrocinadores, estas prendas fusionan estilo y tradición deportiva. Su uso trasciende el campo de juego, convirtiéndolas en símbolos icónicos para los aficionados del fútbol en todo el mundo.",
    image: "https://firebasestorage.googleapis.com/v0/b/todofutbolstore-4555d.appspot.com/o/products%2Fc-barcelona-h-front.jpg?alt=media",
    name: "Camiseta Barcelona",
    price: 40,
    stock: 4,
  },
  {
    id: 10,
    category: "mujeres",
    description: "Las camisetas de fútbol son prendas emblemáticas que representan la identidad y pasión de un equipo. Diseñadas con colores distintivos, escudos y patrocinadores, estas prendas fusionan estilo y tradición deportiva. Su uso trasciende el campo de juego, convirtiéndolas en símbolos icónicos para los aficionados del fútbol en todo el mundo.",
    image: "https://firebasestorage.googleapis.com/v0/b/todofutbolstore-4555d.appspot.com/o/products%2Fc-real-m-front.jpg?alt=media",
    name: "Camiseta Real Madrid",
    price: 200,
    stock: 14,
  }
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productList)
    }, 500);
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve( productList.filter(product => product.category === categoryId) )
    }, 500);
  })
}

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve( productList.find((product) => product.id === parseInt(productId) ))
    }, 500);
  })
}

