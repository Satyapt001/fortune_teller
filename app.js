//user is going to input color code and according to 

function tellFortune(){
    //let
    //var
    //const

    let favColor = document.getElementById("favColor").value;
    //the above code is to get the value from the user input tag with id name favColor

    let career ;

    //conditional satements
    if(favColor === "red")
        //== and === strict equality vs loose equality 
        {
        career = "you might be a passonate leader";
    }else if (favColor === "green"){
        career = "The world of creativity awaits you";
    }else if (favColor === "blue"){
        career = "you have a potential to be a problem solver";
    }else{
        career = "the future holds many exciting stuff for you";
    }

    document.getElementById("Fortune").innerHTML = career;
}

const a = 100; //number
const b = '100';//string

console.log(a == b);//true 
console.log(a === b);//false strict equality