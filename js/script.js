const { createApp } = Vue

createApp({
  data() {
    return {
        coseDaFare:[
            {
                text:"Attivare la carta",
                fatto: false,
            },
            {
                text:"Comprare i regali",
                fatto: false,
            },
            {
                text:"Fare la spesa",
                fatto: false,
            },
            {
                text:"Chiamare Tizio",
                fatto: false,
            },
        ]
    }
  },
  methods: {
    // Se fatto sbarra la scritta
    eseguito(index){
        if(this.coseDaFare[index].fatto === false){

            this.coseDaFare[index].fatto = true
        }
        else{
            this.coseDaFare[index].fatto = false
        }
    },

    // cancella la linea
    cancella(index){
        console.log("funziona")
        this.coseDaFare.splice(index,1);
    }
  }


    


}).mount('#app')