use pedidos
db.pedidos.insertMany([
  {
    "id_pedido": 1,
    "fecha": "2026-04-10",
    "total": 15500,
    "cliente": { "nombre": "Camila Soto", "telefono": "+56988776655", "ciudad": "Temuco" }
  },
  {
    "id_pedido": 2,
    "fecha": "2026-04-11",
    "total": 22000,
    "cliente": { "nombre": "Marcos Urrutia", "telefono": "+56911223344", "ciudad": "Padre Las Casas" }
  },
  {
    "id_pedido": 3,
    "fecha": "2026-04-11",
    "total": 8900,
    "cliente": { "nombre": "Elena Rivas", "telefono": "+56955443322", "ciudad": "Lautaro" }
  },
  {
    "id_pedido": 4,
    "fecha": "2026-04-12",
    "total": 35000,
    "cliente": { "nombre": "Camila Soto", "telefono": "+56988776655", "ciudad": "Temuco" }
  },
  {
    "id_pedido": 5,
    "fecha": "2026-04-12",
    "total": 12500,
    "cliente": { "nombre": "Jorge Vera", "telefono": "+56977665544", "ciudad": "Villarrica" }
  },
  {
    "id_pedido": 6,
    "fecha": "2026-04-13",
    "total": 18200,
    "cliente": { "nombre": "Lucía Méndez", "telefono": "+56999887766", "ciudad": "Pucón" }
  },
  {
    "id_pedido": 7,
    "fecha": "2026-04-14",
    "total": 9500,
    "cliente": { "nombre": "Marcos Urrutia", "telefono": "+56911223344", "ciudad": "Padre Las Casas" }
  },
  {
    "id_pedido": 8,
    "fecha": "2026-04-15",
    "total": 27000,
    "cliente": { "nombre": "Pedro Pascal", "telefono": "+56922334455", "ciudad": "Temuco" }
  },
  {
    "id_pedido": 9,
    "fecha": "2026-04-15",
    "total": 4500,
    "cliente": { "nombre": "Ana Jara", "telefono": "+56966554433", "ciudad": "Victoria" }
  },
  {
    "id_pedido": 10,
    "fecha": "2026-04-16",
    "total": 31200,
    "cliente": { "nombre": "Camila Soto", "telefono": "+56988776655", "ciudad": "Temuco" }
  }
]);