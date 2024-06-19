function generateSignature() {
    const name = document.getElementById('name').value;
    const designation = document.getElementById('designation').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const linkedin = document.getElementById('linkedin').value;
    const profilePic = document.getElementById('profilePic').files[0];
    const campus = document.getElementById('campus').value;

    if (!name || !designation || !phone || !email || !profilePic || !campus) {
        alert('Please fill in all mandatory fields.');
        return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(profilePic);
    reader.onloadend = function () {
        const profilePicUrl = reader.result;

        const bolds = {
            "Noida": "normal",
            "Gurgaon": "normal",
            "Faridabad": "normal",
            "Delhi": "normal",
            "Chennai": "normal",
        };
        bolds[campus] = "bold";

        let linkedinHtml = '';
        if (linkedin) {
            linkedinHtml = `
            <div class="vertical-line-small"></div>
            <a href="${linkedin}" target="_blank">
                <img src="linkedin-icon.png" alt="LinkedIn" class="linkedin-logo">
            </a>
            `;
        }

        const signatureHtml = `
        <div class="signature-container">
            <div class="left-column">
                <img src="${profilePicUrl}" alt="Profile Picture" class="profile-pic">
                <img src="school-logo.png" alt="School Logo" class="school-logo">
                <div class="school-locations">
                    <span style="font-weight: ${bolds.Noida};">Noida</span> | 
                    <span style="font-weight: ${bolds.Gurgaon};">Gurgaon</span> | 
                    <span style="font-weight: ${bolds.Faridabad};">Faridabad</span> | 
                    <span style="font-weight: ${bolds.Delhi};">Delhi</span> | 
                    <span style="font-weight: ${bolds.Chennai};">Chennai</span>
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
                    <a href="https://www.instagram.com/shivnadarschool"><img src="instagram-icon.png" alt="Instagram" class="instagram"></a>
                    <a href="https://www.youtube.com/shivnadarschool"><img src="youtube-icon.png" alt="YouTube"></a>
                    <a href="https://www.linkedin.com/school/shiv-nadar-school/"><img src="linkedin-icon.png" alt="LinkedIn"></a>
                    <a href="https://www.twitter.com/shivnadarschool"><img src="twitter-icon.png" alt="Twitter"></a>
                </div>
            </div>
        </div>
        `;
        document.getElementById('signature-result').innerHTML = signatureHtml;
    };
}

function copyToClipboard() {
    const signatureResult = document.getElementById('signature-result');
    const range = document.createRange();
    range.selectNode(signatureResult);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand('copy');
    window.getSelection().removeAllRanges(); // to deselect
    alert('Signature copied to clipboard. You can now paste it into your Gmail signature settings.');
}
