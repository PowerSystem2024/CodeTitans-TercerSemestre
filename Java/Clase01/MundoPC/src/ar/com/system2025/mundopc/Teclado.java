package ar.com.system2025.mundopc;

public class Teclado extends DispositivoEntrada {

    private static int contadorTeclado = 0;
    private final int idTeclado;

    public Teclado(String tipoEntrada, String marca){
        super(tipoEntrada, marca);
        this.idTeclado = ++Teclado.contadorTeclado;
    }

    @Override
    public String toString() {
        return "\nTeclado:" +
                "\n idTeclado:" + idTeclado + super.toString();
    }

    public static void imprimirTeclado(Teclado teclado){
        System.out.println(teclado.toString());
    }

    public static void main(String[] args) {
        Teclado teclado1 = new Teclado("USB", "Genious");
        imprimirTeclado(teclado1);
    }

}
