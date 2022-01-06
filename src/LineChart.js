import React from 'react';
import { Line, defaults} from "react-chartjs-2"

defaults.font.family = "Roboto"

function LineChart({className, chartData}) {
    return (
        <div className={className}>
            <Line
                data={chartData}
                height={430}
                width={884}
                redraw={false}
                options={{
                    plugins:{
                        title: {
                            display: false,
                            text: "Revenue"
                        },
                        legend: {
                            display: true,
                            position: "bottom"
                        }
                    }
                }}
            />
        </div>
    );
}

export default LineChart;