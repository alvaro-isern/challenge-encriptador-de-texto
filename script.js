// Función para encriptar el texto
function encriptarTexto(texto) {
    let encriptado = texto.replace(/e/g, "enter")
                          .replace(/i/g, "imes")
                          .replace(/a/g, "ai")
                          .replace(/o/g, "ober")
                          .replace(/u/g, "ufat");
    return encriptado;
  }
  
  // Función para desencriptar el texto
  function desencriptarTexto(texto) {
    let desencriptado = texto.replace(/enter/g, "e")
                             .replace(/imes/g, "i")
                             .replace(/ai/g, "a")
                             .replace(/ober/g, "o")
                             .replace(/ufat/g, "u");
    return desencriptado;
  }
  
  // Función para mostrar el resultado y ocultar los elementos actuales
  function mostrarResultado(texto) {
    const cajaElementos = document.querySelector('.contenido__respuesta__caja__elementos');
    if (cajaElementos) {  // Verifica si el elemento existe
      cajaElementos.style.display = 'none'; // Ocultar elementos actuales
    }
  
    const cajaRespuesta = document.querySelector('.contenido__respuesta__caja');
  
    if (cajaRespuesta) {  // Verifica si el elemento existe
      // Eliminar el contenido previo antes de agregar el nuevo resultado
      cajaRespuesta.innerHTML = '';
  
      const resultado = document.createElement('textarea');
      resultado.value = texto;
      resultado.readOnly = true;
      resultado.style.width = '80%';
      resultado.style.height = '200px';
      resultado.style.margin = '20px';
      resultado.style.padding = '10px';
      resultado.style.borderRadius = '10px';
      resultado.style.backgroundColor = '#EBD3F8';
      resultado.style.color = '#2E073F';
      resultado.style.fontSize = 'large';
      resultado.style.outline = 'none';
  
      const botonCopiar = document.createElement('button');
      botonCopiar.innerText = 'Copiar';
      botonCopiar.style.padding = '10px 20px';
      botonCopiar.style.borderRadius = '10px';
      botonCopiar.style.border = 'none';
      botonCopiar.style.backgroundColor = '#2E073F';
      botonCopiar.style.color = '#EBD3F8';
      botonCopiar.style.fontSize = 'medium';
      botonCopiar.style.cursor = 'pointer';
  
      botonCopiar.addEventListener('click', () => {
        navigator.clipboard.writeText(resultado.value);
        alert('Texto copiado al portapapeles');
      });
  
      cajaRespuesta.appendChild(resultado);
      cajaRespuesta.appendChild(botonCopiar);
    }
  }
  
  // Manejar el evento del botón de encriptar
  document.querySelector('.boton__encriptar').addEventListener('click', () => {
    const texto = document.querySelector('textarea').value;
    const textoEncriptado = encriptarTexto(texto);
    mostrarResultado(textoEncriptado);
  });
  
  // Manejar el evento del botón de desencriptar
  document.querySelector('.boton__desencriptar').addEventListener('click', () => {
    const texto = document.querySelector('textarea').value;
    const textoDesencriptado = desencriptarTexto(texto);
    mostrarResultado(textoDesencriptado);
  });
  