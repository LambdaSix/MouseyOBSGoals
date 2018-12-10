(function() {
    'use strict';
    function formatGoalNumber(data) {
      let fixed = 0,
        prefix = data.currency || '';
      if (!Number.isInteger(data.amount.start) || !Number.isInteger(data.amount.current) || !Number.isInteger(data.amount.target) || data.currency) fixed = 2;
      return {
        start: prefix + data.amount.start.toFixed(fixed),
        current: prefix + data.amount.current.toFixed(fixed),
        target: prefix + data.amount.target.toFixed(fixed)
      };
    }
    
    const progress = document.querySelector('#goal-progress');
    const title = document.querySelector('#title');
  
    function updateData(data) {
      title.innerHTML = data.title;
      let formatted = formatGoalNumber(data);
      progress.textContent = `${formatted.current}/${formatted.target}`;
    }
  
    function setEndDate(date) {
      timer.textContent = getRelativeEndDate(date);
    }
  
    function eventListener(e) {
      updateData(e.detail);
    }
  
    document.addEventListener('goalLoad', eventListener);
    document.addEventListener('goalEvent', eventListener);
  
  }());