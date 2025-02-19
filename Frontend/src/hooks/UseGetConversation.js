import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';


// Fetches all conversations from the server


const useGetConversation = () => {
    const [conversations, setConversations] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        const fetchConversations = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/users');
                if (response.error) {   
                    throw new Error('Error in conversation hook');
                }
                const data = await response.json();
                setConversations(data);
            } catch (err) {
                toast.error(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchConversations();
    }, []);

    return { conversations, loading };
};

export default useGetConversation;