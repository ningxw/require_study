require.config({
	baseUrl: './js',
	paths: {
		'say': "say",
		'name': "name"
	}
});

require(['say', 'name'], function(say, name) {
	alert(say(name));
});
