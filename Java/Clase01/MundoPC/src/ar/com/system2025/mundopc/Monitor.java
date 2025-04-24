package ar.com.system2025.mundopc;

public class Monitor {

    private static int contadorMonitores = 0;
    private final int idMonitor;
    private String marca;
    private String tamanio;

    public Monitor(String marca, String tamanio){
        this.idMonitor = ++contadorMonitores;
        this.marca = marca;
        this.tamanio = tamanio;
    }

    public static int getContadorMonitores() {
        return contadorMonitores;
    }

    public int getIdMonitor() {
        return idMonitor;
    }

    public static void setContadorMonitores(int contadorMonitores) {
        Monitor.contadorMonitores = contadorMonitores;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public void setTamanio(String tamanio) {
        this.tamanio = tamanio;
    }

    public String getMarca() {
        return marca;
    }

    public String getTamanio() {
        return tamanio;
    }

    @Override
    public String toString() {
        return "\nMonitor:" +
                "\n idMonitor: " + idMonitor +
                "\n Marca: " + marca +
                "\n Tamanio: " + tamanio;
    }


    public static void main(String[] args) {

        Monitor monitor1 = new Monitor("ASUS", "'24");
        System.out.println(monitor1);

    }





}
