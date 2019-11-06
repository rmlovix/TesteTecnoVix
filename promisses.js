var defer = new Promise((resolve, reject) =>{
    setTimeout(() => {
        if (true){
            resolve("Tem mais de 18 anos");
        } else {
            reject("Tem menos de 18 anos")
        };
    },2000 );
});
defer 
.then((data)=>{
    console.log(data)
})
.catch((err) => console.log(err))