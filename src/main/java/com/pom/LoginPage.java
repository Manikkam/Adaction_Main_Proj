package com.pom;

import org.openqa.selenium.WebDriver;

import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.FindBy;

import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	
	public WebDriver driver;
	
	@FindBy(xpath = "//input[@type='text']")
	
	private WebElement user;
	
	@FindBy(xpath = "//input[@type = 'password']")
	
	private WebElement pass;

	@FindBy(xpath = "//input[@name = 'login']")
	
	private WebElement signin;
	
	
	
	
	public LoginPage(WebDriver driver2) {
		
		this.driver = driver2;
		
		PageFactory.initElements(driver, this);
		
	}


	public WebElement getUser() {
		return user;
	}

	public WebElement getPass() {
		return pass;
	}

	public WebElement getSignin() {
		return signin;
	}

	


}
