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

            sentencia = 'INSERT INTO  persona (nombre, apellido, email) VALUES (%s, %s, %s)' # Definimos la sentencia SQL para insertar datos en la tabla persona
            valores = ("Gustavo", "Ramirez", "ramires22@test.com" ) # Definimos los valores a insertar en la tabla persona
            cursor.execute(sentencia, valores) # Ejecutamos la consulta
            resultado_insertados = cursor.rowcount # Obtenemos el número de filas insertadas
            print(f"Se han insertado {resultado_insertados} registros en la tabla persona") 
                      
except Exception as e:
    print(f"Error de conexión detallado: {e}")
finally:
    conexion.close() # Cerramos la conexión a la base de datos




