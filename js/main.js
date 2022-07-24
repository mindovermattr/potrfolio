
const dom={
    chapter: document.querySelectorAll(".programm_chapter-title"),
    text: document.querySelectorAll(".programm_chapter-text"),
}
dom.chapter.forEach((elem,indx)=>{
    elem.addEventListener("click", ()=>{
        let text=dom.text;
        if(text[indx].classList.toggle("hidden")){
            if(elem.classList.contains("arrow") && !elem.classList.contains("rotate-back")){
                elem.classList.toggle("arrow"); 
                elem.classList.toggle("rotate-back") ;
            }
            else if (!elem.classList.contains("arrow") && elem.classList.contains("rotate-back")){
                elem.classList.toggle("rotate-back") ;
                elem.classList.toggle("arrow"); 
            }
            else{
                elem.classList.toggle("arrow"); 
            }
        }
         else{
            if(elem.classList.contains("arrow") && !elem.classList.contains("rotate-back")){
                elem.classList.toggle("arrow"); 
                elem.classList.toggle("rotate-back") ;
            }
            else if (!elem.classList.contains("arrow") && elem.classList.contains("rotate-back")){
                elem.classList.toggle("rotate-back") ;
                elem.classList.toggle("arrow"); 
            }
            else{
                elem.classList.toggle("arrow"); 
            }
            
         }
    })
 })

