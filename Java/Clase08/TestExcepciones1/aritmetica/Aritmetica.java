package aritmetica;

import excepciones.OperacionExcepcion;

public class Aritmetica {
    public static int division(int numerador, int denominador) {
        // Validar que el denominador no sea cero
        if (denominador == 0) {
            // Lanzar una excepción personalizada
            throw new OperacionExcepcion("Division entre cero");
        }
        return numerador / denominador;
    }
}
