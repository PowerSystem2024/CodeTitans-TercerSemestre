
from logger_base import log

class Persona:
    # Le asignamos el valor de None a las variables para que cuando creamos un objeto de tipo Persona
    # no sea necesario asignarle valor a todas las variables
    def __init__(self, id_persona=None, nombre=None, apellido=None, email=None):
        self.id_persona = id_persona
        self.nombre = nombre
        self.apellido = apellido
        self.email = email

    def __str__(self):
        return (f'''
        id_persona: {self.id_persona}
        nombre: {self.nombre}
        apellido: {self.apellido}
        email: {self.email}
        ''')

    # Metodos Getters and Setters
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

if __name__ == '__main__':
    persona1 = Persona(1, 'Juan', 'Perez', 'jperez@gmail.com')
    log.debug(persona1)
    # aqui asignamos valores de nombre, apellido y email para que no se cruze la informacion y tome
    # a Jose como el id_persona
    persona2 = Persona(nombre='Jose', apellido='Lopez', email='ljose@gmail.com')
    log.debug(persona2)
    persona1 = Persona(id_persona=1)
    log.debug(persona1)