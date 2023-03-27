window.addEventListener('scroll', function() {
    const navbar = document.querySelector('navbar');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.style.backgroundColor = '#ffffff'; // ubah warna latar belakang menjadi putih
    } else {
      navbar.style.backgroundColor = 'transparent'; // ubah warna latar belakang menjadi transparan
    }
  });

  const navLinks = document.querySelectorAll("nav li a");

  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      navLinks.forEach(link => link.classList.remove("active"));
      this.classList.add("active");
    });
  });
  