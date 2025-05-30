const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");
const publisherInput = document.getElementById("publisher-input");
const isbnInput = document.getElementById("isbn-input");
const deweyDecimalInput = document.getElementById("dewey-decimal-input");
const callNumInput = document.getElementById("call-num-input");
const yearInput = document.getElementById("year-input");
const formatInput = document.getElementById("format-input");
const languageInput = document.getElementById("language-input");
const subjectInput = document.getElementById("subject-input");
const inputContainer = document.getElementById("input-container");
const userDataDisplay = document.getElementById("user-data-display");
const catalogueDisplay = document.getElementById("catalogue-display");
const form = document.getElementById("form");

//------------------Fetching data------------//
fetch("booklist.json")
    .then(response => response.json()) //turning to normal data
    .then(data => {
        booklist = data;
        console.log(data);
    });

//------------------other logic------------//
const search = (e) => {
    e.preventDefault();
    const searchCriteria = {
        Title: titleInput.value,
        Author: authorInput.value,
        Publisher: publisherInput.value,
        ISBN: isbnInput.value,
        'Dewey Decimal Number': deweyDecimalInput.value,
        'Call Number': callNumInput.value,
        'Publication Year': yearInput.value,
        Format: formatInput.value,
        Language: languageInput.value,
        'Genre/Subject': subjectInput.value
    };

    if(Object.values(searchCriteria).some(value => value.trim() !== "")){
        const results = booklist.filter(book => 
            Object.entries(searchCriteria).every(([key,val])=> {
                if(!val.trim()) return true;
                return (book[key] || "").toString().toLowerCase().includes(val.toLowerCase());
            })
        );
            console.log(results)
            catalogueDisplay.innerHTML = results.map(book => `
                <div class="book">
                <h3>${book.Title}</h3>
                <p>Author: ${book.Author}</p>
                <p>Publisher: ${book.Publisher}</p>
                <p>ISBN: ${book.ISBN}</p>
                <p>Dewey Decimal Number: ${book['Dewey Decimal Number']}</p>
                <p>Call Number: ${book['Call Number']}</p>
                <p>Publication Year: ${book['Publication Year']}</p>
                <p>Format: ${book.Format}</p>
                <p>Language: ${book.Language}</p>
                <p>Genre/Subject: ${book['Genre/Subject']}</p>
                <p>Acquisition Date: ${book['Acquisition Date']}</p>
                <p>Acquisition Source: ${book['Acquisition Source']}</p>
                <p>Availability Status: ${book['Availability Status']}</p>
                <p>Borrow Date: ${book['Borrow Date']}</p>
                <p>Borrower Name: ${book['Borrower Name']}</p>
                <p>Condition: ${book.Condition}</p>
                <p>Cost: ${book.Cost}</p>
                <p>Due Date: ${book['Due Date']}</p>
                <p>Notes: ${book.Notes}</p>
                <p>Return Date: ${book['Return Date']}</p>
                <p>Shelf Location: ${book['Shelf Location']}</p>
                </div>`
            ).join('');
    }

};

const reset = () => {
    titleInput.value = "";
    authorInput.value = "";
    publisherInput.value = "";
    isbnInput.value = "";
    deweyDecimalInput.value = "";
    callNumInput.value = "";
    yearInput.value = "";
    formatInput.value = "";
    languageInput.value = "";
    subjectInput.value = "";
};

//----------------Event Listeners---------------------//

searchBtn.addEventListener("click", search);
clearBtn.addEventListener("click", reset);