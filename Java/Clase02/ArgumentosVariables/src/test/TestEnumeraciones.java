package test;

import enumeraciones.Dias;
import enumeraciones.Continentes;

public class TestEnumeraciones {
    public static void main(String[] args) {
        System.out.println(Dias.LUNES);
        indicarDiaSemana(Dias.SABADO);//las enumeraciones se tratan como cadena
        //ahora no se debem utilizar comillas, se accede a traves del operador punto
        System.out.println("Continente numero 4: "+Continentes.ASIA);;
        System.out.println("Numero de habitantes del 4to continente: "+Continentes.ASIA.getHabitantes());
        System.out.println("Numero de paises en el 4to  continente: " + Continentes.ASIA.getPaises());
    }

    private static void indicarDiaSemana(Dias dias){
        switch(dias){
            case LUNES:
                System.out.println("Lunes");
                break;
            case MARTES:
                System.out.println("Martes");
                break;
            case MIERCOLES:
                System.out.println("Miercoles");
                break;
            case JUEVES:
                System.out.println("Jueves");
                break;
            case VIERNES:
                System.out.println("Viernes");
                break;
            case SABADO:
                System.out.println("Sabado");
                break;
            case DOMINGO:
                System.out.println("Domingo");
                break;
            default:
                System.out.println("Dia no valido");
        }
    }
}
