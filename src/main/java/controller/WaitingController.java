package controller;


import model.dto.WaitingDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import service.WaitingService;

import java.util.ArrayList;

@RestController
public class WaitingController {
    @Autowired WaitingService waitingService;

//    //등록
//    @PostMapping("/register.do")
//    public boolean register(@RequestBody WaitingDto waitingDto){
//        boolean result = waitingService.register(waitingDto);
//        return result;
//    }
//
//    @GetMapping("/view.do")
//    public ArrayList<WaitingDto> view(){
//
//    }
}
