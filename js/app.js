const domElements = {
    spanText: document.querySelector('[data-text]'),
    btnTwitter: document.querySelector('[data-btn-twitter]'),
    btnJoke: document.querySelector('[data-btn-joke]')
}

const jokeAPI = "https://api.icndb.com/jokes/random";

function addEventsListeners() {
    domElements.btnTwitter.addEventListener('click', goToTwitter);
    domElements.btnJoke.addEventListener('click',getNewJoke);
}

async function getNewJoke() {
    fetch(jokeAPI)
        .then(resp => {
            if(resp.status === 200)
                return resp.json();
            
            throw new Error();
        })
        .then(data => {
            const joke = data.value.joke;

            console.log(joke);
            domElements.spanText.innerText = joke;
        })
        .catch(err => {
            console.log('Something went wrong: ', err.message);
        })
}

function goToTwitter() {
    const twitterUrl = `https://twitter.com/`;

    window.open(twitterUrl, '_blank');
}

// Call funcions
addEventsListeners();
getNewJoke();