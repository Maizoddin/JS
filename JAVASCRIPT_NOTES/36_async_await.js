// async function always returns promise
// async function is used to handle asynchronous operations

Example:
let url = "http://worldtimeapi.org/api/timezone/America/New_York";
async function getTime() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        // data.ok  : true if successful
        // data.status : 200-299 if successful

        if (data.ok == "false") {
            throw new Error("Fetch was successful but Data not Found");
        } else {
            console.log(data);
        }
    } catch (err) {
        console.log(err.message);
    }
}

getTime(); 