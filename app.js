async function fetchGreetings() {
    const response = await fetch("http://localhost:9000", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({query: 'query {greeting}'})
    });
    const {data} = await response.json();
    console.log("body:", data);
    return data.greeting;
}
fetchGreetings().then((greeting) => {
    document.getElementById('greeting').textContent = greeting;
});