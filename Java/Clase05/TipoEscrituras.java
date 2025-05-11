public enum TipoEscrituras {
    CLASICO ("Escritura a Mano"),
    MODERNO ("Escritura Digital");

    private final String descripcion;

    private TipoEscrituras(String descripcion) {
        this.descripcion = descripcion;
    }
    public String getDescripcion() {
        return descripcion;
    }

}