$(document).ready(function(){

    $('#boutton').click(function(){


        $.ajax({
            url: 'http://localhost:8080/ajax/js/donnee.json',
            type: 'GET',
            dataType: "json",
            success:function(data, statut) 
            {

                console.log(data);

            },



        });

    });

});





       /* $.ajax({

            url: "http://localhost:8080/ajax/js/donnee.json",

            type: 'post',

            dataType: 'json',

            success: function(data) 
            {

                console.log("ca marche bien", data);
            },

            error: function(request,error) {
                console.log("ça plante la !!!", err);
            },

        });

    });

});*/
            

     