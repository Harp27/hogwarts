$(() => {
    // put jQuery in here
    const $container = $('#container');
console.log($container);

const $h1 = $('<h1>').text('Hogwarts');
console.log($h1);

$container.append($h1);

const $h2 = $('<h2>').text('Harp Singh')
$container.append($h2);

const $h3 = $('<h3>').text('Slytherin')
$container.append($h3);

const $h4Pet = $('<h4>').text('Buckbeak').addClass('Hippogriff')
$container.append($h4Pet);

const $h4Wand = $('<h4>').text('Ebony Wand with Unicorn Hair, Slightly Yielding.').addClass('Hippogriff')
$container.append($h4Wand);

const $ul = $('<ul>').attr('storage', 'trunk');
  $ul.append($('<li>').text('Butter Beer'));
  $ul.append($('<li>').text('Invisibility Cloak').addClass('secret'));
  $ul.append($('<li>').text('Magic Map').addClass('secret'));
  $ul.append($('<li>').text('Time Turner').addClass('secret'));
  $ul.append($('<li>').text('Leash').addClass('Hippogriff'));
  $ul.append($('<li>').text('Bertie Bott\'s Every Flavor [Jelly] Beans'));
  
  $container.append($ul);
});
