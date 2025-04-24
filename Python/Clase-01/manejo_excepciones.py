from NumerosIgualesException import NumerosIgualesException #Importamos la clase NumerosIgualesException 

#Manejo de excepciones
#Ejemplo

#Creamos una variable
resultado = None #Inicializamos la variable resultado como None
#a = 10 #Con este valor podemos probar la excepción ZeroDivisionError
# a = "10" #Con este valor podemos probar la excepción TypeError
#b = 0 #Con este valor se supone que estamos haciendo las cosas "mal" y generando un error
# b = 2 #Con este valor no generamos un error


try: 
    #Creamos variables dentro del try para pedirle al usuario que ingrese un valor
    a = int(input("Ingrese el primer número: ")) #Pedimos al usuario que ingrese un número y lo convertimos a entero
    b = int(input("Ingrese el segundo número: ")) #Pedimos al usuario que ingrese otro número y lo convertimos a entero
    if a == b:
        raise NumerosIgualesException("Los números son iguales")
    #Si los números son iguales, lanzamos la excepción personalizada NumerosIgualesException con un mensaje
    resultado = a / b #Intentamos dividir a entre b, pero b es 0, lo que genera un error
    print(f"El resultado es: {resultado}") #Si no ocurre un error, se imprime el resultado
except TypeError as e: #Capturamos el error de tipo con la excepción TypeError
    print(f"TypeError: Tipo de dato no válido. {type (e)}")     
except ZeroDivisionError as e: #Capturamos el error de división por cero con la excepción ZeroDivisionError
    print(f"ZeroDivisionError: No se puede dividir entre cero. {type (e)}")    
except Exception as e: #Capturamos cualquier otro error que pueda ocurrir con la excepción genérica Exception (clase padre que debe ir al final ya que se ejecuta primero)
    print(f"Exception: Ocurrió un error inesperado. {type (e)}")
else: #El bloque else se ejecuta si no ocurre ningún error en el try
    print("No hubo errores")    
finally: #El bloque finally se ejecuta siempre, independientemente de si ocurre un error o no
    print("Ejecutando el bloque finally")
    



# try: #Dentros del try se coloca el bloque de codigo que puede generar un error
#     10/0 #En este caso va a dar error porque no se puede dividir entre 0
#     #10/2 #En este caso no va a dar error porque se puede dividir entre 2
# except Exception as e: #El bloque except se ejecuta si ocurre un error en el try (capturamos el error)
#     print("Ocurrio un error: {e}")
