package toDoList.model;

import java.io.*;
import java.nio.charset.StandardCharsets;
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
            FileOutputStream outputStream = new FileOutputStream("./src/toDoList/data.txt");
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
            FileInputStream inputStream = new FileInputStream("./src/toDoList/data.txt");
            File file = new File("./src/toDoList/data.txt");
            byte[] bytes = new byte[(int) file.length()];
            inputStream.read(bytes);
            String inStr = new String(bytes);

            String[] row = inStr.split("%n");

            ArrayList<>

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
