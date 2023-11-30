const form = document.querySelector('form');

form.addEventListener('submit', function(e){

    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please Give a Vaild Height ${height}`;
    }else if (weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please Give a Vaild Weight ${weight}`;
    }else{
        var bmi = (weight/((height * height)/1000)).toFixed(2);
        result.innerHTML=bmi;
    }
    if(bmi <= 18.6){
        result.innerHTML = `${bmi} <br> Under Weight`;
    }else if(18.6 < bmi <= 24.9){
        result.innerHTML = `${bmi} <br> Normal Weight`;
    }else{
        result.innerHTML = `${bmi} <br> Over Weight`;
    }
})