//Need to add application specific data like number of triggers for notification and so on
const applicationListData = [
    {
        name: "TTXM Notification",
        desc: "This notifies you when the exhaust is above 499°C",
        author: "Joshua Uwuseba",
        authorImage: "/assets/Joshua.png",
        dateCreated: "June 21 2020",
        type: "notification",
        subscribed: false,
        uniqueID: 1,
        typeDetails:  {
            name: "TTXM Notification",
            event: "This notifies you when the exhaust is above 499°C",
            type: "Simple",
            number_of_times: 4
        }
    },
    {
        name: "Efficiency Report",
        desc: "This generates an efficiency report every Friday by 12:00pm",
        author: "Joshua Uwuseba",
        authorImage: "/assets/Joshua.png",
        dateCreated: "June 21 2020",
        type: "report",
        subscribed: true,
        uniqueID: 2,
        typeDetails:  {
            name: "Efficiency Report",
            frequency: "Daily",
            row_size: 4,
            column_size: 5,
            type: "data",
            number_of_times: 4
        }
    }
]

export default applicationListData