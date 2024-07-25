// index.js
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Define a route to fetch a random image
app.get('/api/image/random', async (req, res) => {
    try {
        // Fetch a random image from a placeholder image API (Picsum)
        const response = await axios.get('https://picsum.photos/200/300');
        const imageUrl = response.request.res.responseUrl; // Get the URL of the random image

        // Respond with the image URL
        res.json({
            imageUrl: imageUrl
        });
    } catch (error) {
        console.error('Error fetching random image:', error);
        res.status(500).json({ error: 'Failed to fetch random image' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});