function openProject(projectFileName) {
  window.location.href = projectFileName;
}

function showDisplay1() {
  console.log('Button 1 clicked');
  document.querySelector('.display-1').style.display = 'block';
  document.querySelector('.display-2').style.display = 'none';
}

function showDisplay2() {
  document.querySelector('.display-1').style.display = 'none';
  document.querySelector('.display-2').style.display = 'block';
}

function downloadWordFile() {

  const wordFileUrl = './files/Dylan_Bello.Resume.docx';
  const link = document.createElement('a');
  link.href = wordFileUrl;
  link.download = 'downloaded_file.docx';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
} 

function displayImage(imageSrc) {
  document.getElementById('displayed-image').src = imageSrc;
  document.getElementById('displayed-image').style.display = 'block';
  document.getElementById('displayed-video').style.display = 'none';
}

function displayVideo(videoSrc) {
  document.getElementById('displayed-video').src = videoSrc;
  document.getElementById('displayed-video').style.display = 'block';
  document.getElementById('displayed-image').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
  // Your other code inside the DOMContentLoaded event listener
});