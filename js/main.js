$(function () {



    /****************** Rating range ******************/
    (function () {
        $("#range").slider({
            range: "min",
            min: 0,
            max: 10,
            value: 9,
            slide: function (e, ui) {
                $(".ui-slider-handle").html(ui.value);
                $(".rate-wrap input.hidden").val(ui.value);
            }
        });

        $(".ui-slider-handle").html("9");

    }).call(this);

    /****************** Rating range ******************/

    let contentLinks = document.querySelectorAll(".news-details.content p a")
    for (let i = 0; i < contentLinks.length; i++) {
        if (contentLinks[i].textContent.indexOf(":") > -1) {
            let content = contentLinks[i].textContent.split(':')[1];
            contentLinks[i].textContent = content
        }
    }

    const breadLinks = document.querySelectorAll(".bread-links .bread__link")
    let breadWidth = 0;
    let breadLinkWords = []
    for (let i = 0; i < breadLinks.length; i++) {
        breadWidth += $(breadLinks[i]).outerWidth()
        breadLinkWords = breadLinks[i].innerText.split(' ')
        if (breadLinkWords.length > 6) {
            breadLinkWords.splice(5, 0, "...")
            let result = breadLinkWords.slice(0, 6);
            breadLinks[i].innerHTML = result.join(" ")
        }
    }

    /* const breadLinks = document.querySelectorAll(".bread-links .bread__link")
    let breadWidth = 0;
    for (let i = 0; i < breadLinks.length; i++) {
        breadWidth += $(breadLinks[i]).outerWidth()
        breadLinkWords = breadLinks[i].innerText.split(' ')
        if (breadLinkWords.length > 6 && breadLinkWords.length <= 12) {
            breadLinkWords.splice(5, 0, "<br>")
            breadLinks[i].innerHTML = breadLinkWords.join(" ")
        } else if (breadLinkWords.length > 12) {
            breadLinkWords.splice(5, 0, "<br>")
            breadLinkWords.splice(10, 0, "<br>")
            breadLinks[i].innerHTML = breadLinkWords.join(" ")
        }
    } */

    const bannerLinks = document.querySelectorAll(".banner-soc a")

    for (let i = 0; i < bannerLinks.length; i++) {
        $(bannerLinks[i]).hasClass("footer__soclink") ? $(bannerLinks[i]).removeClass("footer__soclink") : null
        if ($(bannerLinks[i]).hasClass("twit_link")) {
            $(bannerLinks[i]).addClass("twitter")
            bannerLinks[i].innerHTML = "<img src='/local/templates/.default/images/icons/twitter.svg' alt='Icon' />"

        }
        if ($(bannerLinks[i]).hasClass("insta_link")) {
            $(bannerLinks[i]).addClass("instagram")
            bannerLinks[i].innerHTML = "<img src='/local/templates/.default/images/icons/instagram.svg' alt='Icon' />"
        }
    }


    window.addEventListener('scroll', () => {
        if (((document.documentElement.scrollHeight - document.documentElement.clientHeight) - window.scrollY) <= 500) {

            $(".share-inner, .share-inner-bottom").css("bottom", "-295px")

        } else {
            $(".share-inner, .share-inner-bottom").css("bottom", "58px")
        }
    })


    const infoLink = document.querySelectorAll(".info__text.link");
    let numArr = []
    for (let i = 1; i < 10; i++) {
        numArr.push(33 * i)
    }
    let linkTextArr = [];
    for (let i = 0; i < infoLink.length; i++) {
        linkTextArr = infoLink[i].innerText.split('');
        for (let k = 0; k < numArr.length; k++) {
            if (linkTextArr.length >= numArr[k]) {
                linkTextArr.splice(numArr[k] - 1, 0, "<br>");
            }
        }
        infoLink[i].innerHTML = linkTextArr.join('');
    }




    $(document).ready(function () {

        const regionExtra = document.querySelectorAll(".advanced__title")
        const regionBlock = document.querySelectorAll(".advanced-block")
        let regionCount = 0;
        for (let i = 0; i < regionExtra.length; i++) {
            if (regionExtra[i].textContent.indexOf("Регион") > -1) {
                regionCount++
            }
            if (regionCount > 1) {
                regionBlock[i].style.display = "none"
            }
        }
        $(".modal-input__text").each(function () {
            $(this).html($(this).html().replace(" (Redesign)", ""));
        });
        $(".search__select").val(function (i, v) {
            return v.replace(" (Redesign)", "");
        });
    });



    const surveyStatProgress = document.querySelectorAll(".stat-show");

    for (let i = 0; i < surveyStatProgress.length; i++) {
        surveyStatProgress[i].style.width = `${surveyStatProgress[i].dataset.percent}%`;
    }


    $(".services-item").eq(2).attr("data-link", "/services/reestr/reestr-turistskikh-obektov/reestr-akkreditovannykh-organizatsiy/")
    $(".survey-item.spec").attr("data-link", "https://russia.travel/")

    const tag = document.querySelectorAll(".header .tags-checkboxes label")
    for (let i = 0; i < tag.length; i++) {
        i > 10 ? $(tag[i]).addClass("more") : null
    }

    const tagResult = document.querySelectorAll(".result .tags-checkboxes label")
    for (let i = 0; i < tagResult.length; i++) {
        i > 5 ? $(tagResult[i]).addClass("more") : null
    }

    const department = document.querySelectorAll(".department")
    for (let u = 0; u < department.length; u++) {
        if (u >= 2) {
            department[u].classList.add("extra_worker")
        }
    }


    if (breadWidth > 743) {
        $(breadLinks[0]).after($('<div />').addClass('extrabread'));
        $(breadLinks[0]).after($('<div />').addClass('bread_click bread__link').html(`<svg class="dots" width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.75 0.5C0.925 0.5 0.25 1.175 0.25 2C0.25 2.825 0.925 3.5 1.75 3.5C2.575 3.5 3.25 2.825 3.25 2C3.25 1.175 2.575 0.5 1.75 0.5ZM12.25 0.5C11.425 0.5 10.75 1.175 10.75 2C10.75 2.825 11.425 3.5 12.25 3.5C13.075 3.5 13.75 2.825 13.75 2C13.75 1.175 13.075 0.5 12.25 0.5ZM7 0.5C6.175 0.5 5.5 1.175 5.5 2C5.5 2.825 6.175 3.5 7 3.5C7.825 3.5 8.5 2.825 8.5 2C8.5 1.175 7.825 0.5 7 0.5Z" fill="#1F5BFF"/>
        </svg><svg width="3" height="4" viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1.5" cy="2" r="1" stroke="#1F5BFF" stroke-opacity="0.15"/>
        </svg>`).click(() => $(".extrabread").toggleClass("on")));
        for (let k = 1; k < breadLinks.length - 1; k++) {
            $('.extrabread')
                .append(breadLinks[k])
        }
    }

    $(".rate-wrap .link__btn.blue").click(() => {
        $(".rate-wrap .modal-item").hide()
        $(".rate-wrap .grate").show()
    })


    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
            $('.header-nav').addClass('h-fixed');
        } else {
            $('.header-nav').removeClass('h-fixed');
        }
    });

    $('.department').each(() => {
        $(".department:not(:nth-child(1), :nth-child(2)) .responsible-block").attr("data-link", "#/")
        $(".department:not(:nth-child(1), :nth-child(2)) .responsible__name").attr("href", "#/")
    });

    const links = document.querySelectorAll("a")
    const searchInput = document.querySelectorAll(".search__input");
    const searchClear = document.querySelectorAll(".search__clear");
    const menuLink = document.querySelectorAll(".menu-item")
    const arrow = document.querySelectorAll(".menu__arrow__icon")
    const subWrap = document.querySelectorAll(".sub-wrap")
    const secondMenuLink = document.querySelectorAll(".menu-item--second.unempty")
    const thirdMenuLink = document.querySelectorAll(".menu-item--third.unempty")
    const fmLink = document.querySelectorAll(".fm--m-item.unempty")
    const fmLinkSecond = document.querySelectorAll(".fm--m-item--second.unempty")
    const thirdIcon = document.querySelectorAll(".menu__third__icon")
    const fourthIcon = document.querySelectorAll(".menu__fourth__icon")
    const fmIcon = document.querySelectorAll(".fm--m__icon")
    const fmIconSecond = document.querySelectorAll(".fm--m__second__icon")
    const thirdMenu = document.querySelectorAll(".menu-third")
    const fourthMenu = document.querySelectorAll(".menu-fourth")
    const secondFm = document.querySelectorAll(".fm--m-second")
    const thirdFm = document.querySelectorAll(".fm--m-third")
    const ipadClose = document.querySelectorAll(".ipad__closemenu")
    const listSecond = document.querySelectorAll(".list-second");
    const listThird = document.querySelectorAll(".list-third");
    const listLinkSecond = document.querySelectorAll(".list-item-second.unempty");
    const listLink = document.querySelectorAll(".list-item.unempty")
    const listSecondICon = document.querySelectorAll(".list__third__icon")
    const listICon = document.querySelectorAll(".list__second__icon")
    const inputSelect = document.querySelectorAll(".search__select");
    const selectArrow = document.querySelectorAll(".advanced-list__icon");
    const select = document.querySelectorAll(".select");
    const listItem = document.querySelectorAll(".select li");
    const input = document.querySelectorAll(".search-advanced-items input");
    const advSearchInputClear = document.querySelectorAll(".search-advanced-items .search__clear")
    const errorFormInputs = document.querySelectorAll(".error .submit__input")
    const multiSelect = document.querySelectorAll(".multiselect")
    const multiInput = document.querySelectorAll(".multi .search__select")
    const multiArrow = document.querySelectorAll(".multi .advanced-list__icon")
    const multiListText = document.querySelectorAll(".multi .modal-input__text")
    const multiCheck = document.querySelectorAll(".multi input[type='checkbox']")


    setTimeout(function () {
        $('.cookie').addClass('active')
    }, 5000);


    $('.close-cookie').on('click', function () {
        $('.cookie').removeClass('active')
    })

    setTimeout(function () {
        $('.feedback').addClass('active')
    }, 10000);


    $('.close-feedback').on('click', function () {
        $('.feedback').removeClass('active')
    })
    $('.open-feedback').on('click', function () {
        $('.feedbackForm').addClass('active')
    })


    $('.select-select').each(function () {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'), duration = 450; // длительность анимации 

        _this.hide();
        _this.wrap('<div class="select-select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }

        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function () {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(duration);

                selectItem.on('click', function () {
                    let chooseItem = $(this).data('value');

                    $('select-select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text($(this).find('span').text());

                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                    $(".advanced__reset, .advanced__submit").prop("disabled", false);
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });


    let checkedFilterSelect = []
    if (multiSelect.length > 1) {
        for (let i = 0; i < multiSelect.length; i++) {
            $(multiInput[i], multiArrow[i]).click(() => {
                $(multiSelect[i]).slideToggle();
            })
        }
    } else {
        $(".multi .search__select, .multi .advanced-list__icon").click(() => {
            $(".multiselect").slideToggle();
        })
        for (let j = 0; j < multiCheck.length; j++) {
            $(multiCheck[j]).change(() => {
                if ($(multiCheck[j]).prop("checked") == true) {
                    checkedFilterSelect.push(multiListText[j])
                    $(".multi .search__select").val(checkedFilterSelect[0].textContent)
                    $(".multi .quantity").show()
                    $(".multi .quantity").text(checkedFilterSelect.length)
                    $(".multi .search__clear").show()
                    $(".search-filter-panel .link__btn.streight, .advanced__submit").prop("disabled", false)
                }
                else {
                    let indexCheck = checkedFilterSelect.indexOf(multiListText[j]);
                    if (indexCheck > -1) {
                        checkedFilterSelect.splice(indexCheck, 1);
                        $(".multi .quantity").text(checkedFilterSelect.length)
                    }
                    if (checkedFilterSelect.length >= 1) {
                        for (let k = 0; k < checkedFilterSelect.length; k++) {
                            $(".multi .search__select").val($(checkedFilterSelect[0]).text())
                        }
                        $(".search-filter-panel .link__btn.streight, .advanced__submit").prop("disabled", false)
                    } else {
                        $(".multi .quantity").hide()
                        $(".multi .search__clear").hide()
                        $(".multi .search__select").val('')
                        if (
                            $(".filter-checkboxes input").prop('checked') == false
                            && $(".typical-filter #filter_to").val() == ''
                            && $(".typical-filter #filter_from").val() == ''
                            && $(".typical-filter .search__select").val() == '') {
                            $(".search-filter-panel .link__btn.streight, .search-filter-panel .advanced__submit").prop("disabled", true)
                        }
                    }
                }
            })
        }
        $(".multi .search__clear").click(() => {
            $(".multi input[type='checkbox']").prop("checked", false);
            $(".multi .quantity").hide()
            $(".multi .search__clear").hide()
            $(".multi .search__select").val('')
            checkedFilterSelect = []
            if (
                $(".filter-checkboxes input").prop('checked') == false
                && $(".typical-filter #filter_to").val() == ''
                && $(".typical-filter #filter_from").val() == ''
                && $(".typical-filter .search__select").val() == '') {
                $(".search-filter-panel .link__btn.streight, .search-filter-panel .advanced__submit").prop("disabled", true)
            }
        })


    }


    window.checkEmptyInput = (inputs, disabledBtn, filterSpec) => {
        let emptyInputs = [];
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value === "") {
                emptyInputs.push(inputs[i]);
            }
        }
        if (emptyInputs.length === inputs.length) {
            $(filterSpec).removeClass("active")
            $(disabledBtn).prop("disabled", true);
        } else {
            $(disabledBtn).prop("disabled", false);
        }

    }

    for (let i = 0; i < errorFormInputs.length; i++) {
        $(errorFormInputs[i]).on("keyup", () => {
            checkEmptyInput(errorFormInputs, ".error-form button, .error-form input")
        })
    }



    for (let i = 0; i < links.length; i++) {
        if (links[i].innerText == '' && $(links[i]).find('img').length <= 0 && $(links[i]).find('svg').length <= 0) {
            $(links[i]).remove()
        }
    }



    var dateFormat = "mm/dd/yy",
        from = $("#from")
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1,
                onSelect: function () {
                    $("#to").datepicker("option", "minDate",
                        $("#from").datepicker("getDate"));
                }
            })
            .on("change", function () {
                to.datepicker("option", "minDate", getDate(this));
            }),
        to = $("#to").datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1
        })
            .on("change", function () {
                from.datepicker("option", "maxDate", getDate(this));
            }),
        from_filter = $("#filter_from")
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1,
                onSelect: function () {
                    $("#filter_to").datepicker("option", "minDate",
                        $("#filter_from").datepicker("getDate"));
                }
            })
            .on("change", function () {
                to_filter.datepicker("option", "minDate", getDate(this));
                checkEmptyInput(document.querySelectorAll(".filter-block input"), ".search-filter-panel .link__btn.streight, .advanced__submit")
            }),
        to_filter = $("#filter_to").datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1
        })
            .on("change", function () {
                from_filter.datepicker("option", "maxDate", getDate(this));
                checkEmptyInput(document.querySelectorAll(".filter-block input"), ".search-filter-panel .link__btn.streight, .advanced__submit")
            }),
        from_advanced = $("#advanced_from")
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1,
                onSelect: function () {
                    $("#advanced_to").datepicker("option", "minDate",
                        $("#advanced_from").datepicker("getDate"));
                }
            })
            .on("change", function () {
                to_advanced.datepicker("option", "minDate", getDate(this));
                $(".search-advanced__btn").addClass("active");
                checkEmptyInput(input, ".advanced__reset, .advanced__submit", ".search-advanced__btn")
            }),
        to_advanced = $("#advanced_to").datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1
        })
            .on("change", function () {
                from_advanced.datepicker("option", "maxDate", getDate(this));
                $(".search-advanced__btn").addClass("active");
                checkEmptyInput(input, ".advanced__reset, .advanced__submit", ".search-advanced__btn")
            }),
        from_events = $("#events_from")
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1,
                onSelect: function (selectedDate) {
                    $('#events_to').datepicker('option', 'minDate', selectedDate);
                    setTimeout(function () { $('#events_to').focus(); }, 0);
                }
            }),
        to_events = $("#events_to").datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
            onSelect: function (selectedDate) {
                $('#events_from').datepicker('option', 'maxDate', selectedDate);
            }
        });

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }

        return date;
    }

    $.fn.extend({
        toggleText: function (a, b) {
            return this.html(this.html() == b ? a : b);
        }
    });

    new Swiper('.layouts-slider');


    $(".share-wrapper .share-icon__link").click(() => {
        $(".share-inner").toggleClass('active');
    })
    $(".share-wrapper .share-icon__link-bottom").click(() => {
        $(".share-inner-bottom").toggleClass('active');
    })


    $('.tabs-header .tabs-header__item').click(function (e) {
        e.preventDefault();
        $('.tabs-header__item').removeClass('active');
        $(this).addClass('active')
    })
    $('.anchor').on('click', function (event) {
        event.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 700)
    })

    $('.tabs-triggers__item').click(function (e) {
        e.preventDefault();
        $(".tabs-content .point").hide();

        $('.tabs-triggers__item').removeClass('active');
        $('.tabs-content__item').removeClass('active');

        $(this).addClass('active');
        $($(this).attr('href')).addClass('active');
    });

    const openCalendar = (btn, calendar) => {

        $(btn).click(function () {
            $(calendar).datepicker("show");
        });
    }

    openCalendar(".date-block .from__icon", "#from")
    openCalendar(".date-block .to__icon", "#to")
    openCalendar(".advanced-item .from__icon", "#advanced_from")
    openCalendar(".advanced-item .to__icon", "#advanced_to")
    openCalendar(".filter-item .from__icon", "#filter_from")
    openCalendar(".filter-item .to__icon", "#filter_to")
    openCalendar(".links-filter .links-calendar-start", "#events_from")

    $(".more__btn").click(() => {
        $(".header .tags-checkboxes label.more").toggle();
        $(".header .tags-checkboxes .tag__clear").toggleClass("show");
        $(".header .tags-checkboxes .more__btn").toggleText('Смотреть больше', 'Скрыть');
    })
    $(".smi__more__btn").click(() => {
        $(".mass-checkboxes label.more").toggle();
        $(".mass-checkboxes .tag__clear").toggleClass("show");
    })
    $(".result .more-tags__btn").click(() => {
        $(".result .tags-checkboxes label.more").toggle();
    })

    const tags = document.querySelectorAll(".tags-checkboxes input")
    const filterTags = document.querySelectorAll(".filter-checkboxes input")
    const massTags = document.querySelectorAll(".mass-checkboxes input")

    const clearTagFunc = (tag, clearBtn) => {
        let tagArr = []
        for (let i = 0; i < tag.length; i++) {
            $(tag[i]).change(() => {
                if ($(tag[i]).prop("checked") == true) {
                    tagArr.push(tag[i])
                } else {
                    let indexCheck = tagArr.indexOf(tag[i]);
                    if (indexCheck > -1) {
                        tagArr.splice(indexCheck, 1);
                    }
                }
                tagArr.length
                    ? $(clearBtn).addClass("active")
                    : $(clearBtn).removeClass("active")
            })
        }
    }

    clearTagFunc(tags, ".header .tag__clear")
    clearTagFunc(filterTags, ".filter-block .tag__clear")
    clearTagFunc(massTags, ".mass-checkboxes .tag__clear")

    $(".header .tag__clear").on("click", () => {
        $(".tags-checkboxes input").prop("checked", false)
        $(".header .tag__clear").removeClass("active")
    })

    $(".mass-checkboxes .tag__clear").on("click", () => {
        $(".mass-checkboxes input").prop("checked", false)
        $(".mass-checkboxes .tag__clear").removeClass("active")
    })

    $(".filter-block .tag__clear").on("click", () => {
        $(".filter-checkboxes input").prop("checked", false)
        $(".filter-block .tag__clear").removeClass("active")
        if (
            $(".filter-checkboxes input").prop('checked') == false
            && $(".typical-filter #filter_to").val() == ''
            && $(".typical-filter #filter_from").val() == ''
            && $(".typical-filter .search__select").val() == '') {
            $(".search-filter-panel .link__btn.streight, .search-filter-panel .advanced__submit").prop("disabled", true)
        }
    })



    if ($(window).width() > 992) {
        $(".search__input").not(".search-type .search__input").focus(function () {
            $(this).parent().css("border", "2px solid #1F5BFF")
        });
        $(".search__input").not(".search-type .search__input").focusout(function () {
            $(this).parent().css("border", "2px solid #ffffff")
        });
    }




    if ($(window).width() > 785) {

        $(".search-type .search__input").on("input", function () {

            if ($(".search-type .search__input").val() != '') {
                $(".input-block .search__submit").not(".search__submit.moment").show()
                $(".input-block .search__submit").not(".search__submit.moment").css("animation", "fadeInRight 0.6s");
            } else {
                $(".input-block .search__submit").not(".search__submit.moment").css("animation", "fadeOutRight 0.6s");
                setTimeout(() => {
                    $(".input-block .search__submit").not(".search__submit.moment").hide(0)
                }, 600);
            }
        })

        $(".search-type .search__clear").click(() => {
            $(".search-type .input-block .search__submit").not(".search__submit.moment").css("animation", "fadeOutRight 0.6s");
            setTimeout(() => {
                $(".search-type .input-block .search__submit").not(".search__submit.moment").hide(0)
            }, 600);
        })
        for (let i = 0; i < searchInput.length; i++) {
            $(searchInput[i]).on('input', function () {
                if ($(searchInput[i]).val() != '') {
                    $(searchClear[i]).show()
                    $(searchClear[i]).css("animation", "fadeInRight 1s");
                } else {
                    $(searchClear[i]).css("animation", "fadeOutRight 0.6s");
                    setTimeout(() => {
                        $(searchClear[i]).hide(0)
                    }, 600);
                }
            });
            $(searchInput[0]).on('input', function () {
                if ($(searchInput[0]).val() != '') {
                    $(".search__btn").show()
                    $(".search__btn").css("animation", "fadeInRight 0.6s");
                } else {
                    $(".search__btn").css("animation", "fadeOutRight 0.6s");
                    setTimeout(() => {
                        $(".search__btn").hide(0)
                    }, 600);
                }
            });

            $(searchClear[i]).click(() => {
                $(searchInput[i]).val('');
                $(searchClear[i]).css("animation", "fadeOutRight 0.6s");
                setTimeout(() => {
                    $(searchClear[i]).hide(0)
                }, 600);

            })
            $(searchClear[0]).click(() => {
                $(".search__btn").css("animation", "fadeOutRight 0.6s");
                setTimeout(() => {
                    $(".search__btn").hide(0)
                }, 600);
            })
        }
    }

    if ($(window).width() <= 785) {
        for (let i = 0; i < searchInput.length; i++) {
            $(searchInput[i]).on('input', function () {
                if ($(searchInput[i]).val() != '') {
                    $(searchClear[i]).show()
                    $(searchClear[i]).css("animation", "fadeInRight 1s");
                } else {
                    $(searchClear[i]).css("animation", "fadeOutRight 0.6s");
                    setTimeout(() => {
                        $(searchClear[i]).hide(0)
                    }, 600);
                }
            });
            $(searchClear[i]).click(() => {
                $(searchInput[i]).val('');
                $(searchClear[i]).css("animation", "fadeOutRight 0.6s");
                setTimeout(() => {
                    $(searchClear[i]).hide(0)
                }, 600);
            })
        }

    }

    $(".search__advanced").click(() => {
        $(".search__advanced").toggleClass("active")
        $(".search__advanced").toggleText('<img src="images/icons/search_wide.svg" alt="Icon">Расширенный поиск', '<img src="images/icons/search_wideactive.svg" alt="Icon">Скрыть настройки');
        $(".search-wideblock").slideToggle(300);
    })

    if ($(window).width() >= 785) {
        $(".header-search").click(() => {
            $(".header-widesearch").slideToggle(300);
            $('.search__input')[0].focus();
            $(".sub-wrap").addClass("dnone")
            $(".menu__link").removeClass("active")
            $(".ipad__closemenu").removeClass("active")
            $(".search__zoom__img").attr("src") == "images/icons/search_zoom.svg"
                ? $(".search__zoom__img").attr("src", "images/icons/search_close.svg")
                : $(".search__zoom__img").attr("src", "images/icons/search_zoom.svg");
        })
    } else {
        $(".header-search").click(() => {
            $(".header-widesearch").animate({
                right: "0"
            });
            $('.search__input').focus();
        })
    }



    if ($(window).width() > 992 && $(window).width() <= 1024) {
        for (let i = 0; i < menuLink.length; i++) {
            $(menuLink[i]).click(() => {
                $(".ipad__closemenu").not(ipadClose[i]).removeClass("active")
                $(ipadClose[i]).toggleClass("active")
                $(".sub-wrap").not(subWrap[i]).hide();
                $(subWrap[i]).toggle()
            })

        }
    }





    if ($(window).width() <= 992) {
        for (let i = 0; i < menuLink.length; i++) {
            menuLink[i].addEventListener("click", () => {
                $(menuLink[i]).toggleClass("active");
                $(arrow[i]).toggleClass("active");
                $(subWrap[i]).slideToggle(300);

            })
        }
        if (secondMenuLink.length > 0) {
            for (let i = 0; i < secondMenuLink.length; i++) {
                secondMenuLink[i].addEventListener("click", () => {
                    $(secondMenuLink[i]).toggleClass("active");
                    $(thirdMenu[i]).slideToggle(300);
                    $(thirdIcon[i]).attr("src") == "images/mobile/menu_plus.svg"
                        ? $(thirdIcon[i]).attr("src", "images/mobile/menu_minus.svg")
                        : $(thirdIcon[i]).attr("src", "images/mobile/menu_plus.svg");

                })
            }
        } else {
            $(".menu__second__link.unempty").click(() => {
                $(".menu__second__link.unempty").toggleClass("active");
                $(".menu-third").slideToggle(300);
                $(".menu__third__icon").attr("src") == "images/mobile/menu_plus.svg"
                    ? $(".menu__third__icon").attr("src", "images/mobile/menu_minus.svg")
                    : $(".menu__third__icon").attr("src", "images/mobile/menu_plus.svg");
            })

        }

        if (thirdMenuLink.length > 0) {
            for (let i = 0; i < thirdMenuLink.length; i++) {
                thirdMenuLink[i].addEventListener("click", () => {
                    $(fourthMenu[i]).slideToggle(300);
                    $(thirdMenuLink[i]).toggleClass("active");
                    $(fourthIcon[i]).attr("src") == "images/mobile/menu_plus.svg"
                        ? $(fourthIcon[i]).attr("src", "images/mobile/menu_minus.svg")
                        : $(fourthIcon[i]).attr("src", "images/mobile/menu_plus.svg");

                })
            }
        } else {
            $(".menu-third__link.unempty").click(() => {
                $(".menu-fourth").slideToggle(300);
                $(".menu-third__link.unempty").toggleClass("active");
                $(".menu__fourth__icon").attr("src") == "images/mobile/menu_plus.svg"
                    ? $(".menu__fourth__icon").attr("src", "images/mobile/menu_minus.svg")
                    : $(".menu__fourth__icon").attr("src", "images/mobile/menu_plus.svg");
            })

        }



    }



    if (fmLink.length > 0) {
        for (let i = 0; i < fmLink.length; i++) {
            fmLink[i].addEventListener("click", () => {
                $(fmLink[i]).toggleClass("active");
                $(secondFm[i]).slideToggle(300);
                $(fmIcon[i]).attr("src") == "images/mobile/footer-menu_plus.svg"
                    ? $(fmIcon[i]).attr("src", "images/mobile/footer-menu_minus.svg")
                    : $(fmIcon[i]).attr("src", "images/mobile/footer-menu_plus.svg");

            })
        }
    } else {
        $(".fm--m-item.unempty").click(() => {
            $(".fm--m-item.unempty").toggleClass("active");
            $(".fm--m-second").slideToggle(300);
            $(".fm--m__icon").attr("src") == "images/mobile/footer-menu_plus.svg"
                ? $(".fm--m__icon").attr("src", "images/mobile/footer-menu_minus.svg")
                : $(".fm--m__icon").attr("src", "images/mobile/footer-menu_plus.svg");
        })

    }
    if (fmLinkSecond.length > 0) {
        for (let i = 0; i < fmLinkSecond.length; i++) {
            fmLinkSecond[i].addEventListener("click", () => {
                $(thirdFm[i]).slideToggle(300);
                $(fmLinkSecond[i]).toggleClass("active");
                $(fmIconSecond[i]).attr("src") == "images/mobile/footer-menu_plus.svg"
                    ? $(fmIconSecond[i]).attr("src", "images/mobile/footer-menu_minus.svg")
                    : $(fmIconSecond[i]).attr("src", "images/mobile/footer-menu_plus.svg");

            })
        }
    } else {
        $(".fm--m-item--second.unempty").click(() => {
            $(".fm--m-third").slideToggle(300);
            $(".fm--m-item--second.unempty").toggleClass("active");
            $(".fm--m__second__icon").attr("src") == "images/mobile/footer-menu_plus.svg"
                ? $(".fm--m__second__icon").attr("src", "images/mobile/footer-menu_minus.svg")
                : $(".fm--m__second__icon").attr("src", "images/mobile/footer-menu_plus.svg");
        })

    }

    $(".menu__close").click(() => {
        $(".main-menu").animate({
            right: "-100%",
        })
    })

    $(".header-bar").click(() => {
        $(".main-menu").animate({
            right: "0",
        })
    })

    $(".search__close").click(() => {
        $(".header-widesearch").animate({
            right: "-100%"
        });
    })


    const searchMobTabs = document.querySelectorAll(".search-tab");

    for (let i = 0; i < searchMobTabs.length; i++) {
        searchMobTabs[i].addEventListener("click", function () {
            $(".search-tab").removeClass("active")
            $(searchMobTabs[i]).addClass("active")
        })
    }

    searchMobTabs[0].addEventListener("click", () => {
        $(".input-block").show();
        $(".search-wideblock").hide();
    })
    searchMobTabs[1].addEventListener("click", () => {
        $(".search-wideblock").css("display", "flex");
        $(".input-block").hide();
    })


    $(document).mouseup(function (e) {
        let menuContainer = $(".language-switch");
        let multiSelectContainer = $(".input-block.input__select");
        let menu = $(".switch-menu");
        let multiSelect = $(".select");
        let resultSort = $(".result-sort");
        let sortListCheck = $(".result-sort .result-sort-input");
        let breadCont = $(".bread-links");
        let breadDot = $(".extrabread");
        if (menuContainer.has(e.target).length === 0) {
            menu.hide();
            $(".switch-show").removeClass("active")
        }
        if (multiSelectContainer.has(e.target).length === 0) {
            multiSelect.slideUp();
        }
        if (resultSort.has(e.target).length === 0) {
            $(sortListCheck).prop("checked", false)
        }
        if (breadCont.has(e.target).length === 0) {
            $(breadDot).removeClass("on")
        }
    })


    $(".switch-show").click(() => {
        $(".switch-menu").toggle()
        $(".switch-show").toggleClass("active")
    })


    var swiperImportant = new Swiper(".important", {
        spaceBetween: 30,
        effect: "fade",
        navigation: {
            nextEl: ".important-button-next",
            prevEl: ".important-button-prev",
        },
        pagination: {
            el: ".important-pagination",
            clickable: true,
        },
    });


    var swiperNews_3 = new Swiper(".news-thems__content", {
        spaceBetween: 20,
        navigation: {
            nextEl: '.thems__content-button-next',
            prevEl: '.thems__content-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.1,
            },
            767: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        },

    });

    var swiperSurvey = new Swiper(".surveySwiper", {
        pagination: {
            el: ".survey-pagination",
            type: "progressbar",
        },
        allowTouchMove: false,
        navigation: {
            nextEl: ".survey-button-next",
            prevEl: ".survey-button-prev",
        },

    });

    const progressItemPromo = document.querySelectorAll(".promo-slider .progress-item")
    const progressItemProjects = document.querySelectorAll(".projects-slider .projects-progress-item")

    var swiperPromo = new Swiper(".promo-slider", {
        effect: "fade",
        speed: 500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".promo-progress",
            clickable: true,
            type: "custom",
            bulletClass: "progress-item",
        },
        navigation: {
            nextEl: '.promo-button-next',
            prevEl: '.promo-button-prev',
        },
        breakpoints: {
            0: {
                allowTouchMove: true,
            },
            767: {
                allowTouchMove: false,
            }
        },
        on: {
            init: function () {
                $(".progress-item").removeClass("animate");
                $(".progress-item").removeClass("active");
                $(".progress-item").eq(0).addClass("animate");
                $(".progress-item").eq(0).addClass("active");
            },
            slideChangeTransitionStart: function () {
                $(".progress-item").removeClass("animate");
                $(".progress-item").removeClass("active");
                $(progressItemPromo[this.realIndex]).addClass("active");
            },
            slideChangeTransitionEnd: function () {
                $(progressItemPromo[this.realIndex]).addClass("animate");
            }
        }

    });
    var swiperProjects = new Swiper(".projects-slider", {
        effect: "fade",
        speed: 500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".projects-progress",
            clickable: true,
            type: "custom",
            bulletClass: "projects-progress-item",
        },
        navigation: {
            nextEl: '.projects-button-next',
            prevEl: '.projects-button-prev',
        },
        breakpoints: {
            0: {
                allowTouchMove: true,
            },
            767: {
                allowTouchMove: false,
            }
        },
        on: {
            init: function () {
                $(".projects-progress-item").removeClass("animate");
                $(".projects-progress-item").removeClass("active");
                $(".projects-progress-item").eq(0).addClass("animate");
                $(".projects-progress-item").eq(0).addClass("active");
            },
            slideChangeTransitionStart: function () {
                $(".projects-progress-item").removeClass("animate");
                $(".projects-progress-item").removeClass("active");
                $(progressItemProjects[this.realIndex]).addClass("active");
            },
            slideChangeTransitionEnd: function () {
                $(progressItemProjects[this.realIndex]).addClass("animate");
            }
        }

    });
    var swiperLogoblock = new Swiper(".logoblock-slider", {
        effect: "fade",
        speed: 500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                allowTouchMove: true,
            },
            767: {
                allowTouchMove: false,
            }
        },
        pagination: {
            el: ".logoblock-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.logoblock-button-next',
            prevEl: '.logoblock-button-prev',
        },

    });
    var swiperPattern = new Swiper(".patterns-slider", {
        speed: 500,
        spaceBetween: 35,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".patterns-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.patterns-button-next',
            prevEl: '.patterns-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1.2,
            }
        }

    });



    const divLink = document.querySelectorAll("div[data-link]");

    for (let i = 0; i < divLink.length; i++) {
        divLink[i].addEventListener("click", () => {
            window.location.href = divLink[i].dataset.link;
        })
    }


    swiperImportant.on("slideChange", function () {
        let swiperHeight = $(".important .swiper-wrapper").outerHeight()
        let slideHeight = $(".important .swiper-slide").outerHeight()
        $(".important .swiper-slide").css("min-height", `${swiperHeight}px`)
    });



    if ($(window).width() > 991) {
        const breadcrumbsHeight = $(".breadcrumbs").outerHeight();
        $(".typical").css("margin-top", `-${breadcrumbsHeight + 10}px`);
    }

    if ($(window).width() > 991) {
        const searchTopHeight = $(".search-result-panel").outerHeight();
        $(".typical.search-filter").css("margin-top", `-${searchTopHeight + 50}px`);
    }







    if (listLink.length > 0) {
        for (let i = 0; i < listLink.length; i++) {
            listLink[i].addEventListener("click", () => {
                $(listSecond[i]).slideToggle(300);
                $(listLink[i]).toggleClass("active");
                $(listICon[i]).attr("src") == "images/mobile/menu_plus.svg"
                    ? $(listICon[i]).attr("src", "images/mobile/menu_minus.svg")
                    : $(listICon[i]).attr("src", "images/mobile/menu_plus.svg");

            })
        }
    } else {
        $(".list__link.unempty").click(() => {
            $(".list-second").slideToggle(300);
            $(".menu-list__link.unempty").toggleClass("active");
            $(".list__second__icon").attr("src") == "images/mobile/menu_plus.svg"
                ? $(".list__second__icon").attr("src", "images/mobile/menu_minus.svg")
                : $(".list__second__icon").attr("src", "images/mobile/menu_plus.svg");
        })

    }

    if (listLinkSecond.length > 0) {
        for (let i = 0; i < listLinkSecond.length; i++) {
            listLinkSecond[i].addEventListener("click", () => {
                $(listThird[i]).slideToggle(300);
                $(listSecondICon[i]).attr("src") == "images/mobile/menu_plus.svg"
                    ? $(listSecondICon[i]).attr("src", "images/mobile/menu_minus_grey.svg")
                    : $(listSecondICon[i]).attr("src", "images/mobile/menu_plus.svg");

            })
        }
    } else {
        $(".list__link__second.unempty").click(() => {
            $(".list-third").slideToggle(300);
            $(".list__third_icon").attr("src") == "images/mobile/menu_plus.svg"
                ? $(".list__third_icon").attr("src", "images/mobile/menu_minus_grey.svg")
                : $(".list__third_icon").attr("src", "images/mobile/menu_plus.svg");
        })

    }




    for (let i = 0; i < inputSelect.length; i++) {
        inputSelect[i].addEventListener("click", (e) => {
            $(".select").not(select[i]).slideUp(300);
            $(select[i]).slideToggle(300);
            $(selectArrow[i]).toggleClass("rotate")
        })
        selectArrow[i].addEventListener("click", (e) => {
            $(select[i]).slideToggle(300);
            $(selectArrow[i]).toggleClass("rotate")
        })
        for (let k = 0; k < listItem.length; k++) {
            listItem[k].addEventListener("click", () => {
                listItem[k].parentElement.previousElementSibling.previousElementSibling.value = listItem[k].textContent;
                $(select[i]).hide();
                $(".advanced__reset, .advanced__submit, .search-filter-panel .link__btn.streight").prop("disabled", false);
                $(".search-advanced__btn").addClass("active");
            })
        }
    }



    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener("input", () => {
            if (input[i].value != '') {
                $(".advanced__reset, .advanced__submit").prop("disabled", false)
                $(".search-advanced__btn").addClass("active");
            } else {
                $(".advanced__reset, .advanced__submit").prop("disabled", true);
                $(".search-advanced__btn").addClass("active");
            }
        })
    }

    $(".advanced__reset").click(() => {


        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
            for (let j = 0; j < advSearchInputClear.length; j++) {
                $(advSearchInputClear[j]).css("animation", "fadeOutRight 0.6s");
                setTimeout(() => {
                    $(advSearchInputClear[j]).hide(0)
                }, 600);
            }
        }
        $(".search-advanced__btn").removeClass("active");
        $(".select-select").val('')
        $(".new-select").text('Select from the list')
        $(".advanced__reset, .advanced__submit").prop("disabled", true);

    })



    for (let e = 0; e < advSearchInputClear.length; e++) {
        advSearchInputClear[e].addEventListener("click", () => {
            checkEmptyInput(input, ".advanced__reset, .advanced__submit", ".search-advanced__btn")
        })

    }

    $(".search-advanced__btn").click(() => $(".search-advanced").slideToggle(300))


    $(".mobile-advanced").click(() => $(".search-advanced, .search-filter").css("right", "0"))
    $(".filter__close").click(() => $(".search-advanced, .search-filter").css("right", "-100%"))


    let surveyCheckes = document.querySelectorAll('input[name="modal_check1"]');
    let surveyCheckes2 = document.querySelectorAll('input[name="modal_check2"]');
    let surveyCheckes3 = document.querySelectorAll('input[name="modal_check3"]');
    let surveyRadio = document.querySelectorAll('input[name="modal_radio1"]');
    let surveyRadio2 = document.querySelectorAll('input[name="modal_radio2"]');
    let surveyRadio3 = document.querySelectorAll('input[name="modal_radio3"]');

    const checkSurveyInputs = (target, elem, child) => {
        $(target).on("input", (e) => {
            let emptyBtns = []
            for (let i = 0; i < elem.length; i++) {
                if (elem[i].checked) {
                    emptyBtns.push(elem[i])
                }
                emptyBtns.length
                    ? $(elem[i].parentElement.parentElement.nextElementSibling.children[1].children[child]).prop("disabled", false)
                    : $(elem[i].parentElement.parentElement.nextElementSibling.children[1].children[child]).prop("disabled", true)
            }
        })
    }


    checkSurveyInputs('input[name="modal_check1"]', surveyCheckes, 0)
    checkSurveyInputs('input[name="modal_check2"]', surveyCheckes2, 1)
    checkSurveyInputs('input[name="modal_check3"]', surveyCheckes3, 1)
    checkSurveyInputs('input[name="modal_radio1"]', surveyRadio, 1)
    checkSurveyInputs('input[name="modal_radio2"]', surveyRadio2, 1)
    checkSurveyInputs('input[name="modal_radio3"]', surveyRadio3, 1)
    $(".survey-start").click(() => {
        $(".survey-wrap, body, .survey-wrap .modal-item").addClass("active");
        $(".survey-slider").removeClass("active")
    })
    $(".survey-start.stats").click(() => {
        $(".survey-slider").addClass("active")
    })
    $(".survey-modal__close").click(() => {
        $(".survey-wrap, body, .survey-wrap .modal-item").removeClass("active");
    })

    if ($(".error").hasClass("active")) {
        $("body").addClass("active");
    }

    $(document).on("click", ".error-modal__close, .error-panel .link__btn.streight", () => {
        $(".error").removeClass("active");
        $("body").removeClass("active");
    })

    $('.survey-wrap .modal-item .link__btn').click(() => {
        $(".survey-wrap .modal-item").removeClass("active");
        $(".survey-slider").addClass("active")
        setTimeout(() => {
            $(".survey-button-next").prop("disabled", true);
        }, 100);
    })

    $(".submit__input").on("invalid", () => {
        $(".submit__input:invalid, .captcha__input").addClass("invalid")
    });

    $(".news-details.content .news-date").text() == "" ? $(".news-details.content .options").remove() : null

    const enHref = window.location.href.split("/");

    window.formTranslate = () => {
        if (enHref.includes("en")) {
            const enInput = document.querySelectorAll(".submit-item input")
            $(".rate-wrap .modal__title").text("Thank you for your assessment!")
            $(".rate-wrap .modal__text").text("Data has been sent successfully")
            $(".submit__start").text("* - These fields need to be filled")
            $(".submit-file-main .link__btn.streight").text("Attach file")
            $(".submit-file__text").html("Max count: 5, size: up to 5MB, format: doc, docx, pdf, txt, jpg, png, jpeg, gif, odt.")
            $(".agreement__text").html('I agree that my personal data will be processed in compliance with the Federal Law “On personal data”')
            $(".captcha__input").attr("placeholder", "Enter code from image")
            $(".advanced__submit").text("Send a message")
            $(".link__btn.versions__close p").text("Close")
            $(".emailChoosed .submit__title").eq(0).text("Address")
            $(".emailChoosed .submit__title").eq(1).text("Index")
            if ($("textarea").attr("placeholder") == "Введите текст обращения, не более 2000 символов (осталось 2000)") {
                $("textarea").eq($(this).index()).attr("placeholder", "Enter the text of the appeal, not more than 2000 characters (2000 left)")
            }
            for (let i = 0; i < enInput.length; i++) {
                enInput[i].oninvalid = function (e) {
                    e.target.setCustomValidity("");
                    if (!e.target.validity.valid) {
                        e.target.setCustomValidity("Enter characters in the field");
                    }
                    if (enInput[i].validity.patternMismatch) {
                        e.target.setCustomValidity("Enter the correct characters in the field");
                    }
                };
                enInput[i].oninput = function (e) {
                    e.target.setCustomValidity("");
                };
                if ($(enInput[i]).attr("placeholder") == "Введите Вашу фамилию") {
                    $(enInput[i]).attr("placeholder", "Enter your surname")
                } else if ($(enInput[i]).attr("placeholder") == "Введите Ваше имя") {
                    $(enInput[i]).attr("placeholder", "Enter your name")
                } else if ($(enInput[i]).attr("placeholder") == "Введите Ваше отчество (при наличии)") {
                    $(enInput[i]).attr("placeholder", "Enter your patronymic (if you have)")
                } else if ($(enInput[i]).attr("placeholder") == "Введите Ваш телефон") {
                    $(enInput[i]).attr("placeholder", "Enter your phone number")
                } else if ($(enInput[i]).attr("placeholder") == "Введите Ваш E-mail") {
                    $(enInput[i]).attr("placeholder", "Enter your E-mail")
                } else if ($(enInput[i]).attr("placeholder") == "Введите тему обращения") {
                    $(enInput[i]).attr("placeholder", "Enter the subject of the appeal")
                } else if ($(enInput[i]).attr("placeholder") == "Введите адрес") {
                    $(enInput[i]).attr("placeholder", "Enter your address")
                } else if ($(enInput[i]).attr("placeholder") == "Введите индекс") {
                    $(enInput[i]).attr("placeholder", "Enter index")
                }
            }
        }
        if ($("input[type='tel']").length) $("input[type='tel']").mask("+ 7 (999) 999-99-99");
    }
    formTranslate()


    const fileBtn = document.querySelectorAll(".submit-file-main button")
    const spaceForFile = document.querySelectorAll(".submit-file__name")
    const fileInput = document.querySelectorAll(".submit__file")
    const errorFileInput = document.querySelectorAll(".error .submit__file")
    const errorFileName = document.querySelectorAll(".error .submit-file-info")
    const removeFile = document.querySelectorAll(".remove_file")
    for (let i = 0; i < fileInput.length; i++) {
        $(fileBtn[i]).click(function () {
            $(fileInput[i]).trigger('click');
        });
        $(fileInput[i]).on("input", () => {
            let inputNames = []
            var size = fileInput[i].files[0].size;
            var name = fileInput[i].files[0].name;
            var fileExtension = ['jpg', 'jpeg', 'png', 'doc', 'docx', 'pdf', 'txt', 'gif', 'odt'];
            let extensionsArr = []
            for (let e = 0; e < fileInput[i].files.length; e++) {
                if (!fileExtension.includes(fileInput[i].files[e].name.split('.').pop().toLowerCase())) {
                    extensionsArr.push(fileInput[i].files[e].name.split('.').pop().toLowerCase())
                }
                if (5000000 < fileInput[i].files[e].size) {
                    extensionsArr.push(fileInput[i].files[e].size)
                }
            }
            if (5000000 > size && !($.inArray(name.split('.').pop().toLowerCase(), fileExtension) == -1) && !extensionsArr.length) {
                for (let e = 0; e < fileInput[i].files.length; e++) {
                    inputNames.push(fileInput[i].files[e].name)
                }
                spaceForFile[i].innerText = inputNames.join(', ');
                spaceForFile[i].classList.remove("wrong")
            } else if (5000000 < size) {
                spaceForFile[i].classList.add("wrong")
                spaceForFile[i].innerText = 'Превышен размер загружаемого файла';
            } else if ($.inArray(name.split('.').pop().toLowerCase(), fileExtension) == -1) {
                spaceForFile[i].classList.add("wrong")
                spaceForFile[i].innerText = 'Некорректный формат загружаемого файла';
            } else if (fileInput[i].files.length > 5) {
                spaceForFile[i].classList.add("wrong")
                spaceForFile[i].innerText = 'Максимальное число файлов 5';
            } else {
                spaceForFile[i].classList.add("wrong")
                spaceForFile[i].innerText = 'Выберите файлы корректного типа и размера';
            }
        })
    }

    for (let k = 0; k < errorFileInput.length; k++) {
        $(errorFileInput[k]).on("input", function () {
            $(errorFileName[k]).addClass("active");
        })
        $(removeFile[k]).on("click", () => {
            $(errorFileInput[k])[0].value = "";
            $(spaceForFile[k]).text('')
            $(errorFileName[k]).removeClass("active");
        })
    }


    $(".submit__input.email_again").on("input", () => {
        if ($(".submit__input.email").val() === $(".submit__input.email_again").val()) {
            $('.submit__input.email_again').removeClass("notsimilar")
        } else {
            $('.submit__input.email_again').addClass("notsimilar")
        }
    });

    $(".submit-agreement input").change(() => {
        $(".submit-agreement input").is(':checked')
            ? $(".submit-agreement .advanced__submit").prop("disabled", false)
            : $(".submit-agreement .advanced__submit").prop("disabled", true)

    })
    $(".filter-checkboxes input").change(() => {
        if ($(".filter-checkboxes input").is(':checked')) {
            $(".search-filter-panel .link__btn.streight, .search-filter-panel .advanced__submit").prop("disabled", false)
        } else if (
            $(".filter-checkboxes input").prop('checked') == false
            && $(".typical-filter #filter_to").val() == ''
            && $(".typical-filter #filter_from").val() == ''
            && $(".typical-filter .search__select").val() == '') {
            $(".search-filter-panel .link__btn.streight, .search-filter-panel .advanced__submit").prop("disabled", true)
        }
    })

    $(".search-filter-panel .link__btn.streight").click(() => {
        $(".filter-checkboxes input").prop('checked', false)
        $(".typical-filter .search__select").val('')
        $(".filter-block .tag__clear").removeClass("active");
        $(".typical-filter .search__calendar").val('')
        $(".search-filter-panel .link__btn.streight").prop("disabled", true)
        $(".multi .quantity").hide()
        $(".multi .search__clear").hide()
        $(".multi input[type='checkbox']").prop("checked", false);
        checkedFilterSelect = []
        $(".multi .advanced-list__icon").removeClass("rotate")
    })

    $(".filter__more__btn").click(() => {
        $(".filter-checkboxes label.more").toggle()
        $(".filter-checkboxes .tag__clear").toggleClass("show");
        $(".filter__more__btn").toggleText('Смотреть больше', 'Скрыть');
    })

    var btn = $('.up');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    const body = document.querySelector("body");
    let images = document.querySelectorAll("img")

    const toggleVersionClass = (blockId) => {
        let specBtns = document.querySelectorAll(`${blockId} .link__btn`)
        for (let j = 0; j < specBtns.length; j++) {
            specBtns[j].addEventListener("click", function () {
                $(`${blockId} .link__btn`).removeClass('active');
                $(`${blockId} .link__btn`).eq($(this).index()).addClass('active');
            })
        }
    }

    const changeVersion = (versionBtn, versionClass, removedClass, changeLogo, src) => {
        document.querySelector(versionBtn).addEventListener("click", () => {
            $(body).removeClass(removedClass);
            body.classList.add(versionClass);
            $(changeLogo).attr("src", src);
        })
    }
    const defaultVersion = (versionBtn) => {
        document.querySelector(versionBtn).addEventListener("click", () => {
            body.className = '';
            $(".logo img.desk").attr("src", "images/logo.svg");
            $(".logo.en img").attr("src", "images/logo-en.svg");

            $(".promo-effect, .promo__actual, .news__title, .news__text, .progress-loader, .service-iconblock, .promo-effect .link__btn, .news-item, .news-important, .travel-item, .services-item, .survey-start, .survey-item, .news-mark, .news-important__text .swiper-pagination-bullet, .news__tag, .news-important__title, .news-important__text, .travel__text, .services__text, .services__quantity, .services__type, .service-fullbtn__text, .survey-start__name, .survey-start__title, .survey-start__text, .survey__title, .survey__text, .projects__title, .news-important-control path, .projects-button-next path, .projects-button-prev path, .travel__arrow path, .service-iconblock path, .news-important .swiper-slide, .projects-effect, .news-banner, .services__type, .survey-start .link__btn, .survey-item.spec,  .promo-actuality, .projects-progress-space, .promo__actual,  .projects-button-next, .projects-button-prev, .projects__mark, .projects-effect .link__btn ").removeAttr("style");
            $('section.news .swiper.important .swiper-slide').removeClass("remo-after")
            $(".news-banner img, .organisations-item--left, .travel-spec__img, .services__icon, .survey-item-imgblock, .survey-item__spec").show();
            $(".news-banner .mini__title, .news-banner .mini__text, .survey-item.spec .survey-item-arrow").hide();

            for (let i = 0; i < images.length; i++) {
                if ($(images[i]).attr("src").indexOf("svg") < 0) {
                    $(images[i]).show()
                }
            }
            $("img").css("filter", "none");
            $(".versions .link__btn").removeClass("active");
        })
    }

    $(".link__btn.img-show, .link__btn.img-contrast").click(() => {
        for (let i = 0; i < images.length; i++) {
            if ($(images[i]).attr("src").indexOf("svg") < 0) {
                $(images[i]).show()
            }
        }
        $("img").css("filter", "none");
    })
    $(".link__btn.img-hide").click(() => {
        if ($("body").hasClass("color-2") || $("body").hasClass("color-5")) {
            $(".promo-effect").css("background", "none");
            $(".promo-effect").css("border", "1px solid #FFFFFF");
            $(".promo-effect").css("border-radius", "6px");
            $(".promo__actual").css("color", "#000000");
            $(".news__title, .news__text").css("color", "#ffffff");
            $(".progress-loader, .service-iconblock").attr('style', 'background: #ffffff !important');
            $(".promo-effect .link__btn").attr('style', 'border: 1px solid #FFFFFF;');
            $(".news-item, .news-important, .travel-item, .services-item, .survey-start, .survey-item").attr('style', 'background: #000000;border: 1px solid #FFFFFF;');
            $(".news-mark, .news-important__text .swiper-pagination-bullet").attr('style', 'background: #ffffff !important;color: #000000;');
            $(".news__tag, .news-important__title, .news-important__text, .travel__text, .services__text, .services__quantity, .services__type, .service-fullbtn__text, .survey-start__name, .survey-start__title, .survey-start__text, .survey__title, .survey__text, .projects__title").attr('style', "color: #ffffff !important;");
            $(".news-important-control path, .projects-button-next path, .projects-button-prev path").attr('style', "stroke: #ffffff !important;");
            $(".travel__arrow path, .service-iconblock path").attr('style', "stroke: #000000 !important;");

            $(".news-important .swiper-slide").attr('style', "background: #000000 !important;");
            $(".projects-effect").attr('style', "background: #000000 !important;border: 1px solid #ffffff !important;");

            $('section.news .swiper.important .swiper-slide').addClass("remo-after")

            $(".news-banner img, .organisations-item--left, .travel-spec__img, .services__icon, .survey-item-imgblock, .survey-item__spec").hide();

            $(".news-banner").attr("style", "height: 120px;border: 1px solid #ffffff;border-radius: 10px;")
            $(".news-banner").append(`<p class="mini__title">национальныЙ проект</p><p class="mini__text">Туризм и индустрия гостеприимства</p>`)
            $(".news-banner").css("padding", "25px 30px")


            $(".services__type").attr('style', "color: #cccccc !important;");

            $('.survey-start .link__btn').attr("style", "border: 1px solid #ffffff !important;")
            $(".survey-item.spec").css("padding", "14px 30px 14px 14px")
            $(".promo-actuality, .projects-progress-space").attr("style", "background: #ffffff !important")
            $(".promo__actual").attr("style", "color: #000000 !important; background: none !important;")
            $(".projects-button-next, .projects-button-prev").attr("style", "background: rgba(255, 255, 255, 0.15) !important;")
            $(".projects__mark, .projects-effect .link__btn").attr("style", "color: #000000 !important; background: #ffffff !important;")
            $('.survey-item.spec .survey-item--left').after(`<div class="survey-item-arrow">
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L1 9" stroke="#2A3338" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </div>`)
        }
        for (let i = 0; i < images.length; i++) {

            if ($(images[i]).attr("src").indexOf("svg") < 0) {
                $(images[i]).hide()
            }
        }
    })
    $(".link__btn.img-contrast").click(() => {
        $("img").css("filter", "grayscale(100%)");
    })


    changeVersion(".link__btn.font", "empty", "unfont")
    changeVersion(".link__btn.unfont", "unfont", "font")
    changeVersion(".link__btn.lspc-small", "empty", "lspc-large lspc-middle")
    changeVersion(".link__btn.lspc-middle", "lspc-middle", "lspc-large")
    changeVersion(".link__btn.lspc-large", "lspc-large", "lspc-middle")
    changeVersion(".link__btn.size-small", "empty", "size-large size-middle")
    changeVersion(".link__btn.size-middle", "size-middle", "size-large")
    changeVersion(".link__btn.size-large", "size-large", "size-middle")
    changeVersion(".link__btn.color-1", "empty", "color-2 color-3 color-4 color-5", ".logo img", "images/logo.svg")
    changeVersion(".link__btn.color-2", "color-2", "color-3 color-4 color-5", ".logo img", "images/logo-white.svg")
    changeVersion(".link__btn.color-3", "color-3", "color-2 color-4 color-5", ".logo img", "images/logo-white.svg")
    changeVersion(".link__btn.color-4", "color-4", "color-3 color-2 color-5", ".logo img", "images/logo.svg")
    changeVersion(".link__btn.color-5", "color-5", "color-3 color-4 color-2", ".logo img", "images/logo-white.svg")
    toggleVersionClass("#font")
    toggleVersionClass("#cerning")
    toggleVersionClass("#font_size")
    toggleVersionClass("#color")
    toggleVersionClass("#toggle_img")
    defaultVersion(".link__btn.default")


    $(".versions__close").on("click", () => {
        $(".versions").removeClass("opened")
    })
    $(".versions_btn").on("click", () => {
        $(".versions").addClass("opened")
    })


    const changeForm = (input, show, hide) => {
        if ($(input).is(":checked")) {
            $(show).show();
            $(hide).hide();
        } else {
            $(hide).show();
            $(show).hide();
        }
    }


    $('.travel-labels input[type="radio"]').on('change', () => {
        changeForm('#local', '.travel-local', '.travel-abroad')
    });
    changeForm('#local', '.travel-local', '.travel-abroad')




    $('.error-tabs input[type="radio"]').on('change', () => {
        if ($(".error-tabs input[type='radio']").eq(0).is(":checked")) {
            $(".input-block.other_page").hide()
            $(".input-block.other_page input").prop("required", false)
        } else {
            $(".input-block.other_page").show()
            $(".input-block.other_page input").prop("required", true)
        }
    });

    const sortList = document.querySelectorAll(".sort-list li")
    for (let i = 0; i < sortList.length; i++) {
        $(sortList[i]).on("click", () => {
            $(".sort-list li").removeClass("active")
            $(sortList[i]).addClass("active")
            $(".sort__text.request").text(sortList[i].textContent)
            $("#sort-type").val(sortList[i].textContent)
            $(".result-sort .result-sort-input").prop("checked", false);
        })
    }



    const mapInput = document.querySelectorAll(".map__toggle")
    const mapInner = document.querySelectorAll(".map-inner")

    for (let i = 0; i < mapInput.length; i++) {
        $(mapInput[i]).on("change", () => {
            if ($(mapInput[i]).prop("checked") == true) {
                $(mapInner[i]).slideUp(300)
            } else {
                $(mapInner[i]).slideDown(300)
            }

        })
    }

    const tabYak = document.querySelectorAll(".tab__text")

    for (let i = 0; i < tabYak.length; i++) {
        $(tabYak[i]).on("click", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top }, 1500);
            $(".tab__text").removeClass("active")
            $(tabYak[i]).addClass("active")
        });

    }

    $(document).on('input', "input[type='tel']", () => {
        $("input[type='tel']").mask("+ 7 (999) 999-99-99");
    })


    $("section.error .error-panel .link__btn.streight").click(() => {
        $("section.error form input, section.error form textarea").val('');
    })

    $(".advanced__submit").click(() => $(".search-advanced").slideUp())



    /****************** Scripts for english version ******************/


    $(".search__advanced-en").click(() => {
        $(".search__advanced-en").toggleClass("active")
        $(".search__advanced-en").toggleText('<img src="images/icons/search_wide.svg" alt="Icon">Advanced Search', '<img src="images/icons/search_wideactive.svg" alt="Icon">Hide Settings');
        $(".search-wideblock").slideToggle(300);
    })

    $(".more__btn-en").click(() => {
        $(".tags-checkboxes label.more").toggle();
        $(".tags-checkboxes .tag__clear").toggleClass("show");
        $(".tags-checkboxes .more__btn-en").toggleText('View more', 'Hide');
    })
    $(".filter__more__btn-en").click(() => {
        $(".filter-checkboxes label.more").toggle()
        $(".filter-checkboxes .tag__clear").toggleClass("show");
        $(".filter__more__btn-en").toggleText('View more', 'Hide');
    })

    changeVersion(".link__btn.color-1", "empty", "color-2 color-3 color-4 color-5", ".logo.en img", "images/logo-en.svg")
    changeVersion(".link__btn.color-2", "color-2", "color-3 color-4 color-5", ".logo.en img", "images/logo-white-en.svg")
    changeVersion(".link__btn.color-3", "color-3", "color-2 color-4 color-5", ".logo.en img", "images/logo-white-en.svg")
    changeVersion(".link__btn.color-4", "color-4", "color-3 color-2 color-5", ".logo.en img", "images/logo-en.svg")
    changeVersion(".link__btn.color-5", "color-5", "color-3 color-4 color-2", ".logo.en img", "images/logo-white-en.svg")





});
