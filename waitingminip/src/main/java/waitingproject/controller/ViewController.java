package waitingproject.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
    @GetMapping("")
    public String index1(){
        return "/waitingproject/index.html";
    }
    @GetMapping("/view")
    public String index2(){
        return "/waitingproject/view.html";
    }
}



