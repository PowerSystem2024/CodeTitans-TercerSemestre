from Dominio.Peliculas import Peliculas
<<<<<<< HEAD:CatalogoPeliculas/TestCatalogoPelicula.py
from Servicio.CatalogoPelicula import CatalogoPelicula
=======
from Servicio.CatalogoPelicula import CatalogoPeliculas
>>>>>>> 0ed5300dfe78de5d0f90f3a79fd69ee1b5fbc0e8:Python/Clase-03/CatalogoPeliculas/TestCatalogoPelicula.py

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
                CatalogoPeliculas.agregar_pelicula(pelicula)
            elif opcion == 2:
                CatalogoPeliculas.listar_peliculas()
            elif opcion == 3:
                CatalogoPeliculas.eliminar()
            elif opcion == 4:
                print("¡Hasta luego!")
            else:
                print("Opción no válida.")
        except ValueError:
            print("Por favor, ingresa un número válido.")

if __name__ == "__main__":
    menu()
