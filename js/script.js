document.getElementById('boton').addEventListener('click', function () {
    document.getElementById('formulario').style.display = 'block';  
    document.getElementById('tarjeta').style.display = 'none';      
});

document.getElementById('enviar').addEventListener('click', function () {
    let nombre = document.getElementById('nombre1').value;
    let puesto = document.getElementById('puesto').value;

        document.getElementById('dato1').innerText = nombre;
        document.getElementById('dato2').innerText = puesto;

        document.getElementById('tarjeta').style.display = 'block';
        document.getElementById('formulario').style.display = 'none';
    } 
    
);
