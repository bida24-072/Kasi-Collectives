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
    const strip = document.getElementById('services-sc
