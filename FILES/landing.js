// Define Base URL fo(r API requests
document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = "http://localhost:5000/events";

    // function to fetch event details and update UI
    const fechAndUpdateUi = async(eventsId) => {
        try{
            const response = await fetch(`${baseUrl}/events/${eventsId}`);
            if (!response.ok) {
                throw new Error("Failed to fetch event details");
            }
            const eventData = await response.json();
            const {
                id,
                name,
                venue,
                price,
                description,
                poster,
            } = eventData;

            // Calculate available tickets
            const availableTickets = capacity - ticketSold;

            //  Update DOM elements with event details
            document.getElementsByTagName("img").src = poster;
            

        }
    }
})



const button = document.querySelector("button");

button.addEventListener("click",function pay() {
    fetch
})