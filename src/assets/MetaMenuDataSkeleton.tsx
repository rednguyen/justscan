interface Dish {
    // title: string;
    dishNumber: string
    dishName: string;
    dishPrice: string;
    dishDescription: string;
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
            dishTitle: "Body Massage Treatment",
            dishes: [
                {dishNumber: "", dishName: "Swedish Massage (60 Minutes)", dishPrice:"$19", dishDescription: "This is a popular treatment with kneading and hacking techniques combined with medium and firm pressure to help release stiff muscles and poor circulation", imageURL:"foodsample.jpg"},
                {dishNumber: "", dishName: "Laluna Signature Therapy (60 Minutes)", dishPrice:"$22", dishDescription: "A combination of deep tissue massage and traditional massage techniques where pressure level is tailored to the individual's needs", imageURL:"url.com"},
                {dishNumber: "", dishName: "Healing Stone Therapy (75 Minutes)", dishPrice:"$24", dishDescription: "Heated basalt stones are placed in specific locations of the individual's body to aid in deep tissue and muscle relaxation", imageURL:"url.com"},
                {dishNumber: "", dishName: "Foot Reflexology (60 Minutes)", dishPrice:"$23", dishDescription: "The massage therapy that involves applying pressure to specific points on the foot. It is designed to reduce pain and improve overall health", imageURL:"url.com"},
                {dishNumber: "", dishName: "Shiatsu Therapy (60 Minutes)", dishPrice:"$21", dishDescription: "Shiatsu therapy is a medium pressure massage applied with the fingers and palms at the acupuncture points of the body to increase blood circulation", imageURL:"url.com"},
                {dishNumber: "", dishName: "Hot Herbal Therapy (60/75/90 Minutes)", dishPrice:"$21 / $24 / $27", dishDescription: "The massage therapist with apply heated essential oils to warm the body and expel the pores. The headed essential oils relax the individual's muscles and relieve pain", imageURL:"url.com"},
                {dishNumber: "", dishName: "Thai Massage (60/90 Minutes)", dishPrice:"$21 / $27", dishDescription: "The therapy originated from Thailand. It is a traditional healing system combine acupressure and assisted yoga postures to balance and release your body", imageURL:"url.com"},
                {dishNumber: "", dishName: "Pregnancy Massage (60 Minutes)", dishPrice:"$20", dishDescription: "With this treatment, you can increase relaxation, reduce stress, and improve blood circulation to help with various symptoms caused by pregnancy including insomnia, edema, headache, and high blood pressure", imageURL:"url.com"},
                {dishNumber: "", dishName: "Child Massage (30 Minutes)", dishPrice:"$14", dishDescription: "A massage treat for your child to relax and release stiff muscles", imageURL:"url.com"}

            ],
            imageURL:"spa1.jpg"
        },
        {
            dishTitle: "Express Treatment",
            dishes: [
                {dishNumber: "", dishName: "Hair Washing (45 Minutes)", dishPrice:"450,000 VND", dishDescription: "Hair washing with light head, neck, and shoulder massage", imageURL:"url.com"},
                {dishNumber: "", dishName: "Indian Head & Hands Massage (30/60 Minutes)", dishPrice:"350,000 / 504,000 VND", dishDescription: "", imageURL:"url.com"},
                {dishNumber: "", dishName: "Back, Neck & Shoulder Therapy (30/60 Minutes)", dishPrice:"400,000 / 504,000 VND", dishDescription: "", imageURL:"url.com"},
                {dishNumber: "", dishName: "Foot Reflexology (30/60 Minutes)", dishPrice:"350,000 / 556,000 VND", dishDescription: "", imageURL:"url.com"},
                {dishNumber: "", dishName: "Leg Therapy (30/60 Minutes)", dishPrice:"350,000 / 556,000 VND", dishDescription: "", imageURL:"url.com"},
                {dishNumber: "", dishName: "Foot Reflexology (30 Minutes)", dishPrice:"350,000 VND", dishDescription: "", imageURL:"url.com"},
                {dishNumber: "", dishName: "Foot Reflexology (30 Minutes)", dishPrice:"350,000 VND", dishDescription: "", imageURL:"url.com"},
                {dishNumber: "", dishName: "Foot Reflexology (30 Minutes)", dishPrice:"350,000 VND", dishDescription: "", imageURL:"url.com"}
            ],
            imageURL:"spa2.jpg"
        },
        {
            dishTitle: "Add-On Services",
            dishes: [
                {dishNumber: "1", dishName: "Take Off Enhanced Nails", dishPrice:"$10", dishDescription: "goodCrab", imageURL:"url.com"},
                {dishNumber: "2", dishName: "Soak Off Gel Polish", dishPrice:"$10", dishDescription: "goodLoster", imageURL:"url.com"},
                {dishNumber: "3", dishName: "French/ Color Tips", dishPrice:"$5", dishDescription: "goodLoster", imageURL:"url.com"},
                {dishNumber: "4", dishName: "Nail Repair", dishPrice:"$5", dishDescription: "goodLoster", imageURL:"url.com"},
                {dishNumber: "5", dishName: "Nail Buffing", dishPrice:"$5", dishDescription: "goodLoster", imageURL:"url.com"},
                {dishNumber: "6", dishName: "Gel Top Coat", dishPrice:"$5", dishDescription: "goodLoster", imageURL:"url.com"}
            ],
            imageURL:""
        },
        {
            dishTitle: "Waxing",
            dishes: [
                {dishNumber: "1", dishName: "Eyebrows", dishPrice:"$12", dishDescription: "goodCrab", imageURL:"url.com"},
                {dishNumber: "2", dishName: "Lips", dishPrice:"$10", dishDescription: "goodLoster", imageURL:"url.com"},
                {dishNumber: "3", dishName: "Chin", dishPrice:"$10", dishDescription: "goodLoster", imageURL:"url.com"},
                {dishNumber: "4", dishName: "Full Face (Without Eyebrows)", dishPrice:"$30", dishDescription: "goodLoster", imageURL:"url.com"},
                {dishNumber: "5", dishName: "Under Arms", dishPrice:"$20", dishDescription: "goodLoster", imageURL:"url.com"}
            ],
            imageURL:""
        }
    ]
    }
]