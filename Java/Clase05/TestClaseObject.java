public class TestClaseObject {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("juan", 5000);
        Empleado empleado2 = new Empleado("Juan", 5000);

        if (empleado1 == empleado2) {
            System.out.println("\nTienen la misma referencia en memoria\n");
        } else {
            System.out.println("\nTienen distinta referencia en memoria\n");
        }

        if (empleado1.equals(empleado2)) {
            System.out.println("\nLos Objetos Son Iguales en Contenido\n");
        } else {
            System.out.println("\nLos Objetos Son Distintos en Contenido\n");
        }

        if (empleado1.hashCode() == empleado2.hashCode()) {
            System.out.println("\nLos Objetos Tienen el mismo HashCode\n");
        } else {
            System.out.println("\nLos Objetos Tienen Distinto HashCode\n");
        }
    }
}
