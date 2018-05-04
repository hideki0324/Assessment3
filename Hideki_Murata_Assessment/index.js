var postcard = document.getElementById("postcard"),
    toDiv = document.getElementById("to"),
    messDiv = document.getElementById("message"),
    froDiv = document.getElementById("from"),
    toIn = document.getElementById("toIn"),
    messIN = document.getElementById("messIN"),
    froIN = document.getElementById("froIN"),
    imgIn = document.getElementById("imgIn"),
    add = document.getElementById("add"),
    save = document.getElementById("save"),
    load = document.getElementById("load"),
    preview = document.getElementById("preview");


////////////////////////////// Level 2a

toIn.addEventListener("keyup", function(){
    toDiv.innerHTML = "To " + toIn.value;
});

messIN.addEventListener("keyup", function(){
    messDiv.innerHTML = messIN.value;
});

froIN.addEventListener("keyup", function(){
    froDiv.innerHTML = "from " + froIN.value;
});


////////////////////////////// Level 2b


imgIn.addEventListener("keyup", function(){
   
    if(key.keyCode == 13){
        var num = num++;
        if(imgIn.value == "auto"){
            
            console.log("");
            postcard.style.backgroundImage = "url(imgs/auto"+num+".jpg)";
                if(num < 3){
                num = 1;
                }
                if(num > 1){
                num = 3;
                }
   
         } else {
                postcard.style.backgroundImage = "url("+ imgIn.value +")"
         }
        
    }

});

////////////////////////////// Level 3


add.addEventListener("click", function (){

    if (imgIn.value == "") {
        postcard.style.backgroundImage = "url("+imgIn.value +")";
    }
    
});


////////////////////////////// Level 4a


function createPostcard(to2,bgImg,from,msg){
    var miniPC = document.createElement("div");
    var miniTo = document.createElement("div");
    var miniMsg = document.createElement("div");
    var miniFrom = document.createElement("div");

    miniPC.className = "miniPostcard";
    miniTo.className = "miniTo";
    miniMsg.className = "miniMsg";
    miniFrom.className = "miniFrom";

    MiniPC.style.backgroundImage = bgImg ;
    MiniTo.innerHTML = to2;m
    MiniMsg.innerHTML = msg;
    MiniFrom.innerHTML = from;

    preview.appendChild(MiniPC);
    MiniPC.appendChild(MiniTo); 
    MiniPC.appendChild(MiniMsg);
    MiniPC.appendChild(MiniFrom);
    
    
    MiniPC.addEventListener("click", function(){
        postcard.style.backgroundImage = this.style.backgroundImage;
        toDiv.innerHTML = this.firstChild.innerHTML;
        messageDiv.innerHTML = this.children[1].innerHTML;
        fromDiv.innerHTML = this.children[2].innerHTML;
    })
}


////////////////////////////// Level 4b
 /*4B*/
    var obj = {
        bgimg:postcard.style.backgroundImage,
        to:toDiv.innerHTML,
        message:messDiv.innerHTML,
        from:froDiv.innerHTML
    };
    
    myPostcards.push(obj);
    
    createPostcard(obj.to,obj.bgimg,obj.from,obj.message);



////////////////////////////// Level 4c


//////////////////////////////LEVEL 5 


//////////////////////////////LEVEL 6












































