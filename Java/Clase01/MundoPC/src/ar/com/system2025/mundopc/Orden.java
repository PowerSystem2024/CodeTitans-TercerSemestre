package ar.com.system2025.mundopc;

import java.util.Arrays;
import java.util.List;

public class Orden{

    private static int contadorOrdenes;
    private final int idOrden;
    private Computadora computadora[];
    private static final int MAX_COMPUTADORAS = 10;
    private int contadorComputadora;

    public Orden() {
        this.idOrden = ++contadorOrdenes;
        //Computadora[] computadora = new Computadora[Orden.MAX_COMPUTADORAS];
        // Esto es solo una variable local del mét odo o del constructor,
        // no afecta al atributo this.computadora de la clase.
        // Se crea una copia local que solo vive dentro de ese bloque.

        this.computadora = new Computadora[Orden.MAX_COMPUTADORAS];
        // Crea un array vacío de objetos Computadora en la variable computadora definida en la clase orden para
        // usar en otras clases y objetos
        // , con tamaño máximo definido por MAX_COMPUTADORAS
    }

    public void agregarComputadora(Computadora computadora){
        if(this.contadorComputadora < Orden.MAX_COMPUTADORAS){
            //Computadora[] computadora = new Computadora[Orden.MAX_COMPUTADORAS];
            //Eso es solo una variable local del método o del constructor,
            // no afecta al atributo this.computadora de la clase.
            // Se crea una copia local que solo vive dentro de ese bloque.

            this.computadora[this.contadorComputadora++] = computadora;
            //Agregá esta computadora al arreglo, en la posición actual del contador,
            // y luego aumentá el contador en 1."

        }else {
            System.out.println("Numero de ordenes maximas alcanzado: " + MAX_COMPUTADORAS);
        }
    }

    public void mostrarOrden(){
        System.out.println("\nidOrden :" + this.idOrden);
        System.out.println("Computadoras de la orden: " + contadorComputadora);
        for (int i = 0; i < this.contadorComputadora; i++) {
            System.out.println(this.computadora[i]);
        }
    }


}

