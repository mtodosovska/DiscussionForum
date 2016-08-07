﻿$(document).ready(function () {

    $("#error").show();
    if ($("#error").text() == "") {
        $("#error").hide();
    }

    $("[id$='error']").show();
    if ($("[id$='error']").text() == "") {
        $("[id$='error']").hide();
    }
});

function validateCreateTopic() {
    if ($("[id$='txtName']").val() == "") {
        $("[id$='error']").show();
        $("[id$='error']").text("Name is required. Please enter name.");
        return false;
    }

    if ($("[id$='txtDescription']").val() == "") {
        $("[id$='error']").show();
        $("[id$='error']").text("Description is required. Please enter description.");
        return false;
    }

    $("[id$='error']").text("");
    $("[id$='error']").hide();
    $("[id$='btnSubmit']").trigger('click');
}

function validateCreateCategory() {
    if ($("[id$='txtName']").val() == "") {
        $("[id$='error']").show();
        $("[id$='error']").text("Name is required. Please enter name.");
        return false;
    }

    $("[id$='error']").text("");
    $("[id$='error']").hide();
    $("[id$='btnSubmit']").trigger('click');
}

function logout() {
    $('#btnLogOut').trigger('click');
}

function validateLogin() {
    if ($("#txtEmail").val() == "") {
        $("#error").show();
        $("#error").text("Email is required. Please enter email");
        return false;
    }
    else if ($("#txtEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) == null) {
        $("#error").show();
        $("#error").text("Email is not valid!");
        return false;
    }

    if ($("#txtPassword").val() == "") {
        $("#error").show();
        $("#error").text("Password is required. Please enter password");
        return false;
    }

    $("#error").text("");
    $("#error").hide();
    $('#btnLoginServer').trigger('click');
}

function validateRegister() {

    if ($("#txtEmail").val() == "") {
        $("#error").show();
        $("#error").text("Email is required. Please enter email");
        return false;
    }
    else if ($("#txtEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) == null) {
        $("#error").show();
        $("#error").text("Email is not valid!");
        return false;
    }

    if ($("#txtPassword").val() == "") {
        $("#error").show();
        $("#error").text("Password is required. Please enter password");
        return false;
    }
    else if ($("#txtPassword").val().match(/((?=.*\w)(?=.*[!#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).{6,16})/) == null) {
        $("#error").show();
        $("#error").text("Password must be 6 characters long, also must have one alphanumeric character and one special character");
        return false;
    }
    else if ($("#txtPassword").val() != $("#txtRepeatPassword").val()) {
        $("#error").show();
        $("#error").text("Passwords doesn't match. Please reenter passwords");
        return false;
    }

    if ($("#txtFullName").val() == "") {
        $("#error").show();
        $("#error").text("FullName is required. Please enter FullName");
        return false;
    }
    else if ($("#txtFullName").val().match(/([A-Za-z -]+){6,20}/) == null) {
        $("#error").show();
        $("#error").text("FullName must be at least 6 characters long and can consist of alphabetic characters, ‘-’ and whitespace only (no numbers or special characters are allowed)");
        return false;
    }

    if ($("#txtBirthday").val() == "") {
        $("#error").show();
        $("#error").text("Please select your birthday!");
        return false;
    }

    $("#error").text("");
    $("#error").hide();
    $('#btnRegister').trigger('click');
}
