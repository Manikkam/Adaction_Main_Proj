package com.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookAHotel {
	
	public WebDriver driver;

	@FindBy(xpath = "//input[@name = 'first_name']")
	
	private WebElement firstname;
	
	@FindBy(xpath = "//input[@name = 'last_name']")
	
	private WebElement lastname;
	
	@FindBy(xpath = "//textarea[@name = 'address']")
	
	private WebElement address;
	
	@FindBy(xpath = "//input[@name = 'cc_num']")
	
	private WebElement cardno;
	
	@FindBy(xpath="//select[@name = 'cc_type']")
	
	private WebElement cardtype;
	
	@FindBy(xpath = "//select[@name = 'cc_exp_month']")
	
	private WebElement expmnth;
	
	@FindBy(xpath = "//select[@name = 'cc_exp_year']")
	
	private WebElement expyear;
	
	@FindBy(xpath = "//input[@name = 'cc_cvv']")
	
	private WebElement cvvno;
	
	@FindBy(xpath = "//input[@name = 'book_now']")
	
	private WebElement booknow;

	
	public BookAHotel(WebDriver driver2) {
		
		this.driver = driver2;
		
		PageFactory.initElements(driver, this);
		
	}

	
	public WebElement getFirstname() {
		return firstname;
	}

	public WebElement getLastname() {
		return lastname;
	}

	public WebElement getAddress() {
		return address;
	}

	public WebElement getCardno() {
		return cardno;
	}

	public WebElement getCardtype() {
		return cardtype;
	}

	public WebElement getExpmnth() {
		return expmnth;
	}
	
	public WebElement getExpyear() {
		return expyear;
	}

	public WebElement getCvvno() {
		return cvvno;
	}

	public WebElement getBooknow() {
		return booknow;
	}
	
	
	
}
