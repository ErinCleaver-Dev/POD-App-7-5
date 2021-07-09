


async function loadCards() {
    let search_results = document.querySelector('.search-results');
    let cardTemplate = Handlebars.compile(
        document.getElementById('card-template').innerHTML);
    let resp = await fetch('https://erincleaver-grcc.github.io/songs/songs.json');

    console.log(resp);

    let result = await resp.json();
    console.log(result);
    
    result['songs'].map(item => {
        
        search_results.innerHTML += cardTemplate(item);
    });







}


loadCards();

