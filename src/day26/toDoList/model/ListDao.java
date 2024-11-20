package day26.toDoList.model;

import java.io.*;
import java.util.ArrayList;

public class ListDao {
    private static ListDao listDao = new ListDao();
    private ListDao () {}
    public static ListDao getInstance() {
        return listDao;
    }

    ArrayList<ListDto> listDB = new ArrayList<>();

    public boolean listWrite(ListDto listDto){
        listDB.add(listDto);
        filesave();
        return true;
    }

    public ArrayList<ListDto> listPrint(){
        return listDB;
    }

    public void filesave() {
        String outStr = "";

        for(int i = 0; i < listDB.size(); i++) {
            ListDto listDto = listDB.get(i);
            outStr += listDto.getContent() + "," + listDto.getDeadLine() + "," + listDto.isFinished() + "\n";
        }
        try {
            FileOutputStream outputStream = new FileOutputStream("./src/day26.toDoList/data.txt");
            outputStream.write(outStr.getBytes());
            System.out.println("[파일 저장 성공]");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e){
            e.printStackTrace();
        }
    }

    public void fileload() {
        try {
            FileInputStream inputStream = new FileInputStream("./src/day26.toDoList/data.txt");
            File file = new File("./src/day26.toDoList/data.txt");
            byte[] bytes = new byte[(int) file.length()];
            inputStream.read(bytes);
            String inStr = new String(bytes);

            String[] field = inStr.split("%n");

            String[] row = inStr.split("\n");

            // 임시로 저장할 게시물 리스트 배열 선언
            ArrayList<ListDto> list = new ArrayList<>();

            for(int i=0 ; i<row.length; i++){
                // 각 줄을 ,쉼표 단위로 나눠서 데이터의 배열로 변환
                String[] arr = row[i].split(",");
                // 한 줄의 데이터들로 임시 객체 생성
                ListDto board= new ListDto(arr[0],arr[1],Integer.parseInt(arr[2]));
                // 객체를 임시 배열에 저장
                list.add(board);
            } // for end

            // 데이터베이스에 임시 배열을 대입
            listDB=list;
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
