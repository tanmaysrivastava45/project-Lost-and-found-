// Load lost items from localStorage
const lostItems = JSON.parse(localStorage.getItem('lostItems')) || [];
const itemsContainer = document.getElementById('itemsList');

if (lostItems.length > 0) {
    lostItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
            <h3>${item.itemName}</h3>
            <p><strong>Description:</strong> ${item.itemDescription}</p>
            <p><strong>Lost Date:</strong> ${item.lostDate}</p>
            <p><strong>Contact Info:</strong> ${item.contactInfo}</p>
            <hr>
        `;
        itemsContainer.appendChild(itemElement);
    });
} else {
    itemsContainer.innerHTML = '<p>No lost items reported yet.</p>';
}
