export async function http_query(query, params) {
    const url = 'https://jokcatfs-pauarjalaguer.turso.io/';
    const token = "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MjQ1MTcwNjYsImlkIjoiZjI3NmQ3NmUtMjA1My00ZmJhLWI2MTgtMGQyZGZkN2E3NDEzIn0.vGKIODWyeqUw-YY-XdW6jEUeRUSyFdevSdimkQ0bpIIghhEbrXsHUVdDMXUBWwCHFHYtBwWixlv_JqQVzuDoCQ";
    
   // const url ="https://efsmasquefa-jokcat.turso.io";
    //const token="eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MzQwMjk1NzEsImlkIjoiYzA2ZThhYjctYWJhYi00NzQwLWE2MzMtZWQzZWZhYzRmNWQwIn0.yNzV7Ptv3KQP3LIi-WxV5scl4Cb_jx5ayNb4wPOXJmKmvHQ2_XmwQb79Z1KANORdbdS6eo27s3k7TZG_e79gCQ";
     try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                statements: [
                    {
                        q: query,
                        params: params
                    }
                ]
            })
        });

        if (!response.ok) {
            const errorBody = await response.text();
            console.error('Error response:', errorBody);
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error inserting or replacing classification:', error);
    }

}