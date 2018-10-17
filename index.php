<!doctype html>

<title>Is het al passietijd?</title>

<style>
body {
    color: black;
    background-color: white;
    text-align: center;
    font-size: 600%;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    -webkit-text-size-adjust: 100%;
    margin: 0;
}
small {
    font-size: 20%;
    font-style: italic;
}
</style>

<p>Is het al passietijd?</p>

<?php
date_default_timezone_set("Europe/Amsterdam");

$yes = <<<HTML
<h1>Ja!</h1>
<p><small>Ga coderen dan</small></p>
HTML;

$no = <<<HTML
<h1>Nee!</h1>
HTML;

$start = strtotime('wednesday 13:30');
$end = strtotime('wednesday 17:30');

if(time() >= $start && time() <= $end) {
    echo $yes;
} else {
    echo $no;
}

?>