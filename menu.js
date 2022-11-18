module.exports = {
    /*getMenuOption: function() {

        Should print a menu with the following options:
        1. Human vs Human
        2. Random AI vs Random AI
        3. Human vs Random AI
        4. Human vs Unbeatable AI
        The function should return a number between 1-4.
        If the user will enter invalid data (for example 5), than a message will appear
        asking to input a new value.
        */
    /*const prompt = require ('prompt-sync')();
    const POSSIBLE_MENU_CHOICE = ["1", "2", "3","4"];
     console.log("Please choose from the following menu;,");
     var secim = prompt("1. Human vs Human");

 }
}*/
    getMenuOption: function () {
        /*Should print a menu with the following options:
        1. Human vs Human
        2. Random AI vs Random AI
        3. Human vs Random AI
        4. Human vs Unbeatable AI*/


        const prompt = require('prompt-sync')();
        console.log("Please choose from the following menu:\n");
        console.log("1. Human vs Human\n");
        console.log("2. Random AI vs Random AI\n");
        console.log("3. Human vs Random AI\n");
        console.log("4. Human vs Unbeatable AI\n");
        let possibleMenuChoice;



            possibleMenuChoice = prompt('');

                switch (possibleMenuChoice) {
                    case '1':
                        console.log("1. Human vs Human\n");
                        break;
                    case '2':
                        console.log("2. Random AI vs Random AI\n");
                        break;
                    case '3':
                        console.log("3. Human vs Random AI\n");
                        break;
                    case '4':
                        console.log("4. Human vs Unbeatable AI\n");
                        break;
                    default:
                        console.log("Please choose the right input")
                        module.exports.getMenuOption();
                }

        return possibleMenuChoice;
    }
}



// run this function to test whether you have correctly implemented the other function
function checkOptions()
{
    let option = module.exports.getMenuOption();
    console.log("If the user selected 1, it should print 1");
    console.log(option);
}
