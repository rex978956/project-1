var courseList = [
    ['', '機率論\n資工2B/E509', '機率論\n資工2B/E509', '機率論\n資工2B/E509', '', '', '', '', '機率統計\n資工1C/E410', '', '無線區域網路\n資工進4/E402', '無線區域網路\n資工進4/E402', '無線區域網路\n資工進4/E402', ''],
    ['', '機率論\n資工2B/E401', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', 'PYTHON程式語言\n核心O群/E513', 'PYTHON程式語言\n核心O群/E513', '', '', '', '網際網路技術\n全英碩/E820', '網際網路技術\n全英碩/E820', '網際網路技術\n全英碩/E820', '', '', '', ''],
    ['', '', '', '', '', '', '機率統計\n資工1C/E830', '機率統計\n資工1C/E830', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '專題實驗(一)\n資工進2/E213', '專題實驗(一)\n資工進2/E213', '專題實驗(一)\n資工進2/E213', '', '', '', ''],
];
var week = window.innerWidth > 360 ? ['週一', '週二', '週三', '週四', '週五', '週六'] : ['一', '二', '三', '四', '五', '六'];
var day = new Date().getDay();
var mins = new Date().getMinutes();
var hours = new Date().getHours();

var courseType = [
    [{
        index: '1',
        name: '08:10'
    }, 1],
    [{
        index: '2',
        name: '09:10'
    }, 1],
    [{
        index: '3',
        name: '10:10'
    }, 1],
    [{
        index: '4',
        name: '11:10'
    }, 1],
    [{
        index: '5',
        name: '12:10'
    }, 1],
    [{
        index: '6',
        name: '13:10'
    }, 1],
    [{
        index: '7',
        name: '14:10'
    }, 1],
    [{
        index: '8',
        name: '15:10'
    }, 1],
    [{
        index: '9',
        name: '16:10'
    }, 1],
    [{
        index: '10',
        name: '17:10'
    }, 1],
    [{
        index: '11',
        name: '18:10'
    }, 1],
    [{
        index: '12',
        name: '19:10'
    }, 1],
    [{
        index: '13',
        name: '20:10'
    }, 1],
    [{
        index: '14',
        name: '21:10'
    }, 1]
];


var Timetable = new Timetables({
    el: '#coursesTable',
    timetables: courseList,
    week: week,
    timetableType: courseType,
    highlightWeek: day,
    highlightMin: hours * 60 + mins,
});
