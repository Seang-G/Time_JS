function handleResize(){
    const bgCover = document.querySelector('#background-cover');

    bgCover.scrollTop = bgCover.scrollHeight/4;
    bgCover.scrollLeft = bgCover.scrollWidth/4;
}

window.addEventListener('resize', handleResize);