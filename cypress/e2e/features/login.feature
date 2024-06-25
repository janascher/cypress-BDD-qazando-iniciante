Feature: Login

    Eu como cliente
    Quero fazer login na aplicação
    Para fazer um pedido de compra

    Background: Access login screen
        Given I am on login screen

    Scenario: Login com campo e-mail vazio
        When I click on Login
        Then I see the message "E-mail inválido."
    
    Scenario: Login com campo senha vazia
        And I fill e-mail
        When I click on Login
        Then I see the message "Senha inválida."

    Scenario: Login com sucesso
        And I fill credentials
        When I click on Login
        Then I see sucess message "Login realizado"

     Scenario: Ainda não tenho conta
        When I click on  I dont have an account
        Then I am redirected to the user registration page