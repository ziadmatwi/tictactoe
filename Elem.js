
export default class Elem{

    #adat;
    #index;
    szuloElem;
    elem;

    constructor(szuloElem,index,adat){
        this.adat = adat
        this.#index = index
        this.szuloElem = szuloElem
        this.megjelenit()
        this.elem = document.querySelector(".elem:last-child")
        this.elem.addEventListener("click",()=>{
            console.log(this.#index)
            const e = new CustomEvent("kivalaszt",{detail:this.#index})
            window.dispatchEvent(e)
        })}


        megjelenit(){
            let html= `<div class="elem">${this.adat}</div>`;
            this.szuloElem.insertAdjacentHTML("beforeend",html);


        }

    }



