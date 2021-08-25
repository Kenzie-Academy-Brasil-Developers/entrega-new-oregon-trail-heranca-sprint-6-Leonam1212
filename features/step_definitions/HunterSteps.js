const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { cacador } = require("./../../app");


/** GIVEN */
Given('um Hunter de nome {string}', function (string) {
  cacador.name = string
});

Given('ele sempre começa a viagem com {int} refeições', function (int) {
  cacador.food = int
  });

Given('sempre começa a viagem saudável.', function () {
   cacador.isHealthy = true
});

/** WHEN */
When('o Hunter sair para caçar {int} vezes', function (int) {
    for (let contador = 0; contador < int; contador++) {
      cacador.hunt()
    }
  });
 
When('o Hunter parar para comer {int} vezes', function (int) {
      for(let contador = 0; contador < int; contador++){
        cacador.eat()
      }
});

When('o Hunter parou para comer e a quantidade de refeições é menor que {int}', function (int) {
    cacador.food < int
});

When('o a quantidade solicitada for igual a {int}', function (int) {
    int < cacador.food
})

When('a quantidade solicitada for igual a {int}', function (int) {
    int > cacador.food
  });

/** Then */
Then('a quantidade de refeições será igual a {int}', function (int) {
    assert.strictEqual(cacador.food, int);
});


Then('o Hunter não ficará doente.', function () {
    cacador.isHealthy = false
});

Then('a quantidade de comida será igual a {int}', function (int) {
  assert.strictEqual(cacador.food, int);
});

Then('ele comerá apenas o que tiver', function () {
  cacador.eat()
});

Then('o Hunter ficará doente', function () {
    cacador.isHealthy = false;
});

Then('ele transfere a refeição', function () {
  cacador.giveFood()
});

Then('ele não transfere a refeição', function () {
  cacador.giveFood()
});
