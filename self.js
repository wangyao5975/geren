{

    let arr=["HTML","CSS","JavaScript","AJAX","PHP","MySQL","Bootstrap","express","Url","HTTP","TCP/IP","jQuery","Webpack","Git"];
    let docf=document.createDocumentFragment();  //创建文档片段
    function getColor(){
        let arr=["3","6","9","C"];
        let color="#";
        for(let i=0;i<3;i++){
            color+=arr[Math.floor(Math.random()*arr.length)]
        }
        return color;
    }
// function checkPos(l,t){
//     return pos.some(function(data){
//         if(1>data.l-100&&l<data.l+100&&t>data.t-100&&t<data.t+100){
//             return true;
//         }
//     });
// }
    function checkPos(l,t){
        for(let i=0;i<pos.length;i++){
            let p=pos[i];
            if(l>p.l-100&&l<p.l+100&&t>p.t-100&&t<p.t+100){
                return true;
            }
        }
        return false;
    }

    let pos=[];
    let divarr=arr.map(function(value){
        let newdiv=document.createElement("div");
        let randomLeft,randomTop;
        do{
            randomLeft=(window.innerWidth-100)*Math.random();
            randomTop=(window.innerHeight-100)*Math.random();
        }while(checkPos(randomLeft,randomTop));
        pos.push({l: randomLeft,t: randomTop,speed:2+Math.random()*5});
        newdiv.style.cssText=`width:100px;height:100px;background:${getColor()};position:absolute;left:${randomLeft}px;top:${randomTop}px;border-radius:50%;text-align:center;line-height:100px;color:#111;font-size:18px;`;
        newdiv.innerHTML=value;
        docf.appendChild(newdiv);
        return newdiv;
    });
    console.table(pos);
    let scene=document.querySelector(".scene");
    scene.appendChild(docf);
    setInterval(function(){
        divarr.forEach(function(ele,index){
            //1
            // pos[index].l+=5;
            // if(pos[index].l>window.innerWidth){
            //     pos[index].l=-100;
            // }
            // ele.style.left=pos[index].l+"px";
            //2
            // pos[index].l-=5;
            // if(pos[index].l<-100){
            //     pos[index].l=window.innerWidth;
            // }
            // ele.style.left=pos[index].l+"px";
            //3
            pos[index].l+=pos[index].speed;
            if(pos[index].l>window.innerWidth-100||pos[index].l<0){
                pos[index].speed*=-1;
            }
            ele.style.left=pos[index].l+"px";
            //4
        //     if(index<pos.length/2){
        //         pos[index].l+=pos[index].speed;
        //         if(pos[index].l>window.innerWidth-100||pos[index].l<0){
        //             pos[index].speed*=-1;
        //         }
        //         ele.style.left=pos[index].l+"px";
        //     }else{
        //         pos[index].t+=pos[index].speed;
        //         if(pos[index].t>window.innerHeight-100||pos[index].t<0){
        //             pos[index].speed*=-1;
        //         }
        //         ele.style.top=pos[index].t+"px";
        //     }
         })
    },50)
}


{
    let menu=document.querySelector(".menu");
    let items=document.querySelectorAll(".item");
    const R=200;
    let n=1;
    menu.onclick=function(){
        n++;
        if(n%2===0){
            items.forEach(function(ele,index){
                let angle=index*Math.PI/3;
                let x=R*Math.cos(angle);
                let y=R*Math.sin(angle);
                ele.style.left=x+"px";
                ele.style.top=y+"px";
                ele.style.transform="scale(1,1)";
            })
        }else{
            items.forEach(function(ele,index){
                ele.style.left=0;
                ele.style.top=0;
                ele.style.transform="scale(0.5,0.5)";
            })
        }

    }
}