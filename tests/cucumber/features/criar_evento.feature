Feature: Criar Evento
"""
Essa feature é responsável por criar o tipo de evento, detalhes principais
e integrar com outras redes sociais
"""

Scenario: Criar Evento Privado
    Given Eu estar logado
    When Evento Privado for selecionado
    And Ter convidado amigos ao não deixar o campo Convidados vazio
    And Ter deixado o Campo Hora preenchido
    And Ter deixado o Campo Local preenchido
    And Ter deixado o Campo Descrição não-vazio
    Then Incluir evento na Agenda do User
    And  Enviar convites
