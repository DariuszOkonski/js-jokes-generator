const domElements = {
    spanText: document.querySelector('[data-text]'),
    divLoader: document.querySelector('[data-loader]'),
    divBoard: document.querySelector('[data-loader]'),
    btnTwitter: document.querySelector('[data-btn-twitter]'),
    btnJoke: document.querySelector('[data-btn-joke]')
}

const textLength = 100;
const jokeAPI = "https://api.icndb.com/jokes/random";

function addEventsListeners() {
    domElements.btnTwitter.addEventListener('click', goToTwitter);
    domElements.btnJoke.addEventListener('click',getNewJoke);
}

function checkJokeLength(joke) {
    console.log(joke.length);

    if(joke.length > textLength) {
        domElements.spanText.classList.add('text--small');
    } else {
        domElements.spanText.classList.remove('text--small');
    }
}

function getNewJoke() {
    // toggleLoading();
    // addLoading();

    setTimeout(() => {
        
        
        fetch(jokeAPI)
        .then(resp => {
            if(resp.status === 200)
            return resp.json();
            
            throw new Error();
        })
        .then(data => {
            const joke = data.value.joke;
            
            checkJokeLength(joke);
            domElements.spanText.innerText = joke;
            // toggleLoading();
        })
        .catch(err => {
            console.log('Something went wrong: ', err.message);
        })
    }, 2000);
}

function goToTwitter() {
    const twitterUrl = `https://twitter.com/`;

    window.open(twitterUrl, '_blank');
}

function addLoading() {
    domElements.divLoader.classList.remove('hidden');
    domElements.divBoard.classList.add('hidden');
}

function removeLoading() {
    console.log('remove loading');
}

function toggleLoading() {
    domElements.divLoader.classList.toggle('hidden');
    domElements.divBoard.classList.toggle('hidden');
}

// Call funcions
addEventsListeners();
getNewJoke();