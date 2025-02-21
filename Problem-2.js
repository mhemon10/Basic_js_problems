function validEmail(email) {

    if (typeof email !== 'string') {
        return "Invalid";
    }

    const forChars = ['.', '-', '_', '+', '@'];
    if (forChars.includes(email.charAt(0))) {
        return false;
    }

    const atSymbolCount = (email.match(/@/g) || []).length;
    if (atSymbolCount !== 1) {
        return false;
    }

    
    if (email.includes(' ')) {
        return false;
    }

    
    if (!email.endsWith('.com')) {
        return false;
    }

    
    return true;
}

// Example usage
console.log(validEmail("example@example.com"));
console.log(validEmail(".example@example.com")); 
console.log(validEmail("example@.com")); 
console.log(validEmail("example@example .com")); 
console.log(validEmail("example@example.org"));
console.log(validEmail(12345));
console.log(validEmail(null)); 
console.log(validEmail([])); 
