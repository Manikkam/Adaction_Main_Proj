package com.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SelectHotel {

	public WebDriver driver;

	@FindBy(xpath = "//input[@type = 'radio']")
	
	private WebElement clk1;
	
	@FindBy(xpath = "//input[@value = 'Continue']")
	
	private WebElement clk2;

	
	public SelectHotel(WebDriver driver2) {
		
		this.driver = driver2;
		
		PageFactory.initElements(driver, this);
		
	}


	public WebElement getclk1() {
		return clk1;
	}

	public WebElement getclk2() {
		return clk2;
	}


	
	
}
