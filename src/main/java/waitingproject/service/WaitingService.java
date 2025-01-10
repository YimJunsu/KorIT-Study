package waitingproject.service;

import waitingproject.model.dao.WaitingDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WaitingService {
    @Autowired WaitingDao waitingDao;
}
