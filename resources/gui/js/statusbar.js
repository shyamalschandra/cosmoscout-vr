function format_number(number) {
    if (Math.abs(number) < 10) return number.toFixed(2);
    else if (Math.abs(number) < 100) return number.toFixed(1);
    else return number.toFixed(0)
}

function format_height(height) {
    if (Math.abs(height) < 0.1) return format_number(height * 1000) + ' mm';
    else if (Math.abs(height) < 1) return format_number(height * 100) + ' cm';
    else if (Math.abs(height) < 1e4) return format_number(height) + ' m';
    else if (Math.abs(height) < 1e7) return format_number(height / 1e3) + ' km';
    else if (Math.abs(height) < 1e10) return format_number(height / 1e6) + ' Tsd km';
    else if (Math.abs(height / 1.496e11) < 1e4) return format_number(height / 1.496e11) + ' AU';
    else if (Math.abs(height / 9.461e15) < 1e3) return format_number(height / 9.461e15) + ' ly';
    else if (Math.abs(height / 3.086e16) < 1e3) return format_number(height / 3.086e16) + ' pc';

    return format_number(height / 3.086e19) + ' kpc';
}

function format_speed(speed) {
    if (Math.abs(speed * 3.6) < 500) return format_number(speed * 3.6) + ' km/h';
    else if (Math.abs(speed) < 1e3) return format_number(speed) + ' m/s';
    else if (Math.abs(speed) < 1e7) return format_number(speed / 1e3) + ' km/s';
    else if (Math.abs(speed) < 1e8) return format_number(speed / 1e6) + ' Tsd km/s';
    else if (Math.abs(speed / 2.998e8) < 1e3) return format_number(speed / 2.998e8) + ' SoL';
    else if (Math.abs(speed / 1.496e11) < 1e3) return format_number(speed / 1.496e11) + ' AU/s';
    else if (Math.abs(speed / 9.461e15) < 1e3) return format_number(speed / 9.461e15) + ' ly/s';
    else if (Math.abs(speed / 3.086e16) < 1e3) return format_number(speed / 3.086e16) + ' pc/s';

    return format_number(speed / 3.086e19) + ' kpc/s';
}


function format_latitude(lat) {
    if (lat < 0)
        return (-lat).toFixed(2) + "° S ";
    else
        return (lat).toFixed(2) + "° N ";
}

function format_longitude(long) {
    if (long < 0)
        return (-long).toFixed(2) + "° W ";
    else
        return (long).toFixed(2) + "° E ";
}

// API calls -------------------------------------------------------------------------------

function init() {
    $("#statusbar").addClass("visible");
}

function set_pointer_position(hits, long, lat, height) {
    if (hits) {
        $("#placeholder-6").text(format_longitude(long) + format_latitude(lat) + "(" + format_height(height) + ")");
    } else {
        $("#placeholder-6").text(" - ");
    }
}

function set_user_position(long, lat, height) {
    $("#placeholder-5").text(format_longitude(long) + format_latitude(lat) + "(" + format_height(height) + ")");
}

function set_speed(speed) {
    $("#placeholder-8").text(format_speed(speed));
}