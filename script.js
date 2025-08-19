                        function add()
                        {
                            var x = document.getElementById("num1").value;
                            var y = document.getElementById("num2").value;
                            var z = parseInt(x)+parseInt(y);
                            document.getElementById("Result").innerHTML="Result =: "+z;
                        }
                        function sub()
                        {
                             var x = document.getElementById("num1").value;
                             var y = document.getElementById("num2").value;
                            var z = parseInt(x)-parseInt(y);
                            document.getElementById("Result").innerHTML="Result =: "+z;
                        }
                          function mul()
                        {
                             var x = document.getElementById("num1").value;
                             var y = document.getElementById("num2").value;
                            var z = parseInt(x)*parseInt(y);
                            document.getElementById("Result").innerHTML="Result =: "+z;
                        }
                         function div()
                        {
                            var x = document.getElementById("num1").value;
                            var y = document.getElementById("num2").value;
                            var z = parseInt(x)/parseInt(y);
                            document.getElementById("Result").innerHTML="Result =: "+z;
                        }
                         function square()
                        {
                            var x = document.getElementById("num1").value;
                            
                            var z = (parseInt(x) * parseInt(x));
                            document.getElementById("Result").innerHTML="Result =: "+z;
                        }
                        function cube()
                        {
                              var x = document.getElementById("num1").value;
                              
                              var z = (parseInt(x) ** parseInt(x));
                              document.getElementById("Result").innerHTML="Result =: "+z;
                        }
                        function Clear()
                        {
                           document.getElementById("num1").value = "";
                           document.getElementById("num2").value = "";
                           document.getElementById("Result").innerHTML = "Result:";
                        }
                        function equal()
                        {
                            var x = document.getElementById("num1").value;
                            var y = document.getElementById("num2").value;
                            var z = parseInt(x)===parseInt(y); 
                            document.getElementById("Result").innerHTML = "Result: " + z;
                        }