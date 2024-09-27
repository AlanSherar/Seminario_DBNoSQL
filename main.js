
const { MongoClient, ServerApiVersion } = require('mongodb');

const productos_data_1 = [

  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "Fashionista",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "HomeComfort",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,

    "marca": "YogaPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,

    "marca": "TechWorld",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "CasualWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,

    "marca": "HomeDesign",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,

    "marca": "GreenThumb",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,

    "marca": "UltraTech",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,

    "marca": "ActiveWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "LightMaster",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,

    "marca": "GardenArt",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,

    "marca": "FitGear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,

    "marca": "SmartWatch Co.",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,

    "marca": "LeatherWorks",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,

    "marca": "SoftTowel",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,

    "marca": "GardenPro",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,

    "marca": "SportStar",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,

    "marca": "SoundPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,

    "marca": "CozyWear",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,

    "marca": "HomeEssentials",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,

    "marca": "GardenTools",

    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,

    "marca": "FitPro",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,

    "marca": "VisionX",

    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  }
]

const productos_data_2 = [

  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 27,
    "categoria": "Ropa",
    "descripcion": "Vestido de verano con estampado floral",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:25:15.000Z",
    "marca": "Fashionista",
    "valoracion": 5,
    "numeroVentas": 400,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Azul", "Rojo", "Verde"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 28,
    "categoria": "Hogar",
    "descripcion": "Cortinas blackout para ventana",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:20:15.000Z",
    "marca": "HomeComfort",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Gris", "Negro"]
      },
      {
        "tipo": "Tamaño",
        "opciones": ["140x250cm", "200x250cm"]
      }
    ]
  },
  {
    "id": 29,
    "categoria": "Jardinería",
    "descripcion": "Maceta de cerámica para plantas",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T16:00:00.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 180,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      },
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Verde"]
      }
    ]
  },
  {
    "id": 30,
    "categoria": "Deportes",
    "descripcion": "Equipamiento de yoga profesional",
    "precio": 79.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:00.000Z",
    "marca": "YogaPro",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rosa", "Azul"]
      }
    ]
  },
  {
    "id": 31,
    "categoria": "Electrónica",
    "descripcion": "Tablet con pantalla de alta definición",
    "precio": 349.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:45:30.000Z",
    "marca": "TechWorld",
    "valoracion": 4,
    "numeroVentas": 220,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["64GB", "128GB"]
      }
    ]
  },
  {
    "id": 32,
    "categoria": "Ropa",
    "descripcion": "Camiseta de manga corta",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:10:45.000Z",
    "marca": "CasualWear",
    "valoracion": 3,
    "numeroVentas": 350,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 33,
    "categoria": "Hogar",
    "descripcion": "Espejo de pared decorativo",
    "precio": 79.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:45:00.000Z",
    "marca": "HomeDesign",
    "valoracion": 4,
    "numeroVentas": 60,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 34,
    "categoria": "Jardinería",
    "descripcion": "Kits de jardinería para principiantes",
    "precio": 45.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:25:00.000Z",
    "marca": "GreenThumb",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Verde"]
      }
    ]
  }, {
    "id": 11,
    "categoria": "Electrónica",
    "descripcion": "Laptop ultraligera con pantalla táctil",
    "precio": 999.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:45:56.789Z",
    "marca": "UltraTech",
    "valoracion": 5,
    "numeroVentas": 450,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Plata", "Negro"]
      },
      {
        "tipo": "Almacenamiento",
        "opciones": ["256GB", "512GB"]
      }
    ]
  },
  {
    "id": 12,
    "categoria": "Ropa",
    "descripcion": "Pantalones deportivos ligeros",
    "precio": 39.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:22:30.000Z",
    "marca": "ActiveWear",
    "valoracion": 4,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L"]
      }
    ]
  },
  {
    "id": 13,
    "categoria": "Hogar",
    "descripcion": "Lámpara LED regulable",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:15:15.000Z",
    "marca": "LightMaster",
    "valoracion": 4,
    "numeroVentas": 120,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  },
  {
    "id": 14,
    "categoria": "Jardinería",
    "descripcion": "Set de macetas decorativas",
    "precio": 29.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T16:02:44.000Z",
    "marca": "GardenArt",
    "valoracion": 5,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 15,
    "categoria": "Deportes",
    "descripcion": "Set de pesas ajustables",
    "precio": 119.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:48:55.000Z",
    "marca": "FitGear",
    "valoracion": 4,
    "numeroVentas": 215,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Rojo"]
      }
    ]
  },
  {
    "id": 16,
    "categoria": "Electrónica",
    "descripcion": "Reloj inteligente con monitor de salud",
    "precio": 199.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:20:30.000Z",
    "marca": "SmartWatch Co.",
    "valoracion": 5,
    "numeroVentas": 340,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Blanco", "Azul"]
      }
    ]
  },
  {
    "id": 17,
    "categoria": "Ropa",
    "descripcion": "Chaqueta de cuero genuino",
    "precio": 249.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "LeatherWorks",
    "valoracion": 4,
    "numeroVentas": 210,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro", "Marrón"]
      },
      {
        "tipo": "Talla",
        "opciones": ["M", "L"]
      }
    ]
  },
  {
    "id": 18,
    "categoria": "Hogar",
    "descripcion": "Juego de toallas de baño de microfibra",
    "precio": 34.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T15:10:45.000Z",
    "marca": "SoftTowel",
    "valoracion": 5,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Azul", "Verde"]
      }
    ]
  },
  {
    "id": 19,
    "categoria": "Jardinería",
    "descripcion": "Regadera de acero inoxidable",
    "precio": 19.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:12:34.000Z",
    "marca": "GardenPro",
    "valoracion": 4,
    "numeroVentas": 90,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño"]
      }
    ]
  },
  {
    "id": 20,
    "categoria": "Deportes",
    "descripcion": "Balón de baloncesto profesional",
    "precio": 29.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:45:00.000Z",
    "marca": "SportStar",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Naranja"]
      }
    ]
  },
  {
    "id": 21,
    "categoria": "Electrónica",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido",
    "precio": 89.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T11:00:00.000Z",
    "marca": "SoundPro",
    "valoracion": 4,
    "numeroVentas": 500,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro", "Azul"]
      }
    ]
  },
  {
    "id": 22,
    "categoria": "Ropa",
    "descripcion": "Sudadera con capucha de algodón",
    "precio": 49.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T10:15:30.000Z",
    "marca": "CozyWear",
    "valoracion": 5,
    "numeroVentas": 300,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Rojo", "Negro", "Gris"]
      },
      {
        "tipo": "Talla",
        "opciones": ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    "id": 23,
    "categoria": "Hogar",
    "descripcion": "Juego de platos de cerámica",
    "precio": 59.99,
    "estaEnStock": false,
    "fechaActualizacion": "2024-09-26T09:30:15.000Z",
    "marca": "HomeEssentials",
    "valoracion": 4,
    "numeroVentas": 150,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano", "Grande"]
      }
    ]
  },
  {
    "id": 24,
    "categoria": "Jardinería",
    "descripcion": "Tijeras de podar de acero inoxidable",
    "precio": 25.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T14:05:44.000Z",
    "marca": "GardenTools",
    "valoracion": 5,
    "numeroVentas": 200,
    "variantes": [
      {
        "tipo": "Tamaño",
        "opciones": ["Pequeño", "Mediano"]
      }
    ]
  },
  {
    "id": 25,
    "categoria": "Deportes",
    "descripcion": "Caminadora eléctrica plegable",
    "precio": 599.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T13:15:30.000Z",
    "marca": "FitPro",
    "valoracion": 4,
    "numeroVentas": 80,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Negro"]
      }
    ]
  },
  {
    "id": 26,
    "categoria": "Electrónica",
    "descripcion": "Proyector portátil de alta definición",
    "precio": 299.99,
    "estaEnStock": true,
    "fechaActualizacion": "2024-09-26T12:10:45.000Z",
    "marca": "VisionX",
    "valoracion": 4,
    "numeroVentas": 250,
    "variantes": [
      {
        "tipo": "Color",
        "opciones": ["Blanco", "Negro"]
      }
    ]
  }
]


const uri = "mongodb+srv://alansheerrardo:246246@tp-dbnosql.ip430.mongodb.net/?retryWrites=true&w=majority&appName=TP-DBNoSQL";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const db = client.db("Seminario_DBNoSQL");

testing();

async function testing() {
  await client.connect();

  //**// TODOS LOS TESTS

  // Vaciamos toda la base
  await limpiar_base();
  console.log("Testing 1 terminado");

  // Creamos las collections e insertamos los datos (pocos)
  await inicializar_collections();
  console.log("Testing 2 terminado");

  // Prueba de lectura (ver que todo funciona)
  await test_lectura();
  console.log("Testing 3 terminado");

  // Insertar más datos pero con más atributos (cambió el schema) (FLEXIBILIDAD)
  await insertar_datos_nuevos();
  console.log("Testing 4 terminado");

  // Actualizar precio de todos los productos de x categoria
  await actualizar_precio_x_categoria("Ropa");
  console.log("Testing 5 terminado");
  
  // Prueba de lectura 2
  await test_lectura_por_tipo_y_opcion("Color", "Rojo");
  console.log("Testing 6 terminado");

  //**// TODOS LOS TESTS

  await client.close();

}

async function limpiar_base() {


  try {

    await db.dropCollection("productos");

  } catch (error) {

    console.log(error);

  }


}

async function inicializar_collections() {

  try {

    const productos = db.collection("productos");

    await productos.insertMany(productos_data_1);



  } catch (error) {
    console.log(error);

  }
}

async function test_lectura() {

  try {
    const productos = db.collection("productos");
    const prods = await productos.find({}).toArray();
    console.log(prods);

  } catch (error) {
    console.log();

  }
}


async function insertar_datos_nuevos() {
  try {
    const productos = db.collection("productos");
    await productos.insertMany(productos_data_2);

    test_lectura();
    
  } catch (error) {

    console.log(error);

  }

}

async function actualizar_precio_x_categoria(categoria) {

  try {
    const productos = db.collection("productos");

    productos.updateMany(
      { categoria: categoria }, // Solo productos de la categoría "x"
      { $mul: { precio: 1.10 } }
    );

    test_lectura();

  } catch (error) {

    console.log(error);

  }

}

async function test_lectura_por_tipo_y_opcion(tipo, opcion) {

  try {
    const productos = db.collection("productos");

    let prods = await productos.find({
      variantes: {
        $elemMatch: {
          tipo: tipo
        }
      }
    }).toArray();

    let prueba = [

      {
        "id": 31,
        "categoria": "Electrónica",
        "descripcion": "Tablet con pantalla de alta definición",
        "precio": 349.99,
        "estaEnStock": true,

        "marca": "TechWorld",

        "variantes": [
          {
            "tipo": "Color",
            "opciones": ["Negro", "Blanco"]
          },
          {
            "tipo": "Almacenamiento",
            "opciones": ["64GB", "128GB"]
          }
        ]
      }
    ];
    prods = prods.filter((prod) => {

      let variantes = prod.variantes.filter(v => {

        let cond1 = v.tipo == tipo;
        let cond2 = false;
        if (cond1) {
          cond2 = v.opciones.indexOf(opcion) > -1;
        }

        return cond1 && cond2;
      });

      return variantes.length > 0;

    })

    console.log(prods.length);

    console.log(prods[0].variantes);



  } catch (error) {
    console.log(error);

  }

}
