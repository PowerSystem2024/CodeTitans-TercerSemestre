# Probando los modos que hay para leer un archivo

#Las letras r, w, a, x son los modos de apertura de archivos
# r = leer, w = escribir, a = agregar, x = crear (si no existe)
# a = agregar (si existe lo abre y agrega al final)
# x = crear (si no existe lo crea y si existe da error)
# w = escribir (si existe lo abre y lo sobreescribe)

archivo = open("prueba.txt", "r", encoding="utf-8") # el modo r es para leer el archivo
# print(archivo.read()) # el metodo read sirve para leer el archivo completo
# print(archivo.read(16)) 
# print(archivo.read(10)) # el metodo read(n) sirve para leer n caracteres
#print(archivo.readline()) # el metodo readline nos lee la primera linea del archivo

#Vamos a iterar el archivo para leerlo linea por linea
# for linea in archivo:
#     #print(linea) # el metodo readline nos lee la primera linea del archivo
#     print(archivo.readlines()) # el metodo readlines nos lee todas las lineas del archivo y las guarda en una lista

# Anexamos informacion al archivo

archivo2 = open("copia.txt", "w", encoding="utf-8") # Cambiamos la a por la w para que no se anexe sino que se sobrescriba el archivo
archivo2.write(archivo.read( ))
archivo.close() # cerramos el archivo
archivo2.close() # cerramos el archivo2

print("Se ha terminado el proceso de leer y copiar archivos")