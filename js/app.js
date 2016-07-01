/* How to write JS apps

Milestone one: create the basic structure
- first define the main parts of the JS code
- inside of each of them describe in plain english what you are going to do
- create the functions with names but no content
- create the connection between the functions and the html buttons which are activating them


Milestone two: start complete the functions definitions and test them line by line
- inside each functions write in plain english what are the steps to follow
- complete one step at a time and test it
*/



/* Debugging strategies

debugging level 1 => check if JS syntax is correct (check console in Web Dev)
    --> a real life example: make sure that your TV remote has batteries
debugging level 2 => check if the targeting is working (check the connection between the HTML element and equivalent JS functionality ==> alert("here"); inside the function)
    --> a real life example: make sure that your remote connects to your own TV
debugging level 3 => check if the logic makes sense (check if the JS functionality returns what we expect ==> alert(VALUE-NAME); inside the function)
    --> a real life example: make sure that when you click on the volume up button on your remote, you don't get to change channels or similar
*/

/*******************************************
STEP 1
global variables
********************************************/

var pantry = {
    strong: ["glug of rum", "slug of whisky", "splash of gin"],
    salty: ["olive on a stick", "salt-dusted rim", "rasher of bacon"],
    bitter: ["shake of bitters", "splash of tonic", "twist of lemon peel"],
    sweet: ["sugar cube", "spoonful of honey", "splash of cola"],
    fruity: ["slice of orange", "dash of cassis", "cherry on top"]
};

var Order = function (orderValues) {
    //get the user's choice of ingredients groups
    this.strong = orderValues[0];
    this.salty = orderValues[1];
    this.bitter = orderValues[2];
    this.sweet = orderValues[3];
    this.fruity = orderValues[4];
};



/*******************************************
STEP 2
functions definitions
********************************************/

var Drink = function (pantry, drinkOrder) { //drinkOrder is created on line 128. drinkOrder = new Order(orderValues);
    var ingredientNumber,
        ingredientsArray = []; //two seperate arrays

    for (var userPreference in drinkOrder) {
        ingredientNumber = generateRandomNumber(0, 2);
        if (drinkOrder[userPreference]) {
            ingredientsArray.push(pantry[userPreference][ingredientNumber]);
        }
    }
    return ingredientsArray;
};

//changes the ingredient names from whichever case they are to "Title Case"
var toTitleCase = function (str) {
    //"/\w\S*/g" is a regular expression (http://www.regular-expressions.info/) which searches for all words in a phrase ignoring the spaces
    return str.replace(/\w\S*/g, function (txt) {
        //only the first letter in the word make Upper case and all the other letters apart from the first one ("substr(1)") to lower case
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

var generateRandomNumber = function (min, max) {
    //Returns a random integer between min (included) and max (included); Math.floor() will give you a non-uniform distribution!
    //random number generator details can be found here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

//use if statements to piece together name conditionally based on the ingredients that comprise it
var drinkNamer = function (concoction) { //concoction is an object created from Drink. concoction = new Drink(pantry, drinkOrder);
    //split the concoction by space to be able to use the words
    var drinkNamerOutput = concoction[0].split(" ");
    //build the name of the new drink by getting the second word of the first ingredient and add extra words around it
    return "yer Sparkly " + toTitleCase(drinkNamerOutput[drinkNamerOutput.length - 1]) + " Grog"; //could you use "toTitleCase(drinkNamerOutput[2])"?

};



/********************************************
STEP 3
functions usage
********************************************/

$(document).ready(function () {

    $('#results').hide();

    $('form').on('submit', function (event) {

        //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
        event.preventDefault();

        //set the empty orderValues array
        orderValues = [];

        //check if each one of the ingredients types have been chosen and push that to the orderValues array;
        $('select').each(function () {

            var valueToBePushed = "";

            if ($(this).val() === 'yes') {
                valueToBePushed = true;
            } else {
                valueToBePushed = false;
            }

            orderValues.push(valueToBePushed);
        });

        //use the 2 constructors to create 2 new objects
        drinkOrder = new Order(orderValues); // creae new order from DOM
        concoction = new Drink(pantry, drinkOrder); // mix drink with Drink constructor


        //if there is atleast one ingredient
        if (concoction.length > 0) {
            //build the chosen ingredients from the ingredients array
            var buildTheHtmlOuput = "";
            $.each(concoction, function (key, value) {
                buildTheHtmlOuput += "<li>" + "<li>" + value + "</li>";
            });

            //show the output container
            $('#results').show();

            //populate it with the ingredients
            $("#results ul").html(buildTheHtmlOuput);

            //name the customer's beverage with drinkNamer();
            $("#results h3").html("Here be " + drinkNamer(concoction) + ", ye scurvy dog!");
        }
        //if there are no ingredients
        else {
            alert('Pick something for your poison!');
        }
    }); //closes $('form').on('submit', function (event) {

    //close document ready
});
