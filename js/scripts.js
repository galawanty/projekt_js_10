function checkOnclickEvent(listener) {
	console.log(listener);
}

var lista = document.getElementById('list');
	add = document.getElementById('addElem');

	add.addEventListener('click', function(list) {
		checkOnclickEvent('dodaj')
	});
	
	lista.addEventListener('keypress', function(list) {
  		var list = document.createElement('li');
  			list.innerHTML += '<li>item + 1</li>';
		console.log(list);
	
		var quantity = document.getElementsByTagName('li');
  			console.log(quantity.length);
	});



