interface subPrice {
    subDescription: string;
    subPrice: string;
}

interface Dish {
    // title: string;
    dishNumber: string
    dishName: string;
    subPrices: subPrice[];
    dishDescription: string;
    subDishDescription: string[];
    imageURL: string;
}

interface Category {
    dishTitle: string;
    dishes: Dish[];
    imageURL: string; 
}

export interface Menu {
    dishCategory: string;
    dishMenu: Category[]
}

export const metaMenu: Menu[] = [
    {dishCategory: "LalunaSpa",
     dishMenu:   [
        {
            dishTitle: "SPECIAL OFFER",
            dishes: [
                {dishNumber: "", dishName: "", subPrices: [], dishDescription: "Get a 20% discount (not applicable for packages) or enjoy a complimentary one-way transfer to Da Nang airport for any treatment, facial, or foot service. (Offer applies to a minimum of 2 guests with services from 60 minutes.)", subDishDescription:[], imageURL:"foodsample.jpg"},
            ],
            imageURL:"intro.jpg"
        },
        {
            dishTitle: "LALUNA SIGNATURE PACKAGES",
            dishes: [
                {dishNumber: "", dishName: "EMBRACE RELAXATION", subPrices: [{subDescription: "1 Hour 30 Mins", subPrice: "1,185,000 VND"}], dishDescription: "A combination of Hot Stone full body massage using warm smooth stones followed by a refreshing facial pampering", subDishDescription:["Hot Stone Body Massage 60 Mins","Refresh Facial 30 Mins"], imageURL:"foodsample.jpg"},
                {dishNumber: "", dishName: "INDULGE IN LUXURY", subPrices: [{subDescription: "90 Mins", subPrice: "950,000 VND"}], dishDescription: "Hot Stone full body massage combined with a soothing foot scrub", subDishDescription:["Hot Stone Body Massage 60 Mins", "Foot Care 30 Mins"], imageURL:"url.com"},
                {dishNumber: "", dishName: "PREMIUM WELLNESS PACKAGES", subPrices: [{subDescription: "2 Hour 15 Mins", subPrice: "1,530,000 VND"}], dishDescription: "This exquisite face and foot ritual is a journey of renewal, gently stimulating energy flow, releasing toxins, and toning facial muscles. As you surrender to the experience, a profound sense of relaxation washes over you, soothing every inch of your being. From head to toe, you’ll feel deeply revitalized, as if the stresses of daily life have melted away. A truly perfect escape to restore your mind, body, and soul.", subDishDescription:["Lifting Feather 45 Mins", "Hot Stone Massage 90 Mins"], imageURL:"url.com"},
                {dishNumber: "", dishName: "YOUR PATH TO SERENITY SPA DAY PACKAGE", subPrices: [{subDescription: "4 Hours 5 Mins", subPrice: "2,600,000 VND"}], dishDescription: "Indulge in an unforgettable half-day experience with the Blissful Laluna Spa Package, featuring five exquisite treatments designed to rejuvenate your mind, body, and soul. Begin your journey with a choice of a soothing sauna or a refreshing herbal bath. The sauna works wonders in relieving stress, easing muscle tension, cleansing the skin, and enhancing cardiovascular health, while the herbal bath, rich in local ingredients, promotes better circulation, restful sleep, and improved breathing. Next, immerse yourself in a Relaxation Treatment, where gentle massage and aromatic essential oils melt away tension, leaving you deeply relaxed. Follow this with the signature Laluna Body Scrub, a luxurious exfoliation that refreshes and revitalizes your skin. Finally, a nourishing face mask is applied, restoring moisture and leaving your complexion radiant and smooth. The Blissful Laluna Spa Day package is the perfect escape, offering a harmonious blend of relaxation and rejuvenation for a truly transformative experience.", subDishDescription:["Laluna Spa Body Scrub 45 Mins", "Relaxation Treatment 90 Mins", "Silky Beauty 60 Mins", "Foot care 30 Mins", "Sauna 20 Mins"], imageURL:"url.com"}
            ],
            imageURL:"spa1.png"
        },
        {
            dishTitle: "RELAXING MOMENT",
            dishes: [
                {dishNumber: "", dishName: "", subPrices: [], dishDescription: "If your time is limited, we have a number of short treatments to help you make the most of your time. Select the most suitable treatment(s) for you: ", subDishDescription:["Head, neck, back & shoulders massage 45 Mins:    480,000", "Hand, head, neck & shoulders massage 30 Mins:   350,000", "Foot Rest massage 30 Mins:  350,000"], imageURL:"url.com"}
            ],
            imageURL:"spa2.png"
        },
        {
            dishTitle: "FACIAL",
            dishes: [
                {dishNumber: "", dishName: "BASIC FACIAL CARE", subPrices: [{subDescription: "45 Mins", subPrice: "490,000 VND"}], dishDescription: "A rejuvenating facial that begins with a thorough cleanse and gentle exfoliation, followed by a calming facial massage to relax and restore. The experience concludes with a luxurious moisturizing treatment, using the finest skincare products to leave your skin feeling refreshed, deeply nourished, and radiant.", subDishDescription:[], imageURL:"foodsample.jpg"},
                {dishNumber: "", dishName: "NATURAL SKIN DREAM", subPrices: [{subDescription: "60 Mins", subPrice: "650,000 VND"}], dishDescription: "This facial is truly an experience in itself. Featuring a natural yogurt-based mask, it cleanses, soothes, nourishes, and balances the skin in one harmonious treatment. The result is a complexion that feels deeply refreshed, radiant, and glowing with vitality.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "SILKY BEAUTY", subPrices: [{subDescription: "60 Mins", subPrice: "650,000 VND"}], dishDescription: "The experience begins with a gentle skin cleanse and soothing massage, followed by the application of a thin, luxurious cream mask. As the mask works its magic, a calming head massage stimulates the nerves and blood flow beneath the skin, easing tension and promoting relaxation. Once the mask is removed, your face is moisturized, leaving your skin soft, silky, and beautifully smooth.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "LIFTING FEATHER", subPrices: [{subDescription: "60 Mins", subPrice: "650,000 VND"}], dishDescription: "Indulge in total relaxation with a traditional Vietnamese manual facelift technique, expertly designed to lift and rejuvenate. A nourishing clay mask is then applied, drawing out excess oil while locking in moisture and hydration. This bespoke facial treatment leaves your skin feeling effortlessly light, refreshed, and renewed, as if lifted by a gentle breeze.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "ANTI-AGING FACIAL TREATMENT WITH COLLAGEN MASK", subPrices: [{subDescription: "75 Mins", subPrice: "750,000 VND"}], dishDescription: "The intensive collagen mask penetrates deeply into the skin, helping to diminish the appearance of wrinkles while promoting a smoother, firmer, and more youthful complexion.", subDishDescription:[], imageURL:"url.com"}
            ],
            imageURL:"spa3.png"
        },
        {
            dishTitle: "BODY MASSAGE",
            dishes: [
                {dishNumber: "", dishName: "RELAXATION TREATMENT", subPrices: [{subDescription: "60 Mins", subPrice: "580,000 VND"}, {subDescription: "90 Mins", subPrice: "870,000 VND"}], dishDescription: "Through the application of gentle, soothing massage techniques and locally sourced aromatic oils, this treatment is designed to melt away tension, ease swollen or aching joints, and restore emotional balance, leaving you feeling deeply relaxed and harmonized.", subDishDescription:[], imageURL:"foodsample.jpg"},
                {dishNumber: "", dishName: "TENSION RELIEF THERAPY", subPrices: [{subDescription: "60 Mins", subPrice: "630,000 VND"}, {subDescription: "90 Mins", subPrice: "870,000 VND"}], dishDescription: "Through the use of deep, invigorating massage techniques and aromatic essential oils, this treatment focuses on key muscle groups to alleviate aches and pains. The smooth, rhythmic movements not only enhance circulation but also promote an overall sense of well-being and balance, leaving you feeling revitalized and harmonized.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "TRADITIONAL THAI MASSAGE", subPrices: [{subDescription: "60 Mins", subPrice: "695,000 VND"}, {subDescription: "90 Mins", subPrice: "900,000 VND"}], dishDescription: "Originating from Thailand, this therapy is a time-honored healing practice that blends acupressure, gentle stretching, rhythmic pressure on the muscles, and yoga-inspired positions. The result is a revitalizing surge of energy that leaves you feeling refreshed and rejuvenated.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "VIETNAMESE BAMBOO BODY MASSAGE", subPrices: [{subDescription: "75 Mins", subPrice: "825,000 VND"}, {subDescription: "90 Mins", subPrice: "1,045,000 VND"}], dishDescription: "The Vietnamese Bamboo Body Massage is a harmonious blend of bamboo and traditional massage techniques. The therapist uses bamboo sticks, warmed to the perfect temperature, to gently work into the muscle tissue and joints. Through techniques such as rolling, tapping, and various directional movements, this treatment helps alleviate muscle tension, reduce pain, and address a range of health concerns. The therapy also promotes deep relaxation, leaving you feeling both rejuvenated and at ease.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "HOT STONE MASSAGE", subPrices: [{subDescription: "75 Mins", subPrice: "825,000 VND"}, {subDescription: "90 Mins", subPrice: "1,045,000 VND"}], dishDescription: "Hot stone massage gently dissolves muscle tension and stress by placing warm, smooth stones on key areas of the body. The heat from the stones penetrates deeply into the muscles, promoting relaxation and a soothing sense of well-being, leaving you calm, centered, and fully at ease.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "LALUNA HOT HERBAL THERAPY", subPrices: [{subDescription: "75 Mins", subPrice: "750,000 VND"}, {subDescription: "90 Mins", subPrice: "945,000 VND"}], dishDescription: "The therapist begins the treatment by applying essential oils to warm the body, creating a soothing and calming effect. Next, heated herbal pouches are gently massaged onto the skin, helping to open the pores and allow the heat to penetrate deep into the muscles, providing relief from pain and promoting overall relaxation.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "PREGNANCY MASSAGE", subPrices: [{subDescription: "60 Mins", subPrice: "580,000 VND"}, {subDescription: "90 Mins", subPrice: "870,000 VND"}], dishDescription: "This treatment offers not only deep relaxation but also a range of benefits during pregnancy. It helps to relieve stress, improve blood circulation, and reduce common discomforts such as insomnia, edema, headaches, and high blood pressure. The result is a sense of refreshment and comfort, leaving you feeling rejuvenated and at ease.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "FOUR-HANDS MASSAGE BY LALUNA SPA", subPrices: [{subDescription: "75 Mins", subPrice: "1,390,000 VND"}], dishDescription: "A truly luxurious and relaxing experience for your body, this treatment involves two therapists working in perfect harmony with synchronized movements. Their expertly choreographed touch gently glides over the skin, guiding you into a state of deep relaxation. As tension melts away, your body enters a state of optimal rest, releasing muscle aches, improving circulation, and alleviating stress and anxiety. The Laluna Spa team has perfected this technique, making our signature four-hands massage a uniquely extraordinary experience.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "FOOT REFLEXOLOGY", subPrices: [{subDescription: "60 Mins", subPrice: "520,000 VND"}], dishDescription: "Experience complete healing and well-being as your therapist targets the pressure points on your feet with a deep tissue massage using aromatic essential oils. This treatment draws on the principles of Reflexology, promoting balance and relaxation throughout the body. As the massage unfolds, the oils nourish your skin, leaving it feeling soft, smooth, and rejuvenated.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "FOOT REMEDY", subPrices: [{subDescription: "60 Mins", subPrice: "555,000 VND"}], dishDescription: "A soothing foot massage with the therapeutic warmth of hot stones applied to your legs and feet. The feet, resilient to heat, respond beautifully to the combination of pressure massage and the gentle warmth of the stones, inducing deep relaxation. This treatment helps to restore balance, rejuvenate the body, and provide a sense of calm and renewal.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "TOTAL FOOT TREATMENT", subPrices: [{subDescription: "75 Mins", subPrice: "650,000 VND"}], dishDescription: "The ultimate indulgence and complete care for your feet, this treatment combines a focused foot massage on key pressure points with both dry and wet scrubs to exfoliate and remove dead skin, leaving your feet feeling soft and silky smooth. It’s a revitalizing 'facelift' for your feet, restoring freshness and vitality with every step.", subDishDescription:[], imageURL:"url.com"},

            ],
            imageURL:"spa4.jpg"
        },
        {
            dishTitle: "BODY SKIN CARE",
            dishes: [
                {dishNumber: "", dishName: "LALUNA SPA BODY SCRUB", subPrices: [{subDescription: "60 Mins", subPrice: "590,000 VND"}], dishDescription: "Laluna Spa's moisturizing body scrub offers a deeply cleansing and exfoliating experience. It effectively removes dead skin cells while encouraging the growth of healthy new ones. Enriched with mineral sea salt and olive oil, this treatment eliminates impurities and stimulates circulation, leaving your skin feeling refreshed, smooth, and revitalized.", subDishDescription:[], imageURL:"foodsample.jpg"},
                {dishNumber: "", dishName: "HONEY AND SESAME BODY SCRUB", subPrices: [{subDescription: "60 Mins", subPrice: "590,000 VND"}], dishDescription: "For a soothing path to soft, radiant skin, this body scrub is the perfect choice. It gently exfoliates the buildup of dead skin cells that can dull your complexion, while boosting circulation and leaving your skin incredibly smooth. The nourishing honey works to hydrate and moisturize, enhancing your skin’s natural glow. The treatment concludes with a refreshing shower, followed by a relaxing mini massage and the application of an organic body moisturizer, ensuring your skin feels nourished and deeply cared for.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "COFFEE & ORANGE BODY SCRUB", subPrices: [{subDescription: "60 Mins", subPrice: "590,000 VND"}], dishDescription: "If the scent of fresh coffee makes your heart skip a beat, imagine the sensation when the rich fragrance envelops your body. This invigorating coffee scrub harnesses the natural acids in coffee to exfoliate dead skin cells and smooth away roughness, while the nourishing blend of rice and milk tones and rejuvenates tired skin. The treatment concludes with a refreshing shower, followed by a soothing mini massage and the application of an Organic Body Moisturizer, leaving your skin soft, hydrated, and revitalized.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "MUD & MILK BODY WRAP", subPrices: [{subDescription: "60 Mins", subPrice: "590,000 VND"}], dishDescription: "Harnessing the power of natural vitamins and minerals, this body wrap enhances the appearance and texture of your skin. It works to draw out toxins, while deeply hydrating, toning, and smoothing the skin, leaving you with a refreshed, rejuvenated glow.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "ALOVERA & YOGURT BODY WRAP", subPrices: [{subDescription: "60 Mins", subPrice: "590,000 VND"}], dishDescription: "Aloe vera, rich in amino acids, rejuvenates tired, dull skin, restoring its natural vibrancy. It is also the perfect remedy for sunburn, offering soothing relief and providing a comforting, cooling sensation to the skin.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "BOTANICAL BODY WRAP", subPrices: [{subDescription: "60 Mins", subPrice: "590,000 VND"}], dishDescription: "This luxurious body wrap, enriched with the natural goodness of honey, oatmeal, and fresh milk, delivers a deeply moisturizing treatment that nourishes and balances your skin, leaving it soft, smooth, and beautifully hydrated.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "EXTRA PAMPERING", subPrices: [{subDescription: "SAUNA 30 Mins", subPrice: "300,000 VND"}], dishDescription: "Availability of service depends on the property.", subDishDescription:[], imageURL:"url.com"},
            ],
            imageURL:"spa5.png"
        },
        {
            dishTitle: "EXPERIENCE THE BEST OF LALUNA SPA - SPECIAL PACKAGES",
            dishes: [
                {dishNumber: "", dishName: "FOREST PACKAGE", subPrices: [{subDescription: "2 Hrs", subPrice: "1,220,000 VND"}], dishDescription: "Vietnam's lush, fertile forests are rich in natural, organic healing ingredients, many of which are thoughtfully incorporated into Laluna Spa's treatments. The Forest Package offers a rejuvenating head-to-toe experience, featuring a full-body scrub, gentle care for your feet, and a calming facial, leaving you refreshed, revitalized, and deeply nourished.", subDishDescription:["Laluna Spa Body Scrub 45 Mins", "Foot Rest Massage 30 Mins", "Basic Facial Care 45 Mins"], imageURL:"foodsample.jpg"},
                {dishNumber: "", dishName: "OCEAN PACKAGE", subPrices: [{subDescription: "2 Hrs 45 Mins", subPrice: "1,590,000 VND"}], dishDescription: "The oceans are rich in natural minerals and trace elements that help detoxify the body, oxygenate cells, hydrate, and revitalize the skin, leaving it firm and refreshed. A mineral-rich sea salt scrub deeply cleanses and nourishes, while a full-body massage with salt stones infuses essential minerals into the skin. The experience is completed with a soothing all-in-one facial treatment, leaving you feeling rejuvenated from head to toe.", subDishDescription:["Laluna Spa Body Scrub 45 Mins", "Laluna Herbal Hot Therapy 60 Mins", "Natural Skin Dream 60 Mins"], imageURL:"url.com"},
                {dishNumber: "", dishName: "EARTH PACKAGE", subPrices: [{subDescription: "3 Hrs 20 Mins", subPrice: "2,040,000 VND"}], dishDescription: "This package harnesses the finest gifts the earth offers, including healing herbs, essential oils from trees and plants, and mineral-rich mud products. The combination of four rejuvenating treatments will leave you deeply relaxed, cleansed, and your skin feeling incredibly soft and smooth.", subDishDescription:["Tension Relief Therapy 90 Mins", "Coffee & Orange Scrub 45 Mins", "Mud & Milk Body Wrap 45 Mins", "Sauna 20 Mins"], imageURL:"url.com"},
                {dishNumber: "", dishName: "SKY PACKAGE", subPrices: [{subDescription: "3 Hrs 45 Mins", subPrice: "2,100,000 VND"}], dishDescription: "'Sky' is our creative way of describing this treatment that will elevate you to new heights of relaxation and bliss. This ultimate pampering experience includes a full-body massage, complete foot therapy, and a soothing remedy for oily skin, leaving you feeling like the sky's the limit. After indulging in this heavenly experience at Laluna Spa, you'll feel completely refreshed and rejuvenated.", subDishDescription:["Laluna Spa Body Scrub 45 Mins","Relaxation treatment 90 Mins","Lifting Feather 45 Mins","Manicure or Pedicure Gel Color 45 Mins"], imageURL:"url.com"},
           ],
            imageURL:"spa6.png"
        },
        {
            dishTitle: "NAIL SERVICE",
            dishes: [
                {dishNumber: "", dishName: "MANICURE", subPrices: [], dishDescription: "", subDishDescription:["Cuticle Work for Hand without Nail Color 30 Mins: 170,000 VND", "Nail Lacquer for Fingers: 150,000 VND", "Basic Color 45 Mins: 250,000 VND", "Basic Gel Color 45 Mins: 370,000 VND","Laluna Manicure 60 Mins: 370,000 VND","Manicure for Children 30 Mins: 150,000 VND"], imageURL:"foodsample.jpg"},
                {dishNumber: "", dishName: "PEDICURE", subPrices: [], dishDescription: "", subDishDescription:["Cuticle Work for Feet without Nail Color 30 Mins: 170,000 VND", "Nail Lacquer for Toes: 150,000 VND", "Basic Color 45 Mins: 250,000 VND","Basic Gel Color 45 Mins: 370,000 VND","Laluna Pedicure 60 Mins: 370,000 VND","Pedicure for Children 30 Mins: 150,000 VND"], imageURL:"foodsample.jpg"},
                {dishNumber: "", dishName: "EXTRA", subPrices: [], dishDescription: "", subDishDescription:["Take Off Gel Polish (l5-30 Mins): 170,000 VND","Heel Scrub + Nutrition: 200,000 VND","Art: 110,000 VND","Special Design: 550,000-900,000 VND"], imageURL:"foodsample.jpg"},
                {dishNumber: "", dishName: "HAIR WASHING", subPrices: [], dishDescription: "", subDishDescription:["Hair Washing + Neck & Shoulder Head Massage 45 Mins: 450,000 VND", "Hair Washing + Facial Cleansing 45 Mins: 450,000 VND"], imageURL:"foodsample.jpg"},
            ],
            imageURL:"spa7.png"
        },
    ]
    }
]