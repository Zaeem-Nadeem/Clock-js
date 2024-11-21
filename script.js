function setdate(){
    const secondhand=document.querySelector(".second-hand");
    const minuteshand=document.querySelector(".min-hand");
    const hourhand=document.querySelector(".hour-hand");
    const now=new Date();
    const seconds= now.getSeconds();
    const mins=now.getMinutes();
    const hour=now.getHours();
    const mindegree=((mins/60)*360)+90;
    const seconddegree=((seconds/60)*360)+90;
    const hourdegree=((hour/12)*360)+90;
    secondhand.style.transform= `rotate(${seconddegree}deg)`;
    minuteshand.style.transform=`rotate(${mindegree}deg)`;
    hourhand.style.transform=`rotate(${hourdegree}deg)`;
}
setInterval(setdate,1000);