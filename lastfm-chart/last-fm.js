{
        var userName = "EdDoLOL";
	var APIKey = "8bbe4e28a03f8afd4420d3287731373c";	

	var url = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=" + userName + "&api_key=" + APIKey + "&format=json&limit=10"; 

        $.ajax({
                type    : 'GET',
                url     : url,
                dataType: 'json',
                success: function(data) {
                        var tracks = data.recenttracks.track;
                        var i = 1;
                        tracks.forEach(function(track){
                                if(track['@attr']) {
                                        return;
                                }
                                var songNode = $('.chart .row .song');
                                var dateNode = $('.chart .row .date');
                                var artistName = track.artist['#text'];
                                var songName = track.name;
                                var songLink = track.url;
                                var epoch = track.date['uts'];
                                var date = new Date(0);
                                date.setUTCSeconds(epoch);
                                var time = date.toLocaleTimeString().match(/\d{1,2}:\d{1,2}/);
                                var dayNight = String(date.toLocaleTimeString().match(/\D{3}/)).substring(1,3).toLowerCase();
                                var day = date.toDateString().substring(0,3);
                                $(songNode[i]).append('<a href=\"' + songLink + '\">' +artistName + " - " + songName + '</a>');
                                $(dateNode[i-1]).append(time + dayNight + ' ' + day);
                                i++;
                        });
                }
        });
}
