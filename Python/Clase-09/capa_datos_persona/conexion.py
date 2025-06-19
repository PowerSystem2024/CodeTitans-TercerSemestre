import os # Importamos el módulo os para acceder a las variables de entorno
from dotenv import load_dotenv # Importamos load_dotenv para cargar las variables de entorno desde el archivo .env
import psycopg2 as bd # Importamos psycopg2 para conectarnos a la base de datos PostgreSQL
#pyscopg2 = bd Esta es otra forma de importar y de darle el nombre que queramos al módulo
from logger_base import log # Importamos el módulo de logging personalizado para registrar mensajes de depuración y errores
import sys # Importamos sys para manejar excepciones y errores

# Cargamos las variables de entorno desde el archivo .env
load_dotenv()


#Hacemos la conexion a la base de datos
class Conexion:
    _DATABASE =os.getenv("DB_NAME")
    _USERNAME =os.getenv("DB_USER")
    _PASSWORD =os.getenv("DB_PASSWORD")
    _HOST =os.getenv("DB_HOST")
    _PORT =os.getenv("DB_PORT")
    _conexion =None
    _cursor =None
    
    
    #Creamos el metodo para conectar a la base de datos
    @classmethod
    def conectar(cls):
        if cls._conexion is None:
            try:
                cls._conexion = bd.connect(
                    database=cls._DATABASE,
                    user=cls._USERNAME,
                    password=cls._PASSWORD,
                    host=cls._HOST,
                    port=cls._PORT
                )
                log.debug(f"Conexión a la base de datos {cls._DATABASE} exitosa.")
                return cls._conexion
            except Exception as e:
                log.error(f"Error al conectar a la base de datos: {e}")
                sys.exit()
        else:
            return cls._conexion  
        
        
    @classmethod
    def obtener_cursor(cls):
        if cls._cursor is None:
            try:
                cls._cursor = cls.conectar().cursor()
                log.debug(f"Cursor obtenido exitosamente: {cls._cursor}")
                return cls._cursor
            except Exception as e:
                log.error(f"Error al obtener el cursor: {e}")
                sys.exit()  
        else:
            return cls._cursor    
        
        
#Generamos una prueba 
if __name__ == "__main__":
    Conexion.conectar()
    Conexion.obtener_cursor()
    