var hash = window.location.hash;

$(document).ready(function() {
    $(".page").hide();
    comeFromRight($(".page:first"));
    $(".page").click(function(){
        fadeToLeft($(this));
        comeFromRight($(this).next());
        $(this).appendTo("#pages");
    });
});

function fadeToLeft(elem){
    elem.animate({
        left: "-150%",
        opacity: "0"
    },750,function(){
        elem.css({
            left: "150%"
        });
        elem.hide();
    });

}

function comeFromRight(elem){
    elem.show();
    elem.animate({
        left: "0%",
        opacity: "1"
    },750);
}

function fadeCurthenSpec(elid){
    var $fp = $(".page:first");
    if($fp.attr("id")!=elid){
        fadeToLeft($fp);
        $fp.appendTo("#pages");
        while($(".page:first").attr("id")!=elid){
            $(".page:first").appendTo("#pages");
        }
        comeFromRight($("#"+elid));
    }
}