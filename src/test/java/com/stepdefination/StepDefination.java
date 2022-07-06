package com.stepdefination;

import com.baseclass.BaseClassAdaction;
import com.manager.PageObjectManager;
import com.properties.FileReaderManager;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefination extends BaseClassAdaction{
	
	public static PageObjectManager pom = new PageObjectManager(driver);
	
	@Given("^user Must launch The URL$")
	public void user_Must_launch_The_URL() throws Throwable {		
		String url = FileReaderManager.getInstanceFRM().getInstanceCR().getUrl();
		getURL(url);
		driver.manage().window().maximize();
	}
	
	
	@When("^user Enter the \"([^\"]*)\" in Username Field$")
	public void user_Enter_the_in_Username_Field(String username) throws Throwable {

		inputValueElement(pom.getObj().getUser(), username);
	}

	@When("^user Enter the \"([^\"]*)\" in Password Field$")
	public void user_Enter_the_in_Password_Field(String password) throws Throwable {
		
		inputValueElement(pom.getObj().getPass(), password);
	}

	@Then("^user Click the Login Button and Navigate to the Search Hotel Page$")
	public void user_Click_the_Login_Button_and_Navigate_to_the_Search_Hotel_Page() throws Throwable {
		clickOnElement(pom.getObj().getSignin());
	}
	
	@When("^user Select The \"([^\"]*)\" In Location Field$")
	public void user_Select_The_In_Location_Field(String location) throws Throwable {
		
		selectByVisibleText(pom.getObj1().getSelect(), location);
	}

	@When("^user Select The \"([^\"]*)\" In Hotel Field$")
	public void user_Select_The_In_Hotel_Field(String hotel) throws Throwable {
		
		selectByIndex(pom.getObj1().getSelect1(), 2);
	}

	@When("^user Select The \"([^\"]*)\" In RoomType Field$")
	public void user_Select_The_In_RoomType_Field(String roomtype) throws Throwable {
		selectByValue(pom.getObj1().getSelect2(), roomtype);
	}

	@When("^user Select the \"([^\"]*)\" in Room Nos Field$")
	public void user_Select_the_in_Room_Nos_Field(String roomtype) throws Throwable {
		
		selectByIndex(pom.getObj1().getSelect3(), 3);
	}

	@When("^user Select the \"([^\"]*)\" in Adults per Room Field$")
	public void user_Select_the_in_Adults_per_Room_Field(String adult) throws Throwable {
		
		selectByValue(pom.getObj1().getSelect3a(), "3");
	}

	@When("^user Select the \"([^\"]*)\" in Children per Room Fields$")
	public void user_Select_the_in_Children_per_Room_Fields(String children) throws Throwable {
		
		selectByValue(pom.getObj1().getSelect4(), "2");
		
		Thread.sleep(20000);
	}
	
	@Then("^user Click the Search Button and Navigate to Select Hotel Field$")
	public void user_Click_the_Search_Button_and_Navigate_to_Select_Hotel_Field() throws Throwable {
		clickOnElement(pom.getObj1().getclk());
		Thread.sleep(2000);		
	}
	
	@When("^user Select the Hotel using Select Button$")	
	public void user_Select_the_Hotel_using_Select_Button() throws Throwable {
		clickOnElement(pom.getObj2().getclk1());
	}
	@Then("^user Click the Continue Button and Navigate to Book a Hotel Page$")
	public void user_Click_the_Continue_Button_and_Navigate_to_Book_a_Hotel_Page() throws Throwable {
		clickOnElement(pom.getObj2().getclk2());
	}
	@When("^user Enter the \"([^\"]*)\" in First Name Field$")
	public void user_Enter_the_in_First_Name_Field(String firstname) throws Throwable {
		
		inputValueElement(pom.getObj3().getFirstname(), firstname);
	}

	@When("^user Enter the \"([^\"]*)\" in Last Name Field$")
	public void user_Enter_the_in_Last_Name_Field(String lastname) throws Throwable {
		
		inputValueElement(pom.getObj3().getLastname(), lastname);
	}

	@When("^user Enter the \"([^\"]*)\" in Billing Address Field$")
	public void user_Enter_the_in_Billing_Address_Field(String billingaddress) throws Throwable {
		inputValueElement(pom.getObj3().getAddress(), billingaddress);
	}

	@When("^user Enter the \"([^\"]*)\" in Credit Card No Field$")
	public void user_Enter_the_in_Credit_Card_No_Field(String cardno) throws Throwable {
		inputValueElement(pom.getObj3().getCardno(), cardno);
	}

	@When("^user Select the \"([^\"]*)\" in Card type Field$")
	public void user_Select_the_in_Card_type_Field(String cardtype) throws Throwable {
		selectByValue(pom.getObj3().getCardtype(), "VISA");
	}

	@When("^user Select the \"([^\"]*)\" in Expiry Date Field$")
	public void user_Select_the_in_Expiry_Date_Field(String expirydate) throws Throwable {
		selectByIndex(pom.getObj3().getExpmnth(), 8);
	}

	@When("^user Select the \"([^\"]*)\" in Expiry Year Field$")
	public void user_Select_the_in_Expiry_Year_Field(String expiryyear) throws Throwable {
		selectByValue(pom.getObj3().getExpyear(), "2022");
	}

	@When("^user Enter the \"([^\"]*)\" No in CVV No Field$")
	public void user_Enter_the_No_in_CVV_No_Field(String cvvno) throws Throwable {
		inputValueElement(pom.getObj3().getCvvno(), cvvno);
	}

	@Then("^Click the Book Now Button and Navigate to Booking Confirmation Page$")
	public void click_the_Book_Now_Button_and_Navigate_to_Booking_Confirmation_Page() throws Throwable {
		clickOnElement(pom.getObj3().getBooknow());
		Thread.sleep(7000);
	}
}
