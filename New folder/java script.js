
$('.rating').raty({
    path: 'js/images',
    readOnly: true
});

$('.rating').eq(0).raty('score', 5); // set the rating for the first manga to 5 stars
$('.rating').eq(1).raty('score', 3); // set the rating for the second manga to 3 stars
$('.rating').eq(2).raty('score', 4); // set the rating for the third manga to 4 stars
$('.rating').eq(3).raty('score', 2); // set the rating for the fourth manga to 2 stars
$('.rating').eq(4).raty('score', 5); // set the rating for the fifth manga to 5 stars
$('.rating').eq(5).raty('score', 1); // set the rating for the sixth manga to 1 star
$('.rating').eq(6).raty('score', 4); // set the rating for the seventh manga to 4 stars
