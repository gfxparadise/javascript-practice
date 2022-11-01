$(document).ready(function () {
    // php syntax look like this 
    // $('selector').action()
    // click on P 
    // $('p').click();
    // do this when we click on p 
    // $('p').click(function () {
    // console.log('you clicked on p', this);
        // to hide p
        // we also use id and class to hide 
        // $('p').hide();
        // to hide on specific
        // $(this).hide();
        //    $('#two').hide();
        //    $('.one').hide();
    });
    // when class or id avaliable 
// });
// ---------------------------------------------------------------------------------------------------------------

// 3 type of selector in jQuery{

    // 1) element selector example         
        // $('p').click();
    // ----------------------------------------------------------------------------

     // 2) id selector
        // $('.one').click();
    // ----------------------------------------------------------------------------

    // 3) class selector}
        // $('#two').click(); 
    // ----------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------

// other selector    
    // $('*').click() // clicks on all the elements
    // $('p.odd').click() // clicks on all the elements
    // $('p:first').click() // clicks on all the elements
// ---------------------------------------------------------------------------------------------------------------

// Event in jQuery
    // Mouse Events = click, dblclick, mouseenter, mouseleave

        // click 
            // $('p').click(function(){
            // console.log('you clicked on p', this);
            // });
        // -----------------------------------------------

         // dblclick
            // $('p').dblclick(function(){
            // console.log('you double clicked on p', this);
            // });
        // -----------------------------------------------

         // mouseenter
            // $('p').mouseenter(function(){
            // console.log('Your  mouse just enter on p', this);
            // });
        // -----------------------------------------------

         // mouseleave 
            // $('p').mouseleave(function(){
            // console.log('Your mouse just leave the p', this);
            // });
        // -----------------------------------------------

    // ---------------------------------------------------------------------------------

    // Demoing on method 
        // $('p').on(
            // {
                // click:function() {
                // console.log('you clicked on p', this);
                // },

                // dblclick:function() {
                // console.log('you double clicked on p', this);
                // },

                // mouseenter:function() {
                // console.log('Your  mouse just enter on p', this);
                // },

                // mouseleave:function() {
                // console.log('Your mouse just leave the p', this);
                // }
            // });
    // ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------

    // Keyboard Events = keypress, keyup, keydown, MediaKeyStatusMap

    // ----------------------------------------------------------------------------


    // Form Events = submit, change, focus, blur

    // ----------------------------------------------------------------------------

    // Document/Window Events = load, resize, scroll, unload

    // ----------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------

// function 
    // Hide & Show Text Effect 

        // Automatic Method
            // $('#wiki').hide(1000, function () {
            // console.log("hidden");
            // }) 
            // -----------------------------------------------

            // $('#wiki').show(1000, function () {
            // console.log("show");
            // })  
            // -----------------------------------------------

        // ---------------------------------------------------------------------------------

        // Button Method show and hide
            // $('#but').click(function () {
            // $('#wiki').toggle(1000);
            // })
        // ---------------------------------------------------------------------------------

    // FadeIn, FadeOut, FadeToggle, FadeTo

        // Automatic Method

            // fadeOut
                // $('#wiki').fadeOut(1000, function () {
                // console.log("fadeOut");
                // }) 
            // -----------------------------------------------

            // fadeIn
                // $('#wiki').fadeIn(1000, function () {
                // console.log("fadeIn");
                // })  
            // -----------------------------------------------

            // fadeTo
                // $('#wiki').fadeTo(1000, 0.5, function () {
                // console.log("fadeToggle");
                // })  
            // -----------------------------------------------

        // ---------------------------------------------------------------------------------

        // Button Method 

            // fadeToggle
            // $('#but').click(function () {
            // $('#wiki').fadeToggle(1000);
            // })
            // -----------------------------------------------

            // Method fadeTo
            // $('#but').click(function () {
            // $('#wiki').fadeTo(1000, 0.5);
            // })
            // -----------------------------------------------

        // ---------------------------------------------------------------------------------
        
// ---------------------------------------------------------------------------------------------------------------

// Slide methods - speed and callback parameters are optional

    //$('#wiki').slideUp(1000, function(){
        //console.log('Up');
        // })
    // ---------------------------------------------------------------------------------

    //$('#wiki').slideDown(1000, function(){
        //console.log('Down');
        // })
    // ---------------------------------------------------------------------------------

    //$('#wiki').slideToggle(1000, function(){
        //console.log('Toggle');
        // })
    // ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------

  // Animate function in jQuery
    // Automatic
        // $('#wiki').animate({
            //opacity:0.3,
            //height: '150px',
            //width:'350px'
        // }, "fast")
    // ---------------------------------------------------------------------------------

    // manual (que method)
        // $('#wiki').animate({ opacity: 0.3 }, 4000);
        // $('#wiki').animate({ opacity: 0.9 }, 1000);
        // $('#wiki').animate({ width: '350px' }, 12000);
    // ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------

// some other stuff

    // to do change in form or text area value we use val function 
        // $('#ta').val('blue');
        // $('#inp').val('setting it to blue');
    // ---------------------------------------------------------------------------------


    // To change html
        // $('#ta').html('green');
        // $('#ta').html('red');
        // $('#inp').html('setting it to red');
    // ---------------------------------------------------------------------------------
    
    // to empty
        // $('#wiki').empty()
        // $('#inp').empty()
    // ---------------------------------------------------------------------------------

    // to change text 
        // $('#wiki').text('you are good')
    // ---------------------------------------------------------------------------------

    // to remove
        // $('#wiki').remove()
    // ---------------------------------------------------------------------------------

    // to add new class with name
        // $('#wiki').addClass('myclass')
        // $('#wiki').addClass('myclass2')
    // ---------------------------------------------------------------------------------

    // to add remove class with name
        // $('#wiki').removeClass('myclass2')
    // ---------------------------------------------------------------------------------
    
    // to add CSS on id
        // $('#wiki').css('background-color', 'red')
        // $('#wiki').css('background-color')
    // ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------


// AJAX Using jQuery
    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(data); })

    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(status); })

    // $.post('https://code.jquery.com/jquery-3.3.1.js',
    //     { name: 'harry', channel: 'code with harry' },
    //     function (data, status) { alert(status) });

// ---------------------------------------------------------------------------------------------------------------









