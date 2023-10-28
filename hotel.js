/**
* @author      Steve Fallet <steve.fallet@divtec.ch>
* @version     1.0
* @since       2023-10-09
*
* http://usejsdoc.org/
*/

"use strict";
/**recupérer les elements globaux**/
const formulaireReservtion = document.getElementById('Formulaire');
const message = document.getElementById('message');
const laReservation = document.getElementById('reservation');

/**recupérer les elements du formulaire**/
const lisHotel = document.getElementById('lis_hotel');
const nombreChambre = document.getElementById('txt_nbrChambre');
console.log(lisHotel,nombreChambre);

const imagePhotoHotel = document.getElementById('photo');
const nomHotel = laReservation.querySelector('h2');
const spanChambreNombre = document.getElementById('chambre_nombre');
const spanChambreType = document.getElementById('chambre_type');
const ulOptions = document.getElementById('options');
/**
 * Retourne le nom de l'hotel sélectionné par le visiteur
 * @returns {String} Nom de l'hotêl ou "0" si pas de sélection
 */
function getHotel() {
return lisHotel.value;
}

/**
 * Retourne le nombre de chambres saisi par le visiteur
 * @returns {Number} Nombre de chambres ou NaN (Not A Number)
 */
function getNbChambre() {
 return parseInt(nombreChambre.value);

}

/**
 * Retourne le type de chambre sélectionné ou ""
 * @returns {String} Type de chambre ou ""
 */
function getChambre() {
 const uneChambre = formulaireReservtion.querySelectorAll('[name="opt_type_chambre"]:checked');
 if (uneChambre === null){
  return "";
 }else{
  return uneChambre.value;
 }

}

/**
 * Retourne les options choisies par le visiteur
 * @returns {NodeList} tableau des éléments checkbox cochés
 */
function getOptions() {
return formulaireReservtion.querySelectorAll('[name="chk_options[]"]:checked');
}

/**
 * Valide la saisie utilisateur
 * Retourne un message d'erreur au format HTML "<ul><li>erreur 1</li>...</ul>"
 * ou chaine vide si tout est OK.
 *
 * @returns {String}    Chaine vide si pas d'erreur ou <ul> d'erreurs
 */
function valideSaisie() {
 let erreurs = "";
 let nombreChambre = getNbChambre();
 if (getHotel() === " "){
 erreurs += "<li> Choisir un hôtel</li>";
 }else if (Number.isNaN(nombreChambre) || nombreChambre < 1 || nombreChambre > 12 ){
 erreurs += "<li> Entrer un nombre de chambre, maximum 12</li>";
 }else if (getNbChambre() === ""){
   erreurs += "<li> Choisir un type de chambre </li>";
 }
return erreurs;
}

/**
 * Affiche la confirmation de réservation
 */
function afficheConfirmation() {
 //afficher la photo de l'hotel
 imagePhotoHotel.src = "images/" + getHotel().toLowerCase()+".jpg";

 //afficher le titre h2
 nomHotel.innerText = getHotel();

 //afficher le nombre de chambres et le type de chambres reserver
 spanChambreNombre.innerText = getNbChambre().toString();
 spanChambreType.innerText = getChambre();
 ulOptions.innerHTML =" ";
 for (let option of getOptions()) {
  ulOptions.innerHTML += "<li>" + option.value + "</li>";
 }
//afficher la reservation
laReservation.style.display = "block";

}

/**
 * Fonction appellé lors de l'envoi du formulaire
 * Test la saisie et affiche la confirmation ou le message d'erreur
 * @param event Objet représentant l'événement
 */
//alert("coucou!");
function reserver(event) {
 // Stoppe l'envoi du formulaire
 event.preventDefault();

 //valide les messages d'erreurs
 message.innerHTML = " ";
 message.style.display = "none";

 //valider les saisies des utilisateurs
 let erreurs = valideSaisie();
 if (erreurs){
  message.innerHTML = "<ul>"+ erreurs + "</ul>";
  message.style.display = "block";

  laReservation.style.display = "none";
  return erreurs;
 }
 //afficher la confirmation de la reservation
 afficheConfirmation();


}
/** Evénements du formulaire : envoi et réinitialisation **/

formulaireReservtion.addEventListener("submit", reserver);
formulaireReservtion.addEventListener("reset", function () {
 message.style.display = "none";
 laReservation.style.display = "none";
});
