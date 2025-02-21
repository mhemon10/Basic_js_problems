
function electionResult(votes) {
    
    if (!Array.isArray(votes)) {
        return "Invalid";
    }

    let mangoCount = 0;
    let bananaCount = 0;

    for (let vote of votes) {
        if (vote.toLowerCase() === "mango") {
            mangoCount++;
        } else if (vote.toLowerCase() === "banana") {
            bananaCount++;
        }
    }

    
    if (mangoCount > bananaCount) {
        return "Mango";
    } else if (bananaCount > mangoCount) {
        return "Banana";
    } else {
        return "Draw";
    }
}