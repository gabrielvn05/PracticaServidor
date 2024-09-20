import fetch from 'node-fetch';

interface IPost {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}

async function fetchData<Type>(url: string): Promise<Type[]> {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': '$2a$10$OS2JsS4brlMSCAnNChGJze0sTQHfdjg/SzbUBrmUF9EmVuDmD2cFC', 
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
            throw new Error('Expected an array in the response');
        }

        return data as Type[];
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

export {
    IPost,
    fetchData
}
