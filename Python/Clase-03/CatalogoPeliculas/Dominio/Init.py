class Pelicula:
    def __init__(self, nombre: str):
        self.nombre = nombre

    def __str__(self):
        return f"Pelicula: {self.nombre}"