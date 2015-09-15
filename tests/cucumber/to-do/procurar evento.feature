Feature: Procurar Evento
"""
Essa Feature permite procurar evento por categoria: distância, tempo, etc,tipo
de evento,etc
"""
Background:
   Given Evento foi criado
   And  Evento ainda não ocorreu


Scenario: Procurar evento privado por tempo
   Given User está na lista de convidados
    When User clicar na aba Filtrar por Tempo
  Then Mostrar lista de eventos por Tempo

  Scenario: Procurar evento público por tempo
     Given Evento é público
      When User clicar na aba Filtrar por Tempo
    Then Mostrar lista de eventos por Tempo

    Scenario: Procurar evento privado por distância
       Given User está na lista de convidados
        When User clicar na aba Filtrar por Distância
      Then Mostrar lista de eventos por Distância

      Scenario: Procurar evento público por distância
         Given Evento é público
          When User clicar na aba Filtrar por Distância
        Then Mostrar lista de eventos por Distância
