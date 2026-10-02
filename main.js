/* ============================================
   SERVICE DATA
============================================ */
const services = [
    {
        id: 1,
        num: "01",
        name: "Barbering",
        desc: "Sharp fades, beard sculpting, hot towel shaves, and traditional cuts — from classic to cutting-edge.",
        from: "From P80",
        icon: "fa-scissors",
        items: [
            { name: "Classic Haircut", desc: "Scissor or clipper cut with styling", price: 80 },
            { name: "Skin Fade", desc: "Precision fade down to the skin", price: 120 },
            { name: "Beard Trim & Shape", desc: "Sculpted beard with hot towel", price: 60 },
            { name: "Hot Towel Shave", desc: "Traditional straight-razor shave", price: 100 },
            { name: "Father & Son Cut", desc: "Package deal for two cuts", price: 150 }
        ]
    },
    {
        id: 2,
        num: "02",
        name: "Nail Tech",
        desc: "Manicures, pedicures, gel extensions, and intricate nail art crafted by our award-winning nail artists.",
        from: "From P150",
        icon: "fa-hand-sparkles",
        items: [
            { name: "Classic Manicure", desc: "Shape, cuticle care, and polish", price: 150 },
            { name: "Gel Manicure", desc: "Long-lasting gel polish application", price: 220 },
            { name: "Acrylic Extensions", desc: "Full set with shaping and polish", price: 350 },
            { name: "Nail Art (Per Nail)", desc: "Custom design on each nail", price: 40 },
            { name: "Luxury Pedicure", desc: "Soak, scrub, massage, and polish", price: 280 }
        ]
    },
    {
        id: 3,
        num: "03",
        name: "Hairstyling",
        desc: "Braids, weaves, silk presses, colour treatments, and cutting-edge styling for every hair type.",
        from: "From P200",
        icon: "fa-wind",
        items: [
            { name: "Box Braids", desc: "Traditional braids, any length", price: 350 },
            { name: "Knotless Braids", desc: "Seamless, lightweight braiding", price: 500 },
            { name: "Silk Press", desc: "Sleek blowout with heat protection", price: 250 },
            { name: "Sew-In Weave", desc: "Full install with styling", price: 450 },
            { name: "Hair Colour (Full)", desc: "Single-process colour with gloss", price: 600 }
        ]
    },
    {
        id: 4,
        num: "04",
        name: "Tattoos",
        desc: "Custom tattoos, cover-ups, and traditional designs by our resident tattoo artists.",
        from: "From P400",
        icon: "fa-pen-nib",
        items: [
            { name: "Small Tattoo", desc: "Up to 5cm — minimal detail", price: 400 },
            { name: "Medium Tattoo", desc: "5-15cm — moderate detail", price: 800 },
            { name: "Large Tattoo", desc: "15cm+ — full detail (hourly)", price: 1000 },
            { name: "Cover-Up", desc: "Design consultation included", price: 900 },
            { name: "Tattoo Touch-Up", desc: "Free within 3 months of original", price: 0 }
        ]
    },
    {
        id: 5,
        num: "05",
        name: "Piercing",
        desc: "Safe, sterile piercings with premium jewellery. Ears, nose, navel, and more.",
        from: "From P120",
        icon: "fa-gem",
        items: [
            { name: "Ear Piercing (Single)", desc: "Includes basic stud", price: 120 },
            { name: "Double Ear Piercing", desc: "Two piercings, both ears", price: 200 },
            { name: "Nose Piercing", desc: "Includes stud jewellery", price: 180 },
            { name: "Navel Piercing", desc: "Includes curved barbell", price: 250 },
            { name: "Jewellery Upgrade", desc: "Premium titanium or gold", price: 100 }
        ]
    },
    {
        id: 6,
        num: "06",
        name: "Makeup",
        desc: "Bridal, editorial, and everyday makeup application for all skin tones and occasions.",
        from: "From P350",
        icon: "fa-paint-brush",
        items: [
            { name: "Everyday Makeup", desc: "Natural, polished look", price: 350 },
            { name: "Evening Glam", desc: "Full-glam for events", price: 500 },
            { name: "Bridal Makeup", desc: "Includes trial session", price: 900 },
            { name: "Bridal Party (Per Person)", desc: "Minimum 4 people", price: 400 },
            { name: "Makeup Lesson", desc: "One-on-one tutorial", price: 550 }
        ]
    }
];

/* ============================================
   TEAM DATA
============================================ */
const team = [
    {
        name: "Kagiso Molefe",
        role: "Master Barber",
        bio: "8 years shaping the sharpest fades in Gaborone.",
        img: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Neo Kgosi",
        role: "Nail Technician",
        bio: "Award-winning nail artist specialising in intricate designs.",
        img: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Tshepo Ramotswe",
        role: "Hairstylist",
        bio: "Expert in knotless braids and hair transformations.",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Amantle Sekgoma",
        role: "Tattoo Artist",
        bio: "Custom designs and traditional Motswana tattoo work.",
        img: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Lesego Bogatsu",
        role: "Makeup Artist",
        bio: "Bridal and editorial makeup for every skin tone.",
        img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Boitumelo Phiri",
        role: "Piercing Specialist",
        bio: "Safe, sterile piercings with premium jewellery.",
        img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
];

/* ============================================
   RENDER SERVICES STRIP (Home)
============================================ */
function renderServicesStrip() {
    const strip = document.getElementById('services-scroll');
    if (!strip) return;

    services.forEach(s => {
        strip.innerHTML += `
            <div class="service-card" onclick="window.location.href='services.html'">
                <div class="service-num">${s.num}</div>
                <h3>${s.name}</h3>
                <p>${s.desc}</p>
                <div class="service-from">${s.from}</div>
            </div>
        `;
    });
}

/* ============================================
   RENDER FEATURED TEAM (Home)
============================================ */
function renderFeaturedTeam() {
    const grid = document.getElementById('featured-team');
    if (!grid) return;

    team.slice(0, 3).forEach(m => {
        grid.innerHTML += `
            <div class="team-member">
                <div class="team-member-img" style="background-image: url('${m.img}');">
                    <div class="team-role-tag">${m.role}</div>
                </div>
                <div class="team-member-info">
                    <h3>${m.name}</h3>
                    <p>${m.bio}</p>
                    <div class="team-socials">
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-tiktok"></i>
                    </div>
                </div>
            </div>
        `;
    });
}

/* ============================================
   RENDER FULL TEAM (Team Page)
============================================ */
function renderFullTeam() {
    const grid = document.getElementById('all-team');
    if (!grid) return;

    team.forEach(m => {
        grid.innerHTML += `
            <div class="team-member">
                <div class="team-member-img" style="background-image: url('${m.img}');">
                    <div class="team-role-tag">${m.role}</div>
                </div>
                <div class="team-member-info">
                    <h3>${m.name}</h3>
                    <p>${m.bio}</p>
                    <div class="team-socials">
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-tiktok"></i>
                        <i class="fab fa-whatsapp"></i>
                    </div>
                </div>
            </div>
        `;
    });
}

/* ============================================
   RENDER SERVICES LIST (Services Page)
============================================ */
function renderServicesList() {
    const container = document.getElementById('services-list');
    if (!container) return;

    services.forEach(s => {
        const itemsHTML = s.items.map(item => `
            <div class="service-item">
                <div class="service-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.desc}</p>
                </div>
                <div class="service-item-price">${item.price === 0 ? 'FREE' : 'P' + item.price}</div>
            </div>
        `).join('');

        container.innerHTML += `
            <div class="service-category">
                <div class="service-category-header">
                    <i class="fas ${s.icon}"></i>
                    <h2>${s.name}</h2>
                </div>
                ${itemsHTML}
            </div>
        `;
    });
}

/* ============================================
   MASONRY GALLERY
============================================ */
function renderGallery() {
    const masonry = document.getElementById('masonry');
    if (!masonry) return;

    const images = [
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ];

    images.forEach(src => {
        masonry.innerHTML += `
            <div class="masonry-item">
                <img src="${src}" alt="Salon work">
            </div>
        `;
    });
}

/* ============================================
   BOOKING FORM
============================================ */
function submitBooking(e) {
    e.preventDefault();
    const name = document.getElementById('booking-name')?.value || 'Guest';
    const service = document.getElementById('booking-service')?.value || 'your chosen service';
    alert(`Thank you, ${name}! Your appointment request for ${service} has been received. We'll confirm via WhatsApp within 2 hours.`);
    e.target.reset();
}

function submitContact(e) {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you within 24 hours.");
    e.target.reset();
}

/* ============================================
   INITIALIZATION
============================================ */
document.addEventListener('DOMContentLoaded', () => {
    renderServicesStrip();
    renderFeaturedTeam();
    renderFullTeam();
    renderServicesList();
    renderGallery();

    // Set minimum date on booking inputs
    const today = new Date().toISOString().split('T')[0];
    document.querySelectorAll('input[type="date"]').forEach(input => {
        input.min = today;
    });
});
