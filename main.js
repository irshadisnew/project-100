var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML ="";
    Recognition.start();

}
Recognition.onresult = function(event){
console.log(event);
var Content =event.results[0][0].transcript;
console.log(Content);
document.getElementById("textbox").innerHTML = Content;
if(Content =="take my selfie"){
    console.log("taking selfie");
    speak();
}

}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function() { 
        img_id = "selfie1"; 
        take_selfie(); 
        speak_data = "Taking your next Selfie in 5 seconds";

        var utterThis = new SpeechSynthesisUtterance(speak_data);
         synth.speak(utterThis);
         }, 5000);
         setTimeout(function() { 
            img_id = "selfie2"; 
            take_selfie(); 
            speak_data = "Taking your next Selfie in 10 seconds";
    
            var utterThis = new SpeechSynthesisUtterance(speak_data);
             synth.speak(utterThis);
             }, 10000);
             setTimeout(function() { 
                img_id = "selfie3"; 
                take_selfie(); 
                speak_data = "Taking your next Selfie in 15 seconds";
        
                var utterThis = new SpeechSynthesisUtterance(speak_data);
                 synth.speak(utterThis);
                 }, 15000);
}
Webcam.set({
    width : 360,
    height : 250,
    image_format : "jpg" ,
    jpg_quality :90
});
 var camera = document.getElementById("camera");
 function take_selfie(){
    Webcam.snap(function(data_uri){
       
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie_image " src="'+data_uri+'"/>';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie_image " src="'+data_uri+'"/>';
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie_image " src="'+data_uri+'"/>';
        }
    });
 }
 function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
   
 }

