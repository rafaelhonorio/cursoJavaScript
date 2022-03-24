const cachorro = {
    raca: "SRD",
    uivar: function(){
        console.log("Auuuuuuuuuuuuuuuuuu");
    },
    rosnar: function(){
        console.log("grrrrrrrrr");
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return "A raça é "+ this.raca;
    }
}

cachorro.uivar();
cachorro.rosnar();
cachorro.setRaca('Pastor Alemão');
console.log(cachorro.raca);