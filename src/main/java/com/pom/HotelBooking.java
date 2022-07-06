package com.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HotelBooking {
	
	public WebDriver driver;
	
	@FindBy(id = "location")
	
	private WebElement select; 

	@FindBy(id = "hotels") 
	 
	private WebElement select1;

	@FindBy(id = "room_type") 
	 
	private WebElement select2;	
	
	@FindBy(xpath = "//select[@name = 'room_nos']")
	
	private WebElement select3;
	
	@FindBy(xpath = "//select[@name = 'adult_room']")
	
	private WebElement select3a;
	
	@FindBy(xpath = "//select[@name = 'child_room']")
	
	private WebElement select4;
	
	@FindBy(id = "Submit")
	
	private WebElement clk;
	
	
	public HotelBooking(WebDriver driver2) {
		
		this.driver = driver2;
		
		PageFactory.initElements(driver, this);
		
	}


	public WebElement getSelect() {
		return select;
	}

	public WebElement getSelect1() {
		return select1;
	}
	public WebElement getSelect2() {
		return select2;
	}

	public WebElement getSelect3() {
		return select3;
	}

	public WebElement getSelect3a() {
		return select3a;
	}

	public WebElement getSelect4() {
		return select4;
	}

	public WebElement getclk() {
		return clk;
	}


}
