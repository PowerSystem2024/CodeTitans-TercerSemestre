package ar.com.system2025.mundopc;

public class Raton extends DispositivoEntrada{

    private static int contadorRatones = 0; //contador de teclado es static para poder acceder desde otra  clase sin instanciar un objeto de tipo Raton
    private final int idRaton;

    public Raton(String tipoEntrada, String marca){
        super(tipoEntrada, marca);
        this.idRaton = ++Raton.contadorRatones;
    }

    @Override
    public String toString() {
        return "\nRaton:\n idRaton: " + idRaton + super.toString();

    }

    public static void imprimirRaton(Raton raton){ //creamos metodo statico para poder llamarlo desde el main
        System.out.println(raton.toString());;
    }

    public static void main(String[] args) {

        Raton raton1 = new Raton("USB", "Logitech");
        Raton raton2 = new Raton("Bluetooth", "Razor");
        Teclado teclado1 = new Teclado("USB", "Genious");

        imprimirRaton(raton1);//de esta manera imprimimos el objeto raton1 al acceder al metodo static imprimirRaton
        // sin tener que instanciar un objeto de tipo Raton para poder usar el metodo
        imprimirRaton(raton2);

    }

}


