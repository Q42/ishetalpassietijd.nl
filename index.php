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
.rainbow {
    animation: rainbow 3s infinite;
}
@keyframes rainbow {
    0%{color: orange;}
    10%{color: purple;}
    20%{color: red;}
    40%{color: yellow;}
    60%{color: green;}
    100%{color: blue;}
}
</style>

<p>Is het al passietijd?</p>

<?php
date_default_timezone_set("Europe/Amsterdam");

$yes = <<<HTML
<h1 class="rainbow">Ja!</h1>
<p><small>Ga gerust alvast coderen.</small></p>
HTML;

$no = <<<HTML
<h1>Nee!</h1>
HTML;

$isFriday = date('w') == 5;
if($isFriday) {
    echo $yes;
} else {
    echo $no;
}
?>