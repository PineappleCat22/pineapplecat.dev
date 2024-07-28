const USERNAME = "pineapple_cat";
const BASE_URL = `https://lastfm-last-played.biancarosa.com.br/${USERNAME}/latest-song`;

const getTrack = async () => {
    const request = await fetch(BASE_URL);
    const json = await request.json();
    let status

    let isPlaying = json.track['@attr']?.nowplaying || false;
    if(!isPlaying) {
        // HIDE PLAYER DIV
        status = "Last listened:"
        //return;
    } else {
        // SHOW PLAYER DIV
        status = "Listening to:"
    }

    // Values:
    // COVER IMAGE: json.track.image[1]['#text']
    // TITLE: json.track.name
    // ARTIST: json.track.artist['#text']
    
    document.getElementById("listening").innerHTML = `
    <div style="width:49%;  padding-right:1%;">
    <p id="trackStatus" style="font-size: 1vw;">${status}</p>
    <img src="${json.track.image[3]['#text']}" style=width:100%;" padding-top:10px;">
    </div>
    <div id="trackInfo" style="width:49%; padding-left:1%;">
    <h3 id="trackName" style="font-size: 1.2vw;">${json.track.name}</h3>
    <p id="artistName"style="font-size: 1vw;">${json.track.artist['#text']}</p>
    </div>
    `
};

getTrack();
setInterval(() => { getTrack(); }, 10000);
// i dont know how AAAAAANY of this works