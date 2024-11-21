
const tweetInput = document.getElementById('tweetInput');
const tweetList = document.getElementById('tweetList');


let tweets = JSON.parse(localStorage.getItem('tweets')) || [];


function displayTweets() {
    tweetList.innerHTML = '';
    tweets.forEach((tweet, index) => {
        const tweetElement = document.createElement('div');
        tweetElement.classList.add('tweet');
        tweetElement.innerHTML = `
            <p>${tweet.text}</p>
            <div>
                <button class="like-btn" onclick="likeTweet(${index})">❤️ ${tweet.likes}</button>
            </div>
        `;
        tweetList.appendChild(tweetElement);
    });
}


function postTweet() {
    const tweetText = tweetInput.value.trim();

    if (tweetText) {
        const newTweet = {
            text: tweetText,
            likes: 0
        };

        tweets.unshift(newTweet); 
        localStorage.setItem('tweets', JSON.stringify(tweets));
        tweetInput.value = ''; 
        displayTweets(); 
    } else {
        alert("Please write something before posting!");
    }
}


function likeTweet(index) {
    tweets[index].likes++;
    localStorage.setItem('tweets', JSON.stringify(tweets));
    displayTweets(); 
}


displayTweets();
