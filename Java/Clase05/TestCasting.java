public class TestCasting {
    static void main(String[] args) {
        Empleado empleado;
        empleado = new Escritor("Juan", 5000, TipoEscrituras.CLASICO);

        //DOWNCASTING
        ((Escritor) empleado).getTipoEscritura(); //Primera Opcion
        Escritor escritor = (Escritor) empleado; //Segunda Opcion
        escritor.getTipoEscritura();

        //UPCASTING
        Empleado empleado2 = escritor; //Primera Opcion
        System.out.println(empleado2.ObtenerDetelles());
        
    }
}
