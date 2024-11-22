package day29.boardservice10mvc.model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;

/*
    BoardSerive8mvc 패키지를 복사하여 boardservice10mvc 으로 변경
    1. JAVA와 DB 연동 하는 JDBC 라이브러리
        1 - JDBC 라이브러리 설치 ( Connect/j -> Platform Independent 다운로드
        2. 다운로드 후 앞축풀기 및 폴더 내  mysql-connector-j-9.1.0 파일확인
    2. 현재 프로젝트 내 JDBC 라이브러리 등록/추가
        1. 준비된  mysql-connector-j-9.1.0 파일을 현

    3.  현재 프로젝트 내 외부 라이브러리 목록 확인
        - [file] -> [project structure] -> 왼쪽 탭 [library] 클릭
        - 주의할점 : PC가 변경되면 경호가 변경되므로 다시 등록해야될 경우가 있다.
================================================================================
       [1] JDBC 라이브러리 이용한 D[DATA]A[Access]O[Object]에 DB내 데이터에 접근하는 객체 만들기
            1. dao 생성자에서 연동 코드 작성

 */

public class BoardDao {

    private Connection connection; // DB 연동 인터페이스 -> DB 연동 결과를 가지고 있어서 DB조작이 가능한 인터페이스

    // 싱글톤
    private static BoardDao boardDao = new BoardDao();

    private BoardDao(){

        //DB 연동시 필요한 코드 2줄
        // [1] 외부라이브(JDBC) 폴더내 com 폴더 -> mysql폴더 -> Driver 클래스 호출 , * 일반 예외 발생
        try {
            //forname()-> 특정한 클래스를 호출 하는데 사용되는 함수, 만일 클래스가 존재하지 않으면 어떻게 해야하는지 일반 예외에서 처리
            Class.forName("com.mysql.cj.jdbc.Driver");
            //[2] DB연동 인터페이스 만들기, DriverManager.getConnection("MYSQLSERVER_URL/DB명", "계정명", "비밀번호");
            // DriverManager.getConnection() : DB SERVER와 연동을 성공했을때 연동된 결과의 객체를 반환(다형성) * 일반예외
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb1122", "root", "1234");
            //[3] 확인
            System.out.println("[3] DB 연동 성공");
        }
        catch (ClassNotFoundException e) {
            e.getMessage();
        } catch (SQLException e) {
            e.getMessage();
        }
    }

    public static BoardDao getInstance(){ return boardDao;}

    ArrayList<BoardDto> boardDB = new ArrayList<>();

    // 1. 게시물 등록 접근 함수
    public boolean boardWrite(BoardDto boardDto){
        //boardDB.add(boardDto);

        //[1] connection.prepareStatement(DML(SQL)작성) : 연동된 DB에 SQL를 서명을 준비하는 함수.
        try {
            PreparedStatement ps = connection.prepareStatement("insert into board(bcontent, bwriter, bpwd) values('여기는 JAVA' , '유재석' , '1234' )");
            //[2] 서명된 SQL 실행
            ps.execute();
        } catch (SQLException e) {
            e.getMessage();
        }
        return true;
    }
    // 2. 게시물 출력 접근 함수
    public ArrayList<BoardDto> boardPrint(){
        return boardDB;
    }
}
