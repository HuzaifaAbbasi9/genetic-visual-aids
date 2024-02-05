$(document).ready(function () {
    $('.affected-item').on('click', function (e) {
        e.preventDefault();
        $(".affected-item").removeClass("active-item");
        $(this).addClass("active-item");
    });

    $('label').on('click', function (e) {
        $(this).prev().focus();
    });

    function printGraph(type) {
        var condation = $("#condation").val();
        $(".disese-name").text(condation);
        if (type == 'female') {
            var f_population_1 = $("#f-population-1").val();
            var f_condation_1 = $("#f-condation-1").val();
            $(".f-population-p").text(f_population_1);
            $(".f-conditon").text(f_condation_1);
            var icons = $(".show-female-graph").find(".small-icon-outer").children();
            for (var i = 0; i < icons.length; i++) {
                if (i < f_population_1) {
                    if ($(icons[i]).hasClass("red-icons")) {
                        $(icons[i]).removeClass("red-icons");
                    }
                    $(icons[i]).addClass("yellow-icons");
                } else if (i >= f_population_1 && i < f_condation_1) {
                    if ($(icons[i]).hasClass("yellow-icons")) {
                        $(icons[i]).removeClass("yellow-icons");
                    }
                    $(icons[i]).addClass("red-icons");
                } else if (i >= f_condation_1) {
                    if ($(icons[i]).hasClass("yellow-icons")) {
                        $(icons[i]).removeClass("yellow-icons");
                    }
                    if ($(icons[i]).hasClass("red-icons")) {
                        $(icons[i]).removeClass("red-icons");
                    }
                }
            }
        } else if (type == 'male') {
            var m_population_1 = $("#m-population-1").val();
            var m_condation_1 = $("#m-condation-1").val();
            $(".m-population-p").text(m_population_1);
            $(".m-conditon").text(m_condation_1);
            var icons = $(".show-male-graph").find(".small-icon-outer").children();
            for (var i = 0; i < icons.length; i++) {
                if (i < m_population_1) {
                    if ($(icons[i]).hasClass("red-icons")) {
                        $(icons[i]).removeClass("red-icons");
                    }
                    $(icons[i]).addClass("yellow-icons");
                } else if (i >= m_population_1 && i < m_condation_1) {
                    if ($(icons[i]).hasClass("yellow-icons")) {
                        $(icons[i]).removeClass("yellow-icons");
                    }
                    $(icons[i]).addClass("red-icons");
                } else if (i >= m_condation_1) {
                    if ($(icons[i]).hasClass("yellow-icons")) {
                        $(icons[i]).removeClass("yellow-icons");
                    }
                    if ($(icons[i]).hasClass("red-icons")) {
                        $(icons[i]).removeClass("red-icons");
                    }
                }
            }
        } else if (type == 'both') {
            var f_population = $("#f-population").val();
            var f_condation = $("#f-condation").val();
            $(".f-population-p").text(f_population);
            $(".f-conditon").text(f_condation);
            var icons = $(".show-graph-both-f").find(".small-icon-outer").children();
            for (var i = 0; i < icons.length; i++) {
                if (i < f_population) {
                    if ($(icons[i]).hasClass("red-icons")) {
                        $(icons[i]).removeClass("red-icons");
                    }
                    $(icons[i]).addClass("yellow-icons");
                } else if (i >= f_population && i < f_condation) {
                    if ($(icons[i]).hasClass("yellow-icons")) {
                        $(icons[i]).removeClass("yellow-icons");
                    }
                    $(icons[i]).addClass("red-icons");
                } else if (i >= f_condation) {
                    if ($(icons[i]).hasClass("yellow-icons")) {
                        $(icons[i]).removeClass("yellow-icons");
                    }
                    if ($(icons[i]).hasClass("red-icons")) {
                        $(icons[i]).removeClass("red-icons");
                    }
                }
            }

            var m_population = $("#m-population").val();
            var m_condation = $("#m-condation").val();
            $(".m-population-p").text(m_population);
            $(".m-conditon-p").text(m_condation);
            var icons = $(".show-graph-both-m").find(".small-icon-outer").children();
            for (var i = 0; i < icons.length; i++) {
                if (i < m_population) {
                    if ($(icons[i]).hasClass("red-icons")) {
                        $(icons[i]).removeClass("red-icons");
                    }
                    $(icons[i]).addClass("yellow-icons");
                } else if (i >= m_population && i < m_condation) {
                    if ($(icons[i]).hasClass("yellow-icons")) {
                        $(icons[i]).removeClass("yellow-icons");
                    }
                    $(icons[i]).addClass("red-icons");
                } else if (i >= m_condation) {
                    if ($(icons[i]).hasClass("yellow-icons")) {
                        $(icons[i]).removeClass("yellow-icons");
                    }
                    if ($(icons[i]).hasClass("red-icons")) {
                        $(icons[i]).removeClass("red-icons");
                    }
                }
            }
        }
    }

    $('.next-btn').on('click', function (e) {
        e.preventDefault();
        if ($(".step-1").hasClass("active-step")) {
            if ($("#condation").val().length == 0) {
                alert("Please Add Name Of Condition");
            } else {
                $(".step-1").removeClass("active-step");
                $(".step-2").addClass("active-step");
                $(".step-1-dot").removeClass("active-dot");
                $(".step-2-dot").addClass("active-dot");
                $(".prev-btn").removeClass("d-none");
            }
        } else if ($(".step-2").hasClass("active-step")) {
            if ($(".affected-item").hasClass("active-item")) {
                $(".step-2").removeClass("active-step");
                $(".step-3").addClass("active-step");
                $(".step-2-dot").removeClass("active-dot");
                $(".step-3-dot").addClass("active-dot");
            } else {
                alert("Please Select Any Option");
            }
            $(".show-detsils").addClass("d-none");
            if ($(".female").hasClass("active-item")) {
                $(".show-female").removeClass("d-none");
            } else if ($(".male").hasClass("active-item")) {
                $(".show-male").removeClass("d-none");
            } else if ($(".both").hasClass("active-item")) {
                $(".show-both").removeClass("d-none");
            }
        } else if ($(".step-3").hasClass("active-step")) {
            if ($(".female").hasClass("active-item")) {
                if ($("#f-condation-1").val().length !== 0 && $("#f-population-1").val().length !== 0) {
                    var f_population_1 = $("#f-population-1").val();
                    var f_condation_1 = $("#f-condation-1").val();
                    if (f_population_1 < f_condation_1) {
                        $(".show-female-graph").removeClass("d-none");
                        $(".graph-outer").removeClass("d-none");
                        $(".steps-outer").addClass("d-none");
                        printGraph('female');
                    } else {
                        alert("Condition must have large then Population");
                    }

                } else {
                    alert("All Fields Are Required");
                }
                return
            } else if ($(".male").hasClass("active-item")) {
                if ($("#m-condation-1").val().length !== 0 && $("#m-population-1").val().length !== 0) {
                    var m_population_1 = $("#m-population-1").val();
                    var m_condation_1 = $("#m-condation-1").val();
                    if (m_population_1 < m_condation_1) {
                        $(".show-male-graph").removeClass("d-none");
                        $(".graph-outer").removeClass("d-none");
                        $(".steps-outer").addClass("d-none");
                        printGraph('male');
                    } else {
                        alert("Condition must have large then Population");
                    }
                } else {
                    alert("All Fields Are Required");
                }
                return
            } else if ($(".both").hasClass("active-item")) {
                if ($("#m-condation").val().length !== 0 && $("#m-population").val().length !== 0 && $("#f-condation").val().length !== 0 && $("#f-population").val().length !== 0) {
                    const f_population = $("#f-population").val();
                    const f_condation = $("#f-condation").val();
                    const m_population = $("#m-population").val();
                    const m_condation = $("#m-condation").val();
                    if (f_population < f_condation && m_population < m_condation) {
                        $(".show-graph-both").removeClass("d-none");
                        $(".graph-outer").removeClass("d-none");
                        $(".steps-outer").addClass("d-none");
                        printGraph('both');
                    } else {
                        alert("Condition must have large then Population");
                    }
                } else {
                    alert("All Fields Are Required");
                }
                return
            }
        }
    });


    $('.prev-btn').on('click', function (e) {
        e.preventDefault();
        if ($(".step-2").hasClass("active-step")) {
            $(".step-2").removeClass("active-step");
            $(".step-1").addClass("active-step");
            $(".step-2-dot").removeClass("active-dot");
            $(".step-1-dot").addClass("active-dot");
            $(this).addClass("d-none");
        } else if ($(".step-3").hasClass("active-step")) {
            $(".step-3").removeClass("active-step");
            $(".step-2").addClass("active-step");
            $(".step-3-dot").removeClass("active-dot");
            $(".step-2-dot").addClass("active-dot");
        }
    });

    // $('.dot').on('click', function (e) {
    //     e.preventDefault();
    //     $('.dot').removeClass("active-dot");
    //     $(this).addClass("active-dot");
    //     $(".step").removeClass("active-step");
    //     var target = $(this).attr("data-target");
    //     $("." + target).addClass("active-step");
    // })
    $('.go-back').on('click', function (e) {
        // location.reload(true);
        $(".graph-outer").addClass("d-none");
        $(".graph").addClass("d-none");
        $(".steps-outer").removeClass("d-none");
    })
    $(':input[type=number]').on('propertychange input', function (e) {
        if ($(this).val() > 100) {
            $(this).val(this.value.slice(0, 2));
            // alert("Values must less then 100")
        };
        if ($("#f-population").val().length > 2 ) {
            $("#f-population").val(this.value.slice(0, 2));
        };
        if ($("#m-population").val().length > 2 ) {
            $("#m-population").val(this.value.slice(0, 2));
        }
        if ($("#f-population-1").val().length > 2 ) {
            $("#f-population-1").val(this.value.slice(0, 2));
        };
        if ($("#m-population-1").val().length > 2 ) {
            $("#m-population-1").val(this.value.slice(0, 2));
        }
    })
});