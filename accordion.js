function accordion_toggle(sectionId) {
  var allSections = document.querySelectorAll('.accordion-section');
  var section = document.getElementById(sectionId);

  allSections.forEach((s) => {
    if (s.id !== sectionId) {
      s.style.display = "none";
    }
  });

  if (section.style.display === "block") {
    section.style.display = "none";
    console.log(`Closed: ${sectionId}`);
    
  } else 
  {
    
    section.style.display = "block";
    console.log(`Opened: ${sectionId}`);
    
  }
}
