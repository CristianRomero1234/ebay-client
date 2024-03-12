var chart = bb.generate({
    data: {
        columns: [
            ["Blue", 2],
            ["orange", 4],
            ["green", 3],
            ["red", 5],
            ["gray", 3],
            ["yellow", 3]
        ],
        type: "donut",
        onclick: function (d, i) {
            console.log("onclick event done", d, i);
        },
        onover: function (d, i) {
            console.log("onover event done", d, i);
        },
        onout: function (d, i) {
            console.log("onout event done", d, i);
        },
    },
    donut: {
        title: "75",
    },
    bindto: "#donutChart",
});  
