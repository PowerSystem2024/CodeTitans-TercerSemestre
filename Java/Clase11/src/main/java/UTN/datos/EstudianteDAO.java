package UTN.datos;


import UTN.dominio.Estudiante;
import static UTN.Conexion.Conexion.getConection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class EstudianteDAO {
    //Metodo Listar
    public List<Estudiante> listar(){
        List<Estudiante> estudiantes = new ArrayList<>();
        //Creamos objetos necesarios para conexion a bbdd
        PreparedStatement ps; //Envia Resultado
        ResultSet rs; //Obtenemos Resultado de la Base de Datos
        //Creamos Objeto tipo conexion
        Connection con = getConection();
        String sql = "SELECT * FROM estudiantes2024 ORDER BY idestudiantes2024;";
        try {
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()){
                var estudiante = new Estudiante();
                estudiante.setIdEstudiante(rs.getInt("idestudiantes2024"));
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                //Agregar a lista Estudiantes
                estudiantes.add(estudiante);
            }
        } catch (Exception e) {
            System.out.println("Ocurrio un error: " + e.getMessage());
        }
        finally {
            try {
                con.close();
            } catch (Exception e){
                System.out.println("Error al cerrar la conexion: " + e.getMessage());
            }
        }

        return estudiantes;
    } //Fin Metodo Listar

    //Metodo por id -> find by id
    public boolean buscarEstudiantePorId(Estudiante estudiante){
        PreparedStatement ps;
        ResultSet rs;
        Connection con = getConection();
        String sql = "SELECT * FROM estudiantes2024 WHERE idestudiantes2024 = ?";
        try {
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            rs = ps.executeQuery();
            if (rs.next()){
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                return true; //Se encontro un registro
            }
        } catch (Exception e){
            System.out.println("Ocurrio un error al buscar estudiantes: " + e.getMessage());
        } finally {
            try {
                con.close();
            } catch (Exception e){
                System.out.println("Ocurrio un error al cerrar conexion: " + e.getMessage());
            }

        }
        return false;
    }

    //Metodo Agregar Estudiante
    public boolean agregarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConection();
        String sql = "INSERT INTO estudiantes2024 (nombre, apellido, telefono, email) VALUES(?, ?, ?, ?);";

        try{
            ps = con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.execute();
            return true;
        } catch (Exception e){
            System.out.println("Ocurrio un error al agregar estudiante: " + e.getMessage());
        } finally {
            try {
                con.close();
            } catch (Exception e){
                System.out.println("Ocurrio un error al cerrar conexion: " + e.getMessage());
            }
        }
        return false;
    }

    //Modificar Estudiante
    public boolean modificarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConection();
        String sql = "UPDATE estudiantes2024 SET nombre=?, apellido=?, telefono=?, email=? WHERE idestudiantes2024=?;";
        try{
            ps = con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.setInt(5, estudiante.getIdEstudiante());
            ps.execute();
            return true;
        } catch (Exception e) {
            System.out.println("Ocurrio un error al modificar estudiante: " + e.getMessage());
        } finally {
            try{
                con.close();
            } catch (Exception e){
                System.out.println("Ocurrio un error al cerrar conexion: " + e.getMessage());
            }
        }
        return false;
    }



    public static void main(String[] args){
        var estudianteDAO = new EstudianteDAO();
        //Modificar Estudiante
        var nuevoEstudiante = new Estudiante(1, "Juan Carlos", "Juarez","0343546", "jcjua@mail.com");
        var modificado = estudianteDAO.modificarEstudiante(nuevoEstudiante);
        if (modificado){
            System.out.println("Estudiante Modificado: "  + nuevoEstudiante);
        } else {
            System.out.println("No se pudo modificar el estudiante: "  + nuevoEstudiante);
        }



        //listar los estudiantes
        System.out.println("Listado de Estudiantes: ");
        List<Estudiante> estudiantes = estudianteDAO.listar();
        estudiantes.forEach(System.out::println); //Funcion Lambda para imprimir


//        //Agregar Estudiante
//        var nuevoEstudiante = new Estudiante("Carlos", "Lara", "321654987", "clara@mail.com");
//        var agregado = estudianteDAO.agregarEstudiante(nuevoEstudiante);
//        if (agregado){
//            System.out.println("Estudiante Agregado: "  + nuevoEstudiante);
//        } else {
//            System.out.println("No se pudo agregar el estudiante: "  + nuevoEstudiante);
//        }



//        //Buscar por ID
//        var estudiante1 = new Estudiante(1);
//        System.out.println("Estudiantes antes de la busqueda: " + estudiante1);
//        var encontrado = estudianteDAO.buscarEstudiantePorId(estudiante1);
//        if (encontrado){
//            System.out.println("Estudiante Encontrado: "  + estudiante1);
//        } else {
//            System.out.println("No se encontro el estudiante: "  + estudiante1.getIdEstudiante());
//        }


    }
}
