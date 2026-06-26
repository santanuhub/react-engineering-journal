export async function getAPI(url: string): Promise<Response> {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                `HTTP Error: ${response.status} ${response.statusText}`
            );
        }

        // return response;
        return response;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`API Request Failed: ${error.message}`);
        }

        throw new Error("An unknown error occurred.");
    }
}