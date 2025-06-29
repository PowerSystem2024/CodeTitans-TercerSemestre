# Importamos Psycopg2 es una librería de Python que sirve como un adaptador para conectarse y trabajar con bases de datos PostgreSQL
import psycopg2 
import os # Importamos el módulo os para acceder a las variables de entorno
from dotenv import load_dotenv # Importamos load_dotenv para cargar las variables de entorno desde el archivo .env

# Cargamos las variables de entorno desde el archivo .env
load_dotenv()

# Conectamos a la base de datos
conexion = psycopg2.connect(
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    host=os.getenv("DB_HOST"),
    port=os.getenv("DB_PORT"),
    database=os.getenv("DB_NAME")
)
    
print(conexion)
try:
    with conexion:
        with conexion.cursor() as cursor:
            #sentencia = 'SELECT * FROM persona' # Consulta SQL para seleccionar todos los registros de la tabla persona
            #sentencia = 'SELECT * id_persona, nombre FROM persona' # para seleccionar el id_persona y nombre de la tabla persona
            sentencia = 'SELECT * FROM persona WHERE id_persona = %s' # para seleccionar un registro específico de la tabla persona
            #id_persona = 2 # ID de la persona que queremos seleccionar
            id_persona = input("Ingrese el ID de la persona que desea consultar: ")
            cursor.execute(sentencia, (id_persona,)) # Le pasamos la sentencia y el id_persona como parámetro
            #cursor.execute(sentencia) # Ejecutamos la consulta
            #resultado = cursor.fetchall() # Obtenemos todos los resultados de la consulta
            resultado = cursor.fetchone() # Obtenemos un solo resultado de la consulta
            print(resultado)
except Exception as e:
    print(f"Error de conexión detallado: {e}")
finally:
    conexion.close() # Cerramos la conexión a la base de datos




