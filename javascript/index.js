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

  function fetchResumeUrl() {
    fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSws0CMnowelG7TItp6bBdVKJAsW0N1-vkyKI0l89Q_dRLYLYMScmJL6yaN_aC5g9ofrWC9liHrD7MN/pub?gid=0&single=true&output=tsv') // Update with your actual .tsv URL
      .then(response => response.text())
      .then(data => {
        // Split the file into lines
        const lines = data.trim().split('\n');

        // Check if there's at least one line of data
        if (lines.length >= 1) {
          const resumeData = lines[0].split('\t'); // Extract the second row

          // Ensure the data contains the expected column "resume-url"
          if (resumeData.length > 1) {
            const resumeUrl = resumeData[1]; // Extract the URL from the second column

            // Redirect to the resume URL
            window.open(resumeUrl, '_blank');
          } else {
            console.error('Invalid data in the TSV file');
          }
        } else {
          console.error('No data found in the TSV file');
        }
      })
      .catch(error => {
        console.error('Error fetching the .tsv file:', error);
      });
  }

  // Add event listener to the "Resume" link
  const resumeLink = document.querySelector('.resume__link');
  if (resumeLink) {
    resumeLink.addEventListener('click', fetchResumeUrl);
  } else {
    console.error('Resume link not found!');
  }
};
  
  