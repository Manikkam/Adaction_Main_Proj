package com.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.baseclass.BaseClassAdaction;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\com\\feature" , glue="com.stepdefination", plugin= {"html:Report", "com.cucumber.listener.ExtentCucumberFormatter:Report/Adaction.html"})
public class TestRunner {
	
	public static WebDriver driver;
	
	@BeforeClass
	public static void getBrowser() {
		
		driver = BaseClassAdaction.getBrowser();
	}
	
	@AfterClass
	public static void close() {
		
		BaseClassAdaction.close();
	}
}
