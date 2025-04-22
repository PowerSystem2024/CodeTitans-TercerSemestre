import os

class CatalogoPeliculas:
    ruta_archivo = "peliculas.txt"

    @staticmethod
    def agregar_pelicula(pelicula):
        with open(CatalogoPeliculas.ruta_archivo, "a", encoding="utf-8") as archivo:
            archivo.write(pelicula.nombre + "\n")

    @staticmethod
    def listar_peliculas():
        try:
            with open(CatalogoPeliculas.ruta_archivo, "r", encoding="utf-8") as archivo:
                print("\nListado de Películas:")
                print("----------------------")
                for linea in archivo:
                    print(linea.strip())
        except FileNotFoundError:
            print("No hay archivo de películas. Agrega una primero.")

    @staticmethod
    def eliminar():
        if os.path.exists(CatalogoPeliculas.ruta_archivo):
            os.remove(CatalogoPeliculas.ruta_archivo)
            print("Archivo eliminado correctamente.")
        else:
            print("No existe el archivo a eliminar.")
#test CatalogoPeliculas

from Dominio.Peliculas import Peliculas
from CatalogoPelicula import CatalogoPelicula

def menu():
    opcion = -1
    while opcion != 4:
        print("\n--- Menú del Catálogo de Películas ---")
        print("1) Agregar película")
        print("2) Listar películas")
        print("3) Eliminar archivo de películas")
        print("4) Salir")
        try:
            opcion = int(input("Selecciona una opción (1-4): "))
            if opcion == 1:
                nombre = input("Nombre de la película: ")
                pelicula = Peliculas(nombre)
                CatalogoPelicula.agregar_pelicula(pelicula)
            elif opcion == 2:
                CatalogoPelicula.listar_peliculas()
            elif opcion == 3:
                CatalogoPelicula.eliminar()
            elif opcion == 4:
                print("¡Hasta luego!")
            else:
                print("Opción no válida.")
        except ValueError:
            print("Por favor, ingresa un número válido.")

if __name__ == "__main__":
    menu()