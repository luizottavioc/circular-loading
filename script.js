$('#numberLoading').on('keyup', function (e){
    e.preventDefault();
    if($('#numberLoading').val() > 100 ){
        $('#numberLoading').val(100);
    }else if($('#numberLoading').val() < 0){
        $('#numberLoading').val(0);
    }
})

function animation(porc, anterior) {
    if(Number(porc) < Number(anterior)){
        alert(`You cannot enter a number smaller than the previous one.`);
        $('#btnSend').removeClass('just-disabled');
        $('#btnReset').removeClass('just-disabled');
    }else{
        if(porc <= 20){
            var v1 = porc * 2.5;
            $('.aloc-loading .first').css('width', v1+'%');
        }else if(porc > 20 && porc <= 45){
            $('.aloc-loading .first').css('width', '50%');
            var v2 = 26 + ((porc-20)*3.75);
            $('.aloc-loading .second').css('height', v2+'%');
        }else if(porc > 45 && porc <= 70){
            $('.aloc-loading .first').css('width', '50%');
            $('.aloc-loading .second').css('height', '100%');
            var v3 = 27 + ((porc-45)*2.95);
            $('.aloc-loading .third').css('width', v3+'%');
        }else if(porc > 70 && porc <= 90){
            $('.aloc-loading .first').css('width', '50%');
            $('.aloc-loading .second').css('height', '100%');
            $('.aloc-loading .third').css('width', '100%');
            var v4 = 26 + ((porc-70)*3.75);
            $('.aloc-loading .fourth').css('height', v4+'%');
        }else if(porc > 90 && porc <= 100){
            $('.aloc-loading .first').css('width', '50%');
            $('.aloc-loading .second').css('height', '100%');
            $('.aloc-loading .third').css('width', '100%');
            $('.aloc-loading .fourth').css('height', '100%');
            var v5 = 25 + ((porc-90)*2.5);
            $('.aloc-loading .fifth').css('width', v5+'%');
        }
        if(Number.isInteger(Number(porc))){
            $('.aloc-loading .hide-loading').html(Number(porc)+"%");
        }else{
            $('.aloc-loading .hide-loading').html(Number(porc).toFixed(1)+"%");
        }
        setInterval(() => {
            $('#btnSend').removeClass('just-disabled');
            $('#btnReset').removeClass('just-disabled');
        }, 4500);
    }
}

function resetAnimation() {  
    $('.aloc-loading .hide-loading').html("");
    $('.aloc-loading .hide-loading').css("height", 'calc(100% + 4px)');
    $('.aloc-loading .hide-loading').css("width", 'calc(100% + 4px)');
    $('.aloc-loading .fifth').css('width', '0%');
    $('.aloc-loading .fourth').css('height', '0%');
    $('.aloc-loading .third').css('width', '0%');
    $('.aloc-loading .second').css('height', '0%');
    $('.aloc-loading .first').css('width', '0%');
    setInterval(() => {
        $('.aloc-loading .hide-loading').css("height", 'calc(100% - 25px)');
        $('.aloc-loading .hide-loading').css("width", 'calc(100% - 25px)');
        $('#btnSend').removeClass('just-disabled');
        $('#btnReset').removeClass('just-disabled');
    }, 4000);
    
    
}

$('#btnSend').click(function (e) { 
    e.preventDefault();
    $('#btnSend').addClass('just-disabled');
    $('#btnReset').addClass('just-disabled');
    var n = $('#numberLoading').val();
    if(n == ""){
        alert(`You wasn't enter a number yet.`);
    }else{
        animation(n, $('.aloc-loading .hide-loading').html().split('%')[0]);
    }
});

$('#btnReset').click(function (e) { 
    e.preventDefault();
    $('#btnSend').addClass('just-disabled');
    $('#btnReset').addClass('just-disabled');
    resetAnimation();
});