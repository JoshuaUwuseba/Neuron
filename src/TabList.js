import Tab from "./Tab";

let listOfTabs = [
    {
        no: 1,
        name: "Applications",
        logo: `${process.env.PUBLIC_URL}/assets/application.svg`
    },
    {
        no: 2,
        name: "Studio",
        logo: `${process.env.PUBLIC_URL}/assets/studio.svg`
    },
    {
        no: 3,
        name: "Questions",
        logo: `${process.env.PUBLIC_URL}/assets/question.svg`
    },
    {
        no: 4,
        name: "Notifications",
        logo: `${process.env.PUBLIC_URL}/assets/notification.svg`
    },
    {
        no: 5,
        name: "Reports",
        logo: `${process.env.PUBLIC_URL}/assets/report.svg`
    },
    {
        no: 6,
        name: "Visualization",
        logo: `${process.env.PUBLIC_URL}/assets/visualization.svg`
    },
    {
        no: 7,
        name: "Derived Data",
        logo: `${process.env.PUBLIC_URL}/assets/derived_data.svg`
    },
    {
        no: 8,
        name: "Work Analysis",
        logo: `${process.env.PUBLIC_URL}/assets/work_analysis.svg`
    },
    {
        no: 9,
        name: "Marketplace",
        logo: `${process.env.PUBLIC_URL}/assets/marketplace.svg`
    },
]

function TabList(props) {

    return (
        <div>
            {listOfTabs.map((element) => (
                <Tab key={element.no} top={20 + 6 * (element.no - 1)} name={element.name} logo={element.logo} onClickHandler={props.onClickHandler} clickedTabValue={props.clickedTabValue}/>
            ))}
        </div>
    );
}

export default TabList;