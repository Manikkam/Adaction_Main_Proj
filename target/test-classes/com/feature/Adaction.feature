Feature: Check the Booking functionality of Adaction Application
Scenario Outline: Login Functionality
Given user Must launch The URL
When user Enter the "<username>" in Username Field
And user Enter the "<password>" in Password Field
Then user Click the Login Button and Navigate to the Search Hotel Page


Examples:
|username|password|
|xxx|123|
|yyy|456|
|zzz|789|
|Manikkam|271FZ7|

Scenario: Search Hotel
When user Select The "Sydney" In Location Field
And user Select The "Hotel Sunshine" In Hotel Field
And user Select The "Standard" In RoomType Field
And user Select the "3 - Three" in Room Nos Field
And user Select the "3 - Three" in Adults per Room Field
And user Select the "2 - Two" in Children per Room Fields
Then user Click the Search Button and Navigate to Select Hotel Field

Scenario: Select Hotel
When user Select the Hotel using Select Button
Then user Click the Continue Button and Navigate to Book a Hotel Page

Scenario: Book a Hotel
When user Enter the "Manikkam" in First Name Field
And user Enter the "Prabakaran" in Last Name Field
And user Enter the "60, South Street, Tirukkoilur. 605757" in Billing Address Field
And user Enter the "1234567899874561" in Credit Card No Field
And user Select the "VISA" in Card type Field
And user Select the "August" in Expiry Date Field
And user Select the "2022" in Expiry Year Field
And user Enter the "123" No in CVV No Field
Then Click the Book Now Button and Navigate to Booking Confirmation Page

