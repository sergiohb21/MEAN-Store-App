db.createCollection('productos', { capped: false });
db.createCollection('categorias', { capped: false });

db.categorias.insert([{"id":1,"name":"Clothes","image":"https://i.imgur.com/QkIa5tT.jpeg","creationAt":"2024-02-27T04:27:04.000Z","updatedAt":"2024-02-27T04:27:04.000Z"},{"id":2,"name":"Electronics","image":"https://i.imgur.com/ZANVnHE.jpeg","creationAt":"2024-02-27T04:27:04.000Z","updatedAt":"2024-02-27T04:27:04.000Z"},{"id":3,"name":"Furniture","image":"https://i.imgur.com/Qphac99.jpeg","creationAt":"2024-02-27T04:27:04.000Z","updatedAt":"2024-02-27T04:27:04.000Z"},{"id":4,"name":"Shoes","image":"https://i.imgur.com/qNOjJje.jpeg","creationAt":"2024-02-27T04:27:04.000Z","updatedAt":"2024-02-27T04:27:04.000Z"},{"id":5,"name":"Miscellaneous","image":"https://i.imgur.com/BG8J0Fj.jpg","creationAt":"2024-02-27T04:27:04.000Z","updatedAt":"2024-02-27T04:27:04.000Z"}]);


db.productos.insert([
    {
      "title": "Camiseta deportiva",
      "price": 1999,
      "description": "Camiseta deportiva transpirable",
      "image": "https://example.com/camiseta_deportiva.jpg",
      "category": 1,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Pantalones cortos",
      "price": 2499,
      "description": "Pantalones cortos cómodos para hacer ejercicio",
      "image": "https://example.com/pantalones_cortos.jpg",
      "category": 1,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Sudadera con capucha",
      "price": 3499,
      "description": "Sudadera con capucha y bolsillo canguro",
      "image": "https://example.com/sudadera_capucha.jpg",
      "category": 1,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Calcetines deportivos",
      "price": 999,
      "description": "Calcetines deportivos cómodos y duraderos",
      "image": "https://example.com/calcetines_deportivos.jpg",
      "category": 1,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Teléfono inteligente",
      "price": 6999,
      "description": "Teléfono inteligente con pantalla táctil y cámara de alta resolución",
      "image": "https://example.com/telefono_inteligente.jpg",
      "category": 2,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Laptop",
      "price": 12999,
      "description": "Laptop ultradelgada con procesador potente y larga duración de la batería",
      "image": "https://example.com/laptop.jpg",
      "category": 2,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Auriculares inalámbricos",
      "price": 2999,
      "description": "Auriculares inalámbricos con cancelación de ruido activa",
      "image": "https://example.com/auriculares_inalambricos.jpg",
      "category": 2,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Smartwatch",
      "price": 4999,
      "description": "Smartwatch con monitor de frecuencia cardíaca y seguimiento de actividad",
      "image": "https://example.com/smartwatch.jpg",
      "category": 2,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Silla de oficina ergonómica",
      "price": 4999,
      "description": "Silla de oficina con respaldo ajustable y soporte lumbar",
      "image": "https://example.com/silla_oficina.jpg",
      "category": 3,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Escritorio de madera",
      "price": 7999,
      "description": "Escritorio de madera maciza con amplio espacio de trabajo",
      "image": "https://example.com/escritorio_madera.jpg",
      "category": 3,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Sofá de cuero",
      "price": 14999,
      "description": "Sofá de cuero genuino con asientos reclinables",
      "image": "https://example.com/sofa_cuero.jpg",
      "category": 3,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Mesa de comedor",
      "price": 9999,
      "description": "Mesa de comedor con superficie de vidrio templado y patas de acero inoxidable",
      "image": "https://example.com/mesa_comedor.jpg",
      "category": 3,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Zapatillas deportivas",
      "price": 3999,
      "description": "Zapatillas deportivas con suela amortiguada y material transpirable",
      "image": "https://example.com/zapatillas_deportivas.jpg",
      "category": 4,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Botas de senderismo",
      "price": 5999,
      "description": "Botas de senderismo resistentes al agua y con suela antideslizante",
      "image": "https://example.com/botas_senderismo.jpg",
      "category": 4,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Zapatos de vestir",
      "price": 4999,
      "description": "Zapatos de vestir elegantes con diseño clásico",
      "image": "https://example.com/zapatos_vestir.jpg",
      "category": 4,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Sandalias de playa",
      "price": 2999,
      "description": "Sandalias de playa cómodas con correas ajustables",
      "image": "https://example.com/sandalias_playa.jpg",
      "category": 4,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Set de herramientas",
      "price": 2999,
      "description": "Set de herramientas completo con destornilladores, llaves y martillo",
      "image": "https://example.com/set_herramientas.jpg",
      "category": 5,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Lámpara de escritorio",
      "price": 1999,
      "description": "Lámpara de escritorio LED con brazo flexible",
      "image": "https://example.com/lampara_escritorio.jpg",
      "category": 5,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Caja de almacenamiento",
      "price": 1499,
      "description": "Caja de almacenamiento de plástico resistente con tapa hermética",
      "image": "https://example.com/caja_almacenamiento.jpg",
      "category": 5,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Reloj de pared",
      "price": 999,
      "description": "Reloj de pared decorativo con diseño moderno",
      "image": "https://example.com/reloj_pared.jpg",
      "category": 5,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    } 
]);
  
