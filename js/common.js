/* =========================
// ✔ Header 
========================= */
const headerHeight = 70
const links = document.querySelectorAll('.nav a')
const sections = document.querySelectorAll('section')

// ✔ 클릭 이동
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()

        const target = document.querySelector(link.getAttribute('href'))

        window.scrollTo({
            top: target.offsetTop - headerHeight,
            behavior: 'smooth'
        })
    })
})

// ✔ active 처리
window.addEventListener('scroll', () => {
    let current = ''

    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 50

        if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id')
        }
    })

    links.forEach(link => {
        link.classList.remove('active')

        if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active')
        }
    })
})

/* =========================
// ✔ 스크롤 시 버튼 노출
========================= */
const topBtn = document.getElementById('topBtn')

// 스크롤 시 버튼 노출
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        topBtn.classList.add('show')
    } else {
        topBtn.classList.remove('show')
    }
    })

    // 클릭 시 최상단 이동
    topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

/* =========================
// ✔ tab 공통
========================= */
document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-tab-btn]');
    if (!btn) return;

    const tab = btn.closest('[data-tab]');
    if (!tab) return;

    const target = btn.dataset.tabBtn;

    // 현재 tab 내부 버튼만 선택 (중첩 보호)
    const btns = tab.querySelectorAll(':scope [data-tab-btn]');
    const panels = tab.querySelectorAll(':scope [data-tab-panel]');

    btns.forEach(el => {
        if (el.closest('[data-tab]') !== tab) return; // 하위 탭 제외
        el.classList.remove('is-active');
    });

    panels.forEach(el => {
        if (el.closest('[data-tab]') !== tab) return;
        el.classList.remove('is-active');
    });

    btn.classList.add('is-active');

    const activePanel = tab.querySelector(
        `[data-tab-panel="${target}"]`
    );

    if (activePanel) {
        activePanel.classList.add('is-active');
    }
});

/* =========================
// ✔ 
========================= */

/* =========================
// ✔ 
========================= */
