class Formulario {
    constructor ()
        this.oIdentificacion = {
                        "Correo": "",
                        "Password1": "",
                        "Password2": "",
                    
                }
            this.oParrafo = document.getElementById("Identificacion");
         // referencia del párrafo donde escribir
            document.getElementById("submit").addEventListener("click",
            this.recogeDatos.bind(this));
        }
        
            recogeDatos(oE) {
                this.oDatos.Correo = document.getElementById("Correo").value;
                this.oDatos.Password1 = document.getElementById("Password1").value;
                this.oDatos.Password2 = document.getElementById("Password2").value;
                //llamada a la función que procesara el objeto presentandolo en pantalla
                this.escribeDatos();
                oE.preventDefault();
                //anula el comportamiento por defecto de submit
            } //Fin del método recogeDatos

            escribeDatos() {
                //ocultar formulario
                document.getElementById("formulario").classList.toggle("oculto")
                //mostrar bloque div para el resultado
                document.getElementById("resultado").classList.toggle("oculto");
                //incorporamos a la lista cada elemento del objeto		
                for (var i in this.oDatos) {
                    this.oParrafo.innerHTML += "<li>" + i + ": <strong>" +
                        this.oDatos[i] + "</strong></li>";
                };
            } //Fin del método escribedatos	
        }; // Fin de la clase Formulario
       
        class App {
            static main() {

                document.addEventListener("DOMContentLoaded",
                    function () {
                        new Formulario()
                    }, false);
            }
        } // Fin de la clase App
        App.main()

};