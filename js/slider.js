const slide=document.querySelectorAll(".slide"),
      dots=document.querySelectorAll(".dot");
      names=document.querySelectorAll(".slider__name")


function findActive(context, list){
    let index;
    list.forEach((elem,idx)=>{
        if(elem.classList.contains(`active-${context}`)){
           index=idx;
        }
    })
    return index;
}

function listener(list, currentItem,slideList, currentSlideIdx,namesList, currentNameIdx){
    list.forEach((item,idx)=>{
        item.addEventListener("click", ()=>{
            let chosenItem=item;
        if(!chosenItem.classList.contains("active-dot")){
            chosenItem.classList.toggle("active-dot");
            currentItem.classList.toggle("active-dot");
            currentItem=chosenItem;
            currentSlideIdx=renderSlide(slideList,currentSlideIdx,idx,"slide");
            currentNameIdx=renderSlide(namesList,currentNameIdx,idx, "name");
        }  
    })
    })
}

function renderSlide(slides,currentSlideIdx,currentDotIdx,context){
    if(currentSlideIdx!=currentDotIdx){
        slides[currentSlideIdx].classList.toggle(`active-${context}`);
        slides[currentDotIdx].classList.toggle(`active-${context}`);
        return currentDotIdx;
    }
}


hub(slide,dots,names)

function hub(slider, dots, names){
    let currentDotIndex=findActive("dot", dots);
    let currentSlideIndex = findActive("slide", slider);
    let currentNameIndex = findActive("name", names);
    let currentDot=dots[currentDotIndex];
    listener(dots,currentDot,slider,currentSlideIndex, names, currentNameIndex);

    
}


