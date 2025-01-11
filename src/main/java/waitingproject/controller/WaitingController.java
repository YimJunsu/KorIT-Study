package waitingproject.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import waitingproject.model.dto.WaitingDto;
import waitingproject.service.WaitingService;

import java.util.ArrayList;

@RestController
public class WaitingController {
    @Autowired WaitingService waitingService;

    //등록
    @PostMapping("/register.do")
    public boolean register(@RequestBody WaitingDto waitingDto){
        boolean result = waitingService.register(waitingDto);
        return result;
    }

    //출력
    @GetMapping("/viewall.do")
    public ArrayList<WaitingDto> view(){
        return waitingService.view();
    }

    //남은 대기 번호
    @GetMapping("/waitingnum.do")
    public int waitingNum(){
        return waitingService.waitingNum();
    }

    //상태 변경
    @PutMapping("/pass.do")
    public boolean pass(@RequestParam int wno){
        return waitingService.pass(wno);
    }

    //삭제
    @DeleteMapping("/delete.do")
    public boolean delete(@RequestParam int wno){
        return waitingService.delete(wno);
    }
}
