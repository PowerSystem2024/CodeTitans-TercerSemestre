#En este archivo vamos a crear excepciones personalizadas 

class NumerosIgualesException(Exception): #Creamos una clase que hereda de la clase Exception
    def __init__(self, mensaje): #Definimos el constructor de la clase
        self.mensaje = mensaje #Inicializamos el atributo mensaje con el valor pasado como argumento
    # def __str__(self): #Definimos el método __str__ para devolver una representación en cadena del objeto
    #     return self.mensaje #Devolvemos el mensaje de error personalizado