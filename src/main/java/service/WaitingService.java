package service;

import model.dao.WaitingDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WaitingService {
    @Autowired WaitingDao waitingDao;
}
