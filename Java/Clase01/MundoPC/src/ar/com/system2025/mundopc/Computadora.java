package ar.com.system2025.mundopc;

public class Computadora {

    private static int contador_computadoras;
    private final int idComputadora;
    private String nombre;
    private Monitor monitor;
    private Teclado teclado;
    private Raton raton;

    public Computadora(String nombre, Monitor monitor, Teclado teclado, Raton raton){
        this.idComputadora = ++contador_computadoras;
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
    }

    public static int getContador_computadoras() {
        return contador_computadoras;
    }

    public int getIdComputadora() {
        return idComputadora;
    }

    public Monitor getMonitor() {
        return monitor;
    }

    public String getNombre() {
        return nombre;
    }

    public Teclado getTeclado() {
        return teclado;
    }

    public Raton getRaton() {
        return raton;
    }

    public static void setContador_computadoras(int contador_computadoras) {
        Computadora.contador_computadoras = contador_computadoras;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setMonitor(Monitor monitor) {
        this.monitor = monitor;
    }

    public void setTeclado(Teclado teclado) {
        this.teclado = teclado;
    }

    public void setRaton(Raton raton) {
        this.raton = raton;
    }


    @Override
    public String toString() {
        return "\nComputadora:" +
                "\n idComputadora: " + idComputadora +
                "\n Nombre: " + nombre  +
                "\n"+ monitor +
                "\n"+ teclado +
                "\n"+ raton;
    }

    public static void main(String[] args) {
        Raton raton1 = new Raton("USB", "Logitech");
        Raton raton2 = new Raton("Bluetooth", "Razor");
        Teclado teclado1 = new Teclado("USB", "Genious");
        Monitor monitor1 = new Monitor("ASUS", "'24");
        Computadora computadora1 = new Computadora("PC Escritorio", monitor1, teclado1, raton1);
        System.out.println(computadora1);
    }
}
