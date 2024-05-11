export const getURL = (contractCode) =>{
    const encodedCode = btoa(contractCode)
    const remixURL = `https://remix.ethereum.org/?#code=${encodedCode}`
    return remixURL;
}