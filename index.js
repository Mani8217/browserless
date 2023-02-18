
function showPage(page) {
    document.querySelectorAll('.div').forEach(div => {
        div.style.display = 'none';
    });
    document.querySelector(`#${page}`).style.display = 'block'; 
}

document.addEventListener('DOMContentLoaded', function(){
document.querySelectorAll('.page-change').forEach(button => {
    
    button.onclick = function() {
        showPage(this.dataset.page);
    }
})
})
$(document).ready(function(){
    $("#icon").click(function(){
        $("#head-nav").slideToggle('slow');
    })
})

