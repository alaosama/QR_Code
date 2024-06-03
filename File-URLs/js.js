const input = document.querySelector('input[type="file"]');

input.addEventListener('change', () => {
    
    const file = input.files[0];

    const f = new FileReader();

    f.addEventListener('load', () => {
        const url = f.result;

        localStorage.setItem('file', url);

        const img = new Image();
        img.src = localStorage.getItem('file');

        document.body.appendChild(img);

        
    })
})
