let schl = (marks , gender) => {
let fee=100000 ;
switch(gender){
    case "M" : if (marks>=60 && marks<70 ){ fee =  fee - (fee*.1)
        console.log(fee)
     }
    else if (marks>=70 && marks<80 ){ fee =  fee - (fee*.2) 
        console.log(fee)
    }
    else if (marks>=80 && marks<90 ){ fee =  fee - (fee*.3)
        console.log(fee)
     }
    else if (marks>=90 && marks<=100){ fee =  fee - (fee*.4) 
        console.log(fee)
    }
    else{ console.log("you are not eligible for scolarship")}
    break;
    case "F" : if (marks>=60 && marks<70 ){ fee =  fee - (fee*.15) 
        console.log(fee)
    }
    else if (marks>=70 && marks<80 ){ fee =  fee - (fee*.25) 
        console.log(fee)
    }
    else if (marks>=80 && marks<90 ){ fee =  fee - (fee*.35)
        console.log(fee)
     }
    else if (marks>=90 && marks<=100){ fee =  fee - (fee*.45)
        console.log(fee)
     }
    else{ console.log("you are not eligible for scolarship")};
    break;
    }
}
 schl (77,"F")