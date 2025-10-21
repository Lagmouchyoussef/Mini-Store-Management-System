function logToConsole(message, type = 'info') {
    const console = document.getElementById('console');
    const messageDiv = document.createElement('div');
    messageDiv.className = type;
    messageDiv.textContent = message;
    console.appendChild(messageDiv);
    console.scrollTop = console.scrollHeight;
}

function clearConsole() {
    document.getElementById('console').innerHTML = `
        <div class="welcome-message">
            <strong>Console cleared</strong><br>
            Ready for new commands...
        </div>
    `;
}

function runLevel1() {
    clearConsole();
    logToConsole("=== STARTING LEVEL 1 ===", 'highlight');
    
    
    let productName = "Laptop";
    let price = 6000;
    let quantity = 8;
    let category = "Electronics";

    let totalAmount = price * quantity;

    logToConsole(`The product ${productName} costs ${price} MAD and there are ${quantity} in stock (category: ${category}).`, 'info');
    logToConsole(`The total order amount is ${totalAmount} MAD.`, 'info');

    if (price > 5000) {
        let newPrice = price * 0.9; 
        logToConsole(`Price after applying the 10% discount is ${newPrice} MAD.`, 'success');
    }

    
    if (quantity > 10) {
        logToConsole("Sufficient stock", 'success');
    } else {
        logToConsole("Low stock", 'warning');
    }

    
    if (totalAmount > 20000) {
        logToConsole("Warning! High-value stock.", 'warning');
    }

    logToConsole("=== END OF LEVEL 1 ===", 'highlight');
}

function runLevel2() {
    clearConsole();
    logToConsole("=== STARTING LEVEL 2 ===", 'highlight');
    
    
    function processProduct() {
        // 1. User input
        let name = prompt("Enter the product name:");
        if (name === null) return; 
        
        let enteredPrice = parseFloat(prompt("Enter the product price:"));
        if (isNaN(enteredPrice)) {
            alert("Invalid price!");
            return processProduct();
        }
        
        let enteredQuantity = parseInt(prompt("Enter the quantity in stock:"));
        if (isNaN(enteredQuantity)) {
            alert("Invalid quantity!");
            return processProduct();
        }
    
        let totalStock = enteredPrice * enteredQuantity;
        logToConsole(`The product ${name} costs ${enteredPrice} MAD. Total stock value: ${totalStock} MAD.`, 'info');
    
        if (totalStock > 10000) {
            logToConsole("The stock of this product is valuable.", 'success');
        } else {
            logToConsole("Moderate stock.", 'info');
        }
        
        let continueAdding = confirm("Do you want to add another product?");
        
        if (continueAdding) {
            processProduct();
        } else {
            logToConsole("End of Level 2 program", 'highlight');
        }
    }
    
    processProduct();
}

function runLevel3() {
    clearConsole();
    logToConsole("=== STARTING LEVEL 3 ===", 'highlight');
    
    let products = [];

    function showMenu() {
        const menuText = `
=== Mini Store ===
1. Add a product
2. Calculate stock value
3. Check stock status
4. Quit
        `.trim();
        
        logToConsole(menuText, 'highlight');
    }

    function processMenu() {
        showMenu();
        
    
        let choice = prompt("Choose an option (1-4):");
        
        if (choice === null) {
            logToConsole("Cancellation - Returning to main menu", 'warning');
            return true; 
        }
        
        
        switch (choice) {
            case "1":
                
                let prodName = prompt("Enter the product name:");
                if (prodName === null) break;
                
                let currentPrice = parseFloat(prompt("Enter the product price:"));
                if (isNaN(currentPrice)) {
                    alert("Invalid price!");
                    break;
                }
                
                let currentQuantity = parseInt(prompt("Enter the quantity:"));
                if (isNaN(currentQuantity)) {
                    alert("Invalid quantity!");
                    break;
                }
                
                products.push({
                    name: prodName,
                    price: currentPrice,
                    quantity: currentQuantity
                });
                
                logToConsole(`✅ Product "${prodName}" added successfully!`, 'success');
                break;
                
            case "2":
                
                if (products.length === 0) {
                    logToConsole("❌ No products registered.", 'warning');
                } else {
                    let totalValue = 0;
                    products.forEach(prod => {
                        let productValue = prod.price * prod.quantity;
                        totalValue += productValue;
                        logToConsole(`${prod.name}: ${productValue} MAD`, 'info');
                    });
                    logToConsole(`💰 Total stock value: ${totalValue} MAD`, 'success');
                }
                break;
                
            case "3":
                
                if (products.length === 0) {
                    logToConsole("❌ No products registered.", 'warning');
                } else {
                    products.forEach(prod => {
                        if (prod.quantity === 0) {
                            logToConsole(`📦 ${prod.name}: Out of stock`, 'error');
                        } else if (prod.quantity < 5) {
                            logToConsole(`📦 ${prod.name}: Low stock`, 'warning');
                        } else {
                            logToConsole(`📦 ${prod.name}: Stock available`, 'success');
                        }
                    });
                }
                break;
                
            case "4":
                
                logToConsole("👋 Thank you for using the Mini Store. Goodbye!", 'highlight');
                return false; 
                
            default:
                logToConsole("❌ Invalid choice, please try again.", 'error');
        }
        
        return true; 
    }
    
    // Main loop
    function mainLoop() {
        let continueProgram = processMenu();
        if (continueProgram) {
            setTimeout(mainLoop, 100); 
        }
    }
    
    mainLoop();
}

document.addEventListener('DOMContentLoaded', function() {
    logToConsole("Store management system initialized successfully!", 'success');
    logToConsole("Click on the buttons to run the different levels.", 'info');
});