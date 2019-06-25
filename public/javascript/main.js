(function() {
    new fullpage('#fullpage', {
        lazyLoading: true,
        dragAndMove: true,
        onLeave: function(origin, destination, direction) {
            const $toggleArrows = document.getElementById('header-arrow');

            if (origin.index == 0 && direction =='down'){
                $toggleArrows.classList.remove('hide');
            }

            else if (origin.index == 1 && direction == 'up'){
                $toggleArrows.classList.add('hide');
            }
        }
    });

    const $arrowContents = document.getElementsByClassName('arrow-content');

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
})();
