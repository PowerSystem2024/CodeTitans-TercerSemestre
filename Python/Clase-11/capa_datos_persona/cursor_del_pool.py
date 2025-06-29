from logger_base import log  # Importamos el módulo de logging personalizado para registrar mensajes de depuración y errores
from conexion import Conexion  # Importamos la clase Conexion para manejar la conexión a la base de datos

class CursorDelPool:
    """
    Clase que representa un cursor de base de datos que utiliza un pool de conexiones.
    Permite obtener un cursor para realizar operaciones en la base de datos.
    """
    def __init__(self, conexion):
        self._conexion = None
        self._cursor = None
    
    def __enter__(self):
        log.debug("Inicio del metodo with y __enter__")
        self._conexion = Conexion.obtenerConexion()  # Obtenemos una conexión del pool
        self._cursor = self._conexion.cursor()
        return self._cursor  # Retornamos el cursor para su uso en el bloque with
    
    def __exit__(self, tipo_exception, valor_exception, detalle_exception):
        log.debug("Se ejecuta el metodo exit")
        if valor_exception:
            self._conexion.rollback()  # Si hay una excepción, hacemos rollback
            log.debug(f"Ocurrió una excepcion: {valor_exception}")
        else:
            self._conexion.commit()  # Si no hay excepción, hacemos commit
            log.debug("Commit de la transaccion")
        self._cursor.close()  # Cerramos el cursor
        Conexion.liberar_conexion(self._conexion)

if __name__ == "__main__":
    # Ejemplo de uso de CursorDelPool
    with CursorDelPool() as cursor:
        log.debug("Dentro del bloque with1")
        cursor.execute("SELECT * FROM persona")  # Ejecutamos una consulta
        registros = cursor.fetchall()  # Obtenemos todos los registros
        