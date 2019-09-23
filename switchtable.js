const util = require("util");
const tools = require("./externals/tools.js");

process.stdout.write("This program prints conversion tables."
    + "\n this program also converts pounds to kilograms."
    + "\n Type a letter to select the program"
    + "\n m   miles to kilometers"
    + "\n k   kilometers to miles"
    + "\n p   pounds to kilograms"
    + "\n e   exit the program \n\n");
process.stdin.on("data", function (user_response)
    {
        var given_letter = (String(user_response)).charAt(0);
        switch(given_letter)
        {
        case 'm':
        case 'M':
                var distance_in_miles = 10,
                    distance_in_kilometers;
                process.stdout.write("      miles      kilometers");
                while (distance_in_miles <= 100)
                    {
                distance_in_kilometers = distance_in_miles * 1.6093;
                tools.printf("\n %10.2f %10.2f ",
            distance_in_miles, distance_in_kilometers);
            distance_in_miles = distance_in_miles + 10;
                    }
                process.stdout.write("\n\n"
                                    + "\n select another program: ");
        break;
        case 'k':
        case 'K':
                var distance_in_kilometers = 10,
                    distance_in_miles;
                process.stdout.write("      kilometers  miles");
                while (distance_in_kilometers <= 100)
                    {
            distance_in_miles = distance_in_kilometers * 0.6093;
            tools.printf("\n %10.2f %10.2f ",
            distance_in_kilometers, distance_in_miles);
            distance_in_kilometers = distance_in_kilometers + 10;
                    }
                process.stdout.write("\n\n"
                                    + "\n select another program: ");
        break;
        case 'p':
        case 'P':
                var weight_in_pounds = 10,
                    weight_in_kilograms;
                process.stdout.write("      pounds    kilograms");
                while (weight_in_pounds <= 100)
                    {
            weight_in_kilograms = weight_in_pounds * 0.4536;
            tools.printf("\n %10.2f %10.2f ",
            weight_in_pounds, weight_in_kilograms);
            weight_in_pounds = weight_in_pounds + 10;
                    }
                process.stdout.write("\n\n"
                                    + "\n select another program: "); 
        break;
        case 'e':
        case 'E':
        process.exit();
        break;
        default:
                process.stdout.write("\n Please type either m, M, k, K, p, P, e, E ! \n\n"
                                    + "\n select another program: ");
        }
    });