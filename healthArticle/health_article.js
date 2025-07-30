// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();
var url = './health_article.json'; // URL for your JSON file

// Open a GET request to the specified URL
xhr.open('GET', url, true);
xhr.responseType = 'json'; // Set the response type to JSON

// Set up what to do when the response is loaded
xhr.onload = function() {
    // Check if the request was successful (status code 200)
    if (xhr.status === 200) {
        // Retrieve the articles array from the response
        var articles = xhr.response.articles;
        
        // Get the div where articles will be displayed
        var articlesDiv = document.getElementById('articles');
        
        // Clear any existing content in articlesDiv
        articlesDiv.innerHTML = '';

        // Iterate over each article using forEach
        articles.forEach(function(article) {
            // Create a new div for each article
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            // Create and populate the title element
            var title = document.createElement('h2');
            title.textContent = article.title;

            // Create and populate the description element
            var description = document.createElement('p');
            description.textContent = article.description;

            // Create and populate the ways to achieve header
            var waysHeader = document.createElement('h3');
            waysHeader.textContent = 'Ways to Achieve:';

            // Create a list for ways to achieve
            var waysList = document.createElement('ul');
            article.ways_to_achieve.forEach(function(way) {
                var listItem = document.createElement('li');
                listItem.textContent = way;
                waysList.appendChild(listItem);
            });

            // Create and populate the benefits header
            var benefitsHeader = document.createElement('h3');
            benefitsHeader.textContent = 'Benefits:';

            // Create a list for benefits
            var benefitsList = document.createElement('ul');
            article.benefits.forEach(function(benefit) {
                var listItem = document.createElement('li');
                listItem.textContent = benefit;
                benefitsList.appendChild(listItem);
            });

            // Append all elements to the articleDiv
            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(waysHeader);
            articleDiv.appendChild(waysList);
            articleDiv.appendChild(benefitsHeader);
            articleDiv.appendChild(benefitsList);

            // Append the articleDiv to the main articlesDiv
            articlesDiv.appendChild(articleDiv);
        });
    } else {
        // Handle errors (e.g., display a message if the request failed)
        console.error('Error loading articles:', xhr.statusText);
        articlesDiv.innerHTML = '<p>Error loading articles. Please try again later.</p>';
    }
};

// Set up what to do if there's an error during the request
xhr.onerror = function() {
    console.error('Request failed:', xhr.statusText);
    var articlesDiv = document.getElementById('articles');
    articlesDiv.innerHTML = '<p>Error loading articles. Please check your network connection.</p>';
};

// Send the request
xhr.send();