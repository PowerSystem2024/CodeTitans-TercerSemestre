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
