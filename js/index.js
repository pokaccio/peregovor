$(document).ready(function() {
    $("#senda").click(function(){
       $("#first_screen").fadeOut(0);
       var inp = $("#ema").val();
       $("#user_name").text(inp);
    });
    document.getElementById('date_select').valueAsDate = new Date();

    var now = new Date();
    var yy = now.getFullYear();
    var mm = now.getMonth() + 1;
    var dd = now.getDate();
    $(".time_now").html(dd + "." + mm + "." + yy);
    $('select').material_select();
    $('.one_time').each(function() {
        var a = $(this).width();
        if (a > 20) {
            $(this).height(a);
        } else {
            $(this).height(20);
        }
    });
    $(".one_time").each(function() {
        $(this).click(function() {
            var a = $(this).hasClass("selecteda");
            if (a === true) {
                $(this).removeClass("selecteda");
            } else {
                $(this).addClass("selecteda");
            }
        });
    });
    $("#btn_can").click(function() {
        $(".one_time").each(function() {
            $(this).removeClass("selecteda");
        });
    });
    $("#btn_1").click(function() {
        alert("Бронь переговорной успешно создана");
        msgData1 = $("#ema").val();

//var icsMSG = "BEGIN:VCALENDAR\nVERSION:2.0\nCALSCALE:GREGORIAN\nMETHOD:REQUEST\nBEGIN:VTIMEZONE\nTZID:Europe/Moscow\nX-LIC-LOCATION:Europe/Moscow\nBEGIN:STANDARD\nTZOFFSETFROM:+0300\nTZOFFSETTO:+0300\nTZNAME:MSK\nDTSTART:19700101T000000\nEND:STANDARD\nEND:VTIMEZONE\nBEGIN:VEVENT\nDTSTART;TZID=Europe/Moscow:20230411T123000\nDTEND;TZID=Europe/Moscow:20230411T133000\nDTSTAMP:20230411T090357Z\nORGANIZER;CN=" + msgData1 +":mailto:" + msgData1 +"\nUID:522odrkqeddn6sbfkt1pqu0fgv@lights-on.ru\nATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=ACCEPTED;RSVP=TRUE;CN=" + msgData1 +";X-NUM-GUESTS=0:mailto:" + msgData1 +"\nATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE;CN=pokachev@yandex.ru;X-NUM-GUESTS=0:mailto:pokachev@yandex.ru\nX-MICROSOFT-CDO-OWNERAPPTID:311899883\nCREATED:20230411T090220Z\nDESCRIPTION:\nLAST-MODIFIED:20230411T090356Z\nLOCATION:Переговорная 1\nSEQUENCE:0\nSTATUS:CONFIRMED\nSUMMARY;LANGUAGE=ru:Бронирование переговорной 1\nBEGIN:VALARM\nACTION:DISPLAY\nDESCRIPTION:Проверка возможности добавить описание в мероприятие\nTRIGGER:-P0DT0H30M0S\nEND:VALARM\nEND:VEVENT\nEND:VCALENDAR";
var icsMSG = 'BEGIN:VCALENDAR\nPRODID:-//Microsoft Corporation//Outlook 16.0 MIMEDIR//EN\nVERSION:2.0\nMETHOD:REQUEST\nX-MS-OLK-FORCEINSPECTOROPEN:TRUE\nBEGIN:VTIMEZONE\nTZID:Russian Standard Time\nBEGIN:STANDARD\nDTSTART:16010101T000000\nTZOFFSETFROM:+0300\nTZOFFSETTO:+0300\nEND:STANDARD\nEND:VTIMEZONE\nBEGIN:VEVENT\nATTENDEE;CN="pokachev@yandex.ru, peregovorochka@peregovorovna.com";RSVP=TRUE:invalid:nomail\nCLASS:PUBLIC\nCREATED:20230411T100207Z\nDESCRIPTION:Какое-то херовое описание по пунктам\n1. Пункт\n2. Пункт\n\nИ еще какая-то ссылка <https://peregovorka.inclu.work/> \n\nDTEND;TZID="Russian Standard Time":20230411T083000\nDTSTAMP:20230411T100207Z\nDTSTART;TZID="Russian Standard Time":20230411T080000\nLAST-MODIFIED:20230411T100207Z\nORGANIZER;CN=no-reply:mailto:no-reply@mazars.ru\nPRIORITY:5\nSEQUENCE:0\nSUMMARY;LANGUAGE=ru:Встречная встреча\nTRANSP:OPAQUE\nUID:040000008200E00074C5B7101A82E008000000001023FC59756CD901000000000000000010000000E2F360C388E1534EAE3F78E2FE2E2ACB\nX-MICROSOFT-CDO-BUSYSTATUS:BUSY\nX-MICROSOFT-CDO-IMPORTANCE:1\nX-MICROSOFT-DISALLOW-COUNTER:FALSE\nX-MS-OLK-CONFTYPE:0\nBEGIN:VALARM\nTRIGGER:-PT15M\nACTION:DISPLAY\nDESCRIPTION:Reminder\nEND:VALARM\nEND:VEVENT\nEND:VCALENDAR';
    window.open( "data:text/calendar;charset=UTF-8," + escape(icsMSG));

    });
    $("#sel_floor").change(function() {
        var a = $(this).val();
        if (a === "all") {
            $(".one_stoke").each(function() {
                $(this).fadeIn(0);
            });
        } else {
            $(".one_stoke").each(function() {
                var b = $(this).attr("data-floor");
                if (b === a) {
                    $(this).fadeIn(0);
                } else {
                    $(this).fadeOut(0);
                }
            });
        }
    });
    $("#date_select").change(function() {
        var now = $(this).val();
        var datePart = now.match(/\d+/g),
            yy = datePart[0].substring(2), // get only two digits
            mm = datePart[1],
            dd = datePart[2];
        $(".time_now").html(dd + "." + mm + "." + yy);
    });


    $(".one_time").each(function() {
        var n = $(this).attr("data-user");
        if (n != null) {
            $(this).html('<span>' + n + '</span>');
        }
    });
    $(".one_time").click(function() {
        var n = $(this).attr("data-user");
        $(".one_time span").fadeOut(0);
        if (n != null) {
            $(this).find("span").fadeIn(0);
        }
    });
    
    
    
    $("#close_btn").click(function() {
        $(".bg_bg").fadeOut(0);
    });
    $(".info_btn").each(function() {
        $(this).click(function() {
            var tit = $(this).attr("data-title");
            $("#title").html(tit);
            $(".bg_bg").fadeIn(0);
        });
    });
});

$(window).resize(function() {

    $('.one_time').each(function() {
        var a = $(this).width();
        if (a > 20) {
            $(this).height(a);
        } else {
            $(this).height(20);
        }
    });

});

$(document).ready(function(){
var icsFile = null;

function makeIcsFile() {
  var test ='BEGIN:VCALENDAR\nPRODID:-//Microsoft Corporation//Outlook 16.0 MIMEDIR//EN\nVERSION:2.0\nMETHOD:REQUEST\nX-MS-OLK-FORCEINSPECTOROPEN:TRUE\nBEGIN:VTIMEZONE\nTZID:Russian Standard Time\nBEGIN:STANDARD\nDTSTART:16010101T000000\nTZOFFSETFROM:+0300\nTZOFFSETTO:+0300\nEND:STANDARD\nEND:VTIMEZONE\nBEGIN:VEVENT\nATTENDEE;CN="pokachev@yandex.ru, peregovorochka@peregovorovna.com";RSVP=TRUE:invalid:nomail\nCLASS:PUBLIC\nCREATED:20230411T100207Z\nDESCRIPTION:Какое-то описание по пунктам 1. Пункт2. Пункт\n\nИ еще какая-то ссылка <https://peregovorka.inclu.work/> \n\nDTEND;TZID="Russian Standard Time":20230411T083000\nDTSTAMP:20230411T100207Z\nDTSTART;TZID="Russian Standard Time":20230411T080000\nLAST-MODIFIED:20230411T100207Z\nORGANIZER;CN=no-reply:mailto:no-reply@mazars.ru\nPRIORITY:5\nSEQUENCE:0\nSUMMARY;LANGUAGE=ru:Встречная встреча\nTRANSP:OPAQUE\nUID:040000008200E00074C5B7101A82E008000000001023FC59756CD901000000000000000010000000E2F360C388E1534EAE3F78E2FE2E2ACB\nX-MICROSOFT-CDO-BUSYSTATUS:BUSY\nX-MICROSOFT-CDO-IMPORTANCE:1\nX-MICROSOFT-DISALLOW-COUNTER:FALSE\nX-MS-OLK-CONFTYPE:0\nBEGIN:VALARM\nTRIGGER:-PT15M\nACTION:DISPLAY\nDESCRIPTION:Reminder\nEND:VALARM\nEND:VEVENT\nEND:VCALENDAR';

  var data = new File([test], { type: "text/plain" });

  // If we are replacing a previously generated file we need to
  // manually revoke the object URL to avoid memory leaks.
  if (icsFile !== null) {
    window.URL.revokeObjectURL(icsFile);
  }

  icsFile = window.URL.createObjectURL(data);

  return icsFile;
}
$("#create").click(function(){
    var link = document.querySelector("#downloadLink");
  link.href = makeIcsFile();
    link.classList.remove("hide");
    $(this).fadeOut(0);
    
});


});