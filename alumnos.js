db.alumnos.insertMany(
    [
        {
            nombre:"Carla",
            apeliido:"bravo",
            edad:20,
            asignaturas:
                 [

                    {
                       nombre: "Base de datos",
                       codigo: "cood1",
                       notas:[20, 54, 70]


                    }
                 ]
        },
        {   
            nombre:"Byron",
            apeliido:"osses",
            edad:20,
            asignaturas:
                [
                    {
                        nombre:"matematicas",
                        codigo: "COD50",
                        notas: [50, 49, 70]

                    }
                ]

        },
        {
            nombre:"Alice",
            apeliido:"demara",
            edad:22,
            asignaturas:
                 [
                    {
                      nombre: "Simetria geometrica",
                      codigo: "GEO05",
                      notas: [70, 70, 70]

                    }
                 ]




        },
        {
            nombre: "Diego",
            apeliido: "Salazar",
            edad: 21,
            asignaturas: [
                {
                    nombre: "Programación Web",
                    codigo: "WEB101",
                    notas: [60, 55, 40]
                }
            ]
        },
        {
            nombre: "Elena",
            apeliido: "Méndez",
            edad: 23,
            asignaturas: [
                {
                    nombre: "Inteligencia Artificial",
                    codigo: "IA200",
                    notas: [70, 68, 70]
                }
            ]
        },
        {
            nombre: "Fernando",
            apeliido: "Rojas",
            edad: 19,
            asignaturas: [
                {
                    nombre: "Cálculo I",
                    codigo: "MAT01",
                    notas: [30, 45, 50]
                }
            ]
        },
        {
            nombre: "Gabriela",
            apeliido: "Vargas",
            edad: 24,
            asignaturas: [
                {
                    nombre: "Redes de Datos",
                    codigo: "RED08",
                    notas: [55, 62, 58]
                }
            ]
        },
        {
            nombre: "Héctor",
            apeliido: "Soto",
            edad: 20,
            asignaturas: [
                {
                    nombre: "Sistemas Operativos",
                    codigo: "SO44",
                    notas: [40, 42, 35]
                }
            ]
        },
        {
            nombre: "Isabel",
            apeliido: "Pinto",
            edad: 22,
            asignaturas: [
                {
                    nombre: "Ética Profesional",
                    codigo: "ETI01",
                    notas: [70, 70, 65]
                }
            ]
        },
        {
            nombre: "Joaquín",
            apeliido: "Valencia",
            edad: 21,
            asignaturas: [
                {
                    nombre: "Álgebra Lineal",
                    codigo: "MAT02",
                    notas: [45, 50, 60]
                }
            ]
        }


    ]
    )