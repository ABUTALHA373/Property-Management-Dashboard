document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-button');
    const themeSun = document.getElementById('theme-sun');
    const themeMoon = document.getElementById('theme-moon');

    // Check saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        // Apply saved theme
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        themeSun.classList.toggle('hidden', savedTheme === 'dark');
        themeMoon.classList.toggle('hidden', savedTheme !== 'dark');
    } else {
        // No saved theme, apply system preference
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', systemPrefersDark);
        themeSun.classList.toggle('hidden', systemPrefersDark);
        themeMoon.classList.toggle('hidden', !systemPrefersDark);
    }

    // Toggle theme on button click
    themeButton.addEventListener('click', () => {
        const isDarkMode = document.documentElement.classList.toggle('dark');
        themeSun.classList.toggle('hidden', isDarkMode);
        themeMoon.classList.toggle('hidden', !isDarkMode);

        // Save theme preference in localStorage
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
});



//store data in local Storage
const dataProperties = [
    {
        id: 1,
        name: "Lakeview Heights",
        check_in_date: "2024-11-20",
        check_out_date: "2024-11-25",
        booking_price: 700.0,
        reviews: [5, 4, 4, 5, 5],
        status: "checked-in",
    },
    {
        id: 2,
        name: "Bayview Residency",
        check_in_date: "2024-11-18",
        check_out_date: "2024-11-22",
        booking_price: 650.0,
        reviews: [4, 4, 5],
        status: "checked-out",
    },
    {
        id: 3,
        name: "Hilltop Haven",
        check_in_date: "2024-11-15",
        check_out_date: "2024-11-19",
        booking_price: 580.0,
        reviews: [5, 3, 4],
        status: "checked-in",
    },
    {
        id: 4,
        name: "Green Meadows",
        check_in_date: "2024-11-10",
        check_out_date: "2024-11-15",
        booking_price: 720.0,
        reviews: [5, 5, 4, 5],
        status: "checked-in",
    },
    {
        id: 5,
        name: "Riverfront Bliss",
        check_in_date: "2024-11-12",
        check_out_date: "2024-11-16",
        booking_price: 450.0,
        reviews: [4, 3],
        status: "checked-out",
    },
    {
        id: 6,
        name: "Urban Nest",
        check_in_date: "2024-11-05",
        check_out_date: "2024-11-10",
        booking_price: 680.0,
        reviews: [5, 4, 5, 4],
        status: "checked-out",
    },
    {
        id: 7,
        name: "Sundarbans Retreat",
        check_in_date: "2024-11-08",
        check_out_date: "2024-11-13",
        booking_price: 400.0,
        reviews: [3, 4, 5],
        status: "checked-in",
    },
    {
        id: 8,
        name: "Silk City Villas",
        check_in_date: "2024-11-22",
        check_out_date: "2024-11-26",
        booking_price: 620.0,
        reviews: [5, 4, 4],
        status: "checked-in",
    },
    {
        id: 9,
        name: "Tea Garden Suites",
        check_in_date: "2024-11-09",
        check_out_date: "2024-11-15",
        booking_price: 500.0,
        reviews: [4, 5, 5],
        status: "checked-in",
    },
    {
        id: 10,
        name: "Golden Sands",
        check_in_date: "2024-11-15",
        check_out_date: "2024-11-20",
        booking_price: 480.0,
        reviews: [4, 4, 4],
        status: "checked-out",
    },
];


localStorage.setItem("dataProperties", JSON.stringify(dataProperties));


