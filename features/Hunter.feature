# language: pt

Funcionalidade: Hunter 
    Como um Hunter
    Eu devo encontrar muito mais comidades
    Para que eu me mantenha saudável e para que eu possa doar comida para outros Traveler

       Contexto:
            Dado um Hunter de nome "Mike"
            E ele sempre começa a viagem com 2 refeições
            E sempre começa a viagem saudável. 

        Cenário: Caçou para conseguir mais refeições
            Quando o Hunter sair para caçar 1 vezes
            Então a quantidade de refeições será igual a 7

        Cenário: Comeu e seguiu saudável 
            Quando o Hunter parar para comer 1 vezes
            Então a quantidade de refeições será igual a 0
            E o Hunter não ficará doente.

        Cenário: Comeu e ficou doente
            Quando o Hunter parou para comer e a quantidade de refeições é menor que 2
            Então ele comerá apenas o que tiver
            Então a quantidade de comida será igual a 0
            E o Hunter ficará doente

        Cenário: Transfere comida para outro Traveler 
            Quando o a quantidade solicitada for igual a 1
            Entao ele transfere a refeição

        Cenário: Não tem a quantidade de comida necessária para dar 
            Quando a quantidade solicitada for igual a 3
            Então ele não transfere a refeição


