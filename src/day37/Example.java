package day37;

public class Example {

    /* 함수를 호출하는 방법

     */
    static void 함수1(){}
    public static void main(String[] args) {
        //1-1
        함수1();
        //1-2
        Obj obj = new Obj();
        obj.함수2();
        //1-3
        Obj.함수3();
    }
}
