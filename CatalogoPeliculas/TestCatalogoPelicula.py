from Dominio.Init import Pelicula
#from Dominio.Peliculas import Pelicula
from Servicio.CatalogoPelicula import CatalogoPeliculas

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
                pelicula = Pelicula(nombre)
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
