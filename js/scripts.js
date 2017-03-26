var lista = document.getElementById('list');
	liElements = document.getElementsByTagName('li'),
		add = document.getElementById('addElem');

add.addEventListener('click', function() {
		list.innerHTML += '<li>item' + liElements.length + '</li>';
});  			