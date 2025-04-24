
package paquete3;

import paquete1.Clase1;

public class Clase03 extends Clase1{

    public Clase03() {
        super("protected");
        this.atributoProtected = "Accedemos desde la clase hija";
        System.out.println("AtributoProtected = " + atributoProtected);
        this.atributoPublic = "es totalmente publico";
    
    }
    
}
