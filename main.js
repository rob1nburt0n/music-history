var songs = [];

songs[0] = "Legs > by Z*ZTop on the album Eliminator";
songs[1] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[2] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[3] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[4] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

/* 
removals: *, @, (, !
replacement: remove > and replace with -
this_song_original_text.replace("*","");
*/
songs.unshift("Springstein - by Eric Church on the album Chief");

songs.push("I Love Rock 'n' Roll - by Joan Jett on the album I Love Rock 'n' Roll");

for (var i = 0; i < songs.length; i++) {
	console.log(i);
	var this_song_original_text = songs[i];
	var new_song_text = this_song_original_text.replace("*","").replace("@","").replace("(","").replace("!","").replace(">","-");
    console.log(new_song_text);
};