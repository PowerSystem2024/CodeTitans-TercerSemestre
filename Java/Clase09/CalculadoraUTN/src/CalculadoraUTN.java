import java.util.Scanner;

public class CalculadoraUTN {
    public static void main(String[] args) {
        // Usamos la clase Scanner para leer datos desde la consola
        Scanner entrada = new Scanner(System.in);
        // Metemos nuestro programa en un bucle while para que se ejecute hasta que el
        // usuario decida salir
        while (true) {

            System.out.println("******* Aplicacion Calculadora *******");
            // Llamamos al método para mostrar el menú de opciones
            mostrarMenu();

            // Hacemos el uso del manejo de excepciones para evitar errores
            try {
                var operacion = Integer.parseInt(entrada.nextLine()); // Leemos la opción elegida
                // Creamos un condicional para comprobar la opción elegida
                if (operacion >= 1 && operacion <= 4) {

                    // Llamamos al método para ejecutar la operación elegida
                    ejecutarOperacion(operacion, entrada);

                } // Fin del if
                else if (operacion == 5) {
                    System.out.println("Saliendo de la calculadora...");
                    break; // Salimos del bucle while y terminamos el programa
                } // Fin del else if
                else {
                    System.out.println("Opción no válida: " + operacion);
                } // Fin del else

                // Imprimimos una línea en blanco para mejorar la legibilidad
                System.out.println();

                // Cerramos el Scanner para liberar recursos
                // entrada.close();
            } catch (Exception e) { // Fin del try, comienza del catch
                System.out.println("Error: " + e.getMessage());
                // Agregamos un salto de línea para mejorar la legibilidad
                System.out.println();
            }
        } // Fin del while

    } // Fin del main

    // Creamos un metodo para mostrar el menú de opciones
    private static void mostrarMenu() {

        // Mostramos el menu de opciones
        System.out.println("""
                    1. Sumar
                    2. Restar
                    3. Multiplicar
                    4. Dividir
                    5. Salir
                """);
        System.out.print("Operacion a realizar: ");
    } // Fin del método mostrarMenu

    // Creamos un metodo para ejecutar las operaciones
    private static int ejecutarOperacion(int operacion, Scanner entrada) {
        System.out.print("Ingrese el primer operando: ");
        var operando1 = Double.parseDouble(entrada.nextLine()); // Leemos el primer operando
        System.out.print("Ingrese el segundo operando: ");
        var operando2 = Double.parseDouble(entrada.nextLine()); // Leemos el segundo operando

        // Creamos una variable para almacenar el resultado
        double resultado;
        // Creamos un switch para realizar la operación elegida
        switch (operacion) {
            case 1 -> {
                resultado = operando1 + operando2;
                System.out.println("Resultado de la suma: " + resultado);
            } // Sumar
            case 2 -> {
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta: " + resultado);
            } // Restar
            case 3 -> {
                resultado = operando1 * operando2;
                System.out.println("Resultado de la multiplicación: " + resultado);
            } // Multiplicar
            case 4 -> {
                resultado = operando1 / operando2;
                System.out.println("Resultado de la división: " + resultado);
            }
            default -> System.out.println("Opción no válida" + operacion);
        } // fin del switch
        return 0; // Retornamos 0 para indicar que la operación se ha ejecutado correctamente
    } // Fin del método ejecutarOperacion

} // Fin de la clase CalculadoraUTN
