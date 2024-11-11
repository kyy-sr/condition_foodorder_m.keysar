document.getElementById("orderButton").onclick = function (event) {
    event.preventDefault();
    let FoodPrice = parseInt(document.getElementById("food").value);
    let drinkPrice = parseInt(document.getElementById("drink").value);    
    event.preventDefault()
    
        let totalPrice = FoodPrice + drinkPrice;
         let discount = 0;

        //apply dicount if total price is over 100
        if (totalPrice > 1){
            discount = totalPrice * 0.1;
            totalPrice -= discount;
        }

        const resultDiv = document.getElementById("result");
        if (totalPrice > 0) {
            resultDiv.innerHTML = ` 
            Total : $${FoodPrice + drinkPrice}<br>
            discount : $${discount.toFixed(2)}</br>
            Final Price : $${totalPrice.toFixed(2)}`;        
        } else {
            resultDiv.innerHTML = 'Please select both Food and drink'
                
        }
      
    }

