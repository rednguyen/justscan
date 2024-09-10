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
                {dishNumber: "", dishName: "", subPrices: [], dishDescription: "Get a 20% discount or enjoy a complimentary one-way transfer to Da Nang airport for any treatment, facial, or foot service. (Offer applies to a minimum of 2 guests with services from 60 minutes).", subDishDescription:[], imageURL:"foodsample.jpg"},
            ],
            imageURL:"intro.jpg"
        },
        {
            dishTitle: "LALUNA SIGNATURE PACKAGES",
            dishes: [
                {dishNumber: "", dishName: "EMBRACE RELAXATION", subPrices: [{subDescription: "1 Hour 30 Mins", subPrice: "1,185,000 VND"}], dishDescription: "A combination of Hot Stone full body massage using warm smooth stones followed by a refreshing facial pampering", subDishDescription:["Hot Stone Body Massage 60'","Refresh Facial 30'"], imageURL:"foodsample.jpg"},
                {dishNumber: "", dishName: "INDULGE IN LUXURY", subPrices: [{subDescription: "90 Mins", subPrice: "950,000 VND"}], dishDescription: "Hot Stone full body massage combined with a soothing foot scrub", subDishDescription:["Hot Stone Body Massage 60'", "Foot Care 30'"], imageURL:"url.com"},
                {dishNumber: "", dishName: "PREMIUM WELLNESS PACKAGES", subPrices: [{subDescription: "1 Hour 15 Mins", subPrice: "1,530,000 VND"}], dishDescription: "This luxurious face and foot ritual stimulates energy flow, eliminates toxins and tones facial muscles, also promotes a feeling of pure relaxation that extends from head to toe to feel deeply revitalized and soothed. A perfect getaway to escape and de-stress from daily life", subDishDescription:["Hot Stone Massage 90 Mins", "Lifting Feather 45 Mins"], imageURL:"url.com"},
                {dishNumber: "", dishName: "YOUR PATH TO SERENITY SPA DAY PACKAGE", subPrices: [{subDescription: "4 Hours 5 Mins", subPrice: "2,600,000 VND"}], dishDescription: "An unforgettable half day package consisting of five treatments created by Laluna Spa. Begin with a sauna or herbal bath. Saunas help relieve stress, relax aching muscles, cleanse the skin and improve cardiovascular performance, while a local herbal bath helps improve blood circulation, sleeping and breathing. This is followed by a Relaxation Treatment combining massage with essential oils. Next comes Laluna Spa Body Scrub to cleanse and exfoliate the skin concluding with a moisturizing face mask leaving your skin smooth and glowing. The Blissful Laluna Spa Day package is a wonderful treat for the mind, body and soul.", subDishDescription:['Laluna Spa Body Scrub 45', "Relaxation Treatment 90'", "Silky Beauty 60'", "Foot care 30'", "Sauna 20'"], imageURL:"url.com"}
            ],
            imageURL:"spa1.png"
        },
        {
            dishTitle: "RELAXING MOMENT",
            dishes: [
                {dishNumber: "", dishName: "", subPrices: [], dishDescription: "If your time is limited, we have a number of short treatments to help you make the most of your time. Select the most suitable treatment(s) for you: ", subDishDescription:["Head, neck, back & shoulders massage 45':    480,000", "Hand, head, neck & shoulders massage 30':   350,000", "Foot Rest massage 30':  350,000"], imageURL:"url.com"}
            ],
            imageURL:"spa2.png"
        },
        {
            dishTitle: "FACIAL",
            dishes: [
                {dishNumber: "", dishName: "BASIC FACIAL CARE", subPrices: [{subDescription: "45 Mins", subPrice: "490,000 VND"}], dishDescription: "A reviving facial which includes a deep cleanse, exfoliation, soothing facial massage and finally moisturizing treatment using the finest of skin care products leaving your skin refreshed and nourished.", subDishDescription:[], imageURL:"foodsample.jpg"},
                {dishNumber: "", dishName: "NATURAL SKIN DREAM", subPrices: [{subDescription: "60 Mins", subPrice: "650,000 VND"}], dishDescription: "This facial has been described as an experience in its own right. Using a natural yoghurt-based face mask, this all-in-once facial cleanses, soothes, nourishes and balances the skin leaving it radiant and glowing.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "SILKY BEAUTY", subPrices: [{subDescription: "60 Mins", subPrice: "650,000 VND"}], dishDescription: "Begin with a skin cleanse and massage followed by the application of a thin, rich, velvety cream mask. A head massage stimulates the nerves and blood vessels beneath the skin whilst also calming muscle tension. The cream mask is then removed and your face is moisturized leaving the skin soft and silky smooth.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "LIFTING FEATHER", subPrices: [{subDescription: "60 Mins", subPrice: "650,000 VND"}], dishDescription: "Experience complete relaxation with a Vietnamese manual facelift technique. The clay mask is then applied to draw out excess oil from the pores while retaining moisture and hydration. This facial treatment is tailored to make your skin feeling light as a feather.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "ANTI-AGING FACIAL TREATMENT WITH COLLAGEN MASK", subPrices: [{subDescription: "75 Mins", subPrice: "750,000 VND"}], dishDescription: "The extra collagen mask penetration into the skin resulting in wrinkle attenuation and a smoother, firmer, more youthful appearance.", subDishDescription:[], imageURL:"url.com"}
            ],
            imageURL:"spa3.png"
        },
        {
            dishTitle: "BODY MASSAGE",
            dishes: [
                {dishNumber: "", dishName: "RELAXATION TREATMENT", subPrices: [{subDescription: "60 Mins", subPrice: "580,000 VND"}, {subDescription: "90 Mins", subPrice: "870,000 VND"}], dishDescription: "Applying gentle soothing massage techniques with local aromatic oils, the aim is to remove overall tension, relieve swollen or painful joints and balance one's emotions.", subDishDescription:[], imageURL:"foodsample.jpg"},
                {dishNumber: "", dishName: "TENSION RELIEF THERAPY", subPrices: [{subDescription: "60 Mins", subPrice: "630,000 VND"}, {subDescription: "90 Mins", subPrice: "870,000 VND"}], dishDescription: "Using strong massage techniques combined with essential oils, this treatment targets key muscle groups to relieve aches and pains. Smooth flowing rhythmic movements also help improve circulation and stimulate an overall sense of wellbeing and balance.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "TRADITIONAL THAI MASSAGE", subPrices: [{subDescription: "60 Mins", subPrice: "695,000 VND"}, {subDescription: "90 Mins", subPrice: "900,000 VND"}], dishDescription: "The therapy originated from Thailand. It is a traditional healing system combine accupressure, stretching, rhythmic pressure on the muscle and Yoga- like positions to get a refreshing rush of energy.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "VIETNAMESE BAMBOO BODY MASSAGE", subPrices: [{subDescription: "75 Mins", subPrice: "825,000 VND"}, {subDescription: "90 Mins", subPrice: "1,045,000 VND"}], dishDescription: "Vietnamese Bamboo Body Massage is a perfect combination of bamboo and massage techniques. The therapist will use bamboo sticks that have been hearted at a certain temperature, then directly impact the muscle tissue and muscles. Joints, using techniques such as massage, rolling, tapping, in many different directions and techniques help improve many health and muscle proplems, reduces pain, and also brings high relaxation.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "HOT STONE MASSAGE", subPrices: [{subDescription: "75 Mins", subPrice: "825,000 VND"}, {subDescription: "90 Mins", subPrice: "1,045,000 VND"}], dishDescription: "Hot stone massage melts away muscle tension and stress through the application of warm smooth stones placed on key areas of the body to heat the muscles, promote an overall relaxed sense of wellbeing and calm.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "LALUNA HERBAL HOT THERAPY", subPrices: [{subDescription: "75 Mins", subPrice: "750,000 VND"}, {subDescription: "90 Mins", subPrice: "945,000 VND"}], dishDescription: "The therapist will begin treatment with essential oils to warm the body. The therapist will heat the herbal, lightly rubbed on the skin to expel the pores and bring the heat to the muscles, help relieve pain.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "PREGNANCY MASSAGE", subPrices: [{subDescription: "60 Mins", subPrice: "580,000 VND"}, {subDescription: "90 Mins", subPrice: "870,000 VND"}], dishDescription: "This treatment is not only of relaxation but also bring many benefits during pregnancy such as relaxation, releases stress, improves blood circulation, reduce insomnia, edema, headache and blood pressure; it will help you refreshing and comfortable.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "FOUR-HANDS MASSAGE BY LALUNA SPA", subPrices: [{subDescription: "75 Mins", subPrice: "1,390,000 VND"}], dishDescription: "A luxurious relaxing treat for your body. Two therapists work in choreographed synchronized movements applying sensations of touch to the skin leading to complete and total relaxation. The body falls into a state of optimal rest releasing aches and muscles tension, improving blood circulation, reducing stress and anxiety. The Laluna Spa team have perfected the technique making our four-hands massage particularly special.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "FOOT REFLEXOLOGY", subPrices: [{subDescription: "60 Mins", subPrice: "520,000 VND"}], dishDescription: "Experience overall healing and wellbeing as your therapist focuses on the pressure points of your feet through deep tissue massage with essential oils. The process is similar to Reflexology whilst the oil leaves your skin soft and smooth.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "FOOT REMEDY", subPrices: [{subDescription: "60 Mins", subPrice: "555,000 VND"}], dishDescription: "A foot Massage using hot stones applied to your legs and feet. Feet can typically take a lot of heat and the combination of pressure massage with the warmth of hot stones instils a sense of relaxation, helping to restore, rebalance and rejuvenate the body.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "TOTAL FOOT TREATMENT", subPrices: [{subDescription: "75 Mins", subPrice: "650,000 VND"}], dishDescription: "A complete care package and ultimate treat for feet. This treatment combines a foot massage focusing on pressure points with a dry and wet scrub to remove dead skin, leaving your feet silky smooth. It is an invigorating 'facelift' for your feet.", subDishDescription:[], imageURL:"url.com"},

            ],
            imageURL:"spa4.jpg"
        },
        {
            dishTitle: "BODY SKIN CARE",
            dishes: [
                {dishNumber: "", dishName: "LALUNA SPA BODY SCRUB", subPrices: [{subDescription: "60 Mins", subPrice: "590,000 VND"}], dishDescription: "Laluna Spa's moisturizing body scrub provides a deep cleaning and exfoliating treatment. Dead skin cells are removed whilst the growth of healthy new ones is promoted. Mineral sea salt and olive oil help to remove impurities and stimulate blood circulation.", subDishDescription:[], imageURL:"foodsample.jpg"},
                {dishNumber: "", dishName: "HONEY AND SESAME BODY SCRUB", subPrices: [{subDescription: "60 Mins", subPrice: "590,000 VND"}], dishDescription: "For a relaxing route to soft skin this body scrub is the way forward. It will exfloliate the accumlation of dead skin cells which dull skin. Other benefits are increasing blood circulation and an extra smoth skin through the honeys nourishment and moisturization. The treatment is completed after shower and mini massage and organic body moisturizer will be applied.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "COFFEE & ORANGE BODY SCRUB", subPrices: [{subDescription: "60 Mins", subPrice: "590,000 VND"}], dishDescription: "If you swoon when you pass a coffee bar, imagine that smell when the most fragrant of blends is smothered also over the body this invigorating scrub utilizes the natural acids in coffee to remove dead skin cells and smooth away roughness while rice and milk combine to tone tired skin. The treatment is completed after shower and mini massage and an Organic Body Moisturizer will be applied.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "MUD & MILK BODY WRAP", subPrices: [{subDescription: "60 Mins", subPrice: "825,000 VND"}], dishDescription: "Harnessing the power of natural vitamins and minerals this body wrap helps improve the appearance and feel of skin. It draws toxins from the body and helps hydrate, tone and smooth the skin.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "ALOVERA & YOGURT BODY WRAP", subPrices: [{subDescription: "60 Mins", subPrice: "590,000 VND"}], dishDescription: "Alovera, its high amino acid content rejuvenates tired dull skin. furthermore, it is the ideal remedy for sunburn treatment to relieve the skin and give a comfort feeling.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "BOTANICAL BODY WRAP", subPrices: [{subDescription: "60 Mins", subPrice: "590,000 VND"}], dishDescription: "This exquisite body wrap enriched with natural honey, oatmeal and fresh milk provides a moisturizing treatment to further balance and soften your skin.", subDishDescription:[], imageURL:"url.com"},
                {dishNumber: "", dishName: "EXTRA PAMPERING", subPrices: [{subDescription: "SAUNA 30 Mins", subPrice: "300,000 VND"}], dishDescription: "Availability of service depends on the property.", subDishDescription:[], imageURL:"url.com"},
            ],
            imageURL:"spa5.png"
        },
        {
            dishTitle: "EXPERIENCE THE BEST OF LALUNA SPA - SPECIAL PACKAGES",
            dishes: [
                {dishNumber: "", dishName: "FOREST PACKAGE", subPrices: [{subDescription: "2 Hrs", subPrice: "1,220,000 VND"}], dishDescription: "Vietnam's fertile forests are great sources of natural organic healing products, some of which are incorporated into Laluna Spa's products. The Forest Package provides a head-to-toe treatment package with a full body scrub, tender loving care for the feet, completed by a soothing facial.", subDishDescription:["Laluna Spa Body Scrub 45'", "Foot Rest massage 30'", "Basic Facial care 45'"], imageURL:"foodsample.jpg"},
                {dishNumber: "", dishName: "OCEAN PACKAGE", subPrices: [{subDescription: "2 Hrs 45 Mins", subPrice: "1,590,000 VND"}], dishDescription: "The oceans are full of natural and trace elements which help draw toxins from the body as well oxygenate cells, hydrate, revitalize and firm the skin. A sea salt scrub full of minerals helps keep your skin clean and healthy, whilst a full body massage with salt stone helps infuse minerals into the skin, concluding with a soothing all-in-one facial treatment.", subDishDescription:["Laluna Spa Body Scrub 45'", "Laluna Herbal Hot Therapy 60'", "Natural Skin Dream 60'"], imageURL:"url.com"},
                {dishNumber: "", dishName: "EARTH PACKAGE", subPrices: [{subDescription: "3 Hrs 20 Mins", subPrice: "2,040,000 VND"}], dishDescription: "This package draws on some of the best gifts the earth offers every day with special herbs, essential oils derived from trees and plants and mud products rich in salt and minerals. The blend of four treatments will leave you relaxed, cleansed and your skin feeling silky smooth.", subDishDescription:["Tension Relief Therapy 90'", "Tension Relief Therapy 45'", "Mud & Milk Body Wrap 45'", "Sauna 20'"], imageURL:"url.com"},
                {dishNumber: "", dishName: "SKY PACKAGE", subPrices: [{subDescription: "3 Hrs 45 Mins", subPrice: "2,100,000 VND"}], dishDescription: "'Sky' is the imaginative way we like to refer this treatment which will leave you feeling in seventh heaven. A full body massage, complete foot therapy, remedy for oily skin will make you feel the sky's the limit after Laluna Spa's ultimate pampering experience.", subDishDescription:["Laluna Spa Body Scrub 45'","Relaxation treatment 90'","Lifting Feather 45'","Manicure or Pedicure Gel Color 45'"], imageURL:"url.com"},
           ],
            imageURL:"spa6.png"
        },
        {
            dishTitle: "NAIL SERVICE",
            dishes: [
                {dishNumber: "", dishName: "MANICURE", subPrices: [], dishDescription: "", subDishDescription:["Cuticle Work for Hand without Nail Color 20': 170,000 VND", "Nail Lacquer for Fingers 20': 150,000 VND", "Basic Color 45': 250,000 VND", "Basic Gel Color 45': 370,000 VND","Laluna Mmanicure 60': 370,000 VND","Manicure for Children 20': 1150,000 VND"], imageURL:"foodsample.jpg"},
                {dishNumber: "", dishName: "PEDICURE", subPrices: [], dishDescription: "", subDishDescription:["Cuticle Work for Feet without Nail Color 20': 170,000 VND", "Nail Lacquer for Toes 20': 150,000 VND", "Basic Color 45': 250,000 VND","Basic Gel Color 45': 370,000 VND","Laluna Pedicure 60': 370,000 VND","Pedicure for Children 20': 150,000 VND"], imageURL:"foodsample.jpg"},
                {dishNumber: "", dishName: "EXTRA", subPrices: [], dishDescription: "", subDishDescription:["Take Off Gel Polish (l5-30'): 170,000 VND","Heel Scrub 40': 200,000 VND","Art: 110,000 VND","Special Design: 550,000-900,000 VND"], imageURL:"foodsample.jpg"},
                {dishNumber: "", dishName: "HAIR WASHING", subPrices: [], dishDescription: "", subDishDescription:["Hair Washing + Neck & Shoulder Head Massage 45': 450,000 VND", "Hair Washing + Facial Cleansing 45': 450,000 VND"], imageURL:"foodsample.jpg"},
            ],
            imageURL:"spa7.png"
        },
    ]
    }
]