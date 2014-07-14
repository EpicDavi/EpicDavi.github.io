$(document).ready(function() {

    $(".page").hide();
    comeFromRight($("#pages .page:first"));
    $(".page").click(function(){
        fadeToLeft($(this));
        comeFromRight($(this).next());
        $(this).appendTo("#pages");
    });
});

function shiftLeft(){
    var $pf = $("#pages .page:first");
    var fa=false, sa=false;
    fadeToLeft($pf, function(){
        fa=true;
    });
    comeFromRight($pf.next(),function(){
        ifNoneShow($("#pages"));
        $pf.appendTo("#pages");
    });
}

function ifNoneShow(holder){
    if(holder.firstChild.is(":visible")){
        holder.firstChild.show();
    }
}

function fadeToLeft(elem, cb){
    cb=cb!==undefined?cb:function(){};
    elem.animate({
        left: "-150%",
        opacity: "0"
    },750,function(){
        elem.hide();
        elem.css({
            left: "0%"
        });
        cb();
    });

}

function comeFromLeft(elem, cb){
    cb=cb!==undefined?cb:function(){};
    elem.css({
        left: "-150%"
    });
    elem.show();
    elem.animate({
        left: "0%",
        opacity: "1"
    },750, function(){
        elem.show();
        cb();
    });
}

function fadeToRight(elem, cb){
    cb=cb!==undefined?cb:function(){};
    elem.show();
    elem.animate({
        left: "150%",
        opacity: "0"
    },750,function(){
        elem.hide();
        elem.css({
            left: "0%"
        });
        cb();
    });

}

function comeFromRight(elem, cb){
    cb=cb!==undefined?cb:function(){};
    elem.css({
        left: "150%"
    });
    elem.show();
    elem.animate({
        left: "0%",
        opacity: "1"
    },750,cb);
}

function fadeCurthenSpec(elid){
    var $fp = $("#pages .page:first");
    if($fp.attr("id")!=elid){
        fadeToLeft($fp);
        $fp.appendTo("#pages");
        while($("#pages .page:first").attr("id")!=elid){
            $(".page:first").appendTo("#pages");
        }
        comeFromRight($("#"+elid));
    }
}