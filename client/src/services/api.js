const baseurl = process.env.REACT_APP_BASEURL;

export async function getAllPatients(){
    const response = await fetch(`${baseurl}/getAllPatients`);
    const data = await response.json();
    return data;
}

export async function getAllReports(aadharNumber){
    const response = await fetch(`${baseurl}/getAllReports`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ aadharNumber: aadharNumber }),
    });
    const data = await response.json();
    return data;
}
