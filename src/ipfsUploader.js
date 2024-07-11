import axios from 'axios';
const pinataApiKey = `361e9f2dc3f2ffe24ff5`;
const pinataApiSecret = `09362708234bc3ea04746f045de7eac036f9e26bb65a7c246b28885dc3fbe977` ; // Insert pinata Api secret
const pinataApiUrl = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
const pinataHeaders = {
    headers: {
        'Content-Type': 'multipart/form-data',
        pinata_api_key: pinataApiKey,
        pinata_secret_api_key: pinataApiSecret,
    },
};
export async function uploadToIPFS(file) {
    const formData = new FormData();
    formData.append('file', file);
    try {
        const response = await axios.post(pinataApiUrl, formData, pinataHeaders);
        const ipfsHash = response.data.IpfsHash;
        return `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
    } catch (error) {
        console.error('Error uploading file to Pinata:', error);
        throw error;
    }
}