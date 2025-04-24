#Declaramos una variable
try:
# el mentodo open sirve para abrir un archivo que ya existe o crear uno nuevo 
# el metodo write sirve para escribir en el archivo
# el encoding utf-8 sirve para guardar los acentos
  archivo = open("prueba.txt", "w", encoding="utf-8") 
  archivo.write("Programamos con diferentes tipos de archivos, ahora en txt\n") 
  archivo.write("Los acentos son importantes para las palabras\n")
  archivo.write("Como por ejemplo: acción, ejecución y producción\n")
  archivo.write("Las letras son: \nr = (read-leer), \nw = (write-escribe), \na = (append-anexa), \nx = (Crea un archivo)\n")
  archivo.write("t es para texto o text, \nb es para binario, \nw+ es para escribir y leer, \na+ es para anexar y leer\n")
  archivo.write("Saludos a toda la cohorte 2024 de la UTN\n")
  archivo.write("Con esto terminamos\n")
except Exception as e:
    print("Error al abrir el archivo:", e)
finally:   
  archivo.close() # el metodo close sirve para cerrar el archivo   
# archivo.write("Todo quedo perfecto") Esto es un error porque el archivo ya fue cerrado