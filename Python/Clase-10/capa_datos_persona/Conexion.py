# Permite usar sys.exit(1) para cerrar el programa si hay un error grave (por ejemplo,
# no se puede conectar a la base de datos).
import sys
from asyncio import start_server

# Importa la librería para conectarse a bases de datos PostgreSQL.
#  Se le pone el alias bd para usarlo más fácilmente en el código.
from psycopg2 import pool
# psycopg2 as db es otra manera de importar el psycop2
# Importa logger que configuramos para el manejo de errores
from logger_base import log
'''
✅ ¿Por qué usar un pool de conexiones?
Cuando una aplicación necesita acceder a una base de datos muchas veces (por ejemplo, un sitio web o una API), hacer esto:

python
Copiar
Editar
conexion = psycopg2.connect(...)  # crear nueva conexión cada vez
es costoso y lento, porque:

Crear una conexión a la base de datos consume recursos (abrir un socket, autenticar, etc.).

Cerrar la conexión también cuesta tiempo.

Si 100 usuarios acceden a la vez, crear 100 conexiones puede saturar la base de datos.

Abrir y cerrar conexiones repetidamente ralentiza tu aplicación.

👉 Por eso, un pool de conexiones crea un conjunto de conexiones listas para usarse. En vez de crear una conexión nueva cada vez, se reutiliza una ya existente.
'''
class Conexion:
    _DATABASE = 'test_bd'
    _USERNAME = 'postgres'
    _PASSWORD = 'Huntdown089'
    _DB_PORT = 5432
    _HOST = '127.0.0.1'
    _MIN_CON = 1 # minconn: el número mínimo de conexiones que se crean de entrada.
    _MAX_CON = 2 # numero maximo de conexiones
    _pool = None

    @classmethod
    # Esto es un método de clase, no de instancia.
    #  Se usa cls(class) en lugar de self porque se refiere a la clase, no a un objeto.
    def obtenerConexion(cls):
        conexion = cls.obtenerPool().getconn() # getconn se encarga de regresar un objeto de conexion hacia la base de datos
        log.debug(f'Conexion obtenida del pool: {conexion}')
        return conexion



    @classmethod
    def obtenerCursor(cls):
        pass

    @classmethod
    def obtenerPool(cls):
        if cls._pool is None:
            try:
                cls._pool = pool.SimpleConnectionPool(cls._MIN_CON,
                                                      cls._MAX_CON,
                                                      host=cls._HOST,
                                                      user=cls._USERNAME,
                                                      password=cls._PASSWORD,
                                                      port=cls._DB_PORT,
                                                      database = cls._DATABASE)
                log.debug(f'Creacion del pool exitosa: {cls._pool}')
                return cls._pool
            except Exception as e:
                log.error(f'Error al obtener el pool: {e}')
                sys.exit()
        else:
            return cls._pool




if __name__ == '__main__':
    conexion1 = Conexion.obtenerConexion()
    conexion2 = Conexion.obtenerConexion()