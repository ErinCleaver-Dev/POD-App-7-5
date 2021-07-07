


async function loadStudents() {
    let search_results = document.querySelector('.search-results');
    let resp = await fetch('https://erincleaver-grcc.github.io/songs/songs.json');

    console.log(resp);

    let result = await resp.json();
    console.log(result);

    result['songs'].map(item => {

        let formated_card = `<div class="card">
        <div class="card-image" style="background-image: url('${item.img}');background-size: cover;background-position: center;">
            
        </div>
        <p class='podcast_title'>${item.name}</p>
        <p>${item.genre}</p>
        <input type="submit" id="listen" class="button_rules" value="Listen">
        </div>`
        search_results.innerHTML += formated_card;
    });







}


loadStudents();

