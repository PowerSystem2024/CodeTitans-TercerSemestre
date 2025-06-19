from logger_base import log


#Creamos la clase persona
class Persona:
    def __init__(self, id_persona=None, nombre=None, apellido=None, email=None):
        self.id_persona = id_persona
        self.nombre = nombre
        self.apellido = apellido
        self.email = email
        
        
        #Cremos el metodo str
    def __str__(self):
        return f"""
        ID Persona: {self.id_persona}, 
        Nombre: {self.nombre}, 
        Apellido: {self.apellido}, 
        Email: {self.email}"
        """
        
    #Meetodos getters y setters
    @property
    def id_persona(self):
        return self._id_persona
        
    @id_persona.setter
    def id_persona(self, id_persona):
        self._id_persona = id_persona

    @property
    def nombre(self):
        return self._nombre

    @nombre.setter
    def nombre(self, nombre):
        self._nombre = nombre

    @property
    def apellido(self):
        return self._apellido

    @apellido.setter
    def apellido(self, apellido):
        self._apellido = apellido

    @property
    def email(self):
        return self._email

    @email.setter
    def email(self, email):
        self._email = email
        
        
#Hacemos una comprobacion y creamos el primer objeto
if __name__ == "__main__":
    persona1 = Persona(1, "Juan", "Perez", "juan.perez@example.com")
    log.debug(persona1)
    persona2 = Persona(nombre="Maria", apellido="Lopez", email="maria87@mail.com")
    log.debug(persona2)
    persona1 = Persona(id_persona=1)
    log.debug(persona1)