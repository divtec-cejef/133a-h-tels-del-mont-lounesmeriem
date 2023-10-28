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
 const uneChambre = formulaireReservtion.querySelectorall('[name="opt_type_chambre"]:checked');
 if (uneChambre === null){
  return "";
 }else{
  return uneChambre.value;
 }

}

/**
 * Retourne les options choisies par le visiteur
 * @returns {Array} tableau des éléments checkbox cochés
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

}

/**
 * Affiche la confirmation de réservation
 */
function afficheConfirmation() {

}

/**
 * Fonction appellé lors de l'envoi du formulaire
 * Test la saisie et affiche la confirmation ou le message d'erreur
 * @param event Objet représentant l'événement
 */
const resrever = document.getElementById('reservation');
const formulaire = document.getElementById('Formulaire');

//alert("coucou!");
function reserver(event) {
 // Stoppe l'envoi du formulaire
 //event.preventDefault();

}
formulaire.addEventListener('submit', () => {
 event.preventDefault();
 alert('reserver');
});
