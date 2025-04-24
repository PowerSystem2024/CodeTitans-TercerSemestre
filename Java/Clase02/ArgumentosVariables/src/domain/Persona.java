package domain;

public class Persona {

    private final int idPersona;
    private static int contadorPersonas;

    static{//bloque de inicializacion estatico
        System.out.println("Ejecucion de bloque estatico");
        ++Persona.contadorPersonas;
        //idPersona = 10; no es estatico, por esto tenemos un error
    }

    {//bloque de inicializacion no estatico(contexto dinamico)
        System.out.println("Ejecucion de bloque no estatico");
        this.idPersona = Persona.contadorPersonas++; //incrementamos el atributo
    }

    public Persona(){
        System.out.println("Ejecucion del constructor");
    }

    public int getIdPersona() {
        return this.idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
}
