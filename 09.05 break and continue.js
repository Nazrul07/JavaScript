// Same as C++

for(let i=0 ; i<20 ; i++){
    if(i % 2 == 0) continue;
    if(i % 10 == 0) break;  // break will never be called because of continue.
    console.log(i);
}