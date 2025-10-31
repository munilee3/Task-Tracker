import React, { useEffect, useState } from "react";
import { fetchInsights } from "../api";

function InsightsPanel() {
    const [insight, setInsight] = useState(null);

    useEffect(() => {
        const load = async () => {
            try {
                const data = await fetchInsights();
                setInsight(data);
            } catch (err) {
                console.error("Error fetching insights:", err);
            }
        };
        load();
    }, []);

    return (
        <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-2">Smart Insights</h2>
            {insight ? (
                <>
                    <p className="text-gray-800">{insight.summary}</p>
                </>
            ) : (
                <p className="text-gray-500">Loading insights...</p>
            )}
        </div>
    );
}
export default InsightsPanel