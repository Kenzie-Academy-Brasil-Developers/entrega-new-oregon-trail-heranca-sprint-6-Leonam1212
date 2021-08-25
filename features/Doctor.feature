# language: pt

Funcionalidade: Doctor
    Como um Doctor
    Eu devo curar outros Travelers
    Para que eles possam seguir saudáveis

       Contexto:
            Dado um Doctor de nome "Toman"
            E ele sempre começa a viagem saudável
            E ele sempre começa a viagem com 1 refeição
           

        Cenário: Conseguiu curar um Traveler
            Quando o Doctor encontra um Traveler sem saúde
            Então ele cura o traveler
       

        Cenário: Não conseguiu curar um Traveler 
            Quando o Doctor encontra um Traveler com saúde
            Então ele não cura o traveler

