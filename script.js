let content=document.querySelector(".numbers");
for (i=100; i>=50; i--) {
    if (i%10==0){
        content.innerHTML+="<p>"+i+"</p>";
        console.log(i)
    }
}

content=document.querySelector(".strings_container");
let strings="string"
for (i=0; i<strings.length; i++) {
    content.innerHTML+="<p>"+strings[i]+"</p>";
    console.log(strings[i]);
}

let users=[
    {
        "first_name":"Julia",
        "last_name":"Damanska",
        "age":32
    },
    {
        "first_name":"Jaroslawa",
        "last_name":"Glotowa",
        "age":6
    }
]
console.log(users)

content=document.querySelector(".users_container");
for (i=0; i<users.length; i++) {
    if (users[i].age>=18){
        content.innerHTML+="<p>"+users[i].first_name+"</p>";
        content.innerHTML+="<p>"+users[i].last_name+"</p>";
        content.innerHTML+="<p>"+users[i].age+"</p>";
        console.log(users[i])
    }
}