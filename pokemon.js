class Pokemon{
    constructor(elem, adat, i){
        this.adat = adat;
        this.adat.i = i;
        this.elem = elem;

        this.Nev = this.elem.children("#nev");
        this.Kep = this.elem.children("#kep");

        this.setAdat(this.adat);
    }

    setAdat(adat){
        this.Nev.html(adat.nev);
        this.kep.attr("src", adat.sprites.front_default)
    }
}