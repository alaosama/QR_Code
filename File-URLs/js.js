document.querySelector('#fileInput').addEventListener('change', () => {
    const file = document.querySelector('#fileInput').files[0];

    if (file) {
        console.log('File size:', file.size);

        const fileReader = new FileReader();

        fileReader.onload = () => {
            const fileURL = fileReader.result;
            console.log('File URL:', fileURL);

            // Display image
            const img = new Image();
            img.src = fileURL;
            document.body.appendChild(img);

            // Store in localStorage
            localStorage.setItem('file', fileURL);

            // Post to server
            const json = JSON.stringify({ a: "a", file: fileURL });
            fetch('http://httpbin.org/post', {
                method: "POST",
                body: json,
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(data => console.log('Server response:', data));
        };

        fileReader.readAsDataURL(file);
    }
});