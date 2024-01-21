setInterval(() => {
    d = new Date(); 
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; 
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);


function display_ct() {  
    var optionsIST = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone: 'Asia/Kolkata'
    };

    var optionsGMT = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone: 'Europe/London'
    };

    var optionsTokyo = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone: 'Asia/tokyo'
    };

    var optionsNY = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone: 'America/New_York'
    };

    var IST = new Date().toLocaleString('en-IN', optionsIST);
    var GMT = new Date().toLocaleString('en-GB', optionsGMT);
    var Tokyo = new Date().toLocaleString('en-GB', optionsTokyo);
    var NY = new Date().toLocaleString('en-US', optionsNY);

    document.getElementById('ist').innerHTML = IST;
    document.getElementById('gmt').innerHTML = GMT;
    document.getElementById('tokyo').innerHTML = Tokyo;
    document.getElementById('ny').innerHTML = NY;

    setTimeout(display_ct, 1000);
}





const
    allzone = document.getElementById('allzone'),
    currentTime = document.getElementById('currentTime')

currentTime.innerText = new Date().toLocaleString('en-us', { timeStyle: 'full' })

fetch('timezone.json')
    .then(res => res.json())
    .then(data => {
        data.map(e => {
            const option = document.createElement('option')
            option.innerText = e.timezone
            allzone.appendChild(option)
        })
    })
    .catch(err => console.log(err))

allzone.oninput = () => setInterval(() => time(), 1000)

function time() {
    const ctime = new Date().toLocaleString('en-us', { timeZone: allzone.value, timeStyle: 'full' })
    currentTime.innerText = ctime
}