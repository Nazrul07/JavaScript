function makeGreeting(language){
    return function(name){
        if(language == "English"){
            console.log("Hello " + name);
        } else if(language == "Spanish"){
            console.log("Hola " + name);
        } else if(language == "Bangla"){
            console.log("Assalamu Alaikum " + name);
        } else if(language == "French"){
            console.log("Bonjour " + name);
        } else if(language == "German"){
            console.log("Hallo " + name);
        } else if(language == "Arabic"){
            console.log("Marhaba " + name);
        }
    }
}

const greetEnglish = makeGreeting("English");
const greetSpanish = makeGreeting("Spanish");
const greetBangla = makeGreeting("Bangla");
const greetFrench = makeGreeting("French");
const greetGerman = makeGreeting("German");
const greetArabic = makeGreeting("Arabic");

/*
makeGreeting('English') runs and dies
BUT 'English' stays alive ✅
because the returned function is still holding onto language

makeGreeting('Bangla') runs and dies  
BUT 'Bangla' stays alive ✅
completely separate from 'English'
*/

greetArabic("Ali"); // Marhaba Ali
greetEnglish("John"); // Hello John
greetSpanish("Maria"); // Hola Maria
greetBangla("Nazrul"); // Assalamu Alaikum Nazrul
greetFrench("Pierre"); // Bonjour Pierre
greetGerman("Hans"); // Hallo Hans