if(document.querySelector('#tool_kn_2_0_0')){
  var scrollableElement = document.body; 
  //document.getElementById('scrollableElement');
  
  scrollableElement.addEventListener('wheel', checkScrollDirection);
  
  function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
      //   console.log('UP');
        document.querySelector('#tool_kn_2_0_0').classList.remove('active')
      } else {
        document.querySelector('#tool_kn_2_0_0').classList.add('active')
      // console.log('Down');
    }
  }
  
  function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }
}