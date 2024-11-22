package day22;

import java.util.ArrayList;
import java.util.Scanner;

public class BoardServiceTest2 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        // - 컬렉션 프레임워크중 ArrayList 클래스를 이용한 배열타입 대체한다. (개발자에게 편의성 제공)
        // 배열(고정길이) vs 컬렉션프레임워크(가변길이)

        ArrayList<NewBoard> boardList = new ArrayList<>();
                    // -ArrayList<제네릭타입> : 리스트객체에 저장할 여러개 객체들의 타입

        while (true) {
            // [1] 사용자로 저장할 데이터 입력 받는다.
            System.out.println("1. 글 쓰기 2. 글 출력 : ");
            int choose = scan.nextInt();
            if (choose == 1) {
                scan.nextLine(); // 의미 없는 nextLine() 코드 작성한다.
                System.out.print("내용 : "); String content = scan.nextLine();
                // .next() 문자열(공백X) 입력, .nextLine() 문자열(공백/띄어쓰기 포함) 입력
                // .nextLine() 사용시 주의할점 : .nextLine()앞에 또 다른 .nextXX() 존재하면 의미없는 .nextLine() 작성
                System.out.print("작성자 : "); String writer = scan.next();
                System.out.print("비밀번호 : "); int pwd = scan.nextInt();

                // [2] 입력받은 데이터로 게시물 객체 생성
                NewBoard board = new NewBoard(content, writer, pwd); // - 게시물 객체 생성
                board.setContent(content); board.setWriter(writer); board.setPwd(pwd);

                // [3] 컬렉션 프레임워크인 리스트객체에 게시물 저장한다.
                boardList.add(board);

            } else if (choose == 2) {
                // 배열내 존재하는 게시물 모두 출력하기
                for(int index = 0; index <= boardList.size() - 1; index++) {
                        System.out.printf("작성자: %s 내용: %s \n", boardList.get(index).getWriter(), boardList.get(index).getContent());
                }
            }
        }
    }
}
