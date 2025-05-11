public class TestInstanceOf{
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juan", 10000);
        // determinarTipo(empleado1);
        empleado1 = new Gerente("Jose", 5000, "Sistemas");
        determinarTipo(empleado1);
    }

    public static void determinarTipo(Empleado empleado) {
        //Utilizamos el operador instanceof para determinar el tipo de objeto
        //Siempre verificamos las clases mas especificas primero
        if (empleado instanceof Gerente) { 
            // Si el objeto es una instancia de Gerente
            System.out.println("Es de tipo Gerente");
            // Hacemos un casteo para acceder a los metodos de Gerente
            // ((Gerente) empleado).getDepartamento();
            Gerente gerente = (Gerente) empleado; // Casteo Especifico
            System.out.println("Aread del Gerente: " + gerente.getDepartamento());

        } else if (empleado instanceof Empleado) { 
            // Si el objeto es una instancia de Empleado
            System.out.println("Es de tipo Empleado");
        } else if (empleado instanceof Object) {
            // Si el objeto es una instancia de Object
            System.out.println("Es de tipo Object");
        } else {
            System.out.println("Tipo desconocido");
            
        }
    }
}
