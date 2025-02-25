const input=document.querySelector('#input-1')
const button=document.querySelector('.gr-btn');
const img_btn=document.querySelector('.img-btn');

button.addEventListener('click',()=>{
    const Url=input.value
    if(!Url){
        alert("Enter a valid Url");
        return
    }
    img_btn.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${Url}`
})

