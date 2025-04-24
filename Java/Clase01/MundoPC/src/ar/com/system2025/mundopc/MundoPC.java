package ar.com.system2025.mundopc;



public class MundoPC {

    public static void main(String[] args) {

        Raton raton1 = new Raton("USB", "Logitech");
        Raton raton2 = new Raton("Bluetooth", "Razor");
        Teclado teclado1 = new Teclado("USB", "Genious");
        Monitor monitor1 = new Monitor("ASUS", "'24");
        Computadora computadora1 = new Computadora("PC Escritorio", monitor1, teclado1, raton1);
        Computadora computadora2 = new Computadora("PC Escritorio", monitor1, teclado1, raton1);
        Orden orden1 = new Orden();
        orden1.agregarComputadora(computadora1);
        orden1.agregarComputadora(computadora2);
        orden1.mostrarOrden();
        Orden orden2 = new Orden();
        orden2.agregarComputadora(computadora1);
        orden2.mostrarOrden();
    }

}
