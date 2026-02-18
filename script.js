// Debug version with console logs
console.log("Script loaded successfully!");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz";
console.log("Letters string:", letters);

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
    
    const wordElements = document.querySelectorAll(".words");
    console.log("Found elements:", wordElements.length);
    
    if (wordElements.length === 0) {
        console.error("No elements with class 'words' found!");
        return;
    }

    wordElements.forEach(word => {
        console.log("Setting up hover for:", word);
        
        word.addEventListener('mouseover', function(event) {
            console.log("Mouseover triggered");
            
            let iterations = 0;
            const originalText = event.target.dataset.value;
            console.log("Original text:", originalText);
            
            if (!originalText) {
                console.error("No data-value attribute found!");
                return;
            }

            const interval = setInterval(() => {
                event.target.innerText = originalText.split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return originalText[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("");

                if (iterations >= originalText.length) {
                    clearInterval(interval);
                    console.log("Animation completed");
                    
                    // Reset to original text after a brief pause
                    setTimeout(() => {
                        event.target.innerText = originalText;
                        console.log("Text reset to original");
                    }, 100);
                }

                iterations += 1;
            }, 50);
        });
    });
});