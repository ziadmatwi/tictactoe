import Elem from "./Elem.js"

export default class JatekTer{


#lista = ["0","0","0","0","0","0","0","0","0"]
szuloElem;
#kattintasSzam;   
constructor(){
    this.szuloElem = document.querySelector(".jatekter")
    this.megjelenit()
    this.#kattintasSzam=0
    this.kivalasztEsemenyKezelo()

}

megjelenit(){
    for (let index = 0; index < this.#lista.length; index++) {
        const ELEM = new Elem(this.szuloElem,index,this.#lista[index])
        
    }


}


nyert(){
    window.confirm("NYERTÉÉÉL");
}

ellenoriz(eredmeny){
    console.log(eredmeny)
    let tick = 0;
    for (let index = 0; index < this.#lista.length; index++) {
        if(this.#lista[index]==eredmeny){
            tick +=1;
        }
        else{
            tick = 0;
        }
        if(tick == 3){
            this.nyert()
            index = this.#lista.length+1
        }
        
    }
    for (let index = 0; index < this.#lista.length; index+=3) {
        if(this.#lista[index]==eredmeny){
            tick +=1;
        }
        else{
            tick = 0;
        }
        if(tick == 3){
            this.nyert()
            index = this.#lista.length+1
            continue
        }

        if((index+3)>8 && index != 8){
            index = index-5
        }
        
    }
    for (let index = 0; index < this.#lista.length; index+=4) {
        if(this.#lista[index]==eredmeny){
            tick +=1;
        }
        else{
            tick = 0;
        }
        if(tick == 3){
            this.nyert()
            index = this.#lista.length+1
        }
        
    }
    for (let index = 0; index < this.#lista.length; index+=2) {
        if(this.#lista[index]==eredmeny){
            tick +=1;
        }
        else{
            tick = 0;
        }
        if(tick == 3){
            this.nyert()
            index = this.#lista.length+1
        }
        
    }
    
}


ellenoriz2(eredmeny){
    let tick = 0;
    for (let j = 1; j < 5; j++) {
        for (let index = 0; index < this.#lista.length; index+=j) {
            if(this.#lista[index]==eredmeny){
                tick +=1;
                console.log("TICKELT: " + index)
                console.log("tickszám:" + tick)
            }
            else{
                tick = 0;
            }
            if(tick == 3){
                this.nyert()
                index = this.#lista.length+1
                continue
            }
            if((index+j)>8 && index != 8){

                index = (index+j) % 8;
                
                
            }
            
        }
        
    }
}

kivalasztEsemenyKezelo(){
    window.addEventListener("kivalaszt",(event)=>{
        console.log(event.detail+"másodszor")
        console.log("ESEMÉNY MEGTÖRTÉNT")
        if (this.#kattintasSzam%2 == 0){
            this.#lista[event.detail] = "X"
            this.#kattintasSzam += 1
        }
        else{
            this.#lista[event.detail] = "O"
            this.#kattintasSzam += 1
        }
        this.szuloElem.innerHTML=""
        this.megjelenit()
        this.ellenoriz2(this.#lista[event.detail])

    })
}


}