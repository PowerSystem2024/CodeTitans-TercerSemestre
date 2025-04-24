package paquete3;

public class Clase4 {
    private String atributoPrivate = "atributo Privado";

    private Clase4() {
        System.out.println("Constructor privado");
    }

    // Creamos un constructor public para poder crear objetos
    public Clase4(String argumento) {
        this();
        System.out.println("Constructor público");
    }
    //metodo private
    
    
    

    public boolean getAtributoPrivate() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    public void setAtributoPrivate(String cambio) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
}