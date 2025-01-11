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
            String sql = "insert into user (name,people,phnum) values (?,?,?)";
            PreparedStatement ps = conn.prepareStatement(sql);
            ps.setString(1, waitingDto.getName());
            ps.setString(2, waitingDto.getPeople());
            ps.setString(3, waitingDto.getPhnum());
            int count = ps.executeUpdate();
            if(count == 1) {return true;}
        } catch (Exception e) {System.err.println(e);}
        return false;
    }

    //출력
    public ArrayList<WaitingDto> view() {
        ArrayList<WaitingDto> list = new ArrayList<>();
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
        return list;
    }

    public ArrayList<WaitingDto> waitingNum() {
        ArrayList<WaitingDto> list = new ArrayList<>();
        try {
            String sql = "select wno from user where status = 0";
            PreparedStatement ps = conn.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            // status가 0인 레코드를 받아와서 리스트로 변환
            while (rs.next()) {
                WaitingDto waitingDto = new WaitingDto(rs.getInt("wno"));
                list.add(waitingDto);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        } // try end
        return list; // ArrayList를 전달
    } // func end

    public boolean pass(int wno) {
        try {
            String sql = "update user set status = 1 where wno =?";
            PreparedStatement ps = conn.prepareStatement(sql);
            ps.setInt(1, wno);
            int count = ps.executeUpdate();
            if (count == 1) { return true; } // 수정한 레코드가 1개면 true 반환
        } catch (Exception e) {
            System.out.println(e.getMessage());
        } // try end
        return false;
    } // func end

    public boolean delete(int wno) {
        try {
            String sql = "delete from user where wno =?";
            PreparedStatement ps = conn.prepareStatement(sql);
            ps.setInt(1, wno);
            int count = ps.executeUpdate();
            if (count == 1) { return true; } // 삭제한 레코드가 1개면 true 반환
        } catch (Exception e) {
            System.out.println(e.getMessage());
        } // try end
        return false;
    } // func end
}
