from ManejoArchivos import ManejoArchivos
#Manejo de contexto con with
#Sintaxis simplificada para abrir y cerrar archivos
#Con el with no es necesario cerrar el archivo, se cierra automaticamente

# with open("prueba.txt", "r", encoding="utf-8") as archivo:
#     print(archivo.read()) 
#No hace falta ni el try ni el finally, ya que el with se encarga de cerrar el archivo automaticamente
#Utiliza diferentes metodos: __enter__ y __exit__ para abrir y cerrar el archivo

#Usamos la clase ManejoArchivos que creamos
with ManejoArchivos("prueba.txt") as archivo:
    print(archivo.read())