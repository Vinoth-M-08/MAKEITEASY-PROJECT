package com.example.demo.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.SignUp;
import com.example.demo.dto.SignUpdto;
import com.example.demo.repository.SignUpRepo;
@Service
public  class SignUpDet implements SignUpService{
	@Autowired
	private SignUpRepo signupRepo;

	@Override
	public String addDetails(SignUpdto signupdto) {
		
		SignUp signup =new SignUp(
                 signupdto.getFirstName(),
                 signupdto.getLastName(),
                 signupdto.getEmail(),
                 signupdto.getPassword(),
                 signupdto.getId()
				);
				signupRepo.save(signup);
				return signup.getFirstName();			
	}
	public List<SignUp> getSignUp()
	{
		return signupRepo.findAll();
	}
	
	@Override
	public String updateSignUp(SignUp signup) {
		signupRepo.save(signup);
		return "updated";
	}
	@Override
	public String deleteSignUpById(int id) {
		signupRepo.deleteById(id);
		return"deleted";
	}

}
