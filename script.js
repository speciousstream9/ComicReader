var msg1 = new SpeechSynthesisUtterance('this is Calvin and Hobbes');
var msg2 = new SpeechSynthesisUtterance('these are poros');
var msg3 = new SpeechSynthesisUtterance('this is Misty');

var images = new Array('file1.jpg', 'file2.jpg', 'file3.jpg');
var index = 0;

$(document).ready(function () {    
    $("#buttonforward").click(function () {
        if (index == images.length - 1) {
            index = 0;
            $("#myimage").attr('src', images[index]);
        }
        else {
            index ++;
            $("#myimage").attr('src', images[index]);
        }
    })
    $("#buttonback").click(function () {
       if (index == 0) {
           index = images.length-1;
           $("#myimage").attr('src', images[index]);
       }
       else {
           index = index-1;
           $("#myimage").attr('src', images[index]);
       }
    })
});

$(document).ready(function () {
    
    $ ("#myimage").click(function () {
        var src = $('#myimage').attr('src');
        if (src == 'file1.jpg') {
            window.speechSynthesis.speak(msg1);
        }
        else if (src == 'file2.jpg') {
            window.speechSynthesis.speak(msg2);
        }
        else {
            window.speechSynthesis.speak(msg3);
        }
    })
})