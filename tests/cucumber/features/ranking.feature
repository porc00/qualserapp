Feature: Criar Ranking
"""
Cria sistema de ranking para confirmações em evento
"""
Background:
Given User tem cadastro
And User confirmou em pelo menos 1 evento nos 3 dias anteriores à hoje

Scenario: User foi verificado em evento
  And User foi verificado no evento
  When Ranking é atualizado pelo sistema
  Then Creditar 5 pontos ao User

  Scenario: User foi auto-verificado em evento
    And User foi auto-verificado no evento
    When Ranking é atualizado pelo sistema
    Then Creditar 10 pontos ao User

    Scenario: User fez verificações
      And User foi verificado no evento
      And User fez confirmação de presença de <conf> amigos
      And <verif> amigos foram verificados      
      When Ranking é atualizado pelo sistema
      Then Creditar <verif>x2 pontos ao User
