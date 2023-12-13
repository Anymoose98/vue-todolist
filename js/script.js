const { createApp } = Vue

createApp({
  data() {
    return {
        aggiunto:"",

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

    // cancella la
    cancella(index){
        this.coseDaFare.splice(index,1);
    },

    // aggiungere 
    aggiungereContenuto(){
        console.log("funziona")
        let oggetto = {
            text: this.aggiunto,
            fatto:false
        }

        this.coseDaFare.push(oggetto)
        this.aggiunto = ""

    }
  }


    


}).mount('#app')