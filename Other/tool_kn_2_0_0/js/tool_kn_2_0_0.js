if (document.querySelector('#tool_kn_2_0_0')) {
 
    window.addEventListener('scroll', function handleScroll(event) {
        if (window.scrollY > this.lastScrollTop || 0) {
            document.querySelector('#tool_kn_2_0_0').classList.add('active')

        } else if (window.scrollY < this.lastScrollTop) {
            document.querySelector('#tool_kn_2_0_0').classList.remove('active')

        }

        this.lastScrollTop = window.scrollY;
    });


    // window.addEventListener('scroll',function(){
    //     this.setTimeout(()=>{
    //         document.querySelector('#tool_kn_2_0_0').classList.add('active')
    //     },2000)
    // })
   
    // window.onscroll(function() {
    //     down();
    // });


}