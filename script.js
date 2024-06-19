document.getElementById('generate-btn').addEventListener('click', generateSignature);

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
    reader.onload = function (e) {
        document.getElementById('profile-pic-preview').src = e.target.result;
        document.getElementById('profile-pic-preview').style.display = 'inline';

        const noida = document.getElementById('noida');
        const gurgaon = document.getElementById('gurgaon');
        const faridabad = document.getElementById('faridabad');
        const delhi = document.getElementById('delhi');
        const chennai = document.getElementById('chennai');

        [noida, gurgaon, faridabad, delhi, chennai].forEach(el => el.style.fontWeight = 'normal');

        if (campus === 'Noida') noida.style.fontWeight = 'bold';
        if (campus === 'Gurgaon') gurgaon.style.fontWeight = 'bold';
        if (campus === 'Faridabad') faridabad.style.fontWeight = 'bold';
        if (campus === 'Delhi') delhi.style.fontWeight = 'bold';
        if (campus === 'Chennai') chennai.style.fontWeight = 'bold';

        document.getElementById('signature-name').innerText = name;
        document.getElementById('signature-designation').innerText = designation;
        document.getElementById('signature-phone').innerHTML = `<img src="phone-icon.png" alt="Phone"> ${phone}`;
        document.getElementById('signature-email').innerHTML = `<img src="email-icon.png" alt="Email"> <a href="mailto:${email}">${email}</a>`;

        const linkedinHtml = linkedin ? `<a href="${linkedin}"><img src="linkedin-icon.png" alt="LinkedIn" class="linkedin-logo"></a>` : '';
        document.getElementById('signature-name').innerHTML = `${name} ${linkedinHtml}`;

        document.getElementById('signature-result').style.display = 'block';
        document.getElementById('copy-btn').style.display = 'block';
        document.getElementById('copy-gmail-btn').style.display = 'block';
    }
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
    const signatureHtml = document.getElementById('signature-result').outerHTML;
    const gmailSignature = `-----<br>${signatureHtml}<br>-----`;

    const range = document.createRange();
    const div = document.createElement('div');
    div.innerHTML = gmailSignature;
    document.body.appendChild(div);
    range.selectNode(div);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        document.execCommand('copy');
        alert('Signature copied to clipboard for Gmail!');
    } catch (err) {
        alert('Failed to copy signature for Gmail.');
    }

    window.getSelection().removeAllRanges();
    document.body.removeChild(div);
});
