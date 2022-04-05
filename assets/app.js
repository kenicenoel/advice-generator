let api_url = 'https://api.adviceslip.com/advice';
let adviceId = document.getElementById('advice__card__id');
let adviceHolder = document.getElementById('advice__card__text');


function getRandomAdvice()
{
    fetch(api_url)
        .then(response => response.json()
            .then(data =>
        {
            console.log(data);
            adviceId.innerHTML = "Advice #" + data["slip"]["id"];
            adviceHolder.innerHTML = data["slip"]["advice"];
        }));
}