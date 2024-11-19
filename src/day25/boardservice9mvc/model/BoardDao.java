package day25.boardservice9mvc.model;

import java.util.ArrayList;
/*
    boardService9mvc
                - boardService8mvc 패키지를 복사해서 boardService9mvc 패키지명 변경 후 진행
                - 조건 : 파일 입출력을 활용하여 프로그램이 종료되고 다시 실행 하였을 때 영구 저장 되도록 하시오.
 */
public class BoardDao {

    // 싱글톤
    private static BoardDao boardDao = new BoardDao();
    private BoardDao(){}
    public static BoardDao getInstance(){
        return boardDao;
    }

    ArrayList<BoardDto> boardDB = new ArrayList<>();

    // 1. 게시물 등록 접근 함수
    public boolean boardWrite(BoardDto boardDto){
        boardDB.add(boardDto);
        return true;
    }
    // 2. 게시물 출력 접근 함수
    public ArrayList<BoardDto> boardPrint(){
        return boardDB;
    }
}
