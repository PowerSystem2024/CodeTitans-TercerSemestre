package test;

import accesodatos.IAccesoDatos;
import accesodatos.ImplementacionMySQL;
import accesodatos.ImplementacionOracle;


public class TestInterfaces {

    public static void main(String[] args) {

        //ESTO ES LA BASE PARA TRABAJAR CON PATRONES DE DISEÑO Y ENTENDER COMO SE CREAN LOS FRAMEWORKS AVANZADOS DE JAVA
        //Definiremos variables de tipo INTERFACE
        //Asi como hay variables de clases padres, hijas o abstractas, tambien existen variables de tipo INTERFACE
        //Desde una INTERFACE no se pueden instanciar/crear objetos porque una INTERFACE NO TIENE CARACTERISTICAS
        //sino COMPORTAMIENTOS

        //Cuando trabajamos con clases(por ejemplo abstractas), traemos CARACTERISTICAS en comun
        //Cuando buscamos trabajar con COMPORTAMIENTOS en comun(funcionalidades/metodos), lo mejor es utilizar una INTERFACE
        //Aqui traeremos la clase que recibe el comportamiento/metodos de la INTERFACE(clase ImplementacionMySQL)
        IAccesoDatos datos = new ImplementacionMySQL();

        //El metodo que se ejecutara es el objeto al cual esta apuntando esta interface, es decir la referencia
        //ya que tienen los metodos(en este caso listar) en comun en la clase(en este caso class ImplementacionMySQL())
        // y en en la interface(IAccesoDatos). Esto es polimorfismo utilizando interface


        System.out.println("\nObjeto desde datos.listar(); de IAccesoDatos datos = new ImplementacionMySQL();");
        datos.listar();

        //aqui le pasamos la variable creada que mostrara los metodos de  ImplementacionMySQL()
        System.out.println("\nObjeto desde datos.listar(); con el metodo public static void imprimir(IAccesoDatos datos)");
        imprimir(datos);

        //Aqui podemos apuntar con una misma variable a diferentes implementaciones de una misma interface
        //porque el objeto viene desde alli, es la referencia que recibe nuestra variable
        datos = new ImplementacionOracle();
        System.out.println("\nObjeto desde datos.listar(); de IAccesoDatos datos = new ImplementacionOracle();");
        datos.listar();

        //aqui le pasamos la variable creada que mostrara los metodos de  ImplementacionMySQL()
        System.out.println("\nObjeto desde imprimir(datos); con el metodo public static void imprimir(IAccesoDatos datos)");
        imprimir(datos);
    }
    //Creamos metodo static porque debe coincidir con el metodo main
    public static void imprimir(IAccesoDatos datos) {

        datos.listar();

    }

}
