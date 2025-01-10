package waitingproject.model.dao;

import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DriverManager;

@Component
public class WaitingDao {
    private Connection conn;
    private String DBURL =  "jdbc:mysql://localhost:3306/waitingproject";
    private String DBUSER = "root";
    private String DBPWD = "1234";

    public WaitingDao() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(DBURL,DBUSER,DBPWD);
        } catch (Exception e) {System.out.println(e);}}


}
