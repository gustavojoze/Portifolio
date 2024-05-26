//Seu JavaScript de validação aqui



function teste(){
   event.preventDefault()
  var nome = document.getElementById('nome').value; 
  var email= document.getElementById('email').value;
  var assunto = document.getElementById('assunto').value;
  var mensagem = document.getElementById('mensagem').value;
  
 if(nome.length>50 || nome==''){
  alert('O correu um problema no nome. Verifique se tem mais de 50 caracteres ou se não esta vazio');
 }
 else if(!email.includes("@")||!email.includes(".")||email==''){
  alert('O correu um problema no email. Verifique se tem "@" e "." ou esta vazio');
 }
 else if(assunto.length>15 || assunto==''){
  alert('O correu um problema no assunto. Verifique se tem mais de 15 caracteres ou se esta vazio');
}
else if(mensagem.length>50||mensagem==''){
  alert('O correu um problema na mensagem. Verifique se tem mais de 50 caracteres e se não esta vazio');

}
else{
  alert('Formulario enviada com sucesso');  
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('assunto').value = '';
  document.getElementById('mensagem').value = '';
}

}
