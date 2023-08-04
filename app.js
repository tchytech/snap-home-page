
function changeImage (){
    let upArrow = document.getElementById('iconArrow')

    if (upArrow.src.match('/images/icon-arrow-down.svg')) {

      upArrow.src = '/images/icon-arrow-up.svg' 
    } 
    else {
        upArrow.src = '/images/icon-arrow-down.svg'
    }

}

function displayImage (){
    let changeDisplay = document.getElementById('arrow')

    if (changeDisplay.src.match('/images/icon-arrow-down.svg')) {

     changeDisplay.src = '/images/icon-arrow-up.svg' 
    } 
    else {
        changeDisplay.src = '/images/icon-arrow-down.svg'
    }

}