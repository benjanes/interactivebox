$('document').ready(function() {
	
var box_initiate = function (w, h){	
	$('#box-container').css({width: w+'px', height: h+'px'});
	$('#left').css({width: (w/4)+'px', height: (h)+'px'});
	$('#right').css({width: (w/4)+'px', height: (h)+'px'});
	$box = $('.box');
	// initial placement of all boxes
	$box.css({top: (h/2)+'px', left: '0px', height: '0px', width: '0px'})
	// initial placements of visible boxes
	$box.eq(4).css({top: (7*h/16)+'px',left: (w/32)+'px',width: (w/16)+'px',height: (h/8)+'px'});
	$box.eq(3).css({top: (3*h/8)+'px',left: (w/8)+'px',width: (w/8)+'px',height: (h/4)+'px'});
	$box.eq(2).css({top: (h/4)+'px',left: (3*w/8)+'px',width: (w/4)+'px',height: (h/2)+'px'});
	$box.eq(1).css({top: (3*h/8)+'px',left: (3*w/4)+'px',width: (w/8)+'px',height: (h/4)+'px'});
	$box.eq(0).css({top: (7*h/16)+'px',left: (29*w/32)+'px',width: (w/16)+'px',height: (h/8)+'px'});
	
	numberOfItems = $('.box').length;
	right = numberOfItems-1;
	a = 0;
	b = 1;
	c = 2;
	d = 3;
	e = 4;
	f = 5;
	left = 6;
	animateInterval = 500; // speed of the animation steps
	itemInterval = 1000; // delay interval on the loop
}
	
// defines steps in counterclockwise motion	
var counterclockwise = function() {
	$box.eq(a).stop().animate({
		left: w+'px',
		top: (h/2)+'px',
		width: '0px',
		height: '0px'
	}, animateInterval);
	$box.eq(b).stop().animate({
		top: (7*h/16)+'px',
		left: (29*w/32)+'px',
		width: (w/16)+'px',
		height: (h/8)+'px'
	}, animateInterval);
	$box.eq(c).stop().animate({
		top: (3*h/8)+'px',
		left: (3*w/4)+'px',
		width: (w/8)+'px',
		height: (h/4)+'px'
	}, animateInterval);
	$box.eq(d).stop().animate({
		top: (h/4)+'px',
		left: (3*w/8)+'px',
		width: (w/4)+'px',
		height: (h/2)+'px'
	}, animateInterval);
	$box.eq(e).stop().animate({
		top: (3*h/8)+'px',
		left: (w/8)+'px',
		width: (w/8)+'px',
		height: (h/4)+'px'
	}, animateInterval);
	$box.eq(f).stop().animate({
		top: (7*h/16)+'px',
		left: (w/32)+'px',
		width: (w/16)+'px',
		height: (h/8)+'px'
	}, animateInterval);
	$box.eq(left).stop().animate({
		top: (h/2)+'px',
		left: '0px',
		width: '0px',
		height: '0px'
	}, animateInterval);
	if(a == numberOfItems -1){
	    a = 0;	
	}else{
	    a++;					
	}
	if(b == numberOfItems -1){
	    b = 0;	
	}else{
	    b++;					
	}
	if(c == numberOfItems -1){
	    c = 0;	
	}else{
	    c++;					
	}
	if(d == numberOfItems -1){
	    d = 0;	
	}else{
	    d++;					
	}
	if(e == numberOfItems -1){
	    e = 0;	
	}else{
	    e++;					
	}
	if(f == numberOfItems -1){
	    f = 0;	
	}else{
	    f++;					
	}
	if(left == numberOfItems -1){
	    left = 0;	
	}else{
	    left++;					
	}
	if(right == numberOfItems -1){
	    right = 0;	
	}else{
	    right++;					
	}
}; // END of counterclockwise() definition

// defines steps in clockwise motion
var clockwise = function() {
	$box.eq(right).stop().animate({
		left: w+'px',
		top: (h/2)+'px',
		width: '0px',
		height: '0px'
	}, 0)
	.stop().animate({
		top: (7*h/16)+'px',
		left: (29*w/32)+'px',
		width: (w/16)+'px',
		height: (h/8)+'px'
	}, animateInterval);
	$box.eq(a).stop().animate({
		top: (3*h/8)+'px',
		left: (3*w/4)+'px',
		width: (w/8)+'px',
		height: (h/4)+'px'
	}, animateInterval);
	$box.eq(b).stop().animate({
		top: (h/4)+'px',
		left: (3*w/8)+'px',
		width: (w/4)+'px',
		height: (h/2)+'px'
	}, animateInterval);
	$box.eq(c).stop().animate({
		top: (3*h/8)+'px',
		left: (w/8)+'px',
		width: (w/8)+'px',
		height: (h/4)+'px'
	}, animateInterval);
	$box.eq(d).stop().animate({
		top: (7*h/16)+'px',
		left: (w/32)+'px',
		width: (w/16)+'px',
		height: (h/8)+'px'
	}, animateInterval);
	$box.eq(e).stop().animate({
		top: (h/2)+'px',
		left: '0px',
		width: '0px',
		height: '0px'
	}, animateInterval);
	$box.eq(f).stop().animate({
		left: w+'px',
		top: (h/2)+'px',
		width: '0px',
		height: '0px'
	}, animateInterval);
	if(a == 0){
	    a = numberOfItems -1;	
	}else{
	    a--;					
	}
	if(b == 0){
	    b = numberOfItems -1;	
	}else{
	    b--;					
	}
	if(c == 0){
	    c = numberOfItems -1;	
	}else{
	    c--;					
	}
	if(d == 0){
	    d = numberOfItems -1;	
	}else{
	    d--;					
	}
	if(e == 0){
	    e = numberOfItems -1;	
	}else{
	    e--;					
	}
	if(f == 0){
	    f = numberOfItems -1;	
	}else{
	    f--;					
	}
	if(right == 0){
	    right = numberOfItems -1;	
	}else{
	    right--;					
	}
	if(left == 0){
	    left = numberOfItems -1;	
	}else{
	    left--;					
	}
}; // END of clockwise() definition

// on hover on left side of container, start loop moving counterclockwise
$('#left').hover(function() {
	counterclockwise(); // bypass itemInterval delay on initial mouseover
	loop_on_left = setInterval(counterclockwise, itemInterval);
}, function() {
	clearInterval(loop_on_left);
});

// on hover on right side of container, start loop moving clockwise			
$('#right').hover(function() {
	clockwise(); // bypass itemInterval delay on initial mouseover
	loop_on_right = setInterval(clockwise, itemInterval);
}, function() {
	clearInterval(loop_on_right);
});			



$('#submit').click(function(e){
	w = $('#width').val();
	h = $('#height').val();

	if ($('#checkbox').attr('checked')) {
		$('.box').css({'-moz-border-radius': (w/4)+'px', '-webkit-border-radius': (w/4)+'px', 'border-radius': (w/4)+'px'});
	} else {
		$('.box').css({'-moz-border-radius': '0px', '-webkit-border-radius': '0px', 'border-radius': '0px'});
	}

	box_initiate(w, h);
 	e.preventDefault();
});
 
}); // end ready