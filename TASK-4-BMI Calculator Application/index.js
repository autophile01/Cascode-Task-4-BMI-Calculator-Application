var bmi;
function calculateBMI(){
if (document.getElementById('male').checked == false && document.getElementById('female').checked == false) {          //Validating gender selection
            alert("Please select gender");             
            return false;
}

var w = document.getElementById('weight').value;   //Fetching value of Weight
if (w == "") {
        alert("Please enter weight");              //Validating Weight
        return false;
      }
var h = document.getElementById('height').value;   //Fetching value of Height
if (h == "") {
    alert("Please enter height");                  //Validating Height
    return false;
  }

h = h * 0.3048                                    //Height in feet is converted into meters
var bmi = w / (h * h);                            //Calculating BMI using formula
bmi = Math.round(bmi);                            //Rounding off the BMI 
document.getElementById('bmivalue').value = bmi;  //Displaying BMI
    
  
function status(){
    if(bmi < 18.5){
            alert("Ops! You are Underweight : If your BMI is less than 18.5, it falls within the underweight range.");
    }       

    if(18.5 < bmi && bmi < 24.9){
        alert("Wooo! You have Healthy Weight : If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range.");                 
         //Always remember how to write conditions in javascript, make use of && and || operators
    }      

    if(25.0 < bmi && bmi < 29.9){
        alert("Ops! You are Overweight : If your BMI is 25.0 to 29.9, it falls within the overweight range.");
    }      

    if(bmi > 29.9){
        alert("Damn! You are Obese : If your BMI is 30.0 or higher, it falls within the obese range.");
    }       
}


setTimeout(status,1000);
        
}


 

