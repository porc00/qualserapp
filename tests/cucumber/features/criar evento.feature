Feature: Criar Evento
"""
Essa feature é responsável por criar o tipo de evento, detalhes principais
e integrar com outras redes sociais
"""
Scenario: Importar Evento do Facebook
  Given User foi convidado para evento no Facebook
  When Importar Evento for clicado
  And Tela de Confirmação for aceita
  Then Incluir evento na Agenda

  Scenario: Criar Evento Privado
    Given User ter clicado em Criar Evento
    When Evento Privado for selecionado
    And Ter convidado amigos ao não deixar o campo Convidados vazio
    And Ter deixado o Campo Hora preenchido
    And Ter deixado o Campo Local preenchido
    And Ter deixado o Campo Descrição não-vazio
    Then Incluir evento na Agenda do User
    And  Enviar convites
