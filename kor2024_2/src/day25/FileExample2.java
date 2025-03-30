package day25;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class FileExample2 {
    public static void main(String[] args) {

        // - 현재 코드는 'day25/test1.txt' 존재해야 가능
        // 1.파일 읽기
        try {
            FileInputStream fileInput = new FileInputStream("./src/day25/test1.txt");
            byte[] bytes = new byte[10]; // 10인이유 : "Hello Java문자열이 10바이트 이므로
            fileInput.read(bytes);
            System.out.println(new String(bytes));
        }catch (FileNotFoundException e) {
            //만약에 파일의 경로가 없으면, 예외 발생후 실행코드
            e.printStackTrace();
        }catch (IOException e) {
            //만약에 읽어보는 과정중 예외가 발생하면, 실행되는 코드
            e.printStackTrace();
        }
    }
}
