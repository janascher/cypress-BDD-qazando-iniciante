Feature: Logo

    As a customer
    I want to view and interact with the logo in the header
    So that I can navigate the application intuitively

    Scenario: Viewing the logo on the home page
        Given I am on the home page
        When  I click on the logo
        Then I remain on the application's home page

    Scenario: Redirecting to the home page from the dashboard page
        Given I am on the dashboard page
        When I click on the logo
        Then I am redirected to the application's home page