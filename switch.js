let grade =prompt("Enter Your Subject Number:");

switch(true){
    case (grade >=80 && grade  <=100):
        console.log("A+" + " = 5.00 ")
        break;

        case (grade >=70 && grade  <=79):
        console.log("A" + " = 4:00")
        break;

        case (grade >=60 && grade  <=69):
            console.log("A-" + " = 3:50")
            break;
            
        case (grade >=50 && grade  <=59):
            console.log("B" + " = 3:00")
            break;
       
        case (grade >=40 && grade  <=49):
            console.log("c" + " = 2:00")
            break;

        case (grade >=33 && grade  <=39):
            console.log("D" + " = 1:00")
            break;
        
        default:
            console.log("Sorry...You Fail")
}