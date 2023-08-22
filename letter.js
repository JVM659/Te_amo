let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    let x = document.createElement("audio");
     x.setAttribute("src", "Humbe.mp3");
     x.setAttribute("autoplay","autoplay");

// 打字效果
let i =0
let str = 'Sabes, en estos 7 meses de vida compartida, he descubierto que cada día a tu lado es un regalo que atesoro con el corazón lleno de gratitud. Cada risa, cada conversación y cada momento de complicidad los atesoro en mi alma. <No podré ser el mejor con las palabras, tampoco soy alguien que sepa expresarse de la mejor manera, sin embargo te demostraré cuanto te quiero. <Te amo, desde aquel dia donde nos volvimos a encontrar; desde aquella noche de enero; desde hoy, mañana y posiblemente para siempre. Quiero cumplir mis promesas, estar junto a ti, aun si eso significa atravesar todo un pais para encontrarte; aun si eso significa que tenga que esforzarme hasta que no pueda mas. <Gracias por todo este tiempo, gracias por cada risa, cada gota de felicidad en todo este tiempo.  Disculpa por todas las lagrimas derramadas en este trayecto, me carcome la idea de que fui el causante de algunas de ellas. <A pesar de los altibajos, dejame tomar tu mano y estar junto a ti.  Gracias por dejarme estar en tu vida...gracias por volverme a encontrar ♡'
let strp = ''

function print()
{
 if(str[i]=='<')
 {
     document.getElementById("box").innerHTML=strp+"<br><br>+'|'";
     strp+="<br><br>";
 }
 else
 {
     strp+=str[i];
     box.innerHTML=strp + '|';
 }
 i++;
}
setTimeout(() => {
    let printid=setInterval(() => {
        print();
        if(i==str.length)
        clearInterval(printid);
        },190);  // 190毫秒打一个字，其实细心发现的话，这个项目还是有个小小的bug，无法用语言描述这个bug，如果你想优化的话 有一种简单的方法就是调快打字的速度，这样那个bug看起来就不会很明显,我太菜了 不会改那个bug
}, 5500);  //5500毫秒开始打字
// 背景出现
function appearBackground(){
setTimeout(()=>{
box.style.opacity=1
},1500)
}
appearBackground()

})
