window.addEventListener('message',function(e){
    this.alert(JSON.stringify(e.data))
    console.log(e.origin,e.data);
    // console.log(e.data);
})