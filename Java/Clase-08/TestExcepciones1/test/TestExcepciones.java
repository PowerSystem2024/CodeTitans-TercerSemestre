package test;

//Esta es una importacion estatica que permite llamar al metodo division sin necesidad de crear un objeto de la clase Aritmetica
import static aritmetica.Aritmetica.division;

import excepciones.OperacionExcepcion;

public class TestExcepciones {
   public static void main(String[] args) {
      int resultado = 0;
      try {
         resultado = division(10, 0); // llamamos al metodo division de la clase Aritmetica
      } catch (OperacionExcepcion e) {
         System.out.println("Ocurrio un error de tipo OperacionExcepcion");
         System.out.println(e.getMessage()); // Imprime el mensaje de la excepcion

      } catch (Exception e) {
         System.out.println("Ocurrio un ERROR");
         e.printStackTrace(System.out); // Se conoce como la pila de excepciones
         System.out.println(e.getMessage()); // Imprime el mensaje de la excepcion
      } finally { // El finally siempre se ejecuta, haya o no una excepcion
         System.out.println("Se reviso la division entre cero");
      }

      System.out.println("La variable de resultado tiene como valor: " + resultado);
   }
}
