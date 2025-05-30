const displayEl = document.getElementById("display");

fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(book => {
            displayEl.insertAdjacentHTML('beforeend', `
                <H3>Book Title: ${book.Title}</H3>
                <p><strong>Author:</strong> ${book.Author}</p>
                <p><strong>Publisher:</strong> ${book.Publisher} (${book["Publication Year"]})</p>
                <p><strong>ISBN:</strong> ${book.ISBN}</p>
                <p><strong>Format:</strong> ${book.Format}</p>
                <p><strong>Language:</strong> ${book.Language}</p>
                <p><strong>Genre:</strong> ${book["Genre/Subject"]}</p>
                <p><strong>Shelf Location:</strong> ${book["Shelf Location"]}</p>
                <p><strong>Dewey Decimal:</strong> ${book["Dewey Decimal Number"]}</p>
                <p><strong>Call Number:</strong> ${book["Call Number"]}</p>
                <p><strong>Acquired:</strong> ${book["Acquisition Date"]} from ${book["Acquisition Source"]}</p>
                <p><strong>Condition:</strong> ${book.Condition}</p>
                <p><strong>Availability:</strong> ${book["Availability Status"]}</p>
                <br>
                `);
            //innerHTML - replaces
        });
        // console.log(data);

    });