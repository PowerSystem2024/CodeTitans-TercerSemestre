package test;

public class TestArgumentosVariables {

    public static void main(String[] args) {
        imprimirNumeros(1,2,3,4,5,6,7,8,9,10);
        imprimirNumeros(1,2,3,4);
        variosParametros("Juan", "Perez", 7, 8, 9);
    }

    private static void variosParametros(String nombre, String apellido, int ...numeros){
        System.out.println("Nombre: "+nombre +  "Apellido: " + apellido);
        imprimirNumeros(numeros);
    }

    //argumentos variables
    private static void imprimirNumeros(int ...numeros){ //con ... esta variable se convertira en un arreglo de tipo entero
        for(int i = 0; i < numeros.length; i++){
            System.out.println("Elementos: "+numeros[i]);
        }
        System.out.println("Numero de argumentos: "+numeros.length);
    }


}
