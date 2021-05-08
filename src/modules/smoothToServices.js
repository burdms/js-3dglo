function smoothToServices() {
  const scrollTo = document.querySelector('main>a');
  scrollTo.addEventListener('click', event => {
    event.preventDefault();
    const id = scrollTo.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

export default smoothToServices;
