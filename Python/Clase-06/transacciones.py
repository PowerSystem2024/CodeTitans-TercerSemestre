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
    conexion.autocommit = False # Desactivamos el autocommit para manejar transacciones manualmente
    cursor = conexion.cursor() # Creamos un cursor para ejecutar consultas SQL
    sentencia = "INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)"
    valores = ("Juana", "Pérez", "juana14@test.com")
    cursor.execute(sentencia, valores) # Ejecutamos la sentencia SQL con los valores proporcionados
    conexion.commit() # Confirmamos la transacción
    print("Termina la transacción")
except Exception as e:
    conexion.rollback() # Si hay un error, revertimos la transacción
    print(f"HAy un error, se hizo un rollback: {e}")
finally:
    conexion.close() # Cerramos la conexión a la base de datos




