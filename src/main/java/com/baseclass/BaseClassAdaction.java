package com.baseclass;

import java.io.File;
import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.io.FileHandler;
import org.openqa.selenium.support.ui.Select;

public class BaseClassAdaction {

	public static WebDriver driver;
	
	public static WebDriver getBrowser() {	
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\Drivers\\chromedriver.exe");
		
		return driver = new ChromeDriver();	
	}
	
	public static void getURL(String url){	
		
		driver.get(url);	
	}
	
	public static void inputValueElement(WebElement element, String value){
		element.sendKeys(value);
	}
	
	public static void clickOnElement(WebElement element){
		element.click();
	}
	
	public static void selectByVisibleText(WebElement element, String text){
		Select lc = new Select(element);
		lc.selectByVisibleText(text);
	}

	public static void selectByValue(WebElement element, String text){
		Select lc1 = new Select(element);
		lc1.selectByValue(text);
	}	
	
	public static void selectByIndex(WebElement element, int no){
		Select lc2 = new Select(element);
		lc2.selectByIndex(no);
	}
	public static void close() {
		driver.close();
	}
	public static void quit() {
		driver.quit();
	}
	public static void navigateto(String url) {
		driver.navigate().to(url);
	}
	public static void navigateback() {
		driver.navigate().back();
	}
	public static void navigateforward() {
		driver.navigate().forward();
	}
	public static void refresh() {
		driver.navigate().refresh();
	}
	public static void getAttributeValue(WebElement element, String Value) {
		String attribute = element.getAttribute(Value);
		System.out.println(attribute);
	}
	public static void getText(WebElement element) {
		String text = element.getText();
		System.out.println(text);
	}
	public static void getTitle() {
		String title = driver.getTitle();
		System.out.println(title);
	}
	
	public static void TakeScreenshot() throws IOException {		
		TakesScreenshot sc = (TakesScreenshot) driver;
		File img = sc.getScreenshotAs(OutputType.FILE);
		File page = new File("C:\\Users\\badri\\SeliniumCourse\\SeleniumTestingCourse\\Screenshot\\Sc1.png");
		FileHandler.copy(img, page);
	}
}
