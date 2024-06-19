function generateSignature() {
    const name = document.getElementById('name').value;
    const designation = document.getElementById('designation').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const linkedin = document.getElementById('linkedin').value;
    const campus = document.getElementById('campus').value;
    const profilePicInput = document.getElementById('profile-pic').files[0];
    const reader = new FileReader();

    reader.onloadend = function() {
        const profilePicBase64 = reader.result;
        const linkedinHtml = linkedin ? `
            <div class="vertical-line"></div>
            <a href="${linkedin}" target="_blank">
                <img src="linkedin-icon.png" alt="LinkedIn" class="linkedin-logo">
            </a>
        ` : '';

        const signatureHtml = `
            <div class="signature-container">
                <div class="left-column">
                    <img src="${profilePicBase64}" alt="Profile Picture" class="profile-pic">
                    <img src="school-logo.png" alt="School Logo" class="school-logo">
                    <div class="school-locations">
                        <span style="font-weight: ${campus === 'Noida' ? 'bold' : 'normal'};">Noida</span> | 
                        <span style="font-weight: ${campus === 'Gurgaon' ? 'bold' : 'normal'};">Gurgaon</span> | 
                        <span style="font-weight: ${campus === 'Faridabad' ? 'bold' : 'normal'};">Faridabad</span> | 
                        <span style="font-weight: ${campus === 'Delhi' ? 'bold' : 'normal'};">Delhi</span> | 
                        <span style="font-weight: ${campus === 'Chennai' ? 'bold' : 'normal'};">Chennai</span>
                    </div>
                </div>
                <div class="vertical-line"></div>
                <div class="signature-details">
                    <div class="name-linkedin">
                        <span class="name" id="name">${name}</span>
                        ${linkedinHtml}
                    </div>
                    <span class="designation" id="designation">${designation}</span>
                    <div class="contact-info">
                        <div>
                            <img src="phone-icon.png" alt="Phone Icon"> 
                            <a href="tel:${phone}" id="phone">${phone}</a>
                        </div>
                        <div>
                            <img src="email-icon.png" alt="Email Icon"> 
                            <a href="mailto:${email}" id="email">${email}</a>
                        </div>
                        <div>
                            <img src="website-icon.png" alt="Web Icon"> 
                            <a href="https://shivnadarschool.edu.in/" id="website">https://shivnadarschool.edu.in/</a>
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

    if (profilePicInput) {
        reader.readAsDataURL(profilePicInput);
    }
}
