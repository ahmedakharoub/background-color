let hexaColor=document.getElementById('hexaColor')
let btn=document.getElementById('btn')
btn.addEventListener('click',function(){
    let color="0123456789ABCDEF"
    let clr="#"
    for(let i=0;i<6;i++){
        let rand=Math.floor(Math.random()*16)
        clr=clr+color[rand]
    }
    hexaColor.innerHTML=clr
    document.body.style.backgroundColor=clr
    hexaColor.style.color=clr
})