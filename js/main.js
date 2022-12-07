document.getElementById("drapeauTitre").addEventListener("click", clicTitre);
document.getElementById("drapeauBio").addEventListener("click", clicBio);
document.getElementById("drapeauTechno").addEventListener("click", clicTechno);

function clicTitre() {
  document.getElementById("divGridTitre").classList = 'gridTitre';
  document.getElementById("drapeauTitre").classList = 'drapeauNone';
  document.getElementById("bigChiffre1").style = "font-size: 150px;top:30px;"
  document.getElementById("bigChiffre2").style = "font-size: 300px;"
  document.getElementById("bigChiffre3").style = "font-size: 200px;top:30px;"
  document.getElementById("bigChiffre4").style = "font-size: 180px;bottom:10vh;"

  document.getElementById("bigChiffre1mobile").style.display = "none";
  document.getElementById("bigChiffre2mobile").style.display = "none"
  document.getElementById("bigChiffre3mobile").style.display = "none"
  document.getElementById("bigChiffre4mobile").style.display = "none"

}

function clicBio() {
  document.getElementById("divGridBio").classList = 'gridBio';
  document.getElementById("drapeauBio").classList = 'drapeauNone';
}

function clicTechno(){
  document.getElementById("divGridTechno").classList = 'technoGrid';
  document.getElementById("drapeauTechno").classList = 'drapeauNone';
}

const bombe1 = document.getElementById('bombe1');
const bombe2 = document.getElementById('bombe2');
const bombe3 = document.getElementById('bombe3');
const bombe4 = document.getElementById('bombe4');


function showBomb(bombeNumber){
  bombeNumber.style.display = 'flex';
  bombeNumber.style.opacity = 1;
}


function hiddeBomb(bombeNumber){
  bombeNumber.style.display = 'none';
  bombeNumber.style.opacity = 0;
}
