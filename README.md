# Empty-HTML5-CSS3-jQuery-Project

Empty project structure for Thinkful Students

File structure:

- index.html -> a basic HTML5 file with link to all the files bellow as well as Normalize, Font Awesome and jQuery CDNs

    - css -> folder (place all your styles here)
        - css -> styles.css -> basic CSS3 file structure
        - css -> responsive.css -> basic responsive styles file split into 2 parts (top part is desktop first approach; bottom one is mobile first approach); PLEASE CHOOSE ONLY one and delete the other

    - images -> folder (place all your images here)

    - javascript -> folder (place all your scripts here)
        - javascript -> app.css -> basic jQuery file structure (with details about "How to write JS apps" and "Debugging strategies")


User selects yes/no for each of 5 drink preference catagories. User clicks submit button. Results return one ingredient for each of the
preference catagories user selected yes. If user selected no for any catagory, results will exclude that catagory. Results will include
a name which incorporates first ingredient.


Process description:

users selects yes(true) or no(false) for each of 5 drink ingredient catagories. default is "yes".

on submit: user preferences are saved in valueToBePushed, then pushed to orderValues. console.log(orderValues) will
return an array of true/false values per userinput.

var drinkOrder is created from obj cnstr Order. console.log(drinkOrder) will return an object showing true/false matches
for each of the 5 catagories. example: console.log(drinkOder) might return:
Order {strong: false, salty: true, bitter: true, sweet: true, fruity: true} based on user input

var concoction is created from obj cnstr Drink. console.log(concoction) will return an array of ingredients, one ingredient
from each catagory the user selected yes. console.log(concoction) might return:
["salt-dusted rim", "shake of bitters", "sugar cube", "dash of cassis"] based on user input.
the Drink obj fn:
  1. creates 2 empty arrays.
  2.uses a for loop to cycle thru the true/false matches in drinkOrder.
  3.generates a random number between 0 and 2 for each category (the arrays in pantry each have 3 positions )
  4.if the userpreference from drinkOrder is true, push an ingredient from pantry based on random number into ingredientArray
  5.return ingredientArray
