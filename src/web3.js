import Web3 from 'web3';
// ADDITION This is needed to allow this application to interact with metamask
//window.alert("Do you want to connect with metamask");
//window.ethereum.disable();

// window.web3 coming from metamask
const currProvider = window.web3.currentProvider
const web3 = new Web3(currProvider);
console.log('currProvider ');
console.log(currProvider);
window.ethereum.enable();
//  Returns our version of web3 with metamask provider irrespective of web3 version injected by metamask
export default web3;
