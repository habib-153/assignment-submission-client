import { useLoaderData } from "react-router-dom";

const Sub_Assignment = () => {
    const sub_Assignment = useLoaderData()
    
    return (
        <div>
            <h2>{sub_Assignment.length}</h2>
        </div>
    );
};

export default Sub_Assignment;