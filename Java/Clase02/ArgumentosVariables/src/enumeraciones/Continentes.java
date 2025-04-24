package enumeraciones;

public enum Continentes {

    AFRICA(53, "1.2 billones"),
    EUROPA(46, "1.1 billones"),
    AMERICA(44, "1.9 billones"),
    ASIA(34, "1.9 billones"),
    OCEANIA(14,"1.2 billones"); //el ; solo es necesario si seguimos escribiendo en la clase

    private final int paises;
    private final String habitantes;

    Continentes(int paises, String habitantes){
        this.paises = paises;
        this.habitantes = habitantes;
    }

    //Metodo Get
    public int getPaises(){
        return this.paises;
    }

    public String getHabitantes(){
        return this.habitantes;
    }
}
