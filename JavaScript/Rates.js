 // highres used to hide side menu navigation bar 
            // click anywhere to hide side menu function
            function highres(){
                // click any where to collaps these three options 
            document.getElementById('crk').style.display = 'none';
        
            document.getElementById('crek').style.display = 'none';
        
            document.getElementById('crrk').style.display = 'none';
                // program end 
         // click any where to collaps side Navigation Menu
                            if(document.getElementById('visible').style.display = 'block'){
                                document.getElementById('visible').style.display = 'none'
                            }
                            else{
                                document.getElementById('visible').style.display = 'block'
                            }
                         }
        
                        window.addEventListener('onclick' , highres);
        
                        //  side menu show and hide function main function | click 3 line button to show / hide
        
                    function showhide(){
                        if (document.getElementById('visible').style.display == 'block'){
                            document.getElementById('visible').style.display = 'none';
                            document.getElementById('logo_for_mob').style.display='flex';
                            document.getElementById('halfbg').style.display='flex';
                            
                            
                        }
                        else{
                            document.getElementById('halfbg').style.zIndex='-1';
                            document.getElementById('visible').style.display = 'block';
                            document.getElementById('logo_for_mob').style.display='none';
                        }
                    }
                  
                    // don't show 3 lines menu on high resoulution function
                    //  function sidehide(){
                    //     if(window.innerWidth > 1000){
                    //         document.getElementById('whenactive').style.display = 'none';
                    //     }
                    //  }
        
                    //  window.addEventListener(onloadeddata , sidehide);
        
                    // ================ Drop Down Menu for sport option is side menu navigation bar =================
                    function crkkk(){
                        if (document.getElementById('crk').style.display == 'block'){
                            document.getElementById('crk').style.display = 'none';
        
                        }
                        else{
                            document.getElementById('crk').style.display = 'block';
                        }
                    }
                    function crkerkk(){
                        if (document.getElementById('crek').style.display == 'block'){
                            document.getElementById('crek').style.display = 'none';
        
                        }
                        else{
                            document.getElementById('crek').style.display = 'block';
                        }
                    }
                    function crkekk(){
                        if (document.getElementById('crrk').style.display == 'block'){
                            document.getElementById('crrk').style.display = 'none';
        
                        }
                        else{
                            document.getElementById('crrk').style.display = 'block';
                        }
                    }
        
                   
                    