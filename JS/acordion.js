$(document).ready(function(){

    $(".acordion2").hide()
    $(".acordion1").on("click",function(){
    $(".acordion2").slideToggle(500)

    
    })

    $(".acordion2").on("click",function(){
    
    let ind=$(".acordion2").index(this)
    
    
    })
})