document.getElementById('csvUpload').addEventListener('change', upload, false);
var uploaddata;
var headerStyle;
var header;
var headerTF;
var csvData;
function upload(evt) {


    var file = evt.target.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(event) {
        csvData = event.target.result;

        // uploaddata = Papa.parse(csvData, {header : headerTF});
        //
        // console.log(uploaddata);

    };
    reader.onerror = function() {
        alert('Unable to read ' + file.fileName);
    };

}

function headerStructure() {
    var mylist = document.getElementById("headerList");
    headerStyle = mylist.options[mylist.selectedIndex].text
    // document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text
}

function headerQuestion() {
    var mylist = document.getElementById("headerYN");
    header = mylist.options[mylist.selectedIndex].text
    if (header == 'Yes'){
        headerTF = true;
    } else if (header == 'No'){
        headerTF = false
    }

    uploaddata = Papa.parse(csvData, {header : headerTF});
    console.log(uploaddata);
    // document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text
}
async function sendCSV() {

    var input = document.querySelector('input[type="file"]')

    // let response = await fetch(`http://127.0.0.1:4000/sumJSON?jsonCSV=${JSON.stringify(uploaddata)}`, {
    let response = await fetch(`http://testmodel12345.herokuapp.com/sumJSON?jsonCSV=${JSON.stringify(uploaddata)}`, {
        method: 'POST',
    })
    let data = await response.text();
    console.log(data);

    alert(data);

}