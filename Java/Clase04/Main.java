//Utlizando este metodo para pruebas con los objetos

public class Main {
    public static void main(String[] args) {

        Empleado empleado1 = new Empleado("Juan", 10000);
        // System.out.println("Empleado 1: " + empleado1.ObtenerDetelles());
        imprimir(empleado1);
        // Gerente gerente1 = new Gerente("Jose", 5000, "Sistemas");
        empleado1 = new Gerente("Jose", 5000, "Sistemas");
        // System.out.println("Gerente 1: " + gerente1.ObtenerDetelles());
        imprimir(empleado1);
        

    }

    public static void imprimir(Empleado empleado) {
        String detalles = empleado.ObtenerDetelles();
        System.out.println("Detalles: \n\t" + detalles);
    }
}

