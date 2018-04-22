var d,h,m,s,animate,countdownMins,tradeCount,totalTimeSecs;

function init(){
    d=new Date();
    h=d.getHours()-1;
    m=d.getMinutes();
    s=d.getSeconds();
    totalTimeSecs=(h*60*60+m*60+s);

    clock();
};

function clock(){
    s++;
    totalTimeSecs++;
    if(s==60){
        s=0;
        m++;
        if(m==60){
            m=0;
            h++;
            if(h==24){
                h=0;
            }
        }
    }
    tradeCount=Math.floor((totalTimeSecs-(50*60))/(3930));//Update the offset every so often
    difference=(totalTimeSecs-(50*60))-tradeCount*3930;
    
    if (difference<=750) {
        shipStatus = 'Ynystere --> Solzreed'
    } else if (difference <= 1950) {
        shipStatus = 'Waiting in Solzreed'
    } else if (difference <= 2770) {
        shipStatus = 'Solzreed --> Ynystere'
    } else {
        shipStatus = 'Waiting in Ynystere'
    }


    $('sec',s);
    $('min',m);
    $('hr',h);
    $('packCount', tradeCount);
    $('timeSecs', totalTimeSecs);
    $('shipStatus',shipStatus)

    animate=setTimeout(clock,1000);

};

function $(id,val){
    if(val<10){
        val='0'+val;
    }
    document.getElementById(id).innerHTML=val;
};

function updateDebug() {
    $('difference',difference)
}

window.onload=init;