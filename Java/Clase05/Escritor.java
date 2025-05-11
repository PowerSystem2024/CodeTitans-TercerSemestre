
public class Escritor extends Empleado {
    private final TipoEscrituras tipoEscritura;

    public Escritor(String nombre, double sueldo, TipoEscrituras tipoEscritura) {
        super(nombre, sueldo);
        this.tipoEscritura = tipoEscritura;
    }

    // Sobreescritura del metodo ObtenerDetalles
    @Override
    public String ObtenerDetelles() {
        return super.ObtenerDetelles() + ", Tipo Escritura: " + tipoEscritura.getDescripcion();
    }

    @Override
    public String toString() {
        return "Escritor{" + "tipoEscritura=" + tipoEscritura + '}' + super.toString(); }

    public TipoEscrituras getTipoEscritura() {
        return this.tipoEscritura;
    }
}
