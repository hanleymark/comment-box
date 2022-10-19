const charCountText = document.querySelector("#character-count");
const commentBox = document.querySelector("#comment");
const maxChars = 140;

textAreaChanged();

function textAreaChanged() {
    const commentBoxChars = commentBox.value.length;
    let warning = "";
    
    if (commentBoxChars > maxChars) {
        commentBox.style.backgroundColor = "#ffeeed";
        const charsOver = commentBoxChars - maxChars;

        // Create characters over warning for user. Pluralise 'character' if over by > 1
        warning = `(over by ${charsOver} character${charsOver == 1 ? "" : "s"})`;
    }
    else {
        commentBox.style.backgroundColor = "#fff";
    }

    charCountText.innerHTML = `${commentBoxChars}/${maxChars} ${warning}`;

}