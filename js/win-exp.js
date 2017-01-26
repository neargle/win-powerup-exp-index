function show_exp_info() {
    $('div#exp-info-list').empty();
    patchinfo = $('#patchlist').val();
    if(patchinfo.length == 0){
        $('div#alert-not-null').show();
        return;
    }
    patch_info_list = [];
    restr = /\[\d+]\:\W(KB.*)/ig;
    patchmat = restr.exec(patchinfo);
    while(patchmat !== null) {
        patch_info_list.push(patchmat[1]);
        patchmat = restr.exec(patchinfo);
    }
    if (!patch_info_list) return;
    $.getJSON('win-patch-exp-data.json', function(expdata){
        for(var winver in expdata){
            window.expinfo = expdata[winver];
            for(var patchid in expinfo){
                if (patch_info_list.indexOf(patchid) < 0){
                    expinfo2dom(patchid=patchid, exp=expinfo[patchid], winver=winver);
                }
            }
        }

    });
}

function close_alert(arg) {
    alert_div = arg.parentElement;
    $(alert_div).css('display', 'None');
}

function expinfo2dom(patchid='', exp='', winver=''){
    if(!document.getElementById(winver)){
        label = document.createElement('label');
        label.id = winver;
        text = winver + ' 可用EXP:';
        label.textContent = text;
        $('div#exp-info-list').append(label)
    }
    html =
      '<a href="#" class="list-group-item">'+ patchid +' :  <strong>' + exp + '</strong></a>';
    // '<div class="list-group-item list-group-item-action flex-column align-items-start">' +
    // '  <div class="d-flex w-100 justify-content-between">' +
    // '    <h5 class="mb-1">   '+ patchid +' :  <strong>' + exp + '</strong> </h5>' +
    // '  </div>' +
    // '</div>';
    $('div#exp-info-list').append(html);
}
