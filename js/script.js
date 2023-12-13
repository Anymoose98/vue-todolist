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
    eseguito(index){
        if(this.coseDaFare[index].fatto === false){

            this.coseDaFare[index].fatto = true
        }
    },
  }


    


}).mount('#app')