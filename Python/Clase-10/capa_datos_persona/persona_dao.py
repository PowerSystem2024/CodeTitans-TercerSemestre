from capa_datos_persona.Conexion import Conexion
from capa_datos_persona.Persona import Persona
from logger_base import log

class PersonaDAO:
    '''
    DAO significa: Data Access Object
    CRUD significa:
                    Create -> Insertar
                    Read -> Seleccionar
                    Update -> Actualizar
                    Delete -> Eliminar

    '''

    _SELECCIONAR = 'SELECT * FROM persona ORDER BY id_persona'
    _INSERTAR = 'INSERT INTO PERSONA(nombre, apellido, email) VALUES(%s, %s, %s)'
    _ACTUALIZAR = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    _DELETE = 'DELETE FROM persona WHERE id_persona=%s'

    # Definimos los metodos de clase

    @classmethod
    # definimos metodo seleccionas(usamos cls para hacer referencia a la clase PersonaDao)
    def seleccionar(cls):
        with Conexion.obtenerConexion(): # Inicia un bloque de contexto with con la conexion a la base de datos
            with Conexion.obtenerConexion().cursor() as cursor: # 🔹 Crea un cursor (es decir, un objeto para ejecutar comandos SQL sobre la base de datos).
                cursor.execute(cls._SELECCIONAR) # ejecutamos consulta sql
                registros = cursor.fetchall() # Recupera todos los resultados de la consulta SQL y los guarda como una lista de tuplas.
                personas = [] #Creamos una lista
                #  for registro in registros: Itera sobre cada tupla en la lista registros.
                #  Cada registro es una fila de la tabla (una tupla con 4 elementos).
                for registro in registros:
                    # aqui creamos una instancia(objeto persona) de la clase Persona
                    persona = Persona(registro[0], registro[1], registro[2], registro[3]) # cada registro es por cada columna
                    # Esto  crea una lista (personas) de objetos Persona — uno por cada fila del resultado SQL.
                    personas.append(persona)
                return personas




    @classmethod
    def insertar(cls, persona):
        with Conexion.obtenerConexion():
            with Conexion.obtenerConexion().cursor() as cursor:
                valores = (persona.nombre, persona.apellido, persona.email)
                cursor.execute(cls._INSERTAR, valores)
                log.debug(f'Persona Insertada: {persona}')
                return cursor.rowcount # Devuelve un entero que indica cuántas filas fueron afectadas por la última operación

    @classmethod
    def actualizar(cls, persona):
        with Conexion.obtenerConexion():
            with Conexion.obtenerConexion().cursor() as cursor:
                valores =  (persona.nombre, persona.apellido, persona.email, persona.id_persona)
                cursor.execute(cls._ACTUALIZAR, valores)
                log.debug(f'Persona Actualizada: {persona}')
                return cursor.rowcount

    @classmethod
    def eliminar(cls, persona):
        with Conexion.obtenerConexion():
            with Conexion.obtenerConexion().cursor() as cursor:
                valor = persona.id_persona
                cursor.execute(cls._DELETE, (valor,))
                log.debug(f'Persona Eliminada: {persona}')
                return cursor.rowcount

#  Esta condición se cumple solo si ejecutás el archivo directamente (no si lo importás como módulo).
if __name__ == '__main__':
    # Insertar un registro
    persona1 = Persona(nombre='Pedro', apellido='Romero', email='promero@gmail.com')
    personas_insertadas = PersonaDAO.insertar(persona1)
    log.debug(f'Personas insertadas: {personas_insertadas}')

    # Actualizar un registro
    persona2 = Persona(4, 'Juan', 'Perez', 'jperez@gmail.com')
    personas_actualizadas = PersonaDAO.actualizar(persona2)
    log.debug(f'Personas actualizadas: {personas_actualizadas}')

    # Eliminar registro
    personaEliminar = Persona(id_persona=4)
    personas_eliminadas = PersonaDAO.eliminar(personaEliminar)
    log.debug(f'Personas eliminadas: {personas_eliminadas}')

    # Seleecionar objetos
    personas = PersonaDAO.seleccionar() #  (lista de objetos Persona) en la variable personas.
    for persona in personas: # recorre a lista de objetos persona
        log.debug(persona) #  Muestra en consola un mensaje a nivel DEBUG usando log.
                           #  Esto imprime el objeto persona, que se verá como un string si tu clase Persona implementa __str__() o __repr__().


