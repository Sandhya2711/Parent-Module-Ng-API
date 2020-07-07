package com.persistent.registration.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.persistent.registration.model.MatchTb;
import com.persistent.registration.model.User;
import com.persistent.registration.service.RegistrationService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class RegistrationController {

	@Autowired
	private RegistrationService service;
	
	//@RequestMapping(path = , method=)
	@PostMapping(path="/registeruser")
	public User registerUser(@RequestBody User user) throws Exception
	{
		String tempEmailId = user.getEmailId();
		if(tempEmailId!= null && !tempEmailId.equals(""))
		{
			User userobj =service.fetchUserByEmailId(tempEmailId);
			if(userobj!= null)
			{
				//System.out.println("User with "+tempEmailId+" already exist");
				throw new Exception("User with "+tempEmailId+" already exist");
			}
		}
		
		User userObj = null;
		userObj = service.saveUser(user);
		return userObj;
	}
	
	@PostMapping(path="/login")
	public User loginUser(@RequestBody User user) throws Exception
	{
		String tempEmailId = user.getEmailId();
		String tempPassword = user.getPassword();
		User userobj=null;
		if(tempEmailId!= null && !tempEmailId.equals("") && tempPassword!= null && !tempPassword.equals(""))
		{
			userobj =service.fetchUserByEmailIdAndPassword(tempEmailId, tempPassword);
			if(userobj ==null)
			{
				throw new Exception("Invalid Email Id or Password");
			}
	
		}else {
			throw new Exception("Email id or password is empty !");
		}
		return userobj;
	}
	
	@GetMapping(path="/loginSuccess")
	public List<MatchTb> loginUser() throws Exception
	{
		List<MatchTb> listOfMatches = service.fetchAllMatches();
		
		return listOfMatches;
	}
	
	
}
