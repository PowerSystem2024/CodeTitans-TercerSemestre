from Persona import Persona  # Importamos la clase Persona desde el módulo Persona
from capa_datos_persona.cursor_del_pool import CursorDelPool
from conexion import (
    Conexion,
)  # Importamos la clase Conexion para manejar la conexión a la base de datos
from logger_base import (
    log,
)  # Importamos el módulo de logging personalizado para registrar mensajes de depuración y errores


class PersonaDAO:
    """
    DAO (Data Access Object) para manejar operaciones de base de datos relacionadas con la entidad Persona.
    CRUD:   Create: insertar
            Read: seleccionar
            Update: actualizar
            Delete: eliminar

    """

    # Creamos las constantes para las operaciones CRUD
    _SELECCIONAR = "SELECT * FROM persona ORDER BY id_persona"
    _INSERTAR = "INSERT INTO persona(nombre, apellido, email) VALUES(%s, %s, %s)"
    _ACTUALIZAR = (
        "UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s"
    )
    _ELIMINAR = "DELETE FROM persona WHERE id_persona=%s"

    # Definimos los metodos de clase
    @classmethod
    def seleccionar(cls):        
        with CursorDelPool() as cursor:
            cursor.execute(cls._SELECCIONAR)
            registros = cursor.fetchall()
            personas = []  # creamos una lista para almacenar las personas
            # Iteramos sobre los registros obtenidos de la base de datos y creamos objetos Persona
            for registro in registros:
                persona = Persona(
                    registro[0], registro[1], registro[2], registro[3]
                )
                personas.append(persona)

            return personas

    # Cremos el metodo insertar "insert"
    @classmethod
    def insertar(cls, persona):        
        with CursorDelPool() as cursor:
            valores = (persona.nombre, persona.apellido, persona.email)
            cursor.execute(cls._INSERTAR, valores)
            log.debug(f"Persona insertada: {persona}")
            return cursor.rowcount  # Retorna el número de filas afectadas

        # Cremos el metodo actualizar "update"

    @classmethod
    def actualizar(cls, persona):        
        with CursorDelPool() as cursor:
            valores = (
                persona.nombre,
                persona.apellido,
                persona.email,
                persona.id_persona,
            )
            cursor.execute(cls._ACTUALIZAR, valores)
            log.debug(f"Persona actualizada: {persona}")
            return cursor.rowcount  # Retorna el número de filas afectadas

        # Cremos el metodo eliminar "delete"

    @classmethod
    def eliminar(cls, id_persona):
        with Conexion.conectar():
            with Conexion.obtener_cursor() as cursor:
                cursor.execute(cls._ELIMINAR, (id_persona,))
                log.debug(f"Persona eliminada con ID: {id_persona}")
                return cursor.rowcount  # Retorna el número de filas afectadas


if __name__ == "__main__":
    # Eliminar un registro existente
    persona1 = Persona(id_persona=8)
    personas_eliminadas = PersonaDAO.eliminar(persona1.id_persona)
    log.debug(f"Personas eliminadas: {personas_eliminadas}")

    # Actualizar un registro existente
    persona1 = Persona(6, "Sigmund", "Freud", "sfreud@utn.com")
    personas_actualizadas = PersonaDAO.actualizar(persona1)
    log.debug(f"Personas actualizadas: {personas_actualizadas}")

    # Insertar un nuevo objeto
    persona1 = Persona(nombre="luca", apellido="perancho", email="perancholuc@utn.com")
    personas_insertadas = PersonaDAO.insertar(persona1)
    log.debug(f"Personas insertadas: {personas_insertadas}")

    # Seleccionar objetos
    personas = PersonaDAO.seleccionar()
    for persona in personas:
        log.debug(persona)
