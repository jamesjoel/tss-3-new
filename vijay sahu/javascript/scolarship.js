let scholar=(fee,mark,gender)=>{
    let ans;
    if(mark>60 && mark<=70 ) {
            ans=fee-(fee)*10/100;
    }
    else if(mark>70 && mark<=80){
            ans=fee-(fee)*20/100;
    }
    else if(mark>80 && mark<=90){
            ans=fee-(fee)*30/100;
    }
    else if(mark>90 && mark<=100){
            ans=fee-(fee)*40/100;
    }
    if(gender=="female"){
        
    }
    console.log(answer);
}

scholar(10000,10,"female")
