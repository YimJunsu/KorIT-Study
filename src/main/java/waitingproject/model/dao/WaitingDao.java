package waitingproject.model.dao;

import org.springframework.stereotype.Component;
import waitingproject.model.dto.WaitingDto;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

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

    //등록
    public boolean register(WaitingDto waitingDto){
        try{
            String sql = "insert into user (name,people,phnum,status) values (?,?,?,?)";
            PreparedStatement ps = conn.prepareStatement(sql);
            ps.setString(1, waitingDto.getName());
            ps.setString(2, waitingDto.getPeople());
            ps.setString(3, waitingDto.getPhnum());
            ps.setBoolean(4, waitingDto.isStatus());
            int count = ps.executeUpdate();
            if(count == 1){return true;}
        } catch (Exception e){System.err.println(e);}return false;
    }
    //출력
    public ArrayList<WaitingDto> view() {
        ArrayList<WaitingDto> list = new ArrayList();
        try {
            String sql = "select * from user";
            PreparedStatement ps = conn.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            while(rs.next()){
                WaitingDto waitingDto = new WaitingDto(
                        rs.getInt("wno"),
                        rs.getString("name"),
                        rs.getString("people"),
                        rs.getString("phnum"),
                        rs.getBoolean("status")
                );list.add(waitingDto);}
        } catch (Exception e) {System.err.println(e);}
        return list;}

}
