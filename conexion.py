from pymongo import MongoClient

def conexionMongo():
    url ="mongodb://localhost:27017"
    mongoCliente = MongoClient(url)
    db= mongoCliente['inacap']
    coleccion = db['alumno']
    print(coleccion)
    return coleccion


coleccion = conexionMongo()

#insertOne --> insert_one
#insertMany --> insert_many

def insertarAlumno():
    #db.alumno.insertOne({"nombre": "carla", "apellido":"Bravo"})
    nombre = input("ingrese su nombre para registrar: ")
    apellido = input("ingrese su apeliido para registrar: ")
    coleccion.insert_one({"nombre": nombre, "apellido": apellido})
#insertarAlumno()

#def actualizarAlumno():
    #db.alumno.updateOne({filtro},{actualizacion})
    #db.alumno.updateOne({"nombre": "carla"},{$set: {"apellido": "Zabrano"}})
    nombre = input("ingrese el nombre del alumno que desea actualizar: ")
    nuevoapellido = input("ingrese el nuevo apellido: ")
    coleccion.update_one({"nombre": nombre},{"$set": {"apellido": nuevoapellido}})
    print("se actualizo correctamente")
#actualizarAlumno()


def eliminarAlumno():
    #db.alumno.deleteOne({"nombre": "carla"})
    nombre = input("ingrese el nombre del alumno que desea eliminar: ")
    coleccion.delete_one({"nombre":nombre})
eliminarAlumno()
