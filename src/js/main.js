

function hiddenToggle(button, menu) {
    let toggleButton = document.getElementById(button);
    let toggleMenu = document.getElementById(menu);

    toggleButton.addEventListener('click', () => {
        toggleMenu.classList.toggle('hidden');
    })
    document.addEventListener('click', (event) => {
        // Check if the click is outside of the menu and the button
        if (!toggleMenu.contains(event.target) && !toggleButton.contains(event.target)) {
            toggleMenu.classList.add('hidden');
        }
    });
}

//button id, menu id
hiddenToggle("mobile-menu-button", "mobile-menu");
hiddenToggle("profile-button", "profile-menu");
hiddenToggle("notification-button", "notification-menu");

function modalToggle(buttonAdd, buttonCancel, menu) {
    let addButton = document.getElementById(buttonAdd);
    let cancelButton = document.getElementById(buttonCancel);
    let toggleMenu = document.getElementById(menu);

    addButton.addEventListener('click', () => {
        toggleMenu.classList.remove('hidden');
    })
    cancelButton.addEventListener('click', () => {
        toggleMenu.classList.add('hidden');
    })
    document.addEventListener('click', (event) => {
        if (toggleMenu.contains(event.target)) {
            toggleMenu.classList.add('hidden');
        }
    });
}
modalToggle("button-add-property", "cancel-modal-add-property", "modal-add-property");


//retrieve data from local storage and show
function showBodyProperty(selectedValue) {
    let properties = JSON.parse(localStorage.getItem('dataProperties')) || [];
    let filteredProperties = properties.filter(property => {
        //send all when all is selected
        if (selectedValue == 'all') {
            return properties
        } else {
            //check status and only return if match
            return property.status == selectedValue;
        }
    });
    let show = '';
    //calculate abv of all reviews
    for (let x of filteredProperties) {
        let review = 0;
        for (let a of x.reviews) {
            review += a;
        }
        if (review == 0 || null) {
            review = 'NA';
        } else {
            review = (review / x.reviews.length).toFixed(2)
        }

        show += `
        <tr class="border-b border-light-border dark:border-dark-border py-1 ">
            <td class="p-1 text-sm">${x.name}</td>
            <td class="p-1 text-sm">$${x.booking_price}</td>
            <td class="p-1 text-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-2 size-3 fill-primary">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
        </svg>${review}
            </td>
            <td class="p-1 text-sm">${x.status}</td>
            <td class="p-1 text-sm">${x.check_in_date}</td>
            <td class="p-1 text-sm">${x.check_out_date}</td>
        </tr>`
    }
    let bodyProperties = document.getElementById('body-properties');
    bodyProperties.innerHTML = show;
}
showBodyProperty("all");
let inputStatus = document.getElementById('properties-filter');
inputStatus.addEventListener('change', function () {
    let selectedValue = inputStatus.value;
    showBodyProperty(selectedValue);
})



//add new property
function addNewProperty() {

    const name = document.getElementById('property-name').value.trim();
    const check_in_date = document.getElementById('check-in-date').value.trim();
    const check_out_date = document.getElementById('check-out-date').value.trim();
    const booking_price = parseFloat(document.getElementById('booking-price').value.trim());
    const reviews = document.getElementById('reviews').value.trim().split(',').map(Number);
    const status = document.getElementById('status').value;

    if (!(typeof name === 'string') || !check_in_date || !check_out_date || (isNaN(booking_price) || booking_price === "") || !reviews.length || !status) {
        alert('Please fill all fields correctly!');
        return;
    }

    let storedData = JSON.parse(localStorage.getItem('dataProperties')) || [];
    let storeDataLen = storedData.length;
    const formData = {
        id: storeDataLen,
        name,
        check_in_date,
        check_out_date,
        booking_price,
        reviews,
        status
    };

    storedData.push(formData);
    document.querySelector('form').reset();
    localStorage.setItem('dataProperties', JSON.stringify(storedData));
    if (storeDataLen === storedData.length) {
        alert('Failed to add property. Please try again.');
    } else {
        alert('Property added successfully!');
        showBodyProperty("all");
    }

}
document.getElementById('add-new-property').addEventListener('click', function () {
    addNewProperty();
});

const localeEs = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'MM/dd/yyyy',
    timeFormat: 'hh:mm aa',
    firstDay: 0
};

new AirDatepicker('.date-picker-checkIN', {
    locale: localeEs,
    minDate: new Date()
});
new AirDatepicker('.date-picker-checkOUT', {
    locale: localeEs,
    minDate: new Date()
});