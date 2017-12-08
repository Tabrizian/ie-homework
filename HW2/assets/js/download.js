function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var movie = getParameterByName('movie')

$.ajax({
    url: 'http://www.theimdbapi.org/api/movie?movie_id=' + movie, 
    success: function (result) {
        console.log(result.title)
        $('#movie-image').attr('src', result.poster.thumb)
        $('#movie-title').text(result.title)
        $('#movie-rating').text(
            result.rating
            +
            ' '
            +
            'از'
            +
            ' '
            +
            10
            +
            ' '
            +
            'با'
            +
            ' '
            +
            result.rating_count
            +
            ' '
            +
            'رای'
        )
    }
})
