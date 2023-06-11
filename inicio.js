function ir(){
	var user=document.getElementById('nombre').value;
	var contra=document.getElementById('con').value;


	if(user=="alejandro" && contra=="123456"){
		alert("BIENVENIDO INICIASTE SESION");
		window.location.href="menu.html";
	}

	else{
		alert("POR FAVOR INGRESA USUARIO Y CONTRASEÑA CORRECTOS.");
	}
}