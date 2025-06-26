// resumedownload

document.getElementById("downloadResume").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "Resume/Unni_krishnan_resume.pdf"; 
    link.download = "Unni_krishnan_resume.pdf";     
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });


