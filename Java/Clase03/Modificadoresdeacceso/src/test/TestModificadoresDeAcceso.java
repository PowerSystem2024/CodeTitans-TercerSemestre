package test;

import paquete1.Clase1;
import paquete3.Clase03;

public class TestModificadoresDeAcceso {
    public static void main(String[] args) {
        Clase1 clase1 = new Clase1();
        System.out.println("clase1 = " + clase1.atributoPublic);
        clase1.metodoPublico();
        Clase03 claseHija = new Clase03();
        System.out.println("claseHija =" +claseHija);
    }
}
