
var gl = null;

var canvas = $("#demo-gl");
var aspect_ratio = 16.0 / 9.0; // canvas width is responsive


function demo_gl() 
{
	canvas.width(canvas.parent().width());
	canvas.height(canvas.width() / aspect_ratio);

	if(gl)
		return;

	// ToDo: create demo (skip to fallback for now)
	//gl = context_gl(canvas.get(0));

	if (!gl)
	{
		canvas.hide();
		$("#demo-gl-fallback").removeAttr('hidden');

		return;
	}
	$("#demo-gl-fallback").hide();

	gl.clearColor(0.6, 0.8, 0.9, 1.0);
	gl.enable(gl.DEPTH_TEST);
	gl.depthFunc(gl.LEQUAL);

	update_gl();

	$(window).resize(resize_gl);
}

function resize_gl()
{
	var width = canvas.parent().width();

	if (canvas.width() == width) 
		return;

	canvas.width(width);
	canvas.height(width / aspect_ratio);

	update_gl();
}

function context_gl(canvas)
{
	var context = null; 
	try 
	{
		context = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
	}
  	catch(e) 
  	{
  		console.debug("demo_gl:getContext failed on '" + canvas + "' with exception:" + e);

  		return null;
  	}
	return context;
}

function update_gl()
{
	gl.viewport(0, 0, canvas.width, canvas.height);

	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}
