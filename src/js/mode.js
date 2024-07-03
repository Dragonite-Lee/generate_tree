dark = document.getElementsByClassName("dark");
light = document.getElementsByClassName("light");

function toDark() { //달모양 hide붙이고 해모양 hide없애기
  light.classList.remove('hide');
  dark.classList.add('hide');
}

function toLight() { //해모양 hide붙이고 달모양 hide없애기
  dark.classList.remove('hide');
  light.classList.add('hide');
}