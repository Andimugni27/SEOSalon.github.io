document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsList = document.getElementById('reviewsList');

    // Temporary storage for reviews
    const reviews = [];

    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const rating = document.getElementById('rating').value;
        const comment = document.getElementById('comment').value;

        const review = { username, rating, comment };
        reviews.push(review);

        addReviewToDOM(review);
        reviewForm.reset();
    });

    function addReviewToDOM(review) {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        reviewItem.innerHTML = `
            <h3>${review.username}</h3>
            <p>Rating: ${review.rating} Stars</p>
            <p>${review.comment}</p>
        `;
        reviewsList.appendChild(reviewItem);
    }
});
