let currentTab = 0;

const $arrowContents = document.getElementsByClassName('arrow-content');
let $tab = document.getElementsByClassName("tab");

(function() {
    // Fullpage initialization
    new fullpage('#fullpage', {
        lazyLoading: true,
        dragAndMove: true,
        onLeave: function(origin, destination, direction) {
            const $toggleArrows = document.getElementById('header-arrow');

            if (origin.index === 0 && direction ==='down'){
                $toggleArrows.classList.remove('hide');
                $toggleArrows.classList.add('show');
            }

            else if (origin.index === 1 && direction === 'up'){
                $toggleArrows.classList.add('hide');
                $toggleArrows.classList.remove('show');
            }
        }
    });

    // Arrow switch from eko video to petition

    for (let i = 0; i < $arrowContents.length; i++) {
        const elem = $arrowContents[i];
        elem.onclick = () => {
            const direction = elem.classList[1];
            if (direction === 'down') {
                fullpage_api.moveSectionDown();
            }
            if (direction === 'up') {
                fullpage_api.moveSectionUp();
            }
            return false;
        }
    }

    // Form
    showTab(currentTab);
})();

function showTab(n) {
    $tab[n].style.display = "block";

    document.getElementById("prevBtn").style.display = (n === 0) ? "none" : "inline";
    document.getElementById("nextBtn").innerHTML = (n === ($tab.length - 1)) ? "Je signe" : "Suivant";

    fixStepIndicator(n);
}

function nextPrev(n) {
    if (n === 1 && !validateForm()) return false;
    $tab[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= $tab.length) {
        document.getElementById("regForm").submit();
        return false;
    }
    showTab(currentTab);
}

function validateForm() {
    let y, i, valid = true;
    y = $tab[currentTab].getElementsByTagName("input");
    for (i = 0; i < y.length; i++) {
        if (y[i].value === "") {
            y[i].className += " invalid";
            valid = false;
        }
    }
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid;
}

function fixStepIndicator(n) {
    let i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
}
