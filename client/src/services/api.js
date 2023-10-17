const baseurl = process.env.REACT_APP_BASEURL;

export async function getAllPatients(){
    const response = await fetch(`${baseurl}/getAllPatients`);
    const data = await response.json();
    return data;
}

