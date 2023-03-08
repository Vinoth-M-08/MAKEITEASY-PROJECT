package com.example.demo.service;
import java.util.List;
import com.example.demo.dto.SignUpdto;
import com.example.demo.model.SignUp;


public interface SignUpService {
	String addDetails(SignUpdto signupdto);

	List<SignUp> getSignUp();

	String updateSignUp(SignUp signup);

	String deleteSignUpById(int id);
}
