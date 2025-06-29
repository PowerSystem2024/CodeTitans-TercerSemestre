# Importamos Psycopg2 es una librería de Python que sirve como un adaptador para conectarse y trabajar con bases de datos PostgreSQL
import psycopg2 as bd
import os # Importamos el módulo os para acceder a las variables de entorno
from dotenv import load_dotenv # Importamos load_dotenv para cargar las variables de entorno desde el archivo .env

# Cargamos las variables de entorno desde el archivo .env
load_dotenv()

# Conectamos a la base de datos
conexion = bd.connect(
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    host=os.getenv("DB_HOST"),
    port=os.getenv("DB_PORT"),
    database=os.getenv("DB_NAME")
)
    
print(conexion)
try:
    with conexion:
        with conexion.cursor() as cursor: # Creamos un cursor para ejecutar consultas SQL
            
            sentencia = "INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)"
            valores = ("Alejo", "Alonso ", "alonso8@test.com")
            cursor.execute(sentencia, valores) # Ejecutamos la sentencia SQL con los valores proporcionados
            
            sentencia = "UPDATE persona SET nombre=%s, apellido=%s, email = %s WHERE id_persona = %s"
            valores = ("Jose Carlos", "Ramirez", "ramirezdev@example.com", 1)
            cursor.execute(sentencia, valores) # Ejecutamos la sentencia SQL con los valores proporcionados
            
except Exception as e:
    
    print(f"Hay un error, se hizo un rollback: {e}")
finally:
    conexion.close() # Cerramos la conexión a la base de datos

# Imprimimos un mensaje indicando que la transacción ha terminado
print("Termina la transacción")
