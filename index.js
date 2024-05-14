function displaySongInfo() {
    let songName = document.getElementById("songName").value;
    let youtubeLink = document.getElementById("youtubeLink").value;
    let description = document.getElementById("description").value;
    let year = document.getElementById("year").value;

    let embeddableLink = youtubeLink.replace("watch?v=", "embed/");

    
    let displayArea = document.getElementById("displayArea");
    displayArea.innerHTML = `
        <h2>${songName}</h2>
        <p>${description}</p>
        <p> ${year}</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/r0c9Q21AfLA?si=eK4HSNytdwyrfncE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `;

   
    document.getElementById("formarea").style.display = "none";
    displayArea.style.display = "block";
} 
module.exports = {
    displaySongInfo: displaySongInfo,
};