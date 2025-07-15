import "./home.css";

export function handleHomeDOM() {

    const contentDiv = document.querySelector("#content");

    const introductionDiv = document.createElement("div");
    introductionDiv.classList.add("middle-content");
    contentDiv.appendChild(introductionDiv);

    const introductionTitle = document.createElement("h1");
    introductionTitle.textContent = "Welcome at Toms' Bakery";
    introductionDiv.appendChild(introductionTitle);

    const introductionFirstParagraph = document.createElement("p");
    introductionFirstParagraph.textContent = "Welcome to the best Bakery in Alkmaar. We specalize in handcrafted breads, cakes, and pastries made with love and the finest ingredients.";
    introductionDiv.appendChild(introductionFirstParagraph);

    const introductionSecondParagraph = document.createElement("p");
    introductionSecondParagraph.textContent = "Whether you're craving a buttery corissant, a fresh sourdough loaf, or a custom cake for a special occasion, our kitchen is always baking up something special.";
    introductionDiv.appendChild(introductionSecondParagraph);

    const introductionThirdParagraph = document.createElement("p");
    introductionThirdParagraph.textContent = "We believe in slow baking, real ingredients, and bringing people together over the simple joy of something sweet (or savory). Come in, take a deep breath, and let the aroma of freshly baked goodness make your day.";
    introductionDiv.appendChild(introductionThirdParagraph);

    const bakeryInfoDiv = document.createElement('div');
    bakeryInfoDiv.classList.add("bakery-info");
    contentDiv.appendChild(bakeryInfoDiv);

    const table = document.createElement('table');
    bakeryInfoDiv.appendChild(table);

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const th = document.createElement('th');
    th.textContent = 'Hours';
    headerRow.appendChild(th);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    const days = [
    ['Monday:', '8:30 - 18:00'],
    ['Tuesday:', '8:30 - 18:00'],
    ['Wednesday:', '8:30 - 18:00'],
    ['Thursday:', '8:30 - 18:00'],
    ['Friday', '8:30 - 16:00'],
    ['Saturday:', '9:30 - 16:00'],
    ['Sunday:', 'Closed'],
    ];

    days.forEach(([day, hours]) => {
        const row = document.createElement('tr');
      
        const dayCell = document.createElement('td');
        dayCell.textContent = day;
      
        const hoursCell = document.createElement('td');
        hoursCell.textContent = hours;
      
        row.appendChild(dayCell);
        row.appendChild(hoursCell);
        tbody.appendChild(row);
    });
      
    table.appendChild(tbody);

    const visitDiv = document.createElement('div');

    const visitHeading = document.createElement('h4');
    visitHeading.textContent = 'Visit Us';

    const address1 = document.createElement('p');
    address1.textContent = 'Streetname 123';

    const address2 = document.createElement('p');
    address2.textContent = '1234 AB Alkmaar';

    const phone = document.createElement('p');
    phone.textContent = 'Tel: 0612345678';

    visitDiv.appendChild(visitHeading);
    visitDiv.appendChild(address1);
    visitDiv.appendChild(address2);
    visitDiv.appendChild(phone);

    bakeryInfoDiv.appendChild(visitDiv);

    const contactDiv = document.createElement('div');

    const contactHeading = document.createElement('h4');
    contactHeading.textContent = 'Contact';

    const contactParagraph = document.createElement('p');
    contactParagraph.textContent = 'Do you have any questions about our bakery in Alkmaar or about our products? Feel free to contact us at 0612345678 or send an email to info@tomsbakery.com. You are, of course, also very welcome to visit us at our bakery!';

    contactDiv.appendChild(contactHeading);
    contactDiv.appendChild(contactParagraph);

    contentDiv.appendChild(contactDiv);
};