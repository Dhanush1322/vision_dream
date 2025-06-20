import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditBanner() {
    const { id } = useParams(); // Get the imageId from the URL
    const [banner, setBanner] = useState(null);

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const response = await fetch(`https://api-banner-6i7qc.ondigitalocean.app/api/banner-images/${id}`);
                const data = await response.json();
                setBanner(data);
            } catch (error) {
                console.error('Error fetching banner data:', error);
            }
        };

        fetchBanner();
    }, [id]);

    const handleSave = () => {
        // Logic to update the banner
    };

    if (!banner) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Edit Banner</h2>
            <img src={`https://api-banner-6i7qc.ondigitalocean.app/${banner.url}`} alt={banner.imageId} />
            <form onSubmit={handleSave}>
                {/* Add form fields here to edit the banner */}
             
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default EditBanner;
