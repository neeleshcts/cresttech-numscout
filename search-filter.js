// search bar
const items = document.querySelectorAll('#search-container-body .container-item');

document.getElementById('search').addEventListener('input', function (e) {
    const searchTerm = e.target.value.trim().toLowerCase();    

  const searchedItems = Array.from(items).filter(item => {
    const text = item.querySelector('.content-box p').textContent.toLowerCase();
    return text.includes(searchTerm); // return isMatch, not item
  });

  const container = document.getElementById('search-container-body');

  if(searchedItems.length === 0){
    container.style.display = 'none';
  }

  else{
      container.style.display = 'block';
      container.innerHTML = ''; // clear current items
      searchedItems.forEach(item => container.appendChild(item)); // add back only matches
  }
});