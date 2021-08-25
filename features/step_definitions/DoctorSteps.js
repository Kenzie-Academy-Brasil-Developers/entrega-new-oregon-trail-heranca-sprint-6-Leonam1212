const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { doutor } = require("./../../app");
const Traveler = require("./../../models/Traveler")
/** GIVEN */
Given('um Doctor de nome {string}', function (string) {
   doutor.name = string
});

Given('ele sempre começa a viagem saudável', function () {
    doutor.isHealthy = true
});

/** WHEN */
When('o Doctor encontra um Traveler sem saúde', function () {
   Traveler.isHealthy = false
});

When('o Doctor encontra um Traveler com saúde', function () {
    Traveler.isHealthy = true
});



/** THEN */
Then('ele cura o traveler', function () {
    doutor.heal(Traveler)
});

Then('ele não cura o traveler', function () {
    doutor.heal(Traveler)

  });