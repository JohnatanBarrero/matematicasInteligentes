function aleatorio(minimo,maximo)
         {
            var numero = Math.floor(Math.random()*(maximo-minimo+1)+minimo);
            numero = numero *3;
            return numero;
         }
            var numeroaleatorio = aleatorio(1,5);
             //alert(numeroaleatorio);

           function cargar()
           {
             document.getElementById("Resultado1").value = numeroaleatorio;
           }
           function Evaluar1()
           {

            var Evaluar1_Valor1 =document.getElementById("Manzana1").value;
            var Evaluar1_Valor2 =document.getElementById("Manzana2").value;
            var Evaluar1_Valor3 =document.getElementById("Manzana3").value;
            var Evaluar1_Resultado = "";
            var Resultado_Evaluar1="";

            if (Evaluar1_Valor1 == Evaluar1_Valor2)
            {

                if (Evaluar1_Valor1== Evaluar1_Valor3)
                {

                    if (Evaluar1_Valor2== Evaluar1_Valor3)
                        {
                            Evaluar1_Valor1 = parseInt(Evaluar1_Valor1);
                            Evaluar1_Valor2 = parseInt(Evaluar1_Valor2);
                            Evaluar1_Valor3 = parseInt(Evaluar1_Valor3);

                            Evaluar1_Resultado = Evaluar1_Valor1 + Evaluar1_Valor2 + Evaluar1_Valor3;
                            Resultado_Evaluar1 = numeroaleatorio;
                            //alert(Evaluar1_Resultado)
                            if (Resultado_Evaluar1 == Evaluar1_Resultado)
                            {
                                alert("Felicitaciones!!!!!!!  Muy bien los números estan correctos");
                            }
                                else
                                    alert("La sumatoria de los números que ingresaste es no es igual al numero a identificar");
                        }
                        else
                            alert("Recuerda que los numeros de Tus campos deben ser iguales");
                    }
                      else
                            alert("Recuerda que los numeros de Tus campos deben ser iguales");
                }
                  else
                            alert("Recuerda que los numeros de Tus campos deben ser iguales");
           }


  function aleatorio2(minimo,maximo)
         {
            var numero2 = Math.floor(Math.random()*(maximo-minimo+1)+minimo);
            numero2 = numero2 *3;
            return numero2;
         }
            var numeroaleatorio2 = aleatorio(6,10);
             //alert(numeroaleatorio);

           function cargar2()
           {
             document.getElementById("Resultado2").value = numeroaleatorio2;
           }
           function Evaluar2()
           {

            var Evaluar2_Valor1 =document.getElementById("Naranja1").value;
            var Evaluar2_Valor2 =document.getElementById("Naranja2").value;
            var Evaluar2_Valor3 =document.getElementById("Naranja3").value;
            var Evaluar2_Resultado = "";
            var Resultado_Evaluar2="";

            if (Evaluar2_Valor1 == Evaluar2_Valor2)
            {

                if (Evaluar2_Valor1== Evaluar2_Valor3)
                {

                    if (Evaluar2_Valor2== Evaluar2_Valor3)
                        {
                            Evaluar2_Valor1 = parseInt(Evaluar2_Valor1);
                            Evaluar2_Valor2 = parseInt(Evaluar2_Valor2);
                            Evaluar2_Valor3 = parseInt(Evaluar2_Valor3);

                            Evaluar2_Resultado = Evaluar2_Valor1 + Evaluar2_Valor2 + Evaluar2_Valor3;
                            Resultado_Evaluar2 = numeroaleatorio2;
                            //alert(Evaluar1_Resultado)
                            if (Resultado_Evaluar2 == Evaluar2_Resultado)
                            {
                                alert("Felicitaciones!!!!!!!  Muy bien los números estan correctos");
                            }
                                else
                                    alert("La sumatoria de los números que ingresaste es no es igual al numero a identificar");
                        }
                        else
                            alert("Recuerda que los numeros de Tus campos deben ser iguales");
                    }
                      else
                            alert("Recuerda que los numeros de Tus campos deben ser iguales");
                }
                  else
                            alert("Recuerda que los numeros de Tus campos deben ser iguales");
           }


 function aleatorio3(minimo,maximo)
         {
            var numero3 = Math.floor(Math.random()*(maximo-minimo+1)+minimo);
            numero3 = numero3 *3;
            return numero3;
         }
            var numeroaleatorio3 = aleatorio(11,15);
             //alert(numeroaleatorio);

           function cargar3()
           {
             document.getElementById("Resultado3").value = numeroaleatorio3;
           }
           function Evaluar3()
           {

            var Evaluar3_Valor1 =document.getElementById("Fresa1").value;
            var Evaluar3_Valor2 =document.getElementById("Fresa2").value;
            var Evaluar3_Valor3 =document.getElementById("Fresa3").value;
            var Evaluar3_Resultado = "";
            var Resultado_Evaluar3="";

            if (Evaluar3_Valor1 == Evaluar3_Valor2)
            {

                if (Evaluar3_Valor1== Evaluar3_Valor3)
                {

                    if (Evaluar3_Valor2== Evaluar3_Valor3)
                        {
                            Evaluar3_Valor1 = parseInt(Evaluar3_Valor1);
                            Evaluar3_Valor2 = parseInt(Evaluar3_Valor2);
                            Evaluar3_Valor3 = parseInt(Evaluar3_Valor3);

                            Evaluar3_Resultado = Evaluar3_Valor1 + Evaluar3_Valor2 + Evaluar3_Valor3;
                            Resultado_Evaluar3 = numeroaleatorio3;
                            //alert(Evaluar1_Resultado)
                            if (Resultado_Evaluar3 == Evaluar3_Resultado)
                            {
                                alert("Felicitaciones!!!!!!!  Muy bien los números estan correctos");
                            }
                                else
                                    alert("La sumatoria de los números que ingresaste es no es igual al numero a identificar");
                        }
                        else
                            alert("Recuerda que los numeros de Tus campos deben ser iguales");
                    }
                      else
                            alert("Recuerda que los numeros de Tus campos deben ser iguales");
                }
                  else
                            alert("Recuerda que los numeros de Tus campos deben ser iguales");
           }

           function aleatorio4(minimo,maximo)
         {
            var numero4 = Math.floor(Math.random()*(maximo-minimo+1)+minimo);
            numero4 = numero4 *3;
            return numero4;
         }
            var numeroaleatorio4 = aleatorio(16,20);
             //alert(numeroaleatorio);

           function cargar4()
           {
             document.getElementById("Resultado4").value = numeroaleatorio4;
           }
           function Evaluar4()
           {

            var Evaluar4_Valor1 =document.getElementById("Banano1").value;
            var Evaluar4_Valor2 =document.getElementById("Banano2").value;
            var Evaluar4_Valor3 =document.getElementById("Banano3").value;
            var Evaluar4_Resultado = "";
            var Resultado_Evaluar4="";

            if (Evaluar4_Valor1 == Evaluar4_Valor2)
            {

                if (Evaluar4_Valor1== Evaluar4_Valor3)
                {

                    if (Evaluar4_Valor2== Evaluar4_Valor3)
                        {
                            Evaluar4_Valor1 = parseInt(Evaluar4_Valor1);
                            Evaluar4_Valor2 = parseInt(Evaluar4_Valor2);
                            Evaluar4_Valor3 = parseInt(Evaluar4_Valor3);

                            Evaluar4_Resultado = Evaluar4_Valor1 + Evaluar4_Valor2 + Evaluar4_Valor3;
                            Resultado_Evaluar4 = numeroaleatorio4;
                            //alert(Evaluar1_Resultado)
                            if (Resultado_Evaluar4 == Evaluar4_Resultado)
                            {
                                alert("Felicitaciones!!!!!!!  Muy bien los números estan correctos");
                            }
                                else
                                    alert("La sumatoria de los números que ingresaste es no es igual al numero a identificar");
                        }
                        else
                            alert("Recuerda que los numeros de Tus campos deben ser iguales");
                    }
                      else
                            alert("Recuerda que los numeros de Tus campos deben ser iguales");
                }
                  else
                            alert("Recuerda que los numeros de Tus campos deben ser iguales");
           }

           function aleatorio5(minimo,maximo)
         {
            var numero5 = Math.floor(Math.random()*(maximo-minimo+1)+minimo);
            numero5 = numero5 *3;
            return numero5;
         }
            var numeroaleatorio5 = aleatorio(21,25);
             //alert(numeroaleatorio);
			function cargar5()
           {
             document.getElementById("Resultado5").value = numeroaleatorio5;
           }
           function Evaluar5()
           {

            var Evaluar5_Valor1 =document.getElementById("Uvas1").value;
            var Evaluar5_Valor2 =document.getElementById("Uvas2").value;
            var Evaluar5_Valor3 =document.getElementById("Uvas3").value;
            var Evaluar5_Resultado = "";
            var Resultado_Evaluar5="";

            if (Evaluar5_Valor1 == Evaluar5_Valor2)
            {

                if (Evaluar5_Valor1== Evaluar5_Valor3)
                {

                    if (Evaluar5_Valor2== Evaluar5_Valor3)
                        {
                            Evaluar5_Valor1 = parseInt(Evaluar5_Valor1);
                            Evaluar5_Valor2 = parseInt(Evaluar5_Valor2);
                            Evaluar5_Valor3 = parseInt(Evaluar5_Valor3);

                            Evaluar5_Resultado = Evaluar5_Valor1 + Evaluar5_Valor2 + Evaluar5_Valor3;
                            Resultado_Evaluar5 = numeroaleatorio5;
                            //alert(Evaluar1_Resultado)
                            if (Resultado_Evaluar5 == Evaluar5_Resultado)
                            {
                                alert("Felicitaciones!!!!!!!  Muy bien los números estan correctos");
                            }
                                else
                                    alert("La sumatoria de los números que ingresaste es no es igual al numero a identificar");
                        }
                        else
                            alert("Recuerda que los numeros de Tus campos deben ser iguales");
                    }
                      else
                            alert("Recuerda que los numeros de Tus campos deben ser iguales");
                }
                  else
                            alert("Recuerda que los numeros de Tus campos deben ser iguales");
           }

           function aleatorio6(minimo,maximo)
         {
            var numero6 = Math.floor(Math.random()*(maximo-minimo+1)+minimo);
            numero6 = numero6 *3;
            return numero6;
         }
            var numeroaleatorio6 = aleatorio(26,50);
             //alert(numeroaleatorio);
     function cargar6()
           {
             document.getElementById("Resultado6").value = numeroaleatorio6;
           }
           function Evaluar6()
           {

            var Evaluar6_Valor1 =document.getElementById("Cereza1").value;
            var Evaluar6_Valor2 =document.getElementById("Cereza2").value;
            var Evaluar6_Valor3 =document.getElementById("Cereza3").value;
            var Evaluar6_Resultado = "";
            var Resultado_Evaluar6="";

            if (Evaluar6_Valor1 == Evaluar6_Valor2)
            {

                if (Evaluar6_Valor1== Evaluar6_Valor3)
                {

                    if (Evaluar6_Valor2== Evaluar6_Valor3)
                        {
                            Evaluar6_Valor1 = parseInt(Evaluar6_Valor1);
                            Evaluar6_Valor2 = parseInt(Evaluar6_Valor2);
                            Evaluar6_Valor3 = parseInt(Evaluar6_Valor3);

                            Evaluar6_Resultado = Evaluar6_Valor1 + Evaluar6_Valor2 + Evaluar6_Valor3;
                            Resultado_Evaluar6 = numeroaleatorio6;
                            //alert(Evaluar1_Resultado)
                            if (Resultado_Evaluar6 == Evaluar6_Resultado)
                            {
                                alert("Felicitaciones!!!!!!!  Muy bien los números estan correctos");
                            }
                                else
                                    alert("La sumatoria de los números que ingresaste es no es igual al numero a identificar");
                        }
                        else
                            alert("Recuerda que los numeros de Tus campos deben ser iguales");
                    }
                      else
                            alert("Recuerda que los numeros de Tus campos deben ser iguales");
                }
                  else
                            alert("Recuerda que los numeros de Tus campos deben ser iguales");
           }






         function Limpiar1()
           {

            document.getElementById("Manzana1").value="";
            document.getElementById("Manzana2").value="";
            document.getElementById("Manzana3").value="";
            document.getElementById("Resultado1").value="";
              location.reload(true);
           }
           function ValidaSoloNumeros() {
            if ((event.keyCode < 48) || (event.keyCode > 57))
            event.returnValue = false;
            }
