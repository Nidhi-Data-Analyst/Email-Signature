function generateSignature() {
    const name = document.getElementById('name').value;
    const designation = document.getElementById('designation').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const linkedin = document.getElementById('linkedin').value;
    const campus = document.getElementById('campus').value;
    const profilePic = document.getElementById('profile-pic').files[0];
    
    if (!name || !designation || !phone || !email || !campus || !profilePic) {
        alert('Please fill in all mandatory fields.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function () {
        const profilePicUrl = reader.result;

        const bolds = {
            "Noida": "bold",
            "Gurgaon": "bold",
            "Faridabad": "bold",
            "Delhi": "bold",
            "Chennai": "bold",
        };
        const campusBold = { Noida: "normal", Gurgaon: "normal", Faridabad: "normal", Delhi: "normal", Chennai: "normal" };
        campusBold[campus] = "bold";

        const linkedinHtml = linkedin ? `
            <a href="${linkedin}" target="_blank">
                <img src="linkedin-icon.png" alt="LinkedIn" class="linkedin-logo">
            </a>` : '';

        const signatureHtml = `
            <div class="signature-container">
                <div class="left-column">
                    <img src="${profilePicUrl}" alt="Profile Picture" class="profile-pic">
                    <img src="school-logo.png" alt="School Logo" class="school-logo">
                    <div class="school-locations">
                        <span style="font-weight: ${campusBold.Noida};">Noida</span> |
                        <span style="font-weight: ${campusBold.Gurgaon};">Gurgaon</span> |
                        <span style="font-weight: ${campusBold.Faridabad};">Faridabad</span> |
                        <span style="font-weight: ${campusBold.Delhi};">Delhi</span> |
                        <span style="font-weight: ${campusBold.Chennai};">Chennai</span>
                    </div>
                </div>
                <div class="vertical-line"></div>
                <div class="signature-details">
                    <div class="name-linkedin">
                        <span class="name">${name}</span>
                        ${linkedinHtml}
                    </div>
                    <span class="designation">${designation}</span>
                    <div class="contact-info">
                        <div>
                            <img src="phone-icon.png" alt="Phone Icon"> 
                            <a href="tel:${phone}">${phone}</a>
                        </div>
                        <div>
                            <img src="email-icon.png" alt="Email Icon"> 
                            <a href="mailto:${email}">${email}</a>
                        </div>
                        <div>
                            <img src="website-icon.png" alt="Web Icon"> 
                            <a href="https://shivnadarschool.edu.in/">https://shivnadarschool.edu.in/</a>
                        </div>
                    </div>
                    <div class="social-icons">
                        <a href="https://www.facebook.com/shivnadarschool"><img src="facebook-icon.png" alt="Facebook"></a>
                        <a href="https://www.instagram.com/shivnadarschool"><img src="instagram-icon.png" alt="Instagram"></a>
                        <a href="https://www.youtube.com/shivnadarschool"><img src="youtube-icon.png" alt="YouTube"></a>
                        <a href="https://www.linkedin.com/school/shiv-nadar-school/"><img src="linkedin-icon.png" alt="LinkedIn"></a>
                        <a href="https://www.twitter.com/shivnadarschool"><img src="twitter-icon.png" alt="Twitter"></a>
                    </div>
                </div>
            </div>`;

        document.getElementById('signature-result').innerHTML = signatureHtml;
    };

    reader.readAsDataURL(profilePic);
}

document.getElementById('copy-btn').addEventListener('click', function () {
    const range = document.createRange();
    range.selectNode(document.getElementById('signature-result'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        document.execCommand('copy');
        alert('Signature copied to clipboard!');
    } catch (err) {
        alert('Failed to copy signature.');
    }

    window.getSelection().removeAllRanges();
});

document.getElementById('copy-gmail-btn').addEventListener('click', function () {
    const signatureHtml = document.getElementById('signature-result').innerHTML;
    const tempElement = document.createElement('textarea');
    tempElement.value = signatureHtml;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
    alert('Signature HTML copied to clipboard! Now paste it in your Gmail signature.');
});
