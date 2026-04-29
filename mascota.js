use mascotas
db.mascotas.insertMany([
  {
    nombre_mascota: "Luna",
    especie: "Perro",
    raza: "Quiltro",
    edad: 5,
    peso: 12.5,
    dueño: { nombre: "Juan Pérez", telefono: "+56911111111", ciudad: "Temuco" },
    control: { veterinario: "Dra. Ramos", fecha: "2026-04-10", estado: "estable" }
  },
  {
    nombre_mascota: "Oliver",
    especie: "Gato",
    raza: "Siamés",
    edad: 2,
    peso: 4.2,
    dueño: { nombre: "María Soto", telefono: "+56922222222", ciudad: "Padre Las Casas" },
    control: { veterinario: "Dr. Morales", fecha: "2026-04-12", estado: "en tratamiento" }
  },
  {
    nombre_mascota: "Rex",
    especie: "Perro",
    raza: "Pastor Alemán",
    edad: 8,
    peso: 30.0,
    dueño: { nombre: "Carlos Ruiz", telefono: "+56933333333", ciudad: "Villarrica" },
    control: { veterinario: "Dra. Ramos", fecha: "2026-03-20", estado: "recuperado" }
  },
  {
    nombre_mascota: "Mimi",
    especie: "Gato",
    raza: "Persa",
    edad: 3,
    peso: 3.8,
    dueño: { nombre: "Ana Morales", telefono: "+56944444444", ciudad: "Temuco" },
    control: { veterinario: "Dr. Sepúlveda", fecha: "2026-04-01", estado: "estable" }
  },
  {
    nombre_mascota: "Cooper",
    especie: "Perro",
    raza: "Golden Retriever",
    edad: 4,
    peso: 28.5,
    dueño: { nombre: "Diego Lagos", telefono: "+56955555555", ciudad: "Lautaro" },
    control: { veterinario: "Dra. Ramos", fecha: "2026-04-14", estado: "en tratamiento" }
  },
  {
    nombre_mascota: "Pelusa",
    especie: "Conejo",
    raza: "Cabeza de León",
    edad: 1,
    peso: 1.5,
    dueño: { nombre: "Sonia Tapia", telefono: "+56966666666", ciudad: "Victoria" },
    control: { veterinario: "Dr. Morales", fecha: "2026-02-15", estado: "recuperado" }
  },
  {
    nombre_mascota: "Simba",
    especie: "Gato",
    raza: "Maine Coon",
    edad: 6,
    peso: 7.2,
    dueño: { nombre: "Roberto Vera", telefono: "+56977777777", ciudad: "Nueva Imperial" },
    control: { veterinario: "Dr. Sepúlveda", fecha: "2026-04-05", estado: "estable" }
  },
  {
    nombre_mascota: "Toby",
    especie: "Perro",
    raza: "Beagle",
    edad: 10,
    peso: 11.0,
    dueño: { nombre: "Elena Castro", telefono: "+56988888888", ciudad: "Pucón" },
    control: { veterinario: "Dra. Ramos", fecha: "2026-01-10", estado: "recuperado" }
  },
  {
    nombre_mascota: "Nala",
    especie: "Perro",
    raza: "Labrador",
    edad: 2,
    peso: 25.4,
    dueño: { nombre: "Luis Palma", telefono: "+56999999999", ciudad: "Temuco" },
    control: { veterinario: "Dr. Morales", fecha: "2026-04-13", estado: "en tratamiento" }
  },
  {
    nombre_mascota: "Cleo",
    especie: "Gato",
    raza: "Esfinge",
    edad: 4,
    peso: 3.5,
    dueño: { nombre: "Paula Jara", telefono: "+56900000000", ciudad: "Labranza" },
    control: { veterinario: "Dr. Sepúlveda", fecha: "2026-03-30", estado: "estable" }
  }
])