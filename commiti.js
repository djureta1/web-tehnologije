 var CommitTabela = (function(){

            
            var constructor = function(divElement, brojZadataka){

				/* function brojZadatka{
					var brojZadataka = 0;
					var rows = table.getElementsByTagName("tr")
					for (var i = 0; i < rows.length; i++) {
						brojRedova++;
            
					}

			
                   }
				   */
                
                function maxVrijednost(tabela){
                    var max = 0;
                    var newvalue = 0;
                    for (var i=0; i < tabela.rows.length; i++){
                        newvalue= tabela.rows[i].cells.length;
                    if (newvalue > max) 
                            max = newvalue;
                    }
                    
                    return max;
                }

                function izjednaciKolone(tabela){
                    var max = maxVrijednost(tabela);

                    for(i=0; i<tabela.rows.length; i++){
                        var red = tabela.rows[i].cells.length;

                        for (j=0; j < tabela.rows[i].cells.length; j++){
                            tabela.rows[i].cells[j].innerHTML !== '' ? tabela.rows[i].cells[j].colSpan = 1 : tabela.rows[i].cells[j].colSpan = 0;
                        }

                        tabela.rows[i].cells[tabela.rows[i].cells.length - 1].colSpan = max-red + 1;
                    }
                }
            
                function dodajKolonu(tabela, red, url) {
                    var novaKolona = red.insertCell(-1);
                    if(novaKolona.previousElementSibling.innerHTML == ''){
                        red.removeChild(novaKolona.previousElementSibling);
                    }
                    novaKolona.innerHTML = url;

                    izjednaciKolone(tabela);
                }

                function provjeriParametre(moraImatArgumenata, poslanoFunkciji){
                    return moraImatArgumenata !== poslanoFunkciji ? false : true;
                }
                
                return {
                    dodajCommit: function(rbZadatka, url){
                        if(!provjeriParametre(2, arguments.length)){
                            return -1;
                        }
                        var tabela = divElement.getElementsByTagName("table")[0];
                        var red = tabela.rows[rbZadatka+1];

                        dodajKolonu(tabela, red, url);
                    },
                    editujCommit: function(rbZadatka, rbCommita, url){
                        if(!provjeriParametre(3, arguments.length)){
                            return -1;
                        }
                        var tabela = divElement.getElementsByTagName("table")[0];
                        tabela.rows[rbZadatka+1].cells[rbCommita].innerHTML = url;
                    },
                    obrisiCommit: function(rbZadatka, rbCommita){
                        if(!provjeriParametre(2, arguments.length)){
                            return -1;
                        }
                        var tabela = divElement.getElementsByTagName("table")[0];
                        tabela.rows[rbZadatka+1].removeChild(tabela.rows[rbZadatka+1].cells[rbCommita]);

                        izjednaciKolone(tabela);
                    }
                }
            }

            return constructor;
        }());

        var mojDiv = document.getElementById('mojDiv');
        var tabela = new CommitTabela(mojDiv, 4);
        tabela.dodajCommit(0, 'www.etf.ba');
        tabela.dodajCommit(0, 'www.etf.ba');
        tabela.dodajCommit(1, 'www.etf.ba');
        tabela.dodajCommit(1, 'www.etf.ba');
        tabela.dodajCommit(1, 'www.etf.ba');
        tabela.editujCommit(1, 4, 'www.etf123.ba');
        tabela.obrisiCommit(1, 2);
        tabela.obrisiCommit(1, 4);