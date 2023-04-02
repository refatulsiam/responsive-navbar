import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {

    let marks = [
        { id: 1, student: "John", math: 85, physics: 90, chemistry: 80 },
        { id: 2, student: "Emily", math: 70, physics: 75, chemistry: 80 },
        { id: 3, student: "David", math: 90, physics: 95, chemistry: 85 },
        { id: 4, student: "Sarah", math: 80, physics: 85, chemistry: 90 },
        { id: 5, student: "Alex", math: 75, physics: 80, chemistry: 85 },
        { id: 6, student: "Linda", math: 95, physics: 90, chemistry: 85 },
        { id: 7, student: "Chris", math: 85, physics: 85, chemistry: 80 },
        { id: 8, student: "Maria", math: 90, physics: 85, chemistry: 90 },
        { id: 9, student: "Jake", math: 80, physics: 80, chemistry: 85 },
        { id: 10, student: "Tom", math: 85, physics: 90, chemistry: 80 }
      ];
      

    return (
        <div>
            <LineChart
                width={1000}
                height={300}
                data={marks}
            >
                <Line dataKey="physics"></Line>
                <Line stroke='#8884d8' dataKey="math"></Line>
                <XAxis dataKey="student" />
                <YAxis></YAxis>
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Dashboard;