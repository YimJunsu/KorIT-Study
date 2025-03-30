package day23;
//클래스 사용처 :
//1. main 함수 갖는 실행클래스
//2. 객체 생성하기 위한 객체 설계클래스
// 클래스(도면지/설계도 - 코드만 저장하는 공간) vs 객체(설계도 기반의 메모리 공간)

public class Board {
    // 클래스 구성멤버
    //1. 필드(멤버변수)                       - 필드는 초기값이 없으면 기본값이 들어간다.
    // 주의할 점 : 일반 지역(일반)변수는 초기값이 없으면 쓰레기값(연산불가 임의값)이 들어간다.
    // private = 다른 클래스에 접근을 차단하는 키워드, - 현재 클래스에서만 사용가능
    //왜? 외부로 부터 지정한 필드의 직접 접근을 차단하기 위해
    private String content = "a";
    private String writer;
    private int pwd;

    //2. 생성자(객체 초기화 함수) 객체 생성시 new 뒤로 오는 함수
        // 생성자는 클래스명과 이름이 동일해야한다. 동일하지 않으면 함수로 취급된다.
        // - 생성자는 매개변수(함수안으로 들어오는 값들 저장하는 변수)가 있지만 반환값(함수가 종료될때 반환하는 값)이 없다.
        // 오버로딩 : 동일한 함수명/생성자명 으로 선언은 불가능 하지만
                    // 매개변수의 타입, 개수, 순서에 따라 식별 가능한 함수를 선언하는 방법ㅈ
    // 2-1 매개변수 없는 기본 생성자
    Board( ){ }
    //2-2 매개변수 1개 존재하는 생성자
    public Board(String content) {this.content = content;}
    //2-3 매개변수 2개 존재하는 생성자
    public Board(String content, String writer) {this.content = content; this.writer = writer;}
    //2-4 매개변수 3개(전체) 존재하는 생성자
    public Board(String content, String writer, int pwd) {this.content = content; this.writer = writer; this.pwd = pwd;}
    //this : 현재 클래스의 필드를 식별할 때 사용하는 키워드
    // - 함수내 매개변수(지역변수) 와 클래스의 필드명이 충돌(중복) 일때 사용

    //3. 메소드(멤버함수)
    // - getter 함수: private선언된 필드를 public으로 함수로 외부 클래스로 부터 간접접근 허용한다.
    public String getContent() {return content;}
    public String getWriter() {return writer;}
    public int getPwd() {return pwd;}

    // - setter 함수 : private 선언된 필드를 publice 함수로 외부 클래스로부터 간접접근 허용한다.
    public void setContent(String content) {this.content = content;}
    public void setWriter(String writer) {this.writer = writer;}
    public void setPwd(int pwd) {this.pwd = pwd;}

    //- toString : Object 객체(자바의 최상위 클래스)의 메소드
    // 재정의 : Object 클래스 내 toString 함수를 재정의 한다.
    // 원래 toString 함수는 객체의 주소값을 반환하는 함수인데, 주소값대신 객체의 필드정보를 출력하기 위해 재정의 한다.
    @Override
    public String toString() {
        return "Board{" + "content='" + content + '\'' + ", writer='" + writer + '\'' + ", pwd=" + pwd + '}';
    }
}
