package waitingproject.service;


import waitingproject.model.dao.WaitingDao;
import waitingproject.model.dto.WaitingDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class WaitingService {
    @Autowired WaitingDao waitingDao;

    //등록
    public boolean register(WaitingDto waitingDto){
        boolean result = waitingDao.register(waitingDto);
        return result;
    }

    //출력
    public ArrayList<WaitingDto> view(){
        return waitingDao.view();
    }
}
