const draggableBoxes = document.querySelectorAll('.draggable-box');

draggableBoxes.forEach(box => {
      box.addEventListener('dragstart', (e) => {
            e.target.style.opacity = '0.5';
      });

      box.addEventListener('dragend', (e) => {
            e.target.style.opacity = '1';
      });
});
