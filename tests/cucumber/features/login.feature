Feature: Login

Scenario: User do Facebook não cadastrado
  Given User não ter cadastro
  But User tem conta do Facebook
  When icone do Facebook é pressionado
  Then Trazer info do Facebook

  Scenario: User não cadastrado
    Given User não ter cadastro
    And User não tem conta do Facebook
    When Cadastrar é clicado
    Then Cadastrar User

    Scenario: User tem cadastro
      Given User ter cadastro
      And Login não está ativo
      When Login for clicado
      Then Logar User

      Scenario: User tem cadastro
        Given User ter cadastro
        And Login está ativo
        When Abrir app
        Then Logar User
