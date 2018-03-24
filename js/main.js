
$(document).on('click', '#editb', () => {
    let count = 0;
    let $table = $("#table");
    let $arr = $("#tbody").children('tr');
    let flag = 0;
    console.log($arr);
    for (let i = 0; i < $arr.length; i++) {
        count = count + 1;
        let $row = $($arr[i]);
        console.log($row)
        console.log($arr[i])

        let $x = $row.children()[2].innerHTML.trim();
        let $y = document.getElementById('rollno2').value.trim();
        if ($x === $y) {
            flag = 1;
            const pttrn1 = /[a-z A-Z]+\s[a-z A-Z]+/;
            const pttrn2 = /[0-9]+/;
            const pttrn3 = /[a-z A-Z]+/;
            const name = document.getElementById("name2").value;
            const rollno = document.getElementById("rollno2").value;
            const gradyear = document.getElementById("gradyear2").value;
            const stream = document.getElementById("stream2").value;
            if (name == "") {
                window.alert("NAME CANNOT BE NULL");
            }
            else if (rollno == "") {
                window.alert("ROLL NO CANNOT BE NULL");
            }
            else if (gradyear == "") {
                window.alert("GRADUATION YEAR CANNOT BE NULL");
            }
            else if (stream == "") {
                window.alert("STREAM CANNOT BE NULL");
            }
            else if (!pttrn1.test(name)) {
                window.alert("ENTER FULL NAME IN CORRECT FORMAT");
            }
            else if (!pttrn2.test(rollno)) {
                window.alert("ENTER ROLL NO IN CORRECT FORMAT");
            }
            else if (!pttrn2.test(gradyear)) {
                window.alert("ENTER GRADUATING YEAR IN CORRECT FORMAT");
            }
            else if (!pttrn3.test(stream)) {
                window.alert("ENTER STREAM IN CORRECT FORMAT");
            }
            else {
                $row.children()[1].innerHTML = $('#name2').val();
                $row.children()[3].innerHTML = $('#gradyear2').val();
                $row.children()[4].innerHTML = $('#stream2').val();
                window.alert("Record Edited");
                document.getElementsByName('form2')[0].reset();
                check = 0;
                $('#edit').modal('hide');
                break;
            }
        }
        else {
            window.alert("NO SUCH RECORD IN DATABASE");
            document.getElementsByName("form2")[0].reset();
        }
    }
});


$(document).on('click', '#del1', () => {
    let table = document.getElementById("table");
    let a = document.getElementById("tbody").childNodes;
    let count = 0;
    let flag = 0;
    console.log(a);
    for (const ar of a) {
        count = count + 1;
       // console.log(ar.firstElementChild);
        const checkBoxContainer = ar.firstElementChild;
        const isSelected = checkBoxContainer.firstElementChild.checked;
        if (isSelected) {
            table.deleteRow(count);
            window.alert("Record Deleted");
            flag = 1;
        }
    }
    if (flag == 0) {
        window.alert("NO RECORD SELECTED");
    }
});

$(document).on('click', '#submit', () => {
    const pttrn1 = /[a-z A-Z]+\s[a-z A-Z]+/;
    const pttrn2 = /[0-9]+/;
    const pttrn3 = /[a-z A-Z]+/;
    const name = document.getElementById("name").value;
    const rollno = document.getElementById("rollno").value;
    const gradyear = document.getElementById("gradyear").value;
    const stream = document.getElementById("stream").value;
    if (name == "") {
        window.alert("NAME CANNOT BE NULL");
    }
    else if (rollno == "") {
        window.alert("ROLL NO CANNOT BE NULL");
    }
    else if (gradyear == "") {
        window.alert("GRADUATION YEAR CANNOT BE NULL");
    }
    else if (stream == "") {
        window.alert("STREAM CANNOT BE NULL");
    }
    else if (!pttrn1.test(name)) {
        window.alert("ENTER FULL NAME IN CORRECT FORMAT");
    }
    else if (!pttrn2.test(rollno)) {
        window.alert("ENTER ROLL NO IN CORRECT FORMAT");
    }
    else if (!pttrn2.test(gradyear)) {
        window.alert("ENTER GRADUATING YEAR IN CORRECT FORMAT");
    }
    else if (!pttrn3.test(stream)) {
        window.alert("ENTER STREAM IN CORRECT FORMAT");
    }
    else {
        $(`tbody`).append(`<tr>
            <td>
                <input type="checkbox">
            </td>   
            <td>${name}</td>
            <td>${rollno}</td>
            <td>${gradyear}</td>
            <td>${stream}</td>
           </tr>
            `
        )
        window.alert("Record Inserted");
        $('#reg').modal('hide');
        let frm = document.getElementsByName('form1')[0];
        frm.reset();
    }
});

$(document).on('click', '#reg1', () => {
    $('#reg').css("display", "block");
});

$(document).on('click', '#edit1', () => {
    $('#edit').css("display", "block");
});


