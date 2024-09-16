


function aim180() {
    h5gg.clearResults();
    h5gg.searchNumber('1057048494','I32','0x100000000', '0x160000000');
    h5gg.editAll('-2000', 'I32'); 
    h5gg.clearResults();
    h5gg.searchNumber('1054951342','I32','0x100000000', '0x160000000');
    h5gg.editAll('-2000', 'I32'); 
    h5gg.clearResults();
    h5gg.searchNumber('1053273620','I32','0x100000000', '0x160000000');
    h5gg.editAll('-2000', 'I32'); 
    h5gg.clearResults();
            
            vant.showNotify({
    type: 'success',
    message: '𝐀𝐢𝐦 𝟏𝟖𝟎'
        });
}


function aimscope() {
    h5gg.clearResults();
    h5gg.searchNumber('0.09','F32','0x0', '0x20000000000');
    h5gg.editAll('180', 'F32'); 
    h5gg.clearResults();
            vant.showNotify({
    type: 'success',
    message: '𝐀𝐢𝐦 𝐂𝐨𝐩𝐞'
        });
}

function lockscope() {
    h5gg.clearResults();
    h5gg.searchNumber('1075000115','I32','0x100000000', '0x160000000');
    h5gg.editAll('-5', 'I32'); 
    h5gg.clearResults();
    h5gg.searchNearby('3', 'I32', '0x100');
    h5gg.editAll('-5', 'I32'); 
    h5gg.clearResults();
    h5gg.searchNumber('1075000115','I32','0x100000000', '0x160000000');
    h5gg.editAll('-5', 'I32'); 
    h5gg.clearResults();
            vant.showNotify({
    type: 'success',
    message: '𝐋𝐨𝐜𝐤 𝐒𝐜𝐨𝐩𝐞'
        });
    
}




function buffdame() {
    h5gg.clearResults();
    h5gg.searchNumber('5.5','F32','0x100000000', '0x160000000');
    h5gg.editAll('10000000', 'F32'); 
    h5gg.clearResults();
    h5gg.searchNumber('0.75','F32','0x100000000', '0x160000000');
    h5gg.editAll('10000000', 'F32'); 
    h5gg.clearResults();
            
            vant.showNotify({
    type: 'success',
    message: '𝐁𝐮𝐟𝐟 𝐃𝐚𝐦𝐞 '
        });
        
}

function modifyValue(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
h5gg.clearResults(); h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000'); const results = h5gg.getResults(h5gg.getResultsCount()); let modifiedCount = 0; results.forEach(result=> {
    if (result.address.endsWith(addressEndsWith) || result.address.endsWith(addressEndsWith2)) {
        h5gg.setValue(result.address, replaceValue.toString(), 'I32'); modifiedCount++;
    }}); if (modifiedCount > 0) {
    if (alertMessage)alert(alertMessage)} else if (alertMessage) {
    alert("Không tìm thấy kết quả phù hợp để thay đổi.")}}
var Nhayman = 15;
var nhayngam = 10;

function modifyValue1(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'F32', '0x100000000', '0x160000000');
const results = h5gg.getResults(h5gg.getResultsCount());
let modifiedCount = 0;

results.forEach(result => {
    if (result.address.endsWith(addressEndsWith) || (addressEndsWith2 && result.address.endsWith(addressEndsWith2))) {
        h5gg.setValue(result.address, replaceValue.toString(), 'F32');
        modifiedCount++;
          if (searchValue === Nhayman) Nhayman = replaceValue;
        if (searchValue === nhayngam) nhayngam = replaceValue;
    }
});

if (modifiedCount > 0 && alertMessage) {
    alert(alertMessage);
} else if (alertMessage) {
    alert("Không tìm thấy kết quả phù hợp để thay đổi.");
}
}

function buffnhay() {
modifyValue1(nhayngam, Number(prompt("Nhập Độ nhạy màn hình :", "")), 'BB4', null, 'Đã thay đổi Độ nhạy màn hình');
modifyValue1(Nhayman, Number(prompt("Nhập Độ nhạy kéo tâm :", "")), 'BAC', null, 'Đã thay đổi Độ nhạy kéo tâm');
    
    vant.showNotify({
    type: 'success',
    message: '𝐁𝐮𝐟𝐟 𝐍𝐡𝐚𝐲 '
        });		
        
}

function buffnhay1() {
modifyValue1(nhayngam, Number(prompt("Nhập Độ nhạy màn hình :", "")), 'BB4', null, 'Đã thay đổi Độ nhạy màn hình');
modifyValue1(Nhayman, Number(prompt("Nhập Độ nhạy kéo tâm :", "")), 'BAC', null, 'Đã thay đổi Độ nhạy kéo tâm');
    
    vant.showNotify({
    type: 'success',
    message: '𝐁𝐮𝐟𝐟 𝐍𝐚𝐮 '
        });		
        
    }
    

function cao() {
modifyValue1(-0.05, Number(prompt("𝐂𝐚𝐦 𝐂𝐚𝐨 - 𝟎.𝟎𝟓 -> ...  :", "")), 'F00', null,);
    
    vant.showNotify({
    type: 'success',
    message: '𝐂𝐚𝐦 𝐂𝐚𝐨'
        });		
}
function xa() {
modifyValue1(2.5, Number(prompt(" 𝐂𝐚𝐦 𝐗𝐚 - 𝟐.𝟓 -> ... :", "")), 'F04', null,);
    
    vant.showNotify({
    type: 'success',
    message: '𝐂𝐚𝐦 𝐗𝐚 '
        });		
}

function Norecoil() {
    function searchAndReplace(searchValue, replaceValue, type) {
    h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
    h5gg.setValue(results[i].address, replaceValue.toString(), type)}}
    searchAndReplace(1016018816, 180, 'I32')
            
    vant.showNotify({
    type: 'success',
    message: '𝐍𝐨 𝐑𝐞𝐜𝐨𝐥𝐢 '
        });		
        
        }

function so88() {
h5gg.clearResults();
h5gg.searchNumber('4333543704410193920', 'I64', '0x100000000', '0x160000000');
h5gg.searchNearby('0.01', 'F32', '0x8');
h5gg.searchNearby('0.0219~0.02975', 'F32', '0x32')
h5gg.searchNearby('0.1035~0.1070', 'F32', '0x4');
h5gg.searchNearby('2.802597e-45', 'F32', '0x4');
h5gg.searchNumber('0.1035~0.1070', 'F32', '0x100000000', '0x160000000');
h5gg.editAll('1.875', "F32");
vant.showNotify({
    type: 'success',
    message: '𝐌𝐚𝐠𝐞𝐜 𝐁𝐮𝐥𝐥𝐞𝐭'
});
}

function AimFor() {
modifyValue(1077936128, -20000, 'A04'); 
modifyValue(1069547520, 1148829696, 'A10')
    vant.showNotify({
    type: 'success',
    message: '𝐀𝐢𝐦 𝐅𝐨𝐯'
        });

}

function AimFor1() {
modifyValue(1077936128, -20000, 'A04'); 
modifyValue(1069547520, 1148829696, 'A10')
    vant.showNotify({
    type: 'success',
    message: '𝐀𝐢𝐦 𝐋𝐨𝐜𝐤'
        });

    }

function s100s() {
h5gg.clearResults();
h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
var count = h5gg.getResultsCount();
var r = h5gg.getResults(count);
var cnt = 0;
for (var i = 0; i < count; i++) {
    var addr1 = r[i].address;

    var dizhi0 = (Number(addr1) + 36);
    var dizhi1 = (Number(addr1) + 40);
    var dizhi2 = (Number(addr1) + -308);



    {
        h5gg.setValue(dizhi0, 0.01, "F32");
        h5gg.setValue(dizhi1, 0.01, "F32");
        h5gg.setValue(dizhi2, 0, "I32");

    }
}
vant.showNotify({
    type: 'success',
    message: '𝐀𝐰𝐦 𝐀𝐢𝐦'
});


}


function s105s() {
h5gg.clearResults();
h5gg.searchNumber('31101603021', 'I64', '0x100000000', '0x160000000');
var count = h5gg.getResultsCount();
var r = h5gg.getResults(count);
var cnt = 0;
for(var i=0; i<count; i++) {
var addr1 = r[i].address;

var dizhi0 = (Number(addr1) + 8);




{
h5gg.setValue(dizhi0, 2139095040, "I32");

}
}
vant.showNotify({
    type: 'success',
    message: '𝐒𝐧𝐢𝐩𝐞𝐫 𝐒𝐜𝐨𝐩'
});
}


function HeadshotCu() {
    function searchAndReplace(searchValue, replaceValue, type) {
    h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x200000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
    h5gg.setValue(results[i].address, replaceValue.toString(), type)}}
    searchAndReplace(2018908708, 96688289, 'I32')
            
            vant.showNotify({
    type: 'success',
    message: '𝐇𝐞𝐚𝐝𝐒𝐡𝐨𝐭 𝐂𝐮  '
});
    
        }



function s101s() {
h5gg.clearResults();
h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
var count = h5gg.getResultsCount();
var r = h5gg.getResults(count);
var cnt = 0;
for (var i = 0; i < count; i++) {
    var addr1 = r[i].address;

    var dizhi0 = (Number(addr1) + 36);
    var dizhi1 = (Number(addr1) + 40);



    {
        h5gg.setValue(dizhi0, 0.01, "F32");
        h5gg.setValue(dizhi1, 0.01, "F32");

    }
}
vant.showNotify({
    type: 'success',
    message: '𝐀𝐰𝐦 𝐒𝐰𝐢𝐭𝐜𝐡 '
});


}

function so89() {
h5gg.clearResults();
h5gg.searchNumber('72340173878198272', 'I64', '0x100000000', '0x130000000');
h5gg.editAll('72340172821233664', 'I64');
vant.showNotify({
    type: 'success',
    message: '𝐀𝐫𝐦 𝐒𝐰𝐢𝐭𝐜𝐡'
});


}

function sk() {
h5gg.clearResults();
var hk1 = prompt("請輸入想要的靈敏");
h5gg.searchNumber('4417130516484980736', 'I64', '0x100000000', '0x160000000');
var count = h5gg.getResultsCount();
var r = h5gg.getResults(count);
var cnt = 0;
for (var i = 0; i < count; i++) {
    var addr1 = r[i].address;
    var dizhi0 = (Number(addr1) + -4);
    var dizhi1 = (Number(addr1) + -8);
    var dizhi2 = (Number(addr1) + -12);
    var dizhi3 = (Number(addr1) + -0);




    {
        h5gg.setValue(dizhi0, hk1, "F32");
        h5gg.setValue(dizhi1, hk1, "F32");
        h5gg.setValue(dizhi2, hk1, "F32");
        h5gg.setValue(dizhi3, hk1, "F32");

    }
}
vant.showNotify({
    type: 'success',
    message: '𝐁𝐮𝐟𝐟 𝐒𝐞𝐧𝐬𝐢𝐭𝐢𝐯𝐭𝐲 '
});

}

function so01() {
h5gg.clearResults();
h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000');
alert('𝐒𝐞𝐚𝐫𝐜𝐡(' + h5gg.getResultsCount() + '/1)');
}

function so02() {
h5gg.editAll('4397530849749489418', 'I64');

vant.showNotify({
    type: 'success',
    message: '𝐗𝟏𝟎'
});

}

function so03() {
h5gg.editAll('4397530849764387586', 'I64');
vant.showNotify({
    type: 'success',
    message: '𝐑𝐞𝐬𝐭𝐨𝐫𝐞'
});

}

function x10() {
h5gg.clearResults();
h5gg.searchNumber('4575657221408423937', 'I64', '0x100000000', '0x200000000');
h5gg.editAll('4604119969679015937', 'I64');
vant.showNotify({
    type: 'success',
    message: 'speed'
});


}

function so05() {
h5gg.editAll('4397530849741637681', 'I64');
vant.showNotify({
    type: 'success',
    message: '𝐗𝟓𝟎'
});

}

function so06() {
h5gg.editAll('4397530849758414897', 'I64');
vant.showNotify({
    type: 'success',
    message: '𝐗𝟐'
});

}


function so90() {
h5gg.clearResults();
h5gg.searchNumber('4575657222469899220', 'I64', '0x100000000', '0x160000000');
h5gg.editAll('4848124999925814228', 'I64');
h5gg.clearResults();
h5gg.searchNumber('4575657222469336965', 'I64', '0x100000000', '0x160000000');
h5gg.editAll('4848124999925251973', 'I64');
vant.showNotify({
    type: 'success',
    message: '𝐀𝐧𝐭𝐞𝐧𝐧𝐚 '
});


}



function so91() {
h5gg.clearResults();
h5gg.searchNumber('1051196712', 'I64', '0x100000000', '0x160000000');
var count = h5gg.getResultsCount();
var r = h5gg.getResults(count);
var cnt = 0;
for (var i = 0; i < count; i++) {
    var addr1 = r[i].address;

    var dizhi0 = (Number(addr1) + 20);




    {
        h5gg.setValue(dizhi0, 200, "F32");
    }
}
h5gg.clearResults();
h5gg.searchNumber('4575657224610966592', 'I64', '0x100000000', '0x160000000');
h5gg.editAll('4848125002066881600', 'I64');
vant.showNotify({
    type: 'success',
    message: '𝐀𝐧𝐭𝐞𝐧𝐧𝐚 𝐕𝟐'
});


}

function so92() {
h5gg.clearResults();
h5gg.searchNumber('4575657222443971598', 'I64', '0x100000000', '0x130000000');
h5gg.editAll('4848124999899886606', 'I64');
h5gg.clearResults();
h5gg.searchNumber('4575657224578539469', 'I64', '0x100000000', '0x130000000');
h5gg.editAll('4848125002034454477', 'I64');
vant.showNotify({
    type: 'success',
    message: '𝐀𝐧𝐭𝐞𝐧𝐧𝐚 𝐕𝟑'
});


    }
    
    function s08() {
h5gg.clearResults();
h5gg.searchNumber('4728779608739021057', 'I64', '0x100000000', '0x150000000');

alert('Sear(' + h5gg.getResultsCount() + ')');

var count = h5gg.getResultsCount(); //获取总共搜索结果个数

var r = h5gg.getResults(count); //获取总共搜索结果个数的数组

//开始循环遍历

for (var i = 0; i < count; i++) {

    var addr1 = r[i].address; //获取每个搜索结果的地址 address弟子 value值 type类型

    var weishu = /18$/; //设置置顶结尾

    var pd = weishu.test(addr1); //判断地址是否包含指定结尾



    var dizhi1 = (Number(addr1) + 4);




    if (pd) {
        h5gg.setValue(dizhi1, 100, "F32");


    }
}
vant.showNotify({
    type: 'success',
    message: '𝐁𝐮𝐟𝐟 𝐇𝐞𝐚𝐝𝐚𝐜𝐡𝐨𝐭'
});


}
function antentay() {
    h5gg.clearResults();
    h5gg.searchNumber('4575657222443971598','F32','0x100000000', '0x160000000');
    h5gg.editAll('4848124999899886606', 'F32'); 
    h5gg.clearResults();
    h5gg.searchNumber('4575667224578539469','F32','0x100000000', '0x130000000');
    h5gg.editAll('4848125002034454477', 'F32'); 
    h5gg.clearResults();
            
            vant.showNotify({
    type: 'success',
    message: 'LostX Ou Ydkom Fih All '
        });
        
        }
        
        function AimCopev2() {
    function searchAndReplace(searchValue,
    replaceValue,
    type) {
    h5gg.clearResults(); h5gg.searchNumber(searchValue,
    type,
    '0x130100048',
    '0x200000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
    h5gg.setValue(results[i].address, replaceValue.toString(), type)}}
    searchAndReplace(1075000115, -5, 'I32')
            vant.showNotify({
    type: 'success',
    message: '𝐀𝐧𝐭𝐞𝐧𝐧𝐚 𝐍𝐮'
        });
        
        }
        
        function ZomCamxa() {
modifyValue7(
    60, // Giá trị tìm kiếm ban đầu là 60
    Number(prompt("𝐂𝐚𝐦 𝐏𝐜 -> ... :", "")), // Giá trị thay thế do người dùng nhập vào
    '68', // Phần cuối của địa chỉ bộ nhớ cần khớp
    null, // Không cần địa chỉ kết thúc thứ hai
    "Giá trị đã được thay đổi và khóa." // Thông báo khi thay đổi thành công và khóa giá trị
);
}

function modifyValue7(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'F32', '0x100000000', '0x160000000');
const results = h5gg.getResults(h5gg.getResultsCount());
let modifiedCount = 0;

// Tạo một danh sách để lưu trữ các địa chỉ cần khóa
const lockAddresses = [];

results.forEach(result => {
    if (result.address.endsWith(addressEndsWith) || (addressEndsWith2 && result.address.endsWith(addressEndsWith2))) {
        h5gg.setValue(result.address, replaceValue.toString(), 'F32');
        modifiedCount++;
        lockAddresses.push(result.address); // Lưu địa chỉ cần khóa
    }
});

if (modifiedCount > 0 && alertMessage) {
    alert(alertMessage);

    // Khóa giá trị sau khi thay đổi
    const locker = setInterval(function() {
        console.log("Kiểm tra và khóa giá trị...");
        lockAddresses.forEach(address => {
            const currentValue = h5gg.getValue(address, 'F32');
            if (currentValue !== replaceValue) { // Chỉ cập nhật nếu giá trị đã thay đổi
                h5gg.setValue(address, replaceValue.toString(), 'F32');
            }
        });
    }, 2000); // Kiểm tra và cập nhật mỗi 2 giây (giảm tần suất lặp)

    // Hủy bỏ khóa: clearInterval(locker); có thể gọi khi cần thiết
} else if (alertMessage) {
    alert("Không tìm thấy kết quả phù hợp để thay đổi.");
            
            vant.showNotify({
    type: 'success',
    message: 'HAHA OU YDKOM FIH PC '
        });		
}
}

function lock() {
    h5gg.clearResults();
    modifyValue(1077936128, -20001, 'A04');
    modifyValue(1069547520, 1148829696, 'A10');
    alert("AimLock ON");
    h5gg.clearResults();
    codeStatus = true;
  }
function aimdrag() { 
   alert('AIM DRAG DONE ')
        function searchAndReplace(searchValue, replaceValue, type) {
        h5gg.clearResults();
        h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000');
        var results = h5gg.getResults(h5gg.getResultsCount());
        for (var i = 0; i < results.length && i < 10; i++) {
            h5gg.setValue(results[i].address, replaceValue.toString(), type);
        }
    }
    searchAndReplace(3145840, 49, 'I32');
}
