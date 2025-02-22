import { ethers } from "ethers";
import NFTMinter from "./NftMinter.json";
export async function connectWallet() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    // Insert deployed contract address here
    const contract = new ethers.Contract(`0x2B81bd8b197a470C5833E3C96defB7691C54eb25`, NFTMinter.abi, signer);

    return { signer, contract };
}

export async function connectMetaMask (){
    const { signer } = await connectWallet();
    const address = await signer.getAddress();
    const balance = await signer.getBalance();
    const formattedBalance = ethers.utils.formatEther(balance);
    return {address, formattedBalance}
};