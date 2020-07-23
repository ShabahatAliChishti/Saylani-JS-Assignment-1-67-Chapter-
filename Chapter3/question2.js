var visits = Number(localStorage.getItem('visitCount'));
    var current = Boolean(sessionStorage.getItem('session'));
  
    if (!current) {
      visits++;
    }
  
    localStorage.setItem('visitCount', visits);
    sessionStorage.setItem('session', true);
  
    alert('You have visited this site ' +visits+ ' times')