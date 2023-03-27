window.addEventListener('scroll', function() {
    const navbar = document.querySelector('navbar');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.style.backgroundColor = '#ffffff'; // ubah warna latar belakang menjadi putih
    } else {
      navbar.style.backgroundColor = 'transparent'; // ubah warna latar belakang menjadi transparan
    }
  });

  console.log ('hai')