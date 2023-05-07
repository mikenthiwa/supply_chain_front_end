import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Replace with your API base URL
});

export const getStatusHistory = async (truckName: string) => {
    const response = await apiClient.get(`/courier-trucks/${truckName}/status-history`);
    return response.data;
};
