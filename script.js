async function ShowResult() {

    let amount = Number(document.getElementById("amount").value);

    let from = document.getElementById("dropdown1").value;

    let to = document.getElementById("dropdown2").value;

    if(from === "" || to === ""){

        document.getElementById("result").innerHTML =
        "Please select currencies";

        return;
    }

    try {

        let url = `https://open.er-api.com/v6/latest/${from}`;

        let response = await fetch(url);

        let data = await response.json();

        console.log(data);

        let rate = data.rates[to];

        let convertedAmount = (amount * rate).toFixed(2);

        document.getElementById("result").innerHTML =
        `${amount} ${from} = ${convertedAmount} ${to}`;

    }

    catch(error){

        console.log(error);

        document.getElementById("result").innerHTML =
        "Something went wrong";

    }
}