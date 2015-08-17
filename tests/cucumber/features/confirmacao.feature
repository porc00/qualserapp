Feature: Confirmar presença

Background:
Given Evento ocorreu
And User havia confirmado presença para evento

Scenario: User foi confirmado por amigo verificado
  Given Pelo menos um amigo de User também confirmou no evento
  And Amigo foi verificado no evento
  When Tela de confirmação apresenta User
  And Amigo confirma User
  Then User recebe atestado de confirmação verificado

  Scenario: User foi confirmado por amigo não-verificado
    Given Pelo menos um amigo de User também confirmou no evento
    And Amigo não foi verificado no evento
    When Tela de confirmação apresenta User
    And Amigo confirma User
    Then User recebe atestado de confirmação não-verificado

    Scenario: User foi confirmado por múltiplos amigos não-verificados
      Given Pelo menos 3 amigos de User também confirmaram no evento
      And Nenhum dos 3 amigos foram verificados no evento
      When Tela de confirmação apresenta User
      And Amigos confirmam User
      Then User recebe atestado de confirmação verificado

      Scenario: User auto-verifica presença
        Given User foi ao evento
        And evento possui geo-localização
        When User aciona a auto-verificação
        And Geo-localização é confirmada
        And User ter selicionado opção no Campo Privacidade
        Then User recebe atestado de confirmação auto-verificado
