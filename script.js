const buttons = document.querySelectorAll(".tablinks");
const imgTag = document.querySelector("img");

buttons.forEach((button) => {
  button.addEventListener("click", displayImage);
});

function displayImage(e) {
  let searchTerm = e?.target?.dataset?.category || "French";

  fetch(
    `https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&fields=id,title,artist_display,date_display,main_reference_number,image_id`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let selectedArtwork =
        data.data[Math.floor(Math.random() * data.data.length)];
      console.log(selectedArtwork);
      imgTag.src = `https://www.artic.edu/iiif/2/${selectedArtwork.image_id}/full/843,/0/default.jpg`;
    });
}

displayImage();