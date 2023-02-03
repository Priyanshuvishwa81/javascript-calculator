
var input_value = "";
var next_value_sub = 0;
var next_value_add = 0;
var next_value_dev = 1;
var next_value_multi = 1;
var compile_value = 0;
var symb = "";
let val = (value) => {
    input_value = input_value + value;
    document.getElementById("input_id").value = input_value;
};

let equal = () => {
    var s_val = document.getElementById("input_id").value;
    var equal_val = 0;
    if (symb === "+") {
        equal_val = parseFloat(compile_value) + parseFloat(s_val);
    } else if (symb === "-") {
        equal_val = parseFloat(compile_value) - parseFloat(s_val);
    } else if (symb === "*") {
        equal_val = parseFloat(compile_value) * parseFloat(s_val);
    } else if (symb === "/") {
        equal_val = parseFloat(compile_value) / parseFloat(s_val);
    }
    document.getElementById("input_id").value = equal_val;
    next_value_sub = 0;
    next_value_add = 0;
    next_value_dev = 1;
    next_value_multi = 1;

};

let symbol = (value) => {
    if (value === "+") {
        var input_value_sum = document.getElementById("input_id").value;
        next_value_add = parseFloat(input_value_sum) + parseFloat(next_value_add);
        compile_value = next_value_add;
        document.getElementById("input_id").value = compile_value;
        input_value = "";
        symb = "+";

    } else if (value === "-") {
        var input_value_sub = document.getElementById("input_id").value;
        if (next_value_sub === 0) {
            next_value_sub = parseFloat(input_value_sub) - parseFloat(next_value_sub);
        } else {
            next_value_sub = parseFloat(next_value_sub) - parseFloat(input_value_sub);
        }
        compile_value = next_value_sub;

        document.getElementById("input_id").value = compile_value;
        input_value = "";
        symb = "-";

    } else if (value === "*") {
        var input_value_mul = document.getElementById("input_id").value;
        if (next_value_multi === 1) {
            next_value_multi = parseFloat(input_value_mul) * parseInt(next_value_multi);
        } else {
            next_value_multi = parseFloat(next_value_multi) * parseInt(input_value_mul);
        }
        compile_value = next_value_multi;
        document.getElementById("input_id").value = compile_value;
        symb = "*";
        input_value = "";
    } else if (value === "/") {
        var input_value_dev = document.getElementById("input_id").value;
        if (next_value_dev === 1) {
            // alert("ok");
            next_value_dev = parseInt(input_value_dev) / parseInt(next_value_dev);
        } else if (input_value_dev === 0 && next_value_dev === 0) {
            document.getElementById("input_id").value = "undefined";
        } else {
            next_value_dev = parseFloat(next_value_dev) / parseFloat(input_value_dev);
        }
        compile_value = next_value_dev;

        document.getElementById("input_id").value = compile_value;
        symb = "/";
        input_value = "";
    }

};

let sq = () => {
    let input_value_sq = document.getElementById("input_id").value;
    let t_val = parseFloat(input_value_sq) * parseInt(input_value_sq);
    document.getElementById("input_id").value = t_val;
};
let sqrt = () => {
    let input_value_sq = document.getElementById("input_id").value;
    let t_val = Math.sqrt(parseFloat(input_value_sq));
    document.getElementById("input_id").value = t_val;
};
let inverse = () => {
    let input_value_inverse = document.getElementById("input_id").value;
    let t_val = 1 / parseFloat(input_value_inverse);
    document.getElementById("input_id").value = t_val;
};
let cls = () => {
    input_value = "";
    next_value_sub = 0;
    next_value_add = 0;
    next_value_dev = 1;
    next_value_multi = 1;
    compile_value = 0;
    symb = "";
    document.getElementById("input_id").value = 0;
};
let input_cls = () => {
    input_value = "";
    next_value_sub = 0;
    next_value_add = 0;
    next_value_dev = 1;
    next_value_multi = 1;
    compile_value = 0;
    symb = "";
    document.getElementById("input_id").value = 0;
};

let plus_minus = () => {
    let t_val = 0;
    let input_value_plus_minus = document.getElementById("input_id").value;
    if (parseFloat(input_value_plus_minus) > 0) {
        t_val = parseFloat(input_value_plus_minus) * -1;
    } else {
        t_val = Math.abs(input_value_plus_minus);
    }
    document.getElementById("input_id").value = t_val;
};

let remove = () => {
    let input_value_plus_minus = document.getElementById("input_id").value;
    let arr = input_value_plus_minus.split("");
    alert(arr);
    arr.pop();
    arr.toString();
    let t_val = arr;
    // alert(arr.toString());
    input_value = arr;
    document.getElementById("input_id").value = t_val;
};



