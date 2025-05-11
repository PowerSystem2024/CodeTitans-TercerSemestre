package ClasesAbstractas;

public class Rectangulo extends FiguraGeometrica{

    public Rectangulo(String tipoFigura) {
        super(tipoFigura);
    }

    @Override
    public void dibujar() { // Implementación del método abstracto
        System.out.println("Dibujando un " + this.getClass().getSimpleName());
    }

}
