
package paquete1;

import paquete3.Clase4;


public class TestDefault {
    public static void main(String[] args){
        Clasehija2 claseh2 = new Clasehija2();
        claseh2.atributoDefault = "Cambio desde la prueba";
        System.out.println("claseh2 atributo default =" +claseh2.atributoDefault);
        
        Clase4 clase4 = new Clase4("Publico");
        System.out.println(clase4.getAtributoPrivate());
        clase4.setAtributoPrivate("Cambio");
        System.out.println("clase4 =" + clase4.getAtributoPrivate());
    }
    
}
