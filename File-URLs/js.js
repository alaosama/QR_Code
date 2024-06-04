const input = document.querySelector('input[type="file"]');

input.addEventListener('change', () => {
    
    const file = input.files[0];

    const f = new FileReader();

    f.addEventListener('load', () => {
        const url = f.result;

        console.log(new Blob([url]).size);

        localStorage.setItem('file', url);

        const img = new Image();
        img.src = localStorage.getItem('file');

        document.body.appendChild(img);

        const json = JSON.stringify({ a: "a", file: url});

        fetch('http://httpbin.org/post', {
            method: "POST",
            body: json,
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => res.json())
    });
    
    f.readAsDataURL({file});
})
