//CALLBACK HELL




 h1=document.querySelector('h1');

 function changeColor(color,delay,nextColorChange){
     setTimeout(function(){
         h1.style.color=color;
         if(nextColorChange){
             nextColorChange();
         }
     },delay);
 }

 changeColor("red",1000,()=>{
     changeColor("orange",1000);
 });



//function to store data in the data---base:

 function savetoDb(data,success,failure){
     let interNetSpeed=Math.floor(Math.random()*10+1);
     if(interNetSpeed>4){
         success();
         //console.log("Your data was saved");
     }
     else{
         failure();
         //console.log("Weak internet connection");
     }
 }

 savetoDb("Kumar Umang",()=>{
     console.log("Your data was saved");
     savetoDb("Hello World",()=>{
         console.log("Success");//This will keep expanding and make it look complex and result in a callback hell...making everything confusing
         savetoDb("Umang",()=>{
             console.log("Final data was saved")},()=>{
             console.log("Weak connection,data not saved");
         });
     },()=>{
         console.log("Failure");
     });
 },()=>{
     console.log("Weak connection");
 });


//Refactoring callback hell with promises..

function savetoDb(data){
    return new Promise((success,failure)=>{
        let internetSpeed=Math.floor(Math.random()*10+1);
        if(internetSpeed>4){
            success("Success:Your data was saved");
        }else{
            failure("Weak connection:Data not saved");
        }
    });
}

savetoDb("Kumar Umang")
.then(()=>{
    console.log("Data 1 saved.")
    return savetoDb("Umang");
}).then(()=>{                                    //This code works similar to the callback hell function...
    console.log("Data 2 was saved");
    return savetoDb("Data 3");
}).then(()=>{
    console.log("Data 3 saved");
})
.catch(()=>{
    console.log("Error!");
});
