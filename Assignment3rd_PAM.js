//Assignment 1

let names = ["Geetha", "Chinni", "Pavithra", "Sudha", "Ranjana"] , revName = [];

function reverseName(names){
    console.log("Revered order name below")
    for(let i= names.length-1, j=0 ; i>=0 ; i--){
        //Method 1 - Printed in console
        console.log(names[i]);

        //Method 2 - Printed in web page
        revName[j]=names[i]
        document.getElementById("names").innerHTML=revName;               
        j++;
    }
}
reverseName(names);

//Assignment 2


let countries=[
    {
        name : "India",
        capital : "Dehli",
        population : 1000
    },
    {
        name : "Australia",
        capital : "Canberra",
        population : 1500
    },
    {
        name : "Afghanistan",
        capital : "Kabul",
        population : 3000
    },
    {
        name : "Bangladesh",
        capital : "Dhaka",
        population : 500
    },
    {
        name : "Bhutan",
        capital : "Thimphu",
        population : 3500
    }
];

 function lessPopulation(countries){
     console.log("Less than 2000 population countries list below");
    for(let i=0 ; i<countries.length ; i++){
        
        if(countries[i].population < 2000){
          //Method 1 - Printed in console 
          console.log(countries[i].name + " ");  

          //Method 2 - Printed in web page
          document.getElementById("country").append(countries[i].name + " ");
           
        }
    }
 }
 lessPopulation(countries);


