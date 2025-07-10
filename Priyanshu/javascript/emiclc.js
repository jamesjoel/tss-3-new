let emiclc=(principle,rate,ternure)=>{
let p=principle;
let r=rate/(12*100);
let t=ternure;
let ans1 = p*r;
let ans2 = (1+r)^t;
let finalans = (ans1*ans2)/ans2-1;
console.log(finalans) ;


}
emiclc(100000,9.5,120)