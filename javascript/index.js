window.onload = function() {
    console.log('Page Loaded');
  
    const header = document.querySelector('.header');
    const aboutSection = document.querySelector('#home');
  
    const aboutObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          header.classList.remove('scrolled');
        } else {
          header.classList.add('scrolled');
        }
      });
    }, { threshold: 0.1 });

    aboutObserver.observe(aboutSection);
  
    const homeSection = document.querySelector('.home__section');
    if (!homeSection) {
      console.log('Home Section not found!');
      return;
    }
  
    const homeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Home Section Observer entry:', entry);
          if (entry.isIntersecting) {
            console.log('Home Section is in view!');
            homeSection.classList.add('show');
          } else {
            homeSection.classList.remove('show');
          }
        });
      },
      {
        threshold: 0.1
      }
    );
    
    homeObserver.observe(homeSection);
    
    const workSection = document.querySelector('.work__section');
    if (!workSection) {
      console.log('Work Section not found!');
      return;
    }
  
    const workObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Work Section Observer entry:', entry);
          if (entry.isIntersecting) {
            console.log('Work Section is in view!');
            workSection.classList.add('show');
          }
        });
      },
      {
        threshold: 0.1
      }
    );
  
    workObserver.observe(workSection);
  
    const socials = document.querySelector('.contact__socials');
    console.log('Social Icons JavaScript');
  
    if (socials) {
      const socialsObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              socials.classList.add('show');
            } else {
              socials.classList.remove('show');
            }
          });
        },
        {
          threshold: 0.1
        }
      );
  
      socialsObserver.observe(socials);
    }
  };
  
  