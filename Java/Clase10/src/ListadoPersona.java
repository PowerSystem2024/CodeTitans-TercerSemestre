package src;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


public class ListadoPersona {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        List<Persona> personas = new ArrayList<>();
        var salir = false;
        while(!salir){
            mostrarMenu();
            try{
                salir = ejecutarOperacion(entrada, personas);
            } catch (Exception e) {
                System.out.println("Ocurrio un error" + e.getMessage());
            }
        }//fin del ciclo while
    }//fin del main

    private static boolean ejecutarOperacion(Scanner entrada, List<Persona> personas) {
        var opcion = Integer.parseInt(entrada.nextLine());
        var salir = false;
        switch (opcion){
            case 1 -> {
                System.out.print("Ingrese el nombre: ");
                var nombre = entrada.nextLine();
                System.out.print("Ingrese el telefono: ");
                var tel = entrada.nextLine();
                System.out.print("Ingrese el email: ");
                var email = entrada.nextLine();
                personas.add(new Persona(nombre, tel, email));
                System.out.println("la lista tiene " + personas.size() + " elementos");
            }//fin case 11
            case 2 -> {
                System.out.println("Listado de Personas");
                    System.out.println("Listado de personas");
                    //personas.forEach((persona) -> System.out.printIn(persona));
                    personas.forEach(System.out::println);
            }//fin case 2
            case 3 -> {
                System.out.print("Hasta pronto");
                salir = true;
            }//fin case 3
            default -> System.out.print("Opcion no valida, intente de nuevo"+opcion);   
        }//fin del switch
        return salir;
    }

    private static void mostrarMenu(){
        System.out.print("""
                        1. Agregar Persona
                        2. Listar Personas
                        3. Buscar Persona
                        4. Actualizar Persona
                        5. Eliminar Persona
                        6. Salir
                        Seleccione una opcion: """);
    }
    
}
