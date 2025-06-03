package accesodatos;

public class ImplementacionMySQL implements IAccesoDatos{

    //Aqui debemos implementar los metodos definidos en la interface

    //El override nos indica que se estan implementando los metodos definidos en la interface

    @Override
    public void insertar() {
        System.out.println("Insertar desde MySQL");
    }

    @Override
    public void listar() {
        System.out.println("Listar desde MySQL");
    }

    @Override
    public void actualizar() {
        System.out.println("Actualizar desde MySQL");
    }

    @Override
    public void eliminar() {
        System.out.println("Eliminar desde MySQL");
    }
}
