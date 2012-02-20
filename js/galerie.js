function galerie(id, anzahl_bilder, anzahl_galerie, view) {
	if(view=='show'){
		for(var i = 1; i <= anzahl_bilder; i++) {
			show(id * 100 + i);
		}
		for(var x = 1; x <= anzahl_galerie; x++) {
			hide(x);
		}
		show('back');
	}
	if(view=='hide'){
		for(var y=1; y<=anzahl_galerie;y++){
			for(var c=1;c<=anzahl_bilder;c++){
				hide(y*100+c);
			}
			show(y);
		}
		hide('back');
	}	
}

function show(a) {
	var e = document.getElementById(a);
	if(!e)
		return true;
	e.style.display = "block"
	return true;
}

function hide(a) {
	var e = document.getElementById(a);
	if(!e)
		return true;
	e.style.display = "none"
	return true;
}