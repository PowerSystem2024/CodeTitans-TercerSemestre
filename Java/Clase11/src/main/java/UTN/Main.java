package UTN;

import UTN.Conexion.Conexion;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        var conexion = Conexion.getConection();
        if(conexion != null) {
            System.out.println("Conexion Exitosa: " + conexion);
        } else {
            System.out.println("Error al conectarse");
        }
    } //Fin main
} //fin clase