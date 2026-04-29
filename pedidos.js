  use restaurantes

db.pedidos.insertMany([
  {
    "id_pedido": 1,
    "fecha": "2026-04-10",
    "total": 35000
    "cliente": { "nombre": "Camila Soto", "telefono": "+56988776655", "ciudad": "Temuco" },
    "productos": [
      { "nombre_producto": "Parrillada Premium", "cantidad": 1, "precio": 35000 }
    ]
  },
  {
    "id_pedido": 2,
    "fecha": "2026-04-11",
    "total": 12000,
    "cliente": { "nombre": "Marcos Urrutia", "telefono": "+56911223344", "ciudad": "Santiago" }, 
    "productos": [{ "nombre_producto": "Cazuela", "cantidad": 1, "precio": 12000 }]
  },
  {
    "id_pedido": 3,
    "fecha": "2026-04-11",
    "total": 15000,
    "cliente": { "nombre": "Elena Rivas", "telefono": "+56955443322", "ciudad": "Lautaro" },
    "productos": [{ "nombre_producto": "Pizza", "cantidad": 1, "precio": 15000 }]
  },
  {
    "id_pedido": 4,
    "fecha": "2026-04-12",
    "total": 22000, 
    "cliente": { "nombre": "Juan Pablo", "telefono": "+56988776655", "ciudad": "Santiago" }, 
    "productos": [{ "nombre_producto": "Salmón", "cantidad": 1, "precio": 22000 }]
  },
  {
    "id_pedido": 5,
    "fecha": "2026-04-12",
    "total": 12000,
    "cliente": { "nombre": "Jorge Vera", "telefono": "+56977665544", "ciudad": "Villarrica" },
    "productos": [{ "nombre_producto": "Hamburguesa", "cantidad": 1, "precio": 8000 }] 
  },
  {
    "id_pedido": 6,
    "fecha": "2026-04-13",
    "total": 7000,
    "cliente": { "nombre": "Lucía Méndez", "telefono": "+56999887766", "ciudad": "Pucón" },
    "productos": [{ "nombre_producto": "Sándwich", "cantidad": 1, "precio": 5500 }]
  },
  {
    "id_pedido": 7,
    "fecha": "2026-04-14",
    "total": 32000, // <--- OTRO PARA EL PUNTO 1
    "cliente": { "nombre": "Marcos Urrutia", "telefono": "+56911223344", "ciudad": "Santiago" },
    "productos": [{ "nombre_producto": "Pizza", "cantidad": 1, "precio": 32000 }] 
  },
  {
    "id_pedido": 8,
    "fecha": "2026-04-15",
    "total": 11500,
    "cliente": { "nombre": "Pedro Pascal", "telefono": "+56922334455", "ciudad": "Temuco" },
    "productos": [{ "nombre_producto": "Merluza", "cantidad": 1, "precio": 8500 }]
  },
  {
    "id_pedido": 9,
    "fecha": "2026-04-15",
    "total": 4000,
    "cliente": { "nombre": "Ana Jara", "telefono": "+56966554433", "ciudad": "Victoria" },
    "productos": [{ "nombre_producto": "Café", "cantidad": 1, "precio": 4000 }]
  },
  {
    "id_pedido": 10,
    "fecha": "2026-04-16",
    "total": 13000,
    "cliente": { "nombre": "Roberto Lara", "telefono": "+56988776655", "ciudad": "Temuco" },
    "productos": [{ "nombre_producto": "Chorrillana", "cantidad": 1, "precio": 13000 }]
  }
]);