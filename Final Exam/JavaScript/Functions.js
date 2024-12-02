function showDetails(movieId) {
    document.querySelectorAll('.movie-details').forEach(detail => {
        detail.style.display = 'none';
    });
    document.getElementById(movieId).style.display = 'block';
}

function hideDetails() {
    document.querySelectorAll('.movie-details').forEach(detail => {
        detail.style.display = 'none';
    });
}