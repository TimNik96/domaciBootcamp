class Covek{
    constructor(ime, prezime, godinaRodjenja){
        this.ime = ime;
        this.prezime = prezime;
        this.godinaRodjenja = godinaRodjenja;
    }
}

    class Student extends Covek{
        constructor(ime, prezime, godinaRodjenja, godinaStudija, prosek){
            super(ime, prezime, godinaRodjenja);
            this.godinaStudija = godinaStudija;
            this.prosek = prosek;
        }
    }

        class StudentOsnovnihStudija extends Student{
            constructor(ime, prezime, godinaRodjenja, godinaStudija, prosek, smerOsnovnihStudija){
                super(ime, prezime, godinaRodjenja, godinaStudija, prosek);
                this.smerOsnovnihStudija = smerOsnovnihStudija;
            }
        }

        class StudentMasterStudija extends Student{
            constructor(ime, prezime, godinaRodjenja, godinaStudija, prosek, smerMasterStudija){
                super(ime, prezime, godinaRodjenja, godinaStudija, prosek);
                this.smerMasterStudija = smerMasterStudija;
            }
        }   

    class Zaposleni extends Covek{
        constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata){
            super(ime, prezime, godinaRodjenja);
            this.godinaZaposlenja = godinaZaposlenja;
            this.plata = plata;
        }
    }

        class Nastavnik extends Zaposleni{
            constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta){
                super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata);
                this.omiljeniPredmet = omiljeniPredmet;
                this.listaPredmeta = listaPredmeta;
            }
        }

            class Profesor extends Nastavnik{
                constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta, titula){
                    super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta);
                    this.titula = titula;
                }
            }

            class Asistent extends Nastavnik{
                constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta, smerDoktorskihStudija){
                    super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta);
                    this.smerDoktorskihStudija = smerDoktorskihStudija;
                }
            }

    class Sluzbenik extends Covek{
        constructor(ime, prezime, godinaRodjenja, odsek){
            super(ime, prezime, godinaRodjenja);
            this.odsek = odsek;
        }
    }

    let c = new Covek("Nikola", "Timotic", 1996);
    console.log(c);

    let s = new Student("Nikola", "Timotic", 1996, 4, 8.5);
    console.log(s);

    let sOS = new StudentOsnovnihStudija("Nikola", "Timotic", 1996, 4, 8.5, "Inzenjer elektrotehnike i racunarstva");
    console.log(sOS);

    let sMS = new StudentMasterStudija("Nikola", "Timotic", 1996, 4, 8.5, "Master Inzenjer elektrotehnike i racunarstva");
    console.log(sMS);

    let z = new Zaposleni("Nikola", "Timotic", 1996, 2015, 50000);
    console.log(z);

    let n = new Nastavnik("Nikola", "Timotic", 1996, 2019, 80000, "Matematika", ["matematika", "fizika", "fizicko", "informatika"]);
    console.log(n);

    let p = new Profesor("Nikola", "Timotic", 1996, 2019, 80000, "Matematika", ["matematika", "fizika", "fizicko", "informatika"], "redovni");
    console.log(p);

    let a = new Asistent("Nikola", "Timotic", 1996, 2019, 80000, "Matematika", ["matematika", "fizika", "fizicko", "informatika"], "Dr Mr");
    console.log(a);

    let sl = new Sluzbenik("Nikola", "Timotic", 1996, "domar");
    console.log(sl);

