function filterVideos() {
  const selectedCategory = document.getElementById('categories').value;
  const categories = document.querySelectorAll('.category');

  categories.forEach(category => {
    if (selectedCategory === 'All' || category.getAttribute('data-category') === selectedCategory) {
      category.classList.add('active');
    } else {
      category.classList.remove('active');
    }
  });
}

document.getElementById('categories').addEventListener('change', () => {
  filterVideos();
})

document.addEventListener('DOMContentLoaded', () => {
  filterVideos();
});
