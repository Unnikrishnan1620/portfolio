// resumedownload

document.getElementById("downloadResume").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "Resume/Unnikrishnan_resume.pdf"; 
    link.download = "Unnikrishnan_resume.pdf";     
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });


