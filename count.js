function count()
{
	var menuString =  localStorage.getItem("rt_shop");
	if(menuString)
	{
		var menuArray = JSON.parse(menuString);
		if(menuArray!=0)
		{
			var count = menuArray.length;
			console.log(count);
			$("#item_count").text('('+count+')');
		}

	}
	else{
			$("#item_count").text('()');
		}
}