package accesodatos;


public interface IAccesoDatos {

    //Una interfaz es un contrato que define los métodos que una clase debe implementar.
    // No contiene la lógica, sino solo la declaración de los métodos.
    //En Java, una interface no hereda de la clase object
    //Se puede extender de otras interface

    //Este atributo es public, final y static, es decir que es una constante.
    //Debemos asignarle un valor al atributo ya que una interface no tiene constructores.
    //Solo tendra metodos y seran publicos y abstractos.
    int MAX_REGISTRO = 10;


    //Metodo insertar es abstracto y sin cuerpo

    void insertar();

    void listar();

    void actualizar();

    void eliminar();



}
