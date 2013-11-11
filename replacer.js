var replaced = jQuery("body").html().replace(/witnesses/gi,'these dudes I know');
var replaced = replaced.replace(/allegedly/g, 'kinda probably');
var replaced = replaced.replace(/Allegedly/g, 'Kinda probably');
var replaced = replaced.replace(/new study/gi, 'Tumblr post');
var replaced = replaced.replace(/rebuild/g, 'avenge');
var replaced = replaced.replace(/Rebuild/g, 'Avenge');
var replaced = replaced.replace(/space/g, 'spaaace');
var replaced = replaced.replace(/Space/g, 'Spaaace');
var replaced = replaced.replace(/Google Glass/g, 'Virtual Boy');
var replaced = replaced.replace(/google glass/g, 'virtual boy');
var replaced = replaced.replace(/smartphone/g, 'pokedex');
var replaced = replaced.replace(/Smartphone/g, 'Pokedex');
var replaced = replaced.replace(/electric/g, 'atomic');
var replaced = replaced.replace(/Electric/g, 'Atomic');
var replaced = replaced.replace(/senator/g, 'elf-lord');
var replaced = replaced.replace(/Senator/g, 'Elf-Lord');
var replaced = replaced.replace(/car/g, 'cat');
var replaced = replaced.replace(/Car/g, 'Cat');
var replaced = replaced.replace(/election/g, 'eating contest');
var replaced = replaced.replace(/Election/g, 'Eating Contest');
var replaced = replaced.replace(/Congressional Leaders/g, 'River Spirits');
var replaced = replaced.replace(/congressional leaders/g, 'river spirits');
var replaced = replaced.replace(/Homeland Security/g, 'Homestar Runner');
var replaced = replaced.replace(/homeland security/g, 'homestar runner');
var replaced = replaced.replace(/could not be reached for comment/g, 'is guilty and everyone knows it');


jQuery("body").html(replaced);