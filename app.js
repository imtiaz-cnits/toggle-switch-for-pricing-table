if (!(document.querySelector('.elementor-editor-active'))){
    let toggleSwitches = document.querySelectorAll('.toggle_switch'); 
    toggleSwitches.forEach((e,i) => {
        let shown = e.closest('.elementor-element').nextElementSibling;
        let toBeShown = shown.nextElementSibling;
        toBeShown.style.display = 'none';
        e.addEventListener('change', function(){
            if (e.checked){
            shown.style.display = 'none';
            toBeShown.style.display = 'block';
            } else {
            shown.style.display = 'block';
            toBeShown.style.display = 'none';
            }
        });
    });
}