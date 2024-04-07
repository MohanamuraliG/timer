let hour = document.querySelector(".hour");
      let minute = document.querySelector(".minute");
      let second = document.querySelector(".second");
      let reset = document.querySelector(".reset");
      let start = document.querySelector(".start");
      let stop = document.querySelector(".stop");

      let seccount = 0;
      let mincount = 0;
      let hourcount = 0;
      let count = 1;
      start.addEventListener("click", (event) => {
        if (count == 1) {
          count = 0;
          intervals();
        }
      });

      stop.addEventListener("click", () => {
        count = 1;
        stopinterval();
      });

      reset.addEventListener("click", resetvalues);

      function resetvalues() {
        seccount = 0;
        mincount = 0;
        hourcount = 0;
        display();
      }

      let internalcall;

      function intervals() {
        internalcall = setInterval(() => {
          seccount++;
          if (seccount > 60) {
            mincount++;
            seccount = 0;
          }
          if (mincount > 60) {
            hourcount++;
            mincount = 0;
          }
          if (hourcount > 12) {
            hourcount = 0;
          }
          display();
        }, 1000);
      }
      function stopinterval() {
        clearInterval(internalcall);
      }
      function addLeadingZeros(number, length) {
        return String(number).padStart(length, "0");
      }
      function display() {
        // let formathour = addLeadingZeros(hourcounter, 2);
        hour.textContent = addLeadingZeros(hourcount, 2) + " : ";
        minute.textContent = addLeadingZeros(mincount, 2) + " : ";
        second.textContent = addLeadingZeros(seccount, 2);
      }