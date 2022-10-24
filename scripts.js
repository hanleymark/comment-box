const charCountText = document.querySelector("#character-count");
const commentBox = document.querySelector("#comment");
const form = document.querySelector("#feedback-form");
const maxChars = 140;

// Function: Check comment box contents on change. Attached to oninput event.
function textAreaChanged() {
    const commentBoxChars = commentBox.value.length;
    let warning = "";

    if (commentBoxChars > maxChars) {
        // Change background colour of comment box to light pink (maintaining contrast ratio for accessibility)
        commentBox.style.backgroundColor = "#ffeeed";
        const charsOver = commentBoxChars - maxChars;

        // Create characters over warning for user. Pluralise 'character' if over by > 1
        warning = `(over by ${charsOver} character${charsOver == 1 ? "" : "s"})`;
    }
    else {
        // Ensure background colour is white if maximum character count not exceeded
        commentBox.style.backgroundColor = "#fff";
    }
    // Issue text warning to user if charcater count exceeded
    charCountText.innerHTML = `${commentBoxChars}/${maxChars} ${warning}`;

}

function processForm(event) {
    const comment = form["comment"].value;

    if (comment.length > maxChars) {
        commentBox.setCustomValidity(`Comment must be no more than ${maxChars} characters long.`);
        commentBox.reportValidity();
    }
    else {
        commentBox.setCustomValidity("");


        const name = form["name"].value;
        const email = form["email"].value;
        const timeSubmitted = new Date().toLocaleString();

        const commentList = document.querySelector("#comment-list");
        const element = document.createElement("p");
        element.innerHTML = `<strong>${name}</strong> (${email}) submitted the following comment, timed at ${timeSubmitted}:`;
        element.innerHTML += `<br/>"${comment}"`;

        commentList.appendChild(element);
    }

    event.preventDefault();
}

// Check initial contents of comment box input when page loads
textAreaChanged();

form.addEventListener("submit", processForm);