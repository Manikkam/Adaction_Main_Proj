package com.manager;

import org.openqa.selenium.WebDriver;

import com.pom.BookAHotel;
import com.pom.HotelBooking;
import com.pom.LoginPage;
import com.pom.SelectHotel;

public class PageObjectManager {

	public WebDriver driver;
	
	private LoginPage obj;
	
	private HotelBooking obj1;
	
	private SelectHotel obj2;
	
	private BookAHotel obj3;
	
	public PageObjectManager(WebDriver driver2) {
		
		this.driver = driver2;	
	}

	public LoginPage getObj() {
		
		if(obj == null) {
			
			obj = new LoginPage(driver);	
		}		
		
		return obj;
	}
	
	public HotelBooking getObj1() {
		
		if(obj1 == null) {
			
			obj1 = new HotelBooking(driver);	
		}		
		
		return obj1;
		
	}

	public SelectHotel getObj2() {
			
			if(obj2 == null) {
				
				obj2 = new SelectHotel(driver);	
		}		
			
			return obj2;
	
	}
	
	public BookAHotel getObj3() {
		
		if(obj3 == null) {
			
			obj3 = new BookAHotel(driver);	
	}		
		
		return obj3;

}
	
	
}
