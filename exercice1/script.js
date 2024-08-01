

    function multiple(){

    let nombre1 = parseInt(document.getElementById('nombre1').value);
    let nombre2 = parseInt(document.getElementById('nombre2').value);

    let multiplication = nombre1 * nombre2;
    document.getElementById('resultat').innerText = `${nombre1} x ${nombre2} =  ${multiplication}.`;
}
multiple();

