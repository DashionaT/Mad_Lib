function makeStory() {
    // get form values (2 points)
    var noun1 = document.getElementById('noun1').value;
    var adjective1 = document.getElementById('adjective1').value;
    var adjective2 = document.getElementById('adjective2').value;
    var adjective3 = document.getElementById('adjective3').value;
    var adjective4 = document.getElementById('adjective4').value;
    var noun2 = document.getElementById('noun2').value;
    var noun3 = document.getElementById('noun3').value;
    var noun4 = document.getElementById('noun4').value;
    var noun5 = document.getElementById('noun5').value;
    var noun6 = document.getElementById('noun6').value;
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var plural_noun1 = document.getElementById('plural_noun1').value;
    var plural_noun2 = document.getElementById('plural_noun2').value;
    var person1 = document.getElementById('person1').value;

    // Set title of story. Use at least one form value in the title. (2 points)
    var title = "My " + noun1 + " School";


    // Build story. you can add as many paragraphs as you like. (3 points)
    var paragraph1 = noun2 + "is one of America's " + adjective1 + "schools of " + adjective2 + "learning. The student body is made up of " + adjective3 + "guys and " + adjective4 + " girls. The " + noun2 + " get the best grades and everybody bullies them to do their homework. All students each lunch in the "
+ noun3 + " cafeteria where a lot of funny fights happen. We had a food fight last week and they tried to give the whole student body dententions, but they didn't because some people weren't invovled. Our menu features boiled " + noun4 + " and" + noun5 + " sandwitches, and all the " + noun6 + " you can drink for only " +
number1 + " dollars. Our principal is " + number2 + " years old. He is trying to getr money to build a new " + plural_noun1 + " laboratory and some new " + plural_noun2 + " for our athletes.";


    // Display story by putting title & paragraphs into appropriate divs. (3 points)
document.getElementById('title').innerHTML = title;
document.getElementById('one').innerHTML = paragraph1;

}
