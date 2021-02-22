// all custom java script
// psuedocode steps
// 1. set a click event on the mobile menu icon
// 2. once clicked, demonstrate jQuery chaining
// 3. finally demonstrate jQuery callback function

  // wait until doc is loaded and is ready
$('document').ready(function(){

  $('.fa-bars').click(function(){
  // this is called chaining
 // $('.daily-section').fadeOut(3000).show(3000);

 // this is a callback function pattern
   $('.daily-section').hide(3000, function(){
     $('.map-section').hide(3000, function(){
       $('.favourite-section').hide(3000, function(){
         $('.footer-section').hide(3000, function(){
           // end of the callback pattern
         });
       });
     });
   });

  });
// click function ends
});
