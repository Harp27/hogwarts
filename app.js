$(() => {
    
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

const $h4Wand = $('<h4>').text('Ebony Wand with Unicorn Hair, Slightly Yielding.')
$container.append($h4Wand);

const $ul = $('<ul>').attr('storage', 'trunk');
  $ul.append($('<li>').text('Butter Beer'));
  $ul.append($('<li>').text('Invisibility Cloak').addClass('secret'));
  $ul.append($('<li>').text('Magic Map').addClass('secret'));
  $ul.append($('<li>').text('Time Turner').addClass('secret'));
  $ul.append($('<li>').text('Leash'));
  $ul.append($('<li>').text('Bertie Bott\'s Every Flavor [Jelly] Beans'));
  
  $container.append($ul);

  const $h5 = $('<h5>').text('Spring 2017');
  $container.append($h5);

  const $table = $('<table>');

  const $thead = $('<thead>').append(
    $('<tr>').append(
      $('<th>').text('Day'),
      $('<th>').text('Classes')
    )
  );

  const $tbody = $('<tbody>').append(
    $('<tr>').append(
      $('<td>').text('Monday'),
      $('<td>').text('Herbology, Divination, History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice')
    ),
    $('<tr>').append(
      $('<td>').text('Tuesday'),
      $('<td>').text('Divination, Charms, Quidditch Practice, Defence Against the Dark Arts, Transfiguration, History of Magic, Herbology, Potions')
    ),
    $('<tr>').append(
      $('<td>').text('Wednesday'),
      $('<td>').text('Herbology, Divination, History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice')
    ),
    $('<tr>').append(
      $('<td>').text('Thursday'),
      $('<td>').text('Divination, Charms, Quidditch Practice, Defence Against the Dark Arts, Transfiguration, History of Magic, Herbology, Potions')
    ),
    $('<tr>').append(
      $('<td>').text('Friday'),
      $('<td>').text('Herbology, Divination, History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice')
    )
  );

  
  $container.append($thead, $tbody)

  $container.append($table);

  $($h4Wand).remove();
  $('li:contains("Butter Beer")').remove();
  const $newWand = $("<h4>").text("Ebony and Dragon Heartstring Wand").css('color', 'indigo');
  $newWand.insertAfter($h4Pet);

  $('.Hippogriff').insertAfter($newWand);
  $('.Hippogriff').insertBefore($newWand);

});
