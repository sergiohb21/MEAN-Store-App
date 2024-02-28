db.createCollection('productos', { capped: false });
db.createCollection('categorias', { capped: false });

db.categorias.insert([{"id":1,"name":"Clothes","image":"https://i.imgur.com/QkIa5tT.jpeg","creationAt":"2024-02-27T04:27:04.000Z","updatedAt":"2024-02-27T04:27:04.000Z"},{"id":2,"name":"Electronics","image":"https://i.imgur.com/ZANVnHE.jpeg","creationAt":"2024-02-27T04:27:04.000Z","updatedAt":"2024-02-27T04:27:04.000Z"},{"id":3,"name":"Furniture","image":"https://i.imgur.com/Qphac99.jpeg","creationAt":"2024-02-27T04:27:04.000Z","updatedAt":"2024-02-27T04:27:04.000Z"},{"id":4,"name":"Shoes","image":"https://i.imgur.com/qNOjJje.jpeg","creationAt":"2024-02-27T04:27:04.000Z","updatedAt":"2024-02-27T04:27:04.000Z"},{"id":5,"name":"Miscellaneous","image":"https://i.imgur.com/BG8J0Fj.jpg","creationAt":"2024-02-27T04:27:04.000Z","updatedAt":"2024-02-27T04:27:04.000Z"}]);


db.productos.insert([
    {
      "id": 100,
      "title": "test12",
      "price": 12312,
      "description": "🔥",
      "images": [
        "https://imgs.search.brave.com/LseKwxCSWqaKB610tebN42DfzzC16-JmuON4By33t7g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI4OTUy/OTYuanBn"
      ],
      "creationAt": "2024-02-26T06:27:36.000Z",
      "updatedAt": "2024-02-26T18:44:39.000Z",
      "category": {
        "id": 4,
        "name": "Shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2024-02-26T03:47:13.000Z",
        "updatedAt": "2024-02-26T03:47:13.000Z"
      }
    },
    {
      "id": 103,
      "title": "New Product",
      "price": 10,
      "description": "😜",
      "images": [
        "https://imgs.search.brave.com/LseKwxCSWqaKB610tebN42DfzzC16-JmuON4By33t7g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI4OTUy/OTYuanBn"
      ],
      "creationAt": "2024-02-26T06:40:59.000Z",
      "updatedAt": "2024-02-26T18:44:40.000Z",
      "category": {
        "id": 2,
        "name": "Electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2024-02-26T03:47:13.000Z",
        "updatedAt": "2024-02-26T03:47:13.000Z"
      }
    },
    {
      "id": 108,
      "title": "New Product",
      "price": 10,
      "description": "🐬",
      "images": [
        "https://imgs.search.brave.com/LseKwxCSWqaKB610tebN42DfzzC16-JmuON4By33t7g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI4OTUy/OTYuanBn"
      ],
      "creationAt": "2024-02-26T07:13:30.000Z",
      "updatedAt": "2024-02-26T18:44:40.000Z",
      "category": {
        "id": 2,
        "name": "Electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2024-02-26T03:47:13.000Z",
        "updatedAt": "2024-02-26T03:47:13.000Z"
      }
    },
    {
      "id": 123,
      "title": "New Product",
      "price": 10,
      "description": "🚽",
      "images": [
        "https://imgs.search.brave.com/LseKwxCSWqaKB610tebN42DfzzC16-JmuON4By33t7g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI4OTUy/OTYuanBn"
      ],
      "creationAt": "2024-02-26T07:59:13.000Z",
      "updatedAt": "2024-02-26T18:44:40.000Z",
      "category": {
        "id": 2,
        "name": "Electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2024-02-26T03:47:13.000Z",
        "updatedAt": "2024-02-26T03:47:13.000Z"
      }
    },
    {
      "id": 125,
      "title": "product-19",
      "price": 1000,
      "description": "✌",
      "images": [
        "https://imgs.search.brave.com/LseKwxCSWqaKB610tebN42DfzzC16-JmuON4By33t7g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI4OTUy/OTYuanBn"
      ],
      "creationAt": "2024-02-26T08:00:20.000Z",
      "updatedAt": "2024-02-26T18:44:40.000Z",
      "category": {
        "id": 2,
        "name": "Electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2024-02-26T03:47:13.000Z",
        "updatedAt": "2024-02-26T03:47:13.000Z"
      }
    },
    {
      "id": 156,
      "title": "New Product",
      "price": 10,
      "description": "🐮",
      "images": [
        "https://imgs.search.brave.com/LseKwxCSWqaKB610tebN42DfzzC16-JmuON4By33t7g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI4OTUy/OTYuanBn"
      ],
      "creationAt": "2024-02-26T09:03:27.000Z",
      "updatedAt": "2024-02-26T18:44:42.000Z",
      "category": {
        "id": 2,
        "name": "Electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2024-02-26T03:47:13.000Z",
        "updatedAt": "2024-02-26T03:47:13.000Z"
      }
    },
    {
      "id": 161,
      "title": "new FurnitureProduct",
      "price": 110,
      "description": "🍉",
      "images": [
        "https://imgs.search.brave.com/LseKwxCSWqaKB610tebN42DfzzC16-JmuON4By33t7g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI4OTUy/OTYuanBn"
      ],
      "creationAt": "2024-02-26T09:15:29.000Z",
      "updatedAt": "2024-02-26T18:44:42.000Z",
      "category": {
        "id": 3,
        "name": "Kakaroto Onichan",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2024-02-26T03:47:13.000Z",
        "updatedAt": "2024-02-26T03:47:13.000Z"
      }
    }
]);
  
