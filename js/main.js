document.addEventListener("DOMContentLoaded", function () {
    function openProject(projectId) {
        window.location.href = 'project.html?id=' + projectId;
      }
    
      function toggleSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('section[id^="d"]').forEach(function (section) {
            section.style.display = 'none';
        });

        // Show the selected section
        document.getElementById(sectionId).style.display = 'block';
    }
    
});