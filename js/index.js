const $ = document

const $navLinks = $.getElementsByClassName(`nav-link`)
const $subNavLinks = $.getElementsByClassName(`sub-nav-link`)

const summaryList = [] 



for (child of $navLinks) { // For each child of the element UL  - the children LI
    summaryList.push({ 
        $subtitle: $.querySelector(child.getAttribute(`href`)), //Get the href property of the element 
        $summaryItem : child // Assign to the variable $summaryItem the child ?
        
    }); 
}

for (child of $subNavLinks) { // For each child of the element UL  - the children LI
    summaryList.push({ 
        $subtitle: $.querySelector(child.getAttribute(`href`)), //Get the href property of the element 
        $summaryItem : child // Assign to the variable $summaryItem the child ?
        
    }); 
}


console.log(summaryList)


function eraseAllChildrenClasses (summary) {
    for (child of summary) {
        if(child.$summaryItem.classList.contains('nav-link')){
            child.$summaryItem.className = 'nav-link'
        }else if(child.$summaryItem.classList.contains('sub-nav-link')){
            child.$summaryItem.className = 'sub-nav-link'
        }

    }
}

window.addEventListener(`scroll`, () => { // Event listener Scrolling page 
    // const progressBarPercentage = ( window.scrollY/ // Calculates the percentage representation of the scrolled page  
    //     ($.documentElement.scrollHeight - $.documentElement.clientHeight) ) * 100 
    //  $progressBar.style.width = `${progressBarPercentage}%` // Assign the value to the width property of the element with id "progress-bar"
   
     summaryList.forEach((element) => { //For each item from the Summary List 
        const currentSubtitleTop = element.$subtitle.getBoundingClientRect().top; //Returns an element size and its position related to the viewport into the variable currentSubtitleTop


        if(currentSubtitleTop >= 0 && currentSubtitleTop <= 400){ // If the variable currentSubtitleTop value is lesser than 200 
            eraseAllChildrenClasses(summaryList); // Remove the class marked-summary based on the function 
            element.$summaryItem.classList.add(`marked-summary`);// Assign the marked-summary class to the current Subtitle (Summary Item)
        }
        // if (!cancelNextArticleTimer) {
        //     if (progressBarPercentage >= 98 ) {        
        //         if (!isNextArticleTimerActive) {
        //         isNextArticleTimerActive = true;
        //         nextArticleIntervalReference = window.setInterval(nextArticleTimerHandler, 1000)
        //         }
        //     }else{
        //         stopNextArticleTimer()
        //         $nextArticleTimer.textContent = nextArticleTimer;
        //     }
        // }
      
        }); 
  

});