const d={
    0:"green",
    1:"red",
    2:"yellow",
    3:"blue"
};
var r;
var j=0,i,f=0;
var l=[];
function erro(){
    $("#level-title").text("Game over,Press a key to start");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);

    let aud=new Audio("sounds/wrong.mp3");
    aud.play();
    f=0;
    $(".to-play").removeClass("visi");
    $("h2").removeClass("visi");
}
function bpress(m){
    let ad="sounds/"+m+".mp3";
    let aud=new Audio(ad);
    aud.play();
    $("."+m).addClass("pressed");
    setTimeout(function(){
            $("."+m).removeClass("pressed");
    },200);

    
}

function pla(){
    r=Math.floor(Math.random()*4);
    var m=d[r];

    var ad="sounds/"+m+".mp3";
    var aud=new Audio(ad);
    aud.play();
    
    $("."+m).addClass("pressed");
        setTimeout(function(){
            $("."+m).removeClass("pressed");
    },200);

    console.log(m);
    l.push(m);
}


$(document).on("keypress",function(e) {
    if(f===0){
        $("#level-title").text("Level 0");
        l=[];
        pla();
        f=1;
        $(".to-play").addClass("visi");
        $("h2").addClass("visi");
    }
    // else{
    //     console.log(e.key);
    // }
});

$(".to-play").on("click",function(e) {
    $(this).addClass("visi");
    $("h2").addClass("visi");
    if(f===0){
        $("#level-title").text("Level 0");
        l=[];
        pla();
        f=1;
    }
    // else{
    //     console.log(e.key);
    // }
});

var k=0;
$(".btn").click(function(e){
    bpress(e.target.id);
    console.log(e.target.id);
    if(f===0){
        erro();
    }
    else{
        len=l.length;
        if(k<len && e.target.id===l[k]){
            k++;
        }
        else{
            erro();
            
            console.log("errrr"); 
            k=0;
            
        }
        if(k===len){
            setTimeout(() => {
                $("#level-title").text("Level "+k);
                k=0;
            },500);
            setTimeout(() => {
                pla();
            }, 1000);
            
        }
        console.log("this is   k : "+ k);

    }
});



