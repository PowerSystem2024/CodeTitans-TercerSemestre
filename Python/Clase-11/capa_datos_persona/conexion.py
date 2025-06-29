import os  # Importamos el módulo os para acceder a las variables de entorno
from dotenv import (
    load_dotenv,
)  # Importamos load_dotenv para cargar las variables de entorno desde el archivo .env
from psycopg2 import (
    pool,
)  # Importamos psycopg2 para conectarnos a la base de datos PostgreSQL

# pyscopg2 = bd Esta es otra forma de importar y de darle el nombre que queramos al módulo
from logger_base import (
    log,
)  # Importamos el módulo de logging personalizado para registrar mensajes de depuración y errores
import sys  # Importamos sys para manejar excepciones y errores

# Cargamos las variables de entorno desde el archivo .env
load_dotenv()


# Hacemos la conexion a la base de datos
class Conexion:
    _DATABASE = os.getenv("DB_NAME")
    _USERNAME = os.getenv("DB_USER")
    _PASSWORD = os.getenv("DB_PASSWORD")
    _HOST = os.getenv("DB_HOST")
    _PORT = os.getenv("DB_PORT")
    _MIN_CONNECTIONS = 1  # Número mínimo de conexiones
    _MAX_CONNECTIONS = 5  # Número máximo de conexiones
    _pool = None  # Inicializamos la variable de pool de conexiones

    # Creamos el metodo para conectar a la base de datos
    @classmethod
    def conectar(cls):
        conexion = cls.obtenerPool().getconn()  # Obtenemos una conexión del pool
        log.debug(
            f"Conexión obtenida del pool: {conexion}"
        )  # Registramos la conexión obtenida
        return conexion  # Devolvemos la conexión
    
    @classmethod
    def obtenerPool(cls):
        """
        Método para obtener el pool de conexiones.
        Si el pool no ha sido creado, lo crea.
        """
        if cls._pool is None:
            try:
                cls._pool = pool.SimpleConnectionPool(
                    cls._MIN_CONNECTIONS,
                    cls._MAX_CONNECTIONS,
                    database=cls._DATABASE,
                    user=cls._USERNAME,
                    password=cls._PASSWORD,
                    host=cls._HOST,
                    port=cls._PORT,
                )
                log.debug(f"Pool de conexiones creado exitosamente: {cls._pool}")
                return cls._pool  # Retornamos el pool de conexiones creado
            except Exception as e:
                log.error(f"Error al crear el pool de conexiones: {e}")
                sys.exit()  # Salimos del programa si hay un error al crear el pool
        else:
            return cls._pool


    @classmethod
    def liberar_conexion(cls, conexion):
        cls.obtenerPool().putconn(conexion)  # Liberamos la conexión al pool
        log.debug(f"Regresamos la conexion del pool: {conexion}")

    @classmethod
    def cerrar_conexiones(cls):
        """
        Método para cerrar todas las conexiones del pool.
        """
        cls.obtenerPool().closeall()  # Cerramos todas las conexiones del pool

# Generamos una prueba
if __name__ == "__main__":
    """Prueba de conexión a la base de datos utilizando el pool de conexiones.
    Crea varias conexiones para verificar que el pool funciona correctamente.
    En este caso, se crean 5 conexiones y se imprimen sus identificadores
    Si creamos más conexiones de las que el pool permite, se generará un error.
    También se puede probar cerrando las conexiones para liberar recursos.
    """
    conexion1 = Conexion.conectar()
    Conexion.liberar_conexion(conexion1)  # Liberamos la conexión al pool
    conexion2 = Conexion.conectar()
    Conexion.liberar_conexion(conexion2)
    conexion3 = Conexion.conectar()
    Conexion.liberar_conexion(conexion3)
    conexion4 = Conexion.conectar()
    conexion5 = Conexion.conectar()
    conexion6 = Conexion.conectar()
    