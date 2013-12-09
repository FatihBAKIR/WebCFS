/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var server_url = "http://cfs.fatihbakir.net/api";

function QueryDir(dirID, sHash, callback)
{
    $.ajax({
        type: "GET",
        url: server_url + "/queryDir.php",
        data: {SH: sHash, id: dirID},
        cache: false,
        success: function(html) {
            html = JSON.parse(html);
            callback(html);
        }
    });
}

function RemoveFile(fileID, sHash, callback)
{
     $.ajax({
        type: "GET",
        url: server_url + "/rmFile.php",
        data: {SH: sHash, id: fileID},
        cache: false,
        success: function(html) {
            html = JSON.parse(html);
            callback(html);
        }
    });
}

function RemoveDir(dirID, sHash, callback)
{
     $.ajax({
        type: "GET",
        url: server_url + "/rmDir.php",
        data: {SH: sHash, id: dirID},
        cache: false,
        success: function(html) {
            html = JSON.parse(html);
            callback(html);
        }
    });
}

function PubFile(fileID, sHash, val, callback)
{
     $.ajax({
        type: "GET",
        url: server_url + "/pub.php",
        data: {SH: sHash, id: fileID, pub: val},
        cache: false,
        success: function(html) {
            html = JSON.parse(html);
            callback(html);
        }
    });
}

function DownloadFile(fileID, sHash)
{
    window.open(server_url + "/getFile.php?SH="+sHash+"&id=" + fileID);
}

function LogOut(sHash, callback)
{
    $.ajax({
        type: "GET",
        url: server_url + "/logout.php",
        data: {SH: sHash},
        cache: false,
        success: function(html) {
            html = JSON.parse(html);
            callback(html);
        }
    });
}

function LogIn(username, password, callback)
{
    $.ajax({
        type: "GET",
        url: server_url + "/apiLogin.php",
        data: {user: username, pass:password},
        cache: false,
        success: function(html) {
            html = JSON.parse(html);
            callback(html);
        }
    });
}

function SignUp(username, password, email, callback)
{
    $.ajax({
        type: "GET",
        url: server_url + "/signup.php",
        data: {user: username, pass:password, email:email},
        cache: false,
        success: function(html) {
            html = JSON.parse(html);
            callback(html);
        }
    });
}

function File(fileID, sHash, callback)
{
    $.ajax({
        type: "GET",
        url: server_url + "/file.php",
        data: {SH: sHash, id:fileID},
        cache: false,
        success: function(html) {
            html = JSON.parse(html);
            callback(html);
        }
    });
}

function LastFile(sHash, callback)
{
    File("last", sHash, callback);
}

function Stats(fileID, sHash, callback)
{
    $.ajax({
        type: "GET",
        url: server_url + "/stats.php",
        data: {SH: sHash, id:fileID},
        cache: false,
        success: function(html) {
            html = JSON.parse(html);
            callback(html);
        }
    });
}

function MoveFile(fileID, dirID, sHash, callback)
{
    $.ajax({
        type: "GET",
        url: server_url + "/mvFile.php",
        data: {SH: sHash, id:fileID, dir: dirID},
        cache: false,
        success: function(html) {
            html = JSON.parse(html);
            callback(html);
        }
    });
}

function MoveDir(dirID, destID, sHash, callback)
{
    $.ajax({
        type: "GET",
        url: server_url + "/mvDir.php",
        data: {SH: sHash, id:dirID, dir: destID},
        cache: false,
        success: function(html) {
            html = JSON.parse(html);
            callback(html);
        }
    });
}