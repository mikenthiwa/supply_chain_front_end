import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStatusHistory } from '../features/courier/courierThunks';
import { AppDispatch } from '../store/store';
import { useAppSelector } from '../store/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const IndexPage = () => {
    const [truckName, setTruckName] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await dispatch(fetchStatusHistory(truckName));
    };

    const statusHistory = useAppSelector((state) => state.courier.statusHistory);

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-600 py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-white mb-8">Farm Produce Tracking System</h1>
                <div className="bg-white rounded-lg p-8">
                    <form onSubmit={handleSubmit} className="mb-10">
                        <div className="flex flex-col sm:flex-row items-center border-b border-blue-500 py-2">
                            <input
                                type="text"
                                value={truckName}
                                onChange={(e) => setTruckName(e.target.value)}
                                placeholder="Enter courier truck name"
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mb-4 sm:mb-0 sm:mr-3 py-1 px-2 leading-tight focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
                            >
                                Track
                            </button>
                        </div>
                    </form>
                    <div className="overflow-x-auto w-full">
                            <div className="flex flex-col sm:flex-row items-center justify-start">
                                {statusHistory.map((status, index) => {
                                const isLastItem = index === statusHistory.length - 1;
                                return (
                                    <div key={index} className="flex flex-col sm:flex-row items-center">
                                        {index !== 0 && (
                                            <>
                                                <div className={`progress-bar w-16 h-1 self-center hidden sm:block ${isLastItem ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                                                <div className={`progress-bar w-1 h-16 self-center block sm:hidden ${isLastItem ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                                            </>
                                        )}
                                        <div
                                            className={`border rounded-lg p-4 shadow ${isLastItem ? 'border-green-500' : ''}`}
                                        >
                                            <p className="text-xl mb-2">
                                                Status: <span className="font-bold">{status.status}</span>
                                            </p>
                                            <p>
                                                Timestamp:{' '}
                                                <span className="font-semibold">{new Date(status.timestamp).toLocaleString()}</span>
                                            </p>
                                            {isLastItem && (
                                                <div className="text-blue-500 flex items-center mt-2">
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />
                                                    <span>Current Location</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default IndexPage;
