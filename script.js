document.getElementById('queryForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Capture form values
    const actorName = document.getElementById('actorName').value;
    const genre = document.getElementById('genre').value;
    const language = document.getElementById('language').value;
    const rating = document.getElementById('rating').value;

    // Placeholder for results
    let results = `<h2>Search Results:</h2><ul>`;

    // Example responses for each query
    if (actorName) {
        results += `<li>Movies featuring ${actorName}</li>`;
    }
    if (genre) {
        results += `<li>All movies in genre: ${genre}</li>`;
    }
    if (language) {
        results += `<li>Movies available in language: ${language}</li>`;
    }
    if (rating) {
        results += `<li>Users who rated movies higher than: ${rating}</li>`;
    }

    // Complete results output
    results += `</ul>`;
    document.getElementById('results').innerHTML = results;
});

function show1() {
        let butt2 = document.getElementById("ans1");
        butt2.style.display = "block";
}

function show2() {
        let butt2 = document.getElementById("ans2");
        butt2.style.display = "block";
}

function show3() {
        let butt2 = document.getElementById("ans3");
        butt2.style.display = "block";
}

function show4() {
        let butt2 = document.getElementById("ans4");
        butt2.style.display = "block";
}
