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
            // $('#bu').click(function () {
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
// Get method:
        // Get value from HTML,Text & attribute
            //var a = $('#bu').html(); show HTML of but
            //var a = $('body').html(); show html of Body
            //var a = $('#bu p').html(); show html of p
            //var a = $('#bu').text(); show all text in but
            //var a = $('#bu').attr('class'); show all classes in but
            //console.log(a);
        // ---------------------------------------------------------------------------------

        // Get value from form and show in Alert  
            // $('#sform').submit(function(){
                // var name = $('#sname').val();
                // var classname = $('#sclass').val();
                // var country = $('#scountry').val();
                // alert("Hello " + name + " class: " +classname  + "country : " + country);
            // });
        // ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------

// Set method:
    // we use set method to change text, colour any thing when we click or after specific time 

        // $('#clickbutton').click(function(){
        // JQuery text, html & attr set method      
            // set by Text 
                // $('#box h2').text("Hello GFX");
                //$('#box p').text("this is new text.");
           // ---------------------------------------------------------------------------------

            // set by html 
                // we use .html when we want to use html tag in text like <b> blod </b> 
                // $('#box p').html("this <b>is new</b> text.");
            // ---------------------------------------------------------------------------------

            // set by atribte
                // attribute method useto add new class or id 	
                // $('#box h2').attr("class","red");
           // ---------------------------------------------------------------------------------

            // JQuery form Set Method (Value)
                // $("#sname").val("GFX");
                // $("#sclass").val("Btech");
           // ---------------------------------------------------------------------------------

        // });

// ---------------------------------------------------------------------------------------------------------------

// CSS Method
    // by the help of this method we can add inline css on class or id when we click
        // $('#stylebutton').click(function(){
            // $('#box').css({"background":"pink","color":"red","border":"5px dotted green"});
        // });
// ---------------------------------------------------------------------------------------------------------------
// Method Chaining:
    // To add multiple event in single line 
        $('#animateBtn').click(function(){
            $('#box').css('background','pink').slideUp(2000).slideDown(2000);
        });

// On method
    //  when we want to add multiple event  
    // single event
        // $('#box').on("click",function(){
            // $(this).css("background","orange");
        // });
    // ---------------------------------------------------------------------------------

    // Multiple event method 1 (when you want add events in same line)
        // $('#box').on("mouseover mouseout",function(){
            // $(this).toggleClass("boxbg");
        // });
    // ---------------------------------------------------------------------------------

    // Multiple event method 2        
        // $('#box').on({
            // "click" : function(){
                // $(this).css("background","orange");
            // },
            // "mouseover" : function(){
                // $(this).css("background","pink");
            // },
            // "mouseout" : function(){
                // $(this).css("background","lightblue");
            // }
        // });
    // ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

// off method  
    // to remove multiple events 
        // $("button").click(function(){
            // $("#box").off("mouseover mouseout")
        // });
// ---------------------------------------------------------------------------------------------------------------

//jQuery Append & Prepend Method
    // Append when we want add some thing in div end 
        // $('#appendBtn').click(function(){
            // $('#box').append("<h2>GFX</h2>");
        // });

        // To add some thing in list 
        // $('#appendBtn').click(function(){
            // $('ol').append("<li>List Item new</li>");
        // });
    // ---------------------------------------------------------------------------------

    // Prepend when we want add some thing in div starting
        // $('#prependBtn').click(function(){
            // $('#box').prepend("<h3>GFX</h3>");
        // });

        // To add some thing in list 
        // $('#prependBtn').click(function(){
            // $('ol').prepend("<li>New List Item </li>");
        // });
    // ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

// After before Method 
    // After method
        // Append when we want add some thing after div 
            // $('#afterBtn').click(function(){
                // $('#box').after("<h3> After : GFX</h3><p>this is Just text.</p>");
            // });
    // ---------------------------------------------------------------------------------

    // before method
        // Before when we want add some thing before div
            // $('#beforeBtn').click(function(){
                // $('#box').before("<h3>Before : GFX</h3>");
            // });
    // ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------

//  jQuery Empty &  Remove Method
    // Empty Method 
        // When we want to empty any div we use empty method 
            // $('#emptyBtn').click(function(){
                // $('#box h2').empty();
            // });
    // ---------------------------------------------------------------------------------
           
    // Remove method 
        // When we want to remove any div we use remove method 
            // $('#removeBtn').click(function(){
                // $('#box').remove();
            // });
    // ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------

// jQuery AppendTo &  PrependTo Method
    // Content comes first than selector (way of writting code is different)
        // Append To
            // similar to append 
                // $('#appendBtn').click(function(){
                    // $("<h3>AppendTo : GFX</h3>").appendTo("#box");
                // });
    // ---------------------------------------------------------------------------------
               
        // Prepend To 
            // similar to prepend 
                // $('#prependBtn').click(function(){
                    // $("<h3>PrependTo : GFX</h3><p>this is just text.</p>").prependTo("#box");
                // });
    // ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

// jQuery Clone() Method
    //  When we want to cloneor copy paste any text or heading on other div 
            // $('#cloneBtn').click(function(){
                // $('#box h2').clone().prependTo("#box2");
                // $('#box p').clone().appendTo("#box2");
            // });
// ---------------------------------------------------------------------------------------------------------------

// jQuery  ReplaceWith() & ReplaceAll
    // $('#replaceBtn').click(function(){
        // Replacewith 
            // When we have multiple paragrah and we want to replace specific paragraph we use replacewith
            // in this we can replace tag and text node
				// $('#box p:first').replaceWith("<h3>Yahoo Baba</h3>");
                // $('#box p:nth-chiold(3)').replaceWith("Yahoo Baba");
        // ---------------------------------------------------------------------------------

        // Replaceall
            // When we have multiple paragrah and we want to replace all paragraph we use replaceall
            // in this we can replace only tag

				//$("<h3>Yahoo Baba</h3>").replaceAll("#box p:first");
			// });
        // ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

// Wrap Method
    // Wrap 
        // when we want to add any tag in other parent tag (in this we make some one parent tag of tag)
            // $('#wrapBtn').click(function(){
                // $('#box p').wrap('<div id="test"></div>');
            // });
    // ---------------------------------------------------------------------------------

    // Unwrap
        // when we to remove parent tag of tag
            // $('#unwrapBtn').click(function(){
                // $('#box p').unwrap();
            // });
    // ---------------------------------------------------------------------------------

    // Wrapall  
        // When we want to wrap multiple tag into on main tag 
            // $('#wrapAllBtn').click(function(){
                // $('p').wrapAll('<div id="test"></div>');
            // });
    // ---------------------------------------------------------------------------------

    // wrapInner
        // When we want to wrap inside tag we use it
            // $('#wrapInnerBtn').click(function(){
               // $('h1').wrapInner('<span class="red"></span>');
            // });
    // ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

// Width &  Height Method
    // Width Method
        // $('#widthBtn').click(function(){
            // $("#box").width("400px");

            // console.clear();
            // When we want to know content width we use width
                // console.log("Width : " + $('#box').width());
            // When we want to know whole div width we use Innerwidth 
                // console.log("InnerWidth : " + $('#box').innerWidth());
            // When we want to know whole div with border width we use Outerwidth 
                // console.log("OuterWidth : "  + $('#box').outerWidth());
            // When we want to know whole div with borderand with margin width we use Outerwidth(true)
                // console.log("OuterWidth(true) : " + $('#box').outerWidth());
        // });
    // ---------------------------------------------------------------------------------

    // Height Method 
        // $('#heightBtn').click(function(){
            // $("#box").height("500px");

            // console.clear();
            // When we want to know content Height we use Height 
                // console.log("Height : " + $('#box').height());
            // When we want to know Whole div Height we use Innerheight 
                // console.log("InnerHeight : " + $('#box').innerHeight());
            // When we want to know Whole div with border Height we use Outerheight 
                // console.log("OuterHeight : "  + $('#box').outerHeight());  
            // When we want to know Whole div with border and with margin Height we use Outerheight(true)
                // console.log("OuterHeight(true) : " + $('#box').outerHeight());
        // });
    // ---------------------------------------------------------------------------------
 
// ---------------------------------------------------------------------------------------------------------------

// jQuery Offset & Position Method
    // Position (Relative to its parent element)
        // To know the location or position of text or any other thing how much top and left it has (if padding avaliable it always show the position text with padding)
			// $('#positionBtn').click(function(){
				//console.log($("#box h2").position());

				// var x = $("#box h2").position();
				// console.log("TOP : " + x.top + " left : " + x.left);
			// });
    // ---------------------------------------------------------------------------------

    // Offset (relative to the Document)
         // To know the location or position of text or any other thing how much top and left it has padding dont work here
			// $('#offsetBtn').click(function(){
				//console.log($("#box h2").offset());

				//var x = $("#box h2").offset();
				//console.log("TOP : " + x.top + " left : " + x.left);

				// $("#box h2").offset({top:100,left:100});
			// });
    // ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

// Class Method: 
	// jQuery AddClass Method
        // add class when when click on button  
            // $('#addbutton').click(function(){
                // we can ad 2 clas at same time but 2nd class get more priority
                //$('#box').addClass("first second");
                // we can add class on 2 selector 
                // $('#box,h1').addClass("first second");
            // });
    // ---------------------------------------------------------------------------------

    // jQuery RemoveClass Method
        // add class when when click on button  
            // $('#removebutton').click(function(){
            //     $('#box').removeClass("second");
            // });
    // ---------------------------------------------------------------------------------
        
    //  jQuery ToggleClass Method
        // toggle means if class is avaliable than remove and if not avaliable than add 
            // $('#togglebutton').click(function(){
            //     $('#box').toggleClass("second");
            // });
    // ---------------------------------------------------------------------------------

    // hasClass Method
        // to know class in avaliable or not 
			// $('#hasClassBtn').click(function(){
				//console.log($('#box h2').hasClass('test'));

				// var x = $('#box h2').hasClass('test');
				// if(x == true){
					// console.log('Yes');
				// }else{
					// console.log('No');
				// }
			// });
// ---------------------------------------------------------------------------------------------------------------

// scrollTop & scrollLeft Method
    // ScrollTop (Vertical scroll)
        // Help us to scroll and also help to get value how much to scroll
            // To know how much scroll in console
                //console.log($(window).scrollTop());
        // -----------------------------------------------------------------

        // To get scroll value in specific box on page 
            // $(window).scroll(function(){
                // $('#box').html("");
                // $('#box').append("Top : " + $(window).scrollTop());
            // });
        // -----------------------------------------------------------------

        // Scroll using button 
            // $('#scrolltopBtn').click(function(){
                // $(window).scrollTop(200);
            // });
        // -----------------------------------------------------------------

    // ---------------------------------------------------------------------------------

    // ScrollLeft (Horizontal scroll)
        // Help us to scroll and also help to get value how much to scroll 
            // To know how much scroll in console
                //console.log($(window).scrollLeft());
        // -----------------------------------------------------------------

        // To get scroll value in specific box on page 
            // $(window).scroll(function(){
                // $('#box').html("");
                // $('#box').append("<br>Left : " + $(window).scrollLeft());
            // });
        // -----------------------------------------------------------------

        // Scroll using button 
            // $('#scrollleftBtn').click(function(){
                // $(window).scrollLeft(100);
            // });
        // -----------------------------------------------------------------

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

    // Automatic with callback function
    	// $('#slideUpBtn').click(function(){
            // $('#box').slideUp(3000,function(){
                // console.log("Now it is Hidden")
            // });
        // });
    // ---------------------------------------------------------------------------------

    // manual (que method)
        // $('#wiki').animate({ opacity: 0.3 }, 4000);
        // $('#wiki').animate({ opacity: 0.9 }, 1000);
        // $('#wiki').animate({ width: '350px' }, 12000);
    // ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

// Ancestors Methods:
        // To target DOMException( in this we can target parent, grandparent and great grand parent)

            // Parent
                // To target parent 
                    //$('#child-C').parent().css('background','red');
            // ---------------------------------------------------------------------------------

            // Parents
                // To target all parents with body  
                    //$('#inner').parents('#main-outer').css('background','red');
            // ---------------------------------------------------------------------------------

            // ParentsUntil
                // to target between
                    //$('#inner').parentsUntil('#main-outer').css('background','red');
            // ---------------------------------------------------------------------------------

            // OffsetParent
                // use to taget first person where position property use in css 
                    //$('#inner').offsetParent().css('background','red');
            // ---------------------------------------------------------------------------------

            // Closest
                // To target closest parent of given name Liv div, ul, li and other
                    // $('#child-C').closest('ul').css('background','red');
            // ---------------------------------------------------------------------------------
                   
// ---------------------------------------------------------------------------------------------------------------

// Descendant Methods
    // To target childern, grand child or great grand child 
        // Childern
            // To target all childern or specific childern       
                // $('#inner').children('.test').css('background','red');
        // ---------------------------------------------------------------------------------

        // Find 
            // to find and do changes in childern, grand child or great grand child 
                //$('#main-outer').find('.test').css('background','red');
        // ---------------------------------------------------------------------------------
        
// ---------------------------------------------------------------------------------------------------------------

// Sibling Methods
$('#child-C').siblings().css('background','red');

			//$('#child-C').siblings('.test').css('background','red');

			//$('#child-C').next().css('background','red');

			//$('#child-C').prev().css('background','red');

			//$('#child-C').prevAll().css('background','red');

			//$('#child-C').nextAll().css('background','red');

			//$('#child-C').nextUntil('.test').css('background','red');

			//$('#child-C').prevUntil('.test').css('background','red');

// ---------------------------------------------------------------------------------------------------------------

// Filtering Method           
$('#second p').first().css('background','gold');

			//$('ul li').last().css('background','gold');

			//$('ul li').eq(2).css('background','gold');

			/* WithFilter*/
			//$('p').filter('.test').css('background','gold');

			/* WithOutFilter*/
			//$('p.test').css('background','gold');

			//$('p').not('.test').css('background','gold');

			//$('ul li').slice(2).css('background','gold');

// Stop Method
    // $('#stopBtn').click(function(){
        // To stop single animation     
            // $('#box').stop();

        // to stop all animation 
            // $('#box').stop(true);

        // To skip animation 
            // $('#box').stop(true,true);
    // });
// ---------------------------------------------------------------------------------------------------------------

// has & is Method
        $('p').has('b,span').css('background','gold');

			//$('p').has('.test').css('background','gold');

			/*if($('p').parent().is('div')){
				console.log($('p').parent().is('div'));
			}*/

			/*$('p').click(function(){
				if($(this).parent().is('div')){
				$(this).css('background','gold');	
				}
			});*/

// ---------------------------------------------------------------------------------------------------------------
// each Method

            $('li').each(function(){
				console.log($(this).text());
				//$(this).text("Hello");
			});
// ---------------------------------------------------------------------------------------------------------------

// pageX & pageY Method

        $(document).mousemove(function(event){
            //$('#result').text(event.pageX)
            
            $('#result').text("X: " + event.pageX + " Y: " + event.pageY);
            
            var x = event.pageX;
            var y = event.pageY;

            $('#box').offset({top:y,left:x});
        });
// ---------------------------------------------------------------------------------------------------------------
// Event. Property:
    // Event.type Property

            $('#box').on("click dbclick mouseover mouseout",function(event){
                $('h2').html("Event: "+ event.type)
            });
    // ---------------------------------------------------------------------------------

    // Event.which Property

            $('#box').on("mouseover mouseout mousedown",function(event){
                $('h2').html(event.type + ": " + event.which);
            });

            $('#inputbox').on("keydown",function(){
                $('h2').html(event.type + ": " + event.which);
            });
    // ---------------------------------------------------------------------------------

    // Event.target Property

            $('#box').on("click",function(){
                $('h3').html("Target Element: " + event.target.nodeName);
            });
    // ---------------------------------------------------------------------------------

    // Event.target innerHTML Property

            $('#box').on("click",function(){
                $('h3').html("Target Element: " + event.target.innerHTML);
            });
    // ---------------------------------------------------------------------------------

    // Event.preventDefault() Method

            $('#result').click(function(event){
                event.preventDefault();

                var a = event.isDefaultPrevented();
                $('h2').html(a);
            });
    // ---------------------------------------------------------------------------------

    // Event.stopPropagation() Property

            $('#box').click (function(){
                alert("The div element was Clicked");
            });

            $('h2').click (function(){
                alert("The h2 element was Clicked");
            });

            $('p').click (function(event){
                event.stopPropagation();
                alert("The p element was Clicked" + event.isPropagationStopped());
            });

            $('button').click (function(){
                alert("The button element was Clicked");
            });
    // ---------------------------------------------------------------------------------

    // Event.data

            $('p').each(function (i){
                $(this).on("click",{value:i},function(event){
                    alert(event.data.value);
                });
            });
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









