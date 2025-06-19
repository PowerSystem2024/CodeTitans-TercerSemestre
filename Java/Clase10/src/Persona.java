package src;



public class Persona {
    private String nombre;
    private String tel;
    private String email;
    private static int numeroPersonas = 0;

    //constructor vacio
    public Persona() {
        this.id = ++Persona.numeroPersonas;
    }

    //constructor con parametros
    public Persona(String nombre, String tel, String email) {
        this();
        this.nombre = nombre;
        this.tel = tel; 
        this.email = email;
    }

public int getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getEmail() {
        return email;
    }

public void setEmail(String email) {
    this.email = email;
}

    @Override
    public String toString() {
        return "Persona{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", tel='" + tel + '\'' +
                ", email='" + email + '\'' +
                '}'+super.toString();
    }

    private int id;

    // Método para obtener el número de personas
    public static int getNumeroPersonas() {
        return numeroPersonas;
    }

public static void main(String[] args) {
    // Crear una instancia de Persona
    Persona persona1 = new Persona("Juan Perez", "123456789", "jperez@gmail.com");
    System.out.println(persona1);
}
}