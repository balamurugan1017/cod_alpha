document.addEventListener('DOMContentLoaded', () => {
    const ageForm = document.getElementById('age-form');
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const ageResult = document.getElementById('age-result');
  
    ageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const day = parseInt(dayInput.value);
      const month = parseInt(monthInput.value);
      const year = parseInt(yearInput.value);
  
      if (!isValidDate(day, month, year)) {
        ageResult.textContent = "Invalid date! Please check your inputs.";
        ageResult.style.color = "#dc3545";
        return;
      }
  
      const age = calculateAge(day, month, year);
      ageResult.innerHTML = `You are <strong>${age.years}</strong> years, <strong>${age.months}</strong> months, and <strong>${age.days}</strong> days old.`;
      ageResult.style.color = "#333";
    });
  
    function isValidDate(day, month, year) {
      if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900) {
        return false;
      }
      
      const date = new Date(year, month - 1, day);
      return (
        date.getDate() === day &&
        date.getMonth() === month - 1 &&
        date.getFullYear() === year
      );
    }
  
    function calculateAge(day, month, year) {
      const birthDate = new Date(year, month - 1, day);
      const today = new Date();
      
      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();
  
      if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
      }
  
      if (months < 0) {
        years--;
        months += 12;
      }
  
      return { years, months, days };
    }
  });

  