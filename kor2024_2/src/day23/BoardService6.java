package day23;

import java.util.ArrayList;
import java.util.Scanner;

public class BoardService6 {
    public static void main(String[] args) {
        /* 1. toString 오버라이딩 하기전
        Board b1 = new Board();
        System.out.println(b1.toString()); // 객체의 (힙영역) 주소값

         2. toString 오버라이딩 했을때, toString() 함수는 생략가능.
        Board b1 = new Board();
        System.out.println(b1.toString()); // 객체의 (힙영역) 필드값*/
        Scanner scan = new Scanner(System.in);
        // - 컬렉션 프레임워크중 ArrayList 클래스를 이용한 배열타입 대체한다. (개발자에게 편의성 제공)
        // 배열(고정길이) vs 컬렉션프레임워크(가변길이)

        ArrayList<Board> boardList = new ArrayList<>();
        // -ArrayList<제네릭타입> : 리스트객체에 저장할 여러개 객체들의 타입

        while (true) {
            // [1] 사용자로 저장할 데이터 입력 받는다.
            System.out.println("1. 글 쓰기 2. 글 출력 : ");
            int choose = scan.nextInt();
            if (choose == 1) {
                scan.nextLine();
                System.out.print("내용 : "); String content = scan.nextLine();
                System.out.print("작성자 : "); String writer = scan.next();
                System.out.print("비밀번호 : "); int pwd = scan.nextInt();

                Board board = new Board( content, writer, pwd); // - 게시물 객체 생성
                boardList.add(board);

            } else if (choose == 2) {
                // 배열내 존재하는 게시물 모두 출력하기
                for(int index = 0; index <= boardList.size() - 1; index++) {
                    System.out.printf("작성자: %s, 내용: %s \n",
                            boardList.get(index).getContent() ,
                            boardList.get(index).getWriter() );
                }
            }
        }
    }
}
