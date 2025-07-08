let scholar=(fee,mark,gender)=>{
        let discount = 0;

        if(mark>60 && mark<=70){
                discount = 10;
        }
        else if(mark>70 && mark<=80){
                discount = 20;
   
        }
        else if(mark>80 && mark<=90){
                discount = 30;
        }
        else if(mark>90 && mark<=100 ){
                discount = 40;              
        }
        if(gender == "female") {
                discount +=5;

        }
        discount=fee-(fee*discount)/100
        return discount;

}
let discount=scholar(10000,65,"female")
console.log(discount);

 