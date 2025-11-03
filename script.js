// Автоматическая подсветка активного пункта меню
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  const currentPage =
    window.location.pathname.split('/').pop().toLowerCase() || 'index.html';

  links.forEach((link) => {
    const href = link.getAttribute('href').toLowerCase();

    // сначала снимаем активность со всех
    link.classList.remove('active');

    // если путь совпадает — добавляем актив
    if (href === currentPage) {
      link.classList.add('active');
    }

    // отдельный случай: если открыта просто /
    if (currentPage === '' && href === 'index.html') {
      link.classList.add('active');
    }
  });
});
// passport.js — переключаем язык паспорта (Сальвадор Дали)

document.addEventListener('DOMContentLoaded', function () {
  const langBtn = document.getElementById('passportLangBtn');

  // элементы паспорта
  const issuer1El = document.getElementById('issuer1');
  const issuer2El = document.getElementById('issuer2');
  const issuedEl = document.getElementById('issued');
  const secondNameEl = document.getElementById('secondName');
  const nameEl = document.getElementById('Name');
  const middleEl = document.getElementById('middle');
  const bdEl = document.getElementById('bd');
  const birthPlaceEl = document.getElementById('birthPlace');

  // если какой-то из элементов не найден, прекращаем выполнение
  if (
    !langBtn ||
    !issuer1El ||
    !issuer2El ||
    !issuedEl ||
    !secondNameEl ||
    !nameEl ||
    !middleEl ||
    !bdEl ||
    !birthPlaceEl
  ) {
    return;
  }

  // ————— ДАННЫЕ НА КИРИЛЛИЦЕ —————
  const passportCyr = {
    issuer1: 'МИНИСТЕРСТВО ИСКУССТВ',
    issuer2: 'ГОРОДА ФИГЕРАС',
    // ТЕПЕРЬ: текст + <span> с кодом, который будет childNodes[1]
    issued: '11.05.1904<span class="passport-code">1904-23</span>',
    secondName: 'ДАЛИ',
    name: 'САЛЬВАДОР',
    middle: 'ДОМЕНЕК',
    bd: '11.05.1904',
    birthPlace: 'Г. ФИГЕРАС, ИСПАНИЯ',
  };

  // ————— ДАННЫЕ НА ЛАТИНИЦЕ / ИСПАНСКОМ —————
  const passportLat = {
    issuer1: 'MINISTERIO DE ARTE',
    issuer2: 'CIUDAD DE FIGUERAS',
    issued: '11.05.1904<span class="passport-code">1904-23</span>',
    secondName: 'DALI',
    name: 'SALVADOR',
    middle: 'DOMÈNECH',
    bd: '11.05.1904',
    birthPlace: 'FIGUERAS, ESPAÑA',
  };

  let isLatin = false; // флаг текущего состояния

  function applyPassportData(data) {
    issuer1El.textContent = data.issuer1;
    issuer2El.textContent = data.issuer2;
    issuedEl.innerHTML = data.issued; // оставляем span
    secondNameEl.textContent = data.secondName;
    nameEl.textContent = data.name;
    middleEl.textContent = data.middle;
    bdEl.textContent = data.bd;
    birthPlaceEl.textContent = data.birthPlace;
  }

  // устанавливаем исходное состояние (русская версия)
  applyPassportData(passportCyr);

  // переключатель языка
  langBtn.addEventListener('click', function (e) {
    e.preventDefault();
    isLatin = !isLatin;
    applyPassportData(isLatin ? passportLat : passportCyr);
  });
});
// ===== Алгоритмическая задача =====

// Проверка условия A·√2 ≤ D
function checkBeam(D, A) {
  if (D <= 0 || A <= 0) {
    return { ok: null, maxA: null };
  }
  const maxA = D / Math.sqrt(2);
  const ok = A <= maxA + 1e-9;
  return { ok, maxA };
}

// Обработчик клика по кнопке
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('run');
  const out = document.getElementById('out');
  const details = document.getElementById('details');

  btn.addEventListener('click', () => {
    const D = parseFloat(document.getElementById('d').value);
    const A = parseFloat(document.getElementById('a').value);
    const res = checkBeam(D, A);

    if (res.ok === null) {
      out.textContent = 'Ошибка ввода';
      details.textContent = 'Введите положительные значения D и A.';
      details.style.color = '#c00';
      return;
    }

    if (res.ok) {
      out.textContent = '✅ Да, можно выпилить такой брус.';
      details.textContent = `При диаметре D = ${D.toFixed(
        2
      )} максимальная ширина квадратного бруса ≈ ${res.maxA.toFixed(2)}.`;
      details.style.color = '#1c1c1c';
    } else {
      out.textContent = '❌ Нет, такой брус выпилить нельзя.';
      details.textContent = `Максимально допустимая ширина при D = ${D.toFixed(
        2
      )} равна ${res.maxA.toFixed(2)}.`;
      details.style.color = '#c00';
    }
  });
});
