
    let t1=document.getElementById("first");
    t1.addEventListener("click",scrollFirst);  
    function scrollFirst(){
      document.documentElement.scrollTop=600;
        }
        let t2=document.getElementById("second");
    t2.addEventListener("click",scrollSecond);  
    function scrollSecond(){
      document.documentElement.scrollTop=1000;
        } 
        let t3=document.getElementById("third");
    t1.addEventListener("click",scrollThird);  
    function scrollThird(){
      document.documentElement.scrollTop=1700;
        }
        let t4=document.getElementById("fourth");
    t4.addEventListener("click",scrollFourth);  
    function scrollFourth(){
      document.documentElement.scrollTop=2900;
        }           
        let t5=document.getElementById("fifth");
    t5.addEventListener("click",scrollFifth);  
    function scrollFifth(){
      document.documentElement.scrollTop=3800;
        }   
        let index=0;
        let i=0;
        let slider=document.getElementsByClassName("slider");
        let line=document.getElementsByClassName("line");
        auto();
        function show(n){
            for(i=0;i<slider.length;i++){
                slider[i].style.display="none";
            }
            for(i=0;i<line.length;i++){
                line[i].className=line[i].className.replace("active");
            }
            slider[n-1].style.display=("block");
            line[n-1].className +=" active";
        }
        function auto(){
             index++;
             if(index>slider.length){
                index=1;
             }
             show(index);
             setTimeout(auto,5000);
    
        }