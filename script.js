const api_url = "https://zenquotes.io/api/quotes/";

async function getApi(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayQuote(data);
  } catch (error) {
    displayError(error.message);
  }
}

function displayQuote(data) {
  const quoteContainer = document.getElementById('quoteContainer');
  if (data.length > 0) {
    const quote = data[0].q;
    const author = data[0].a;
    quoteContainer.innerHTML = `
      <p class="quote">${quote}</p>
      <p class="author">- ${author}</p>
    `;
  } else {
    quoteContainer.innerHTML = '<p class="quote">No quotes found.</p>';
  }
}

function displayError(errorMessage) {
  const errorElement = document.getElementById('error');
  errorElement.textContent = `Error: ${errorMessage}`;
}

getApi(api_url);
