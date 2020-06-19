var world = [
    [1,1,1,0,0,0,0,3,2,2],
    [0,0,0,0,1,0,0,3,3,3],
    [0,2,2,0,1,0,0,0,0,0],
    [0,2,2,0,1,1,1,1,0,0],
    [0,2,2,0,1,0,0,0,0,3],
    [0,2,2,0,1,0,3,3,3,3],
    [0,0,0,0,1,0,3,3,3,3]
];

var mapping = {
    0: 'white',
    1: 'red',
    2: 'yellow',
    3: 'blue',
    4:'green'
}

function drawWorld(){
var output = '';
for (var i= 0 ; i <world.length; i ++){
    output += '<div class=row>';
    for (var j = 0; j < world[i].lenght; j++ ){



    }
}
document
}




document.onclick = function (e){
    console.log('Coordinate Clicked', e.x, e.y);

    var x = Math.floor(e.x / 50);
    var y = Math.floor(e.y / 50);

    console.log('X. Y', x, y);
    console.log('Original Color', world[y][x]);

    console.log('Replace Color', world[y][x], ' with color 4 starting from x:', x, 'y:', y),
    fill(x, y, world[y][x], 4);
}

function fill(x,y, original_color, color){
    
    if(x < 0 || y < 0 || y >= world.length || x >= world[0].lenght){
        return;
    }
    
    console.log ("FILL")

    //your recursion codes here
    current_color = world[y][x];
    if(current_color != original_color){
        return;
    }

    world[y][x] = color;

    //your recursion codes here
    fill(x+1, y, original_color, 4);
    fill(x-1, y, original_color, 4);
    fill(x, y+1, original_color, 4);
    fill(x, y-1, original_color, 4);

    drawWorld();
}

drawWorld();

// onclick ->fill -> fill ->fill


