// li 요소를 선택합니다.
var liElements = document.querySelectorAll('.flexslider-controls li');
var currentIndex = 0; // 현재 활성화된 li의 인덱스
var intervalId; // setInterval의 ID를 저장할 변수

// li 요소에 클릭 이벤트 리스너를 추가합니다.
liElements.forEach(function(li, index) {
    li.addEventListener('click', function() {
        // 모든 li 요소의 색상을 초기화합니다.
        liElements.forEach(function(item) {
            item.classList.remove('flex-active');
        });

        // 클릭한 li 요소의 색상을 빨간색으로 변경하고 클래스를 추가합니다.
        li.classList.add('flex-active');
        // 사용자 클릭 시 자동 변경 중지
        clearInterval(intervalId);
        // 클릭한 li 요소의 인덱스를 찾아 currentIndex 업데이트
        currentIndex = index;
        // 자동으로 li 색상 변경 시작
        intervalId = setInterval(autoChangeColor, 2000); // 2초 주기
    });
});

// 자동으로 li 색상 변경하는 함수
function autoChangeColor() {
    // 현재 활성화된 li의 색상을 초기화합니다.
    liElements[currentIndex].classList.remove('flex-active');
    // 다음 li의 인덱스 계산
    currentIndex = (currentIndex + 1) % liElements.length;
    // 다음 li를 활성화한 색상으로 변경합니다.
    liElements[currentIndex].classList.add('flex-active');
}

// 페이지가 로드될 때 첫 번째 li를 활성화합니다.
liElements[currentIndex].classList.add('flex-active');
// 일정 시간마다 자동으로 li 색상을 변경합니다.
intervalId = setInterval(autoChangeColor, 2000); // 2초 주기

const next = () => {
    if (current >= images.length - 1) return;
    slider.style.transition = '400ms ease-in-out transform';
    current++;
    slider.style.transform = `translateX(${-imgSize * current}px)`;

    for (let i = 0; i < dots.length; i++) {
        if (dots[i].dataset.index == current) {
            dots[i].classList.add('active');
        } else if (current === 4) {
            dots[i].classList.remove('active');
            dots[0].classList.add('active');
        }
        else {
            dots[i].classList.remove('active');
        }
    }
}

setInterval(next, 2000);

nextBtn.addEventListener('click', () => {
    next()
})