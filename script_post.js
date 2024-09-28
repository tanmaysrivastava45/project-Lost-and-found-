document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const itemName = document.getElementById('itemName').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const lostDate = document.getElementById('lostDate').value;
    const contactInfo = document.getElementById('contactInfo').value;

    // Create an item object
    const lostItem = {
        itemName: itemName,
        itemDescription: itemDescription,
        lostDate: lostDate,
        contactInfo: contactInfo
    };

    // Get existing items from localStorage
    let lostItems = JSON.parse(localStorage.getItem('lostItems')) || [];

    // Add new item to the array
    lostItems.push(lostItem);

    // Save the updated list back to localStorage
    localStorage.setItem('lostItems', JSON.stringify(lostItems));

    // Clear the form
    document.getElementById('postForm').reset();

    alert('Lost item posted successfully!');
});
