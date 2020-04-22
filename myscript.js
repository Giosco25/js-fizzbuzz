/*Scrivi un programma che stampi i numeri da 1 a 100, con le seguenti regole:
al posto dei multipli di 3 stampi "Fizz"
al posto dei multipli di 5 stampi "Buzz"
al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz" */

//scrivere i numeri da 1 a 100
 for(var numeri = 1; numeri < 101; numeri++){
     //console.log(numeri);
     // scrivere nei numeri multipli di 3 la parola fizz
     //multipli 3 e 5  scrivere FizzBuzz
     if (numeri % 3 == 0 && numeri % 5 == 0) {
         console.log('fizzBuzz');
         document.getElementById('fizz-buzz').innerHTML += ('fizzBuzz <br>');
     } else if(numeri % 3 == 0){
         console.log('fizz');
         document.getElementById('fizz-buzz').innerHTML += ('fizz <br>');
     // in quelli da 5 la parola buzz
     } else if(numeri % 5 == 0){
        console.log('buzz');
        document.getElementById('fizz-buzz').innerHTML += ('buzz <br>');
    } else {
        console.log(numeri);
        document.getElementById('fizz-buzz').innerHTML += (numeri + '<br>');
    }

}
