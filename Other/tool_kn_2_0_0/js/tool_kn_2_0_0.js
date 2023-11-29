if(document.querySelector('#tool_kn_2_0_0')){
    let x = document.querySelector('#tool_kn_2_0_0')
    function up(){
        x.classList.remove('active')
    }
    function down(){
        x.classList.add('active')
    }

    let scroll_position = 0;
    let scroll_direction;
    
    window.addEventListener('scroll', function(e){
        scroll_direction = (document.body.getBoundingClientRect()).top > scroll_position ? up() : down();
        scroll_position = (document.body.getBoundingClientRect()).top;
    });
}