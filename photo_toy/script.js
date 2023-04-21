
    let today = new Date();

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    var format = year + "." + (("0" + month.toString()).slice(-2)) + "." + (("0" + date.toString()).slice(-2));

    document.querySelector('.f-date').innerHTML = format;


    const btn1 = document.querySelector('.btn1');
    const btn2 = document.querySelector('.btn2');
    const btn3 = document.querySelector('.btn3');
    const btn4 = document.querySelector('.btn4');

    btn1.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const result = reader.result;
                document.querySelector('#image1').style.backgroundImage = `url(${result})`;
                btn1.remove()
            };
        };
        input.click();
    });

    btn2.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const result = reader.result;
                document.querySelector('#image2').style.backgroundImage = `url(${result})`;
                btn2.remove()
            };
        };
        input.click();
    });

    btn3.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const result = reader.result;
                document.querySelector('#image3').style.backgroundImage = `url(${result})`;
                btn3.remove()
            };
        };
        input.click();
    });

    btn4.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const result = reader.result;
                document.querySelector('#image4').style.backgroundImage = `url(${result})`;
                btn4.remove()
            };
        };
        input.click();
    });

    const reset = document.querySelector('.reset');

    const store = document.querySelector('.store');

    store.addEventListener("click", () => {
        html2canvas(document.getElementById("container")).then(function (canvas) {
            var el = document.createElement("a");
            el.href = canvas.toDataURL("image/jpeg");
            el.download = format + '.jpg'; //다운로드 할 파일명 설정

            // 모바일 기기에서는 el.click() 대신, 링크를 클릭하도록 안내
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                el.target = "_blank";
                el.innerHTML = "이미지 저장하기 (클릭 후 오른쪽 상단에서 다운로드)";
                document.body.appendChild(el);
            } else {
                // 데스크탑에서는 el.click()으로 다운로드 가능
                el.click();
            }
        });
    });



    reset.addEventListener('click', () => {
        location.reload();
    });