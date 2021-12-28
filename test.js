function animation(porc) {
    if(porc <= 20){
        var v1 = porc * 2.5;
        $('span.first').css('width', v1+'%');
    }else if(porc > 20 && porc <= 45){
        $('span.first').css('width', '50%');
        var v2 = 26 + ((porc-20)*3.75);
        $('span.second').css('height', v2+'%');
    }else if(porc > 45 && porc <= 70){
        $('span.first').css('width', '50%');
        $('span.second').css('height', '100%');
        var v3 = 27 + ((porc-45)*2.95);
        $('span.third').css('width', v3+'%');
    }else if(porc > 70 && porc <= 90){
        $('span.first').css('width', '50%');
        $('span.second').css('height', '100%');
        $('span.third').css('width', '100%');
        var v4 = 26 + ((porc-70)*3.75);
        $('span.fourth').css('height', v4+'%');
    }else if(porc > 90 && porc <= 100){
        $('span.first').css('width', '50%');
        $('span.second').css('height', '100%');
        $('span.third').css('width', '100%');
        $('span.fourth').css('height', '100%');
        var v5 = 25 + ((porc-90)*2.5);
        $('span.fifth').css('width', v5+'%');
    }
    // $('span.second').css('height', '100%');
    // $('span.third').css('width', '100%');
    // $('span.fourth').css('height', '100%');
    // $('span.fifth').css('width', '50%');
}