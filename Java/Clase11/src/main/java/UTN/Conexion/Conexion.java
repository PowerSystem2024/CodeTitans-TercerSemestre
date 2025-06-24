package UTN.Conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public static Connection getConection(){
        Connection conexion = null;
        //Variables para conectarnos a la base de datos
        var baseDatos = "estudiantes";
        var url = "jdbc:mysql://localhost:3306/"+baseDatos;
        var user = "root";
        var password = "admin";

        //Cargamos el Driver de MYSQL
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conexion = DriverManager.getConnection(url, user, password);
        } catch (ClassNotFoundException |SQLException e) {
            System.out.println("Ha ocurrido un error con la conexion " + e.getMessage());
        }
        return conexion;
    }
}
