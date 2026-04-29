db.pacientes.insertMany(
  [  
    {
        nombre: "Luis",
        edad: 35,
        especialidad: "urgencias",
        costo: 20000,
        ciudad: "Temuco",
        estado: "atendido"
    },
    {
        nombre: "Carla",
        edad: 35,
        especialidad: "urgencias",
        costo: 30000,
        ciudad: "Temuco",
        estado: "atendido"
    },
    { nombre: "Carlos Soto",
         edad: 32,
          especialidad:"Traumatologia",
          costo: 15000,
          ciudad: "Temuco",
          estado: "pendiente"
    },
    { nombre: "Ronal castillos",
         edad: 32,
          especialidad: "neurologo",
          costo:45000,
          ciudad: "Villarica",
          estado:"pendiente"
    },
    { nombre: "Chris lopez", 
        edad: 42,
         especialidad: "veterinario",
         costo: 35000,
         ciudad: "Nueva Imperial",
         estado: "atendido"
    },
    { nombre: "valentina huinca", 
        edad: 21,
         especialidad: "veterinaria",
         costo: 55000,
         ciudad: "victoria",
         estado: "pendiente"
    },
    { nombre: "Juan milla", 
        edad: 22, 
        especialidad:"traumatologia",
        costo: 10000,
        ciudad: "pucon",
        estado: "pendiente"
    },
    { nombre: "Pedro Castillo", 
        edad: 41, 
        especialidad: "Traumatología",
        costo: 75000,
        ciudad: "Angol",
        estado: "atendido"
    },
    {
        nombre: "Lucía Méndez", 
        edad: 22, 
        especialidad: "Urgencia",
        costo: 25000,
        ciudad: "santiago",
        estado: "pendiente"
    },
    {
        nombre: "Lucy",
         edad: 25, 
         especialidad: "Traumatologia",
         costo: 35000,
         ciudad: "santiago",
         estado: "pendiente"
    }    
  ]
)