package waitingproject.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
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

    //수정

    //삭제
}
