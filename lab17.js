function downloadPDF() {
    const element = document.getElementById('curriculum');

    const options = {
        margin: 0,
        filename: 'Curriculum_Claudia_Ortega_.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
}