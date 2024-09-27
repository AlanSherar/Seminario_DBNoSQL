 const productos_data = [
    {
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
  }
]