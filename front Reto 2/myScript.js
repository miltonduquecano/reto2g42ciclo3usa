
	function leerCloud(){
	//FUNCION GET
		$.ajax({    
			url : 'https://g749ecc13134054-v9ndnrz55stf8267.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/cloud/cloud',
			type : 'GET',
			dataType : 'json',
	
			success : function(cloud) {
				   let cs=cloud.items;
				   $("#listaCloud").empty();
				   for(i=0;i<cs.length;i++){
					   $("#listaCloud").append(cs[i].id+" <b>"+cs[i].brand+"</b> "+cs[i].model+"</b> "+cs[i].category_id+" "+cs[i].name);
					   $("#listaCloud").append("<button onclick='borrarCloud("+cs[i].id+")'>Borrar</button><br>");
				   
				   }
			},
			error : function(xhr, status) {
				alert('ha sucedido un problema');
			}
		});
	}
	
	
	function guardarCloud() {
		let idcloud=$("#idcloud").val();
		let brandcloud=$("#brandcloud").val();
		let modelcloud=$("#modelcloud").val();
		let category_idcloud=$("#category_idcloud").val();
		let namecloud=$("#namecloud").val();

	
		let data={
			id:idcloud,
			brand:brandcloud,
			model:modelcloud,
			category_id:category_idcloud,
			name:namecloud
		};
	
		let dataToSend=JSON.stringify(data);
		//console.log(dataToSend);
	
	
		$.ajax({    
			url : 'https://g749ecc13134054-v9ndnrz55stf8267.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/cloud/cloud',
			type : 'POST',
		 //   dataType : 'json',
			data:dataToSend,
			contentType:'application/json',
			success : function(pepito) {
				   $("#idcloud").val("");
				$("#brandcloud").val("");
				$("#modelcloud").val("");
				$("#category_idcloud").val("");
				$("#namecloud").val("");
			},
			error : function(xhr, status) {
		   //     alert('ha sucedido un problema');
			},
			complete: function(){
				leerCloud();
			}
		});
	
	
	}
	
	
	function editarCloud(){
		let idcloud=$("#idcloud").val();
		let brandcloud=$("#brandcloud").val();
		let modelcloud=$("#modelcloud").val();
		let category_idcloud=$("#category_idcloud").val();
		let namecloud=$("#namecloud").val();

	
		let data={
			id:idcloud,
			brand:brandcloud,
			model:modelcloud,
			category_id:category_idcloud,
			name:namecloud
		};

		let dataToSend=JSON.stringify(data);
		//console.log(dataToSend);
		$.ajax({    
			url : 'https://g749ecc13134054-v9ndnrz55stf8267.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/cloud/cloud',
			type : 'PUT',
		 //   dataType : 'json',
			data:dataToSend,
			contentType:'application/json',
			success : function(pepito) {
				$("#idcloud").val("");
				$("#brandcloud").val("");
				$("#modelcloud").val("");
				$("#category_idcloud").val("");
				$("#namecloud").val("");
			},
			error : function(xhr, status) {
		   //     alert('ha sucedido un problema');
			},
			complete: function(){
				leerCloud();
			}
		});
	
	}
	
	function borrarCloud(idcloud){
		let data={
			id:idcloud
		};
		let dataToSend=JSON.stringify(data);
		//console.log(dataToSend);
		$.ajax({    
			url : 'https://g749ecc13134054-v9ndnrz55stf8267.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/cloud/cloud',
			type : 'DELETE',
		 //   dataType : 'json',
			data:dataToSend,
			contentType:'application/json',
			success : function(pepito) {
				$("#idcloud").val("");
				$("#brandcloud").val("");
				$("#modelcloud").val("");
				$("#category_idcloud").val("");
				$("#namecloud").val("");
			},
			error : function(xhr, status) {
		   //     alert('ha sucedido un problema');
			},
			complete: function(){
				leerCloud();
			}
		});
	
	}
	


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function leerClientes(){
//FUNCION GET
	$.ajax({    
	    url : 'https://g749ecc13134054-v9ndnrz55stf8267.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/client/client',
	    type : 'GET',
	    dataType : 'json',

	    success : function(clientes) {
	   		let cs=clientes.items;
	   		$("#listaClientes").empty();
	   		for(i=0;i<cs.length;i++){
	   			$("#listaClientes").append(cs[i].id+" <b>"+cs[i].name+"</b> "+cs[i].email+" "+cs[i].age);
	   			$("#listaClientes").append("<button onclick='borrarCliente("+cs[i].id+")'>Borrar</button><br>");
	   		
	   		}
	    },
	    error : function(xhr, status) {
	        alert('ha sucedido un problema');
	    }
	});
}


function guardarCliente() {
	let idCliente=$("#idCliente").val();
	let nombre=$("#nombreCliente").val();
	let mailCliente=$("#mailCliente").val();
	let edad=$("#edadCliente").val();

	let data={
		id:idCliente,
		name:nombre,
		email:mailCliente,
		age:edad
	};

	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);


	$.ajax({    
	    url : 'https://g749ecc13134054-v9ndnrz55stf8267.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/client/client',
	    type : 'POST',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(pepito) {
	   		$("#idCliente").val("");
			$("#nombreCliente").val("");
			$("#mailCliente").val("");
			$("#edadCliente").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerClientes();
	    }
	});


}


function editarCliente(){
	let idCliente=$("#idCliente").val();
	let nombre=$("#nombreCliente").val();
	let mailCliente=$("#mailCliente").val();
	let edad=$("#edadCliente").val();

	let data={
		id:idCliente,
		name:nombre,
		email:mailCliente,
		age:edad
	};
	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);
	$.ajax({    
	    url : 'https://g749ecc13134054-v9ndnrz55stf8267.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/client/client',
	    type : 'PUT',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(pepito) {
	   		$("#idCliente").val("");
			$("#nombreCliente").val("");
			$("#mailCliente").val("");
			$("#edadCliente").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerClientes();
	    }
	});

}

function borrarCliente(idCliente){
	let data={
		id:idCliente
	};
	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);
	$.ajax({    
	    url : 'https://g749ecc13134054-v9ndnrz55stf8267.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/client/client',
	    type : 'DELETE',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(pepito) {
	   		$("#idCliente").val("");
			$("#nombreCliente").val("");
			$("#mailCliente").val("");
			$("#edadCliente").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerClientes();
	    }
	});

}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	function leerMessage(){
	//FUNCION GET
		$.ajax({    
			url : 'https://g749ecc13134054-v9ndnrz55stf8267.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/message/message',
			type : 'GET',
			dataType : 'json',
	
			success : function(message) {
				   let cs=message.items;
				   $("#listaMessage").empty();
				   for(i=0;i<cs.length;i++){
					   $("#listaMessage").append(cs[i].id+" <b>"+cs[i].messagetext);
					   $("#listaMessage").append("<button onclick='borrarMessage("+cs[i].id+")'>Borrar</button><br>");
				   
				   }
			},
			error : function(xhr, status) {
				alert('ha sucedido un problema');
			}
		});
	}
	
	
	function guardarMessage() {
		let idMessage=$("#idMessage").val();
		let messagetextMessage=$("#messagetextMessage").val();
		
	
		let data={
			id:idMessage,
			messagetext:messagetextMessage,
		};
	
		let dataToSend=JSON.stringify(data);
		//console.log(dataToSend);
	
	
		$.ajax({    
			url : 'https://g749ecc13134054-v9ndnrz55stf8267.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/message/message',
			type : 'POST',
		 //   dataType : 'json',
			data:dataToSend,
			contentType:'application/json',
			success : function(pepito) {
				   $("#idMessage").val("");
				$("#messagetextMessage").val("");
				
			},
			error : function(xhr, status) {
		   //     alert('ha sucedido un problema');
			},
			complete: function(){
				leerMessage();
			}
		});
	
	
	}
	
	
	function editarMessage(){
		let idMessage=$("#idMessage").val();
		let messagetextMessage=$("#messagetextMessage").val();
		
	
		let data={
			id:idMessage,
			messagetext:messagetextMessage,
		};

		let dataToSend=JSON.stringify(data);
		//console.log(dataToSend);
		$.ajax({    
			url : 'https://g749ecc13134054-v9ndnrz55stf8267.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/message/message',
			type : 'PUT',
		 //   dataType : 'json',
			data:dataToSend,
			contentType:'application/json',
			success : function(pepito) {
				$("#idMessage").val("");
				$("#messagetextMessage").val("");
			},
			error : function(xhr, status) {
		   //     alert('ha sucedido un problema');
			},
			complete: function(){
				leerMessage();
			}
		});
	
	}
	
	function borrarMessage(idMessage){
		let data={
			id:idMessage
		};
		let dataToSend=JSON.stringify(data);
		//console.log(dataToSend);
		$.ajax({    
			url : 'https://g749ecc13134054-v9ndnrz55stf8267.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/message/message',
			type : 'DELETE',
		 //   dataType : 'json',
			data:dataToSend,
			contentType:'application/json',
			success : function(pepito) {
				$("#idMessage").val("");
				$("#messagetextMessage").val("");
			},
			error : function(xhr, status) {
		   //     alert('ha sucedido un problema');
			},
			complete: function(){
				leerMessage();
			}
		});
	
	}





