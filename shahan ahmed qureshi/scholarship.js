const calculateFee = (percentage, gender) => {
    let scholarship = ;
    const fee = 200000;

    switch (true) {
        case (percentage >= 60 && percentage < 70):
            if (gender == 'male') {
                scholarship = 10;
            } else if (gender == 'female') {
                scholarship = 15;
            }
            break;
        case (percentage >= 70 && percentage < 80):
            if (gender == 'male') {
                scholarship = 20;
            } else if (gender == 'female') {
                scholarship = 25;
            }
            break;
        case (percentage >= 80 && percentage < 90):
            if (gender == 'male') {
                scholarship = 30;
            } else if (gender === 'female') {
                scholarship = 35;
            }
            break;
        case (percentage >= 90):
            if (gender == 'male') {
                scholarship = 40;
            } else if (gender == 'female') {
                scholarship = 45;
            }
            break;
        
    }

    const finalFee = fee - (fee * scholarship / 100);
    console.log("Gender: " + gender);
    console.log("Percentage: " + percentage);
    console.log("Scholarship: " + scholarship + "%");
    console.log("Final Fee: ₹" + finalFee);
};

