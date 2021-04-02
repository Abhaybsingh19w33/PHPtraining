//function to validate first name
            function validateFirstName() {
                var name = document.getElementById("first_name").value;
                
                if( name=="") {
                    document.getElementById("message1").innerHTML = "Enter the first name please";
                }
                else {
                    document.getElementById("message1").innerHTML = "";
                }
            }
            
//function to validate last name
            function validateLastName() {
                var name = document.getElementById("last_name").value;
                
                if( name=="") {
                    document.getElementById("message2").innerHTML = "Enter the last name please";
                }
                else {
                    document.getElementById("message2").innerHTML = "";
                }
            }
            
//function to validate phone number
            function validatePhoneNumber() {
                var phone = document.getElementById("phone").value;
                
                if( phone=="") {
                    document.getElementById("message3").innerHTML = "Enter the phone number please";
                }
                else {
                    document.getElementById("message3").innerHTML = "";
                }
            }