const read = document.getElementById('readBtn');
const pause = document.getElementById('pauseBtn');
const resume = document.getElementById('resumeBtn');
const cancel = document.getElementById('cancelBtn');
const refresh = document.getElementById('refreshTextArea');


const text = document.querySelector('textarea');     //getting the textcontent form text area

read.addEventListener("click",function(){
   
    const textToSpeak = text.value;
     
    if(textToSpeak!= ""){
     var utterance = new SpeechSynthesisUtterance(textToSpeak);    // Create a new SpeechSynthesisUtterance object
     const voices = window.speechSynthesis.getVoices()  
     utterance.voice = voices[3]; // changing voices as array

     // Try to add indian english accent !! 

       window.speechSynthesis.speak(utterance);
    }else{
        window.alert("Enter Text In The Text Area First!!")
    }

})

pause.addEventListener("click",function(){
    if(window.speechSynthesis.speaking){
     window.speechSynthesis.pause();
    }
})

resume.addEventListener("click",function(){
    
     window.speechSynthesis.resume();
})

cancel.addEventListener("click",function(){
    
     window.speechSynthesis.cancel();
})


refresh.addEventListener("click",function(){
    text.value = "";
})
