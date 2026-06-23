import { useEffect, useState } from "react";
import api from "../api/axios";
function PriorityNotifications() {
    const [priority, setPriority] = useState([]);
    useEffect(() => {
        fetchPriority();
    }, []);
    const fetchPriority = async () => {
        const response = await api.get("/notifications");
        const sorted = response.data.notifications.sort((a, b) => {
            const weight = {
                Placement: 3,
                Result: 2,
                Event: 1,
            };
            return weight[b.Type] - weight[a.Type];
        });
        setPriority(sorted.slice(0, 10));
    };
    return (
        <div>
            <h2>Priority Notifications</h2>
            {priority.map((item) => (
                <div key={item.ID}>
                    {item.Message}
                </div>
            ))}
        </div>
    );
}
export default PriorityNotifications;