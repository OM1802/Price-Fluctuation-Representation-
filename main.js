document.addEventListener("DOMContentLoaded", function () {
    // Dummy data for testing (replace with actual data)
    const sampleData = [
        { date: "2024-01-01", price: 100 },
        { date: "2024-01-02", price: 120 },
        { date: "2024-01-03", price: 90 },
        { date: "2024-01-04", price: 110 },
        { date: "2024-01-05", price: 95 },
    ];

    // Extract dates and prices for Chart.js
    const dates = sampleData.map(dataPoint => dataPoint.date);
    const prices = sampleData.map(dataPoint => dataPoint.price);

    // Chart.js configuration
    const ctx = document.getElementById('priceChart').getContext('2d');
    const priceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Price Fluctuation',
                borderColor: 'rgb(75, 192, 192)',
                data: prices,
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                },
                y: {
                    min: 0
                    // You can customize the y-axis as needed
                }
            }
        }
    });

    // Update info section (replace with actual data)
    const infoSection = document.getElementById('infoSection');
    infoSection.innerHTML = "<p>Product: XYZ</p><p>Monitored Period: Jan 1, 2024 - Jan 5, 2024</p>";
});
