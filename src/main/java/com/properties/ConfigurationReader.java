package com.properties;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigurationReader {
	
	public static Properties p;
	
	public ConfigurationReader() throws IOException {
		File f = new File("C:\\Users\\badri\\SeliniumCourse\\MavenProject\\src\\main\\java\\Adaction.properties");
		FileInputStream fis = new FileInputStream(f);
		p = new Properties();
		p.load(fis);
	}
	
	public String getUrl() {
		String url = p.getProperty("url");
		return url;
	}
	
	public String getUser() {
		String username = p.getProperty("username");
		return username;
	}
	public String getPass() {
		String password = p.getProperty("password");
		return password;
	}
	public String getFirstname() {
		String firstname = p.getProperty("firstname");
		return firstname;
	}

	public String getLastname() {
		String lastname = p.getProperty("lastname");
		return lastname;
	}	
	public String getAddress() {
		String address = p.getProperty("address");
		return address;
	}	
	public String getCardno() {
		String cardNo = p.getProperty("cardNo");
		return cardNo;
	}	
	
	public String getCvvno() {
		String cvv = p.getProperty("cvv");
		return cvv;
	}		
}




