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

    
    public int waitingNum() {
        // status가 0인 레코드들의 리스트의 사이즈를 반환
        int num = waitingDao.waitingNum().size();
        return num;
    }

    public boolean pass(int wno) {
        return waitingDao.pass(wno);
    }

    public boolean delete(int wno) {
        return waitingDao.delete(wno);
    }
}
