$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adaction.feature");
formatter.feature({
  "line": 1,
  "name": "Check the Booking functionality of Adaction Application",
  "description": "",
  "id": "check-the-booking-functionality-of-adaction-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Login Functionality",
  "description": "",
  "id": "check-the-booking-functionality-of-adaction-application;login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Must launch The URL",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter the \"\u003cusername\u003e\" in Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Enter the \"\u003cpassword\u003e\" in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Click the Login Button and Navigate to the Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "check-the-booking-functionality-of-adaction-application;login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "check-the-booking-functionality-of-adaction-application;login-functionality;;1"
    },
    {
      "cells": [
        "xxx",
        "123"
      ],
      "line": 11,
      "id": "check-the-booking-functionality-of-adaction-application;login-functionality;;2"
    },
    {
      "cells": [
        "yyy",
        "456"
      ],
      "line": 12,
      "id": "check-the-booking-functionality-of-adaction-application;login-functionality;;3"
    },
    {
      "cells": [
        "zzz",
        "789"
      ],
      "line": 13,
      "id": "check-the-booking-functionality-of-adaction-application;login-functionality;;4"
    },
    {
      "cells": [
        "Manikkam",
        "271FZ7"
      ],
      "line": 14,
      "id": "check-the-booking-functionality-of-adaction-application;login-functionality;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Login Functionality",
  "description": "",
  "id": "check-the-booking-functionality-of-adaction-application;login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Must launch The URL",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter the \"xxx\" in Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Enter the \"123\" in Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Click the Login Button and Navigate to the Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_Must_launch_The_URL()"
});
formatter.result({
  "duration": 4214130500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xxx",
      "offset": 16
    }
  ],
  "location": "StepDefination.user_Enter_the_in_Username_Field(String)"
});
formatter.result({
  "duration": 245736400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 16
    }
  ],
  "location": "StepDefination.user_Enter_the_in_Password_Field(String)"
});
formatter.result({
  "duration": 65082800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_Click_the_Login_Button_and_Navigate_to_the_Search_Hotel_Page()"
});
formatter.result({
  "duration": 402450200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login Functionality",
  "description": "",
  "id": "check-the-booking-functionality-of-adaction-application;login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Must launch The URL",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter the \"yyy\" in Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Enter the \"456\" in Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Click the Login Button and Navigate to the Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_Must_launch_The_URL()"
});
formatter.result({
  "duration": 348415700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yyy",
      "offset": 16
    }
  ],
  "location": "StepDefination.user_Enter_the_in_Username_Field(String)"
});
formatter.result({
  "duration": 90050500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456",
      "offset": 16
    }
  ],
  "location": "StepDefination.user_Enter_the_in_Password_Field(String)"
});
formatter.result({
  "duration": 73789300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_Click_the_Login_Button_and_Navigate_to_the_Search_Hotel_Page()"
});
formatter.result({
  "duration": 414770200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login Functionality",
  "description": "",
  "id": "check-the-booking-functionality-of-adaction-application;login-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Must launch The URL",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter the \"zzz\" in Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Enter the \"789\" in Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Click the Login Button and Navigate to the Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_Must_launch_The_URL()"
});
formatter.result({
  "duration": 349942800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zzz",
      "offset": 16
    }
  ],
  "location": "StepDefination.user_Enter_the_in_Username_Field(String)"
});
formatter.result({
  "duration": 87397400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "789",
      "offset": 16
    }
  ],
  "location": "StepDefination.user_Enter_the_in_Password_Field(String)"
});
formatter.result({
  "duration": 59781000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_Click_the_Login_Button_and_Navigate_to_the_Search_Hotel_Page()"
});
formatter.result({
  "duration": 386050400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login Functionality",
  "description": "",
  "id": "check-the-booking-functionality-of-adaction-application;login-functionality;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Must launch The URL",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter the \"Manikkam\" in Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Enter the \"271FZ7\" in Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Click the Login Button and Navigate to the Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_Must_launch_The_URL()"
});
formatter.result({
  "duration": 341278200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manikkam",
      "offset": 16
    }
  ],
  "location": "StepDefination.user_Enter_the_in_Username_Field(String)"
});
formatter.result({
  "duration": 104242000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "271FZ7",
      "offset": 16
    }
  ],
  "location": "StepDefination.user_Enter_the_in_Password_Field(String)"
});
formatter.result({
  "duration": 61361600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_Click_the_Login_Button_and_Navigate_to_the_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1782580700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Search Hotel",
  "description": "",
  "id": "check-the-booking-functionality-of-adaction-application;search-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "user Select The \"Sydney\" In Location Field",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user Select The \"Hotel Sunshine\" In Hotel Field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Select The \"Standard\" In RoomType Field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Select the \"3 - Three\" in Room Nos Field",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Select the \"3 - Three\" in Adults per Room Field",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Select the \"2 - Two\" in Children per Room Fields",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Click the Search Button and Navigate to Select Hotel Field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 17
    }
  ],
  "location": "StepDefination.user_Select_The_In_Location_Field(String)"
});
formatter.result({
  "duration": 136625600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Sunshine",
      "offset": 17
    }
  ],
  "location": "StepDefination.user_Select_The_In_Hotel_Field(String)"
});
formatter.result({
  "duration": 222640600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Standard",
      "offset": 17
    }
  ],
  "location": "StepDefination.user_Select_The_In_RoomType_Field(String)"
});
formatter.result({
  "duration": 161636300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 - Three",
      "offset": 17
    }
  ],
  "location": "StepDefination.user_Select_the_in_Room_Nos_Field(String)"
});
formatter.result({
  "duration": 134549100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 - Three",
      "offset": 17
    }
  ],
  "location": "StepDefination.user_Select_the_in_Adults_per_Room_Field(String)"
});
formatter.result({
  "duration": 87882400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 - Two",
      "offset": 17
    }
  ],
  "location": "StepDefination.user_Select_the_in_Children_per_Room_Fields(String)"
});
formatter.result({
  "duration": 20081503000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_Click_the_Search_Button_and_Navigate_to_Select_Hotel_Field()"
});
formatter.result({
  "duration": 3240913100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Select Hotel",
  "description": "",
  "id": "check-the-booking-functionality-of-adaction-application;select-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "user Select the Hotel using Select Button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user Click the Continue Button and Navigate to Book a Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_Select_the_Hotel_using_Select_Button()"
});
formatter.result({
  "duration": 54106400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_Click_the_Continue_Button_and_Navigate_to_Book_a_Hotel_Page()"
});
formatter.result({
  "duration": 740961100,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Book a Hotel",
  "description": "",
  "id": "check-the-booking-functionality-of-adaction-application;book-a-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "user Enter the \"Manikkam\" in First Name Field",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user Enter the \"Prabakaran\" in Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Enter the \"60, South Street, Tirukkoilur. 605757\" in Billing Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Enter the \"1234567899874561\" in Credit Card No Field",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Select the \"VISA\" in Card type Field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Select the \"August\" in Expiry Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Select the \"2022\" in Expiry Year Field",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Enter the \"123\" No in CVV No Field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Click the Book Now Button and Navigate to Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Manikkam",
      "offset": 16
    }
  ],
  "location": "StepDefination.user_Enter_the_in_First_Name_Field(String)"
});
formatter.result({
  "duration": 149011500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prabakaran",
      "offset": 16
    }
  ],
  "location": "StepDefination.user_Enter_the_in_Last_Name_Field(String)"
});
formatter.result({
  "duration": 113460400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60, South Street, Tirukkoilur. 605757",
      "offset": 16
    }
  ],
  "location": "StepDefination.user_Enter_the_in_Billing_Address_Field(String)"
});
formatter.result({
  "duration": 130100700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567899874561",
      "offset": 16
    }
  ],
  "location": "StepDefination.user_Enter_the_in_Credit_Card_No_Field(String)"
});
formatter.result({
  "duration": 91132100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VISA",
      "offset": 17
    }
  ],
  "location": "StepDefination.user_Select_the_in_Card_type_Field(String)"
});
formatter.result({
  "duration": 85913600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "August",
      "offset": 17
    }
  ],
  "location": "StepDefination.user_Select_the_in_Expiry_Date_Field(String)"
});
formatter.result({
  "duration": 270576200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 17
    }
  ],
  "location": "StepDefination.user_Select_the_in_Expiry_Year_Field(String)"
});
formatter.result({
  "duration": 102438900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 16
    }
  ],
  "location": "StepDefination.user_Enter_the_No_in_CVV_No_Field(String)"
});
formatter.result({
  "duration": 69604200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.click_the_Book_Now_Button_and_Navigate_to_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 7073256600,
  "status": "passed"
});
});