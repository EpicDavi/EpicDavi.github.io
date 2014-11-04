var finishedLeft = true;
var finishedRight = true;

$(document).ready(function() {

    $(".page").hide();
    comeFromRight($("#pages .page:first"));
    $(".page").click(function(){
        if(finishedLeft&&finishedRight) {
            finishedLeft = false;
            finishedRight = false;
            fadeToLeft($(this), function () {
                finishedLeft = true;
            });
            comeFromRight($(this).next(), function () {
                finishedRight = true;
            });
            $(this).appendTo("#pages");
        }
    });
});

function shiftLeft(){
    if(finishedLeft&&finishedRight) {
        finishedLeft = false;
        finishedRight = false;
        var $pf = $("#pages .page:first");
        fadeToLeft($pf, function () {finishedLeft=true;});
        comeFromRight($pf.next(), function () {
            ifNoneShow($("#pages"));
            $pf.appendTo("#pages");
            finishedRight=true;
        });
    }
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