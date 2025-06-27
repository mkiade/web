var count = 0;
document.getElementById("myButton").onclick = function(){
    count++;
    if (count % 2 == 0){
        document.getElementById("demo").innerHTML = "";
    } else {
        var img = document.createElement("img");
        img.src = "https://avatars.dzeninfra.ru/get-zen_doc/1634555/pub_63c6b014f14b0c245f724cb2_63c6b0d1f37916571825b9d1/scale_2400";
        document.getElementById("demo").appendChild(img);
    }
}
